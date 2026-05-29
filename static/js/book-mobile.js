/* Book Mobile — Accordion viewer for Adaptive on mobile devices */

(function () {

  // Structure: blocks → cards → detail content
  var bookData = [
    {
      number: '1', title: 'Why?', subtitle: 'The Paradox',
      cards: [
        { title: 'The Core Tension', img: '/img/book/core-tension.svg',
          lead: 'Optimizing for <strong>predictability</strong> in an <em>increasingly unpredictable</em> world.',
          body: '<p>Workforce management was built on a deterministic premise: if you can forecast demand accurately, you can schedule the right people at the right time. This worked when the world was more predictable.</p><p>Today, volatility is the baseline. Customer behavior shifts faster than models update. Channel mix evolves mid-quarter. AI capabilities emerge that rewrite staffing assumptions overnight.</p><div class="mb-highlight">The organizations still optimizing for point-estimate precision are building brittle systems. The ones embracing variance — designing for ranges, not points — are building systems that endure.</div>' },
        { title: 'Four Eras of WFM', img: '/img/book/four-eras.svg',
          lead: 'Each era improved tooling — yet determinism dominated.',
          body: '<p>From paper-based scheduling rooms to cloud-native platforms, sixty years have followed the same arc: <strong>better tools, same deterministic thinking.</strong></p><div class="mb-highlight">The lesson isn\'t that we need better predictions. It\'s that prediction-dependent systems have a ceiling — and we\'ve hit it.</div>' },
        { title: 'Deterministic DNA', img: '/img/book/deterministic-dna.svg',
          lead: 'Determinism scales control — <strong>adaptation</strong> scales outcomes.',
          body: '<ul><li>Point forecast → single number of heads</li><li>Legacy Erlang-C as single truth</li><li>Fixed training blocks that collide with real demand</li></ul><p>The deterministic approach persists because it feels precise — but specificity is comforting and misleading. Stochastic forecasting replaces the single line with a confidence band: "130-155 agents at 10am with 90% confidence."</p><div class="mb-highlight">Determinism scales control. Adaptation scales outcomes.</div>' },
        { title: 'Operations Whiplash', img: '/img/book/operations-whiplash.svg',
          lead: 'Small misses shouldn\'t cause big swings — design for give, not break.',
          body: '<ul><li><strong>Overtime surges</strong> — expensive and unsustainable</li><li><strong>Abandonment spikes</strong> — customers leave, NPS drops</li><li><strong>Agent burnout</strong> — the human cost of brittle systems</li></ul><p>Deterministic plans snap under variance. Adaptive systems bend — anticipating variance and responding in real-time.</p><div class="mb-highlight">Small misses shouldn\'t cause big swings — design for give, not break.</div>' }
      ]
    },
    {
      number: '2', title: 'Why?', subtitle: 'A New Era',
      cards: [
        { title: 'Evolution of Work', img: '/img/book/evolution-of-work.svg',
          lead: 'From survival instincts to the synergy of human and artificial intelligence.',
          body: '<p>Work has always evolved with our tools. What\'s different now is the <strong>pace</strong> and the <strong>nature</strong> of the change. Previous transitions replaced physical labor with machine labor. This transition augments cognitive labor.</p><div class="mb-highlight">The one certainty as we enter the era of collaborative intelligence is uncertainty.</div>' },
        { title: 'Pace of Change', img: '/img/book/pace-of-change.svg',
          lead: 'Each era arrives faster than the last.',
          body: '<p>The compression is exponential. Organizations that took decades to adapt to the Information Age now have years — or months — to adapt to the Collaborative Intelligence Era.</p><p>This isn\'t an argument for panic. It\'s an argument for <strong>adaptive systems</strong> — infrastructure that doesn\'t assume a fixed end state.</p>' },
        { title: 'Building for the Unpredictable', img: '/img/book/moving-target.svg',
          lead: 'Human + AI <em>likely</em> for next 5 to 10 years. Everything else is a moving target.',
          body: '<p>The ratio, who leads which task, when the mix changes — is a moving target shaped by time, capability, and context. The organizations that will thrive build systems capable of <strong>continuously rebalancing</strong> as that ratio shifts.</p><div class="mb-highlight">Don\'t bet on one outcome. Build adaptive systems engineered for whatever comes.</div>' },
        { title: 'The Fuzzy Boundary', img: '/img/book/fuzzy-boundary.svg',
          lead: 'The line between human work and AI work isn\'t a line at all — it\'s a spectrum.',
          body: '<p>Most conversations about AI present a binary: human or AI. Reality is a continuum of collaboration ratios that shift by task, context, and time. The system needs to support both — simultaneously.</p>' },
        { title: 'Change Drivers', img: '/img/book/change-drivers.svg',
          lead: 'The fuzzy boundary is fluid, driven by many change elements.',
          body: '<p>No single driver determines the pace of change. It\'s the interaction between all of them. This is why point-in-time strategies fail — the drivers don\'t hold still long enough for a five-year plan to survive contact with reality.</p>' }
      ]
    },
    {
      number: '3', title: 'The Book', subtitle: 'Structure & Playbook',
      cards: [
        { title: 'How the Book Works', img: '/img/book/adaptive-3d-spread.png',
          lead: '',
          body: '<p><strong>Part I: Context, drivers, frameworks.</strong> Establishes the foundations — the forces reshaping workforce management, the frameworks that help you reason under uncertainty.</p><p><strong>Part II: Five levels, same backbone, enter where you are.</strong> A practical playbook organized by maturity level using the GRPIT backbone.</p><div class="mb-highlight">The book isn\'t meant to be read cover-to-cover and then shelved. It\'s designed to be a working reference.</div>' },
        { title: 'Foundations that Travel', img: '/img/book/grpit-framework.svg',
          lead: '',
          body: '<ul><li><strong>Name the drivers; pick your guardrails.</strong> Understand which forces are acting on your organization and set boundaries for decision-making.</li><li><strong>Use frameworks to reason under uncertainty.</strong> GRPIT, maturity models, service-profit chain, STaRS — tools that work at any level.</li><li><strong>Adopt variance discipline (bands > points).</strong> Replace false precision with honest ranges.</li></ul>' },
        { title: 'A Playbook by Level',
          lead: 'Same GRPIT backbone per level. From basic stability to adaptive orchestration.',
          body: '<ul><li><strong>Level 1</strong> — Initial / Manual (Ch. 7)</li><li><strong>Level 2</strong> — Foundational (Ch. 8)</li><li><strong>Level 3</strong> — Progressive (Ch. 9)</li><li><strong>Level 4</strong> — Advanced (Ch. 10)</li><li><strong>Level 5</strong> — Pioneering (Ch. 11)</li></ul>' },
        { title: 'Why This Structure Works',
          lead: '',
          body: '<ul><li><strong>Built from real implementations — not ideal states.</strong></li><li><strong>Use whichever level unlocks value fastest.</strong></li><li><strong>Capability gap is widening; the window for gradual change is closing.</strong></li></ul><div class="mb-highlight">The gap between where most organizations are and where they need to be isn\'t closing — it\'s widening.</div>' }
      ]
    },
    {
      number: '4', title: 'The Model', subtitle: 'WFM Labs Maturity Model',
      cards: [
        { title: 'WFM Labs Maturity Model', img: '/img/book/maturity-model.svg',
          lead: '',
          body: '<ul><li><strong>Reactive</strong> → Cost Control</li><li><strong>Operational Stability</strong> → Foundational processes</li><li><strong>Adaptive Resilience</strong> → Real-time variance response</li><li><strong>Strategic Planning</strong> → OR-driven decisions</li><li><strong>Competitive Advantage</strong> → Enterprise orchestration</li></ul>' },
        { title: 'Level 1 — Initial / Manual',
          lead: '',
          body: '<p>No WFM: small or new contact center operations. Reactive, excel-based, no formal forecast. Chapter 7 provides the path from here to foundational capability.</p>' },
        { title: 'Level 2 — Foundational',
          lead: '',
          body: '<p>Traditional WFM: predictable, process-driven operations. Forecasting, skills-based scheduling, adherence. The challenge isn\'t capability — it\'s <strong>rigidity</strong>. Chapter 8.</p>' },
        { title: 'Level 3 — Progressive', img: '/img/book/paradigm-shift.svg',
          lead: '',
          body: '<p>This is where the paradigm shift happens. Level 3 organizations <strong>expect variance and design for it</strong>. Real-time intraday automation replaces manual intervention. Chapter 9.</p>' },
        { title: 'Level 4 — Advanced', img: '/img/book/ecosystem.svg',
          lead: 'The modern WFM ecosystem emerges — breaking the monolith.',
          body: '<ul><li><strong>WFM Core</strong> — Forecasting & Scheduling</li><li><strong>Capacity Planning</strong> — Strategic Workforce Planning</li><li><strong>Real-Time Automation</strong> — Intraday Optimization</li><li><strong>Analytics Platform</strong> — Intelligence & Insights</li></ul>' },
        { title: 'Level 5 — Pioneering',
          lead: 'Enterprise orchestration. Human + AI.',
          body: '<p>The system doesn\'t just manage schedules — it continuously optimizes across customer experience, cost, employee wellbeing, and strategic objectives simultaneously. Chapter 11.</p>' }
      ]
    },
    {
      number: '5', title: 'Outcomes', subtitle: 'Results That Compound',
      cards: [
        { title: 'Results That Compound', img: '/img/book/results-compound.svg',
          lead: 'Lift CX, lower cost, and boost wellbeing — simultaneously.',
          body: '<ul><li><strong>Customer Experience</strong> — stabilized service levels, reduced wait times</li><li><strong>Cost Efficiency</strong> — reduced overtime, optimized staffing</li><li><strong>Employee Wellbeing</strong> — predictable schedules, less burnout</li></ul><p>Each level of maturity unlocks a new tier of compounding results. The ROI isn\'t linear — it accelerates.</p>' },
        { title: 'Crossing the Chasm: L1/2 → L3', img: '/img/book/crossing-chasm.svg',
          lead: '',
          body: '<p>This is the highest-leverage transition in the model. Moving from reactive (L1/2) to progressive (L3) delivers the fastest, most measurable ROI.</p>' },
        { title: 'Level 4: Ecosystem Outcomes', img: '/img/book/adaptive-loop.svg',
          lead: 'Sense → Decide → Learn → repeat.',
          body: '<ul><li><strong>Decisions with confidence bands; explicit residual risk</strong></li><li><strong>Staffing envelopes + sensitivities → healthier budgets</strong></li><li><strong>Continuous strategic multi-objective planning</strong></li></ul><div class="mb-highlight">The shift from deterministic to adaptive isn\'t just technical — it changes how leadership thinks about planning, risk, and investment.</div>' },
        { title: 'Level 5 Unlocks', img: '/img/book/pareto-frontier.svg',
          lead: '',
          body: '<ul><li><strong>Anticipate, learn, and reconfigure faster than change itself</strong></li><li><strong>Optimize for CLV, wellbeing, and risk</strong> — not just cost/contact</li><li><strong>Principles that endure:</strong> orchestrate > control; adaptive > predictive</li></ul><div class="mb-highlight">Orchestrate > control. Adaptive > predictive. These principles endure regardless of which specific technologies dominate.</div>' },
        { title: 'Quick Start — 30/60/90', img: '/img/book/quickstart-30-60-90.svg',
          lead: 'Choose your pilot now — what would you run Monday?',
          body: '<ul><li><strong>Day 1–30:</strong> Assess your current maturity level. Identify the highest-leverage gap.</li><li><strong>Day 31–60:</strong> Run a focused pilot at the next level up. Measure against GRPIT.</li><li><strong>Day 61–90:</strong> Scale what works. Document what doesn\'t. Iterate.</li></ul><div class="mb-highlight">The book is the playbook. WFM Labs is the community. The maturity model is the map. Start where you are.</div><p style="margin-top:1rem"><a href="https://www.amazon.com/Adaptive-Building-Workforce-Systems-Unpredictable/dp/B0FZWDPH2M" target="_blank" style="color:#f5c542">Get Adaptive on Amazon →</a></p>' }
      ]
    }
  ];

  function isMobile() {
    return window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024);
  }

  function buildMobileViewer() {
    var overlay = document.getElementById('bookZoomOverlay');
    overlay.classList.add('active', 'mobile-book');
    document.body.style.overflow = 'hidden';

    var canvas = document.querySelector('.book-zoom-canvas');
    canvas.innerHTML = '';

    var container = document.createElement('div');
    container.className = 'mb-container';

    // Header
    var header = document.createElement('div');
    header.className = 'mb-header';
    header.innerHTML = '<img src="/img/book/adaptive-3d.png" alt="Adaptive" class="mb-book-img"><div><div class="mb-title">ADAPTIVE</div><div class="mb-subtitle">Building Workforce Systems for an (Unpredictable) Future</div></div>';
    container.appendChild(header);

    // Build accordion sections
    bookData.forEach(function (block) {
      var section = document.createElement('div');
      section.className = 'mb-section';

      var sectionHeader = document.createElement('button');
      sectionHeader.className = 'mb-section-header';
      sectionHeader.innerHTML = '<span class="mb-section-num">' + block.number + '</span><div><strong>' + block.title + '</strong><span class="mb-section-sub">' + block.subtitle + '</span></div><span class="mb-chevron">&#9662;</span>';
      section.appendChild(sectionHeader);

      var cardList = document.createElement('div');
      cardList.className = 'mb-cards';

      block.cards.forEach(function (card) {
        var cardEl = document.createElement('div');
        cardEl.className = 'mb-card';

        var cardHeader = document.createElement('button');
        cardHeader.className = 'mb-card-header';
        cardHeader.textContent = card.title;
        cardEl.appendChild(cardHeader);

        var cardBody = document.createElement('div');
        cardBody.className = 'mb-card-body';

        var html = '';
        if (card.img) {
          html += '<img src="' + card.img + '" alt="' + card.title + '" class="mb-card-img" onclick="zoomImage(this)">';
        }
        if (card.lead) html += '<div class="mb-card-lead">' + card.lead + '</div>';
        html += '<div class="mb-card-text">' + card.body + '</div>';
        cardBody.innerHTML = html;
        cardEl.appendChild(cardBody);

        cardList.appendChild(cardEl);

        // Card toggle
        cardHeader.addEventListener('click', function () {
          var isOpen = cardEl.classList.contains('open');
          cardEl.classList.toggle('open');
          if (!isOpen) {
            cardBody.style.maxHeight = cardBody.scrollHeight + 'px';
          } else {
            cardBody.style.maxHeight = '0';
          }
        });
      });

      section.appendChild(cardList);
      container.appendChild(section);

      // Section toggle
      sectionHeader.addEventListener('click', function () {
        var isOpen = section.classList.contains('open');
        // Close other sections
        document.querySelectorAll('.mb-section.open').forEach(function (s) {
          if (s !== section) {
            s.classList.remove('open');
            s.querySelector('.mb-cards').style.maxHeight = '0';
          }
        });
        section.classList.toggle('open');
        if (!isOpen) {
          cardList.style.maxHeight = cardList.scrollHeight + 2000 + 'px';
        } else {
          cardList.style.maxHeight = '0';
        }
      });
    });

    canvas.appendChild(container);
  }

  // Override openBookZoom on mobile
  var originalOpen = window.openBookZoom;
  window.openBookZoom = function () {
    if (isMobile()) {
      buildMobileViewer();
    } else {
      originalOpen();
    }
  };

})();
