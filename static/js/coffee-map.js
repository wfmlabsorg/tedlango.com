/* coffee-map.js — render the coffee KB on a map.
 * Uses MapLibre GL JS (open-source) + OpenFreeMap tiles — NO API key/token required.
 * Data source: GeoJSON generated from Hugo content front matter (single source of truth).
 * Marker color keyed by `kind` (origin / roaster / place). */
(function () {
  var el = document.getElementById("coffee-map");
  if (!el) return;

  var src = el.getAttribute("data-geojson");
  var COLORS = { origin: "#c8862b", roaster: "#5b8a72", cafe: "#5b8a72", both: "#5b8a72", place: "#3d6fa5" };
  var DEFAULT = "#9aa0a6";

  function note(msg) { el.innerHTML = '<div class="coffee-map-note">' + msg + "</div>"; }

  if (!src) { note("Map data source missing."); return; }

  fetch(src)
    .then(function (r) { return r.json(); })
    .then(function (geojson) {
      var feats = (geojson && geojson.features) || [];
      if (!feats.length) { note("No geo-tagged entries yet — add an origin, roaster, or place with coordinates."); return; }
      if (typeof maplibregl === "undefined") { note("Map library failed to load."); return; }

      el.innerHTML = "";
      var map = new maplibregl.Map({
        container: "coffee-map",
        style: "https://tiles.openfreemap.org/styles/positron",
        center: [0, 15],
        zoom: 1.3,
        cooperativeGestures: true,
        attributionControl: { compact: true },
      });
      map.addControl(new maplibregl.NavigationControl(), "top-right");

      var bounds = new maplibregl.LngLatBounds();
      feats.forEach(function (f) {
        var c = f.geometry && f.geometry.coordinates;
        if (!c) return;
        var p = f.properties || {};
        var color = COLORS[p.kind] || DEFAULT;
        var html = "<strong>" + (p.title || "") + "</strong>"
          + (p.label ? '<br><span class="muted">' + p.label + "</span>" : "")
          + (p.description ? "<p>" + p.description + "</p>" : "")
          + (p.url ? '<a href="' + p.url + '">View →</a>' : "");
        new maplibregl.Marker({ color: color })
          .setLngLat(c)
          .setPopup(new maplibregl.Popup({ offset: 18 }).setHTML(html))
          .addTo(map);
        bounds.extend(c);
      });

      if (feats.length === 1) { map.setCenter(feats[0].geometry.coordinates); map.setZoom(4); }
      else { map.fitBounds(bounds, { padding: 60, maxZoom: 6 }); }
    })
    .catch(function (e) { note("Could not load map data."); console.error(e); });
})();
