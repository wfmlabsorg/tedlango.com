/* Book Zoom — Zumly views for Adaptive deep dive */

(function () {
  // ===== VIEW DEFINITIONS =====

  var views = {

    // ─── OVERVIEW (entry point) ───
    overview: '\
<div class="z-view view-overview">\
  <img src="/img/book/adaptive-3d.png" alt="Adaptive by Ted Lango" class="overview-book-img">\
  <div class="overview-title">ADAPTIVE</div>\
  <div class="overview-subtitle">Building Workforce Systems for an (Unpredictable) Future</div>\
  <div class="overview-grid">\
    <div class="overview-block zoom-me" data-to="block1">\
      <div class="block-number">1</div>\
      <div class="block-title">Why?</div>\
      <div class="block-subtitle">The Paradox</div>\
    </div>\
    <div class="overview-block zoom-me" data-to="block2">\
      <div class="block-number">2</div>\
      <div class="block-title">Why?</div>\
      <div class="block-subtitle">A New Era</div>\
    </div>\
    <div class="overview-block zoom-me" data-to="block3">\
      <div class="block-number">3</div>\
      <div class="block-title">The Book</div>\
      <div class="block-subtitle">Structure & Playbook</div>\
    </div>\
    <div class="overview-block zoom-me" data-to="block4">\
      <div class="block-number">4</div>\
      <div class="block-title">The Model</div>\
      <div class="block-subtitle">WFM Labs Maturity</div>\
    </div>\
    <div class="overview-block zoom-me" data-to="block5">\
      <div class="block-number">5</div>\
      <div class="block-title">Outcomes</div>\
      <div class="block-subtitle">Results That Compound</div>\
    </div>\
  </div>\
</div>',

    // ─── BLOCK 1: WHY? THE PARADOX ───
    block1: '\
<div class="z-view view-section">\
  <div class="section-header">\
    <div class="section-number">1</div>\
    <div class="section-title">Why?</div>\
    <div class="section-subtitle">The Paradox</div>\
  </div>\
  <div class="section-grid">\
    <div class="section-card zoom-me" data-to="b1_tension">\
      <div class="card-title">The Core Tension</div>\
      <div class="card-preview">Optimizing for predictability in an increasingly unpredictable world.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b1_eras">\
      <div class="card-title">Four Eras of WFM</div>\
      <div class="card-preview">60 years, 1 lesson — each improved tooling, yet determinism dominated.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b1_dna">\
      <div class="card-title">Deterministic DNA</div>\
      <div class="card-preview">Why the old approach lingers — and why adaptation scales better.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b1_whiplash">\
      <div class="card-title">Operations Whiplash</div>\
      <div class="card-preview">When forecasts miss, deterministic plans snap. Adaptive systems bend.</div>\
    </div>\
  </div>\
</div>',

    b1_tension: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Paradox</div>\
    <div class="detail-title">The Core Tension</div>\
    <img src="/img/book/core-tension.svg" alt="Core Tension" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Optimizing for <strong>predictability</strong> in an <em>increasingly unpredictable</em> world.</div>\
    <div class="detail-body">\
      <p>Workforce management was built on a deterministic premise: if you can forecast demand accurately, you can schedule the right people at the right time. This worked when the world was more predictable.</p>\
      <p>Today, volatility is the baseline. Customer behavior shifts faster than models update. Channel mix evolves mid-quarter. AI capabilities emerge that rewrite staffing assumptions overnight.</p>\
      <div class="detail-highlight">The organizations still optimizing for point-estimate precision are building brittle systems. The ones embracing variance — designing for ranges, not points — are building systems that endure.</div>\
    </div>\
  </div>\
</div>',

    b1_eras: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Paradox</div>\
    <div class="detail-title">Four Eras of WFM (60 Years, 1 Lesson)</div>\
    <div class="detail-lead">Each era improved tooling — yet determinism dominated.</div>\
    <img src="/img/book/four-eras.svg" alt="Four Eras of WFM" class="detail-illustration hero" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <p>From paper-based scheduling rooms to cloud-native platforms, sixty years have followed the same arc: <strong>better tools, same deterministic thinking.</strong></p>\
      <div class="detail-highlight">The lesson isn\'t that we need better predictions. It\'s that prediction-dependent systems have a ceiling — and we\'ve hit it.</div>\
    </div>\
  </div>\
</div>',

    b1_dna: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Paradox</div>\
    <div class="detail-title">Deterministic DNA (Why It Lingers)</div>\
    <img src="/img/book/deterministic-dna.svg" alt="Deterministic vs Adaptive" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Determinism scales control — <strong>adaptation</strong> scales outcomes.</div>\
    <div class="detail-body">\
      <ul>\
        <li>Point forecast &rarr; single number of heads</li>\
        <li>Legacy Erlang-C as single truth</li>\
        <li>Fixed training blocks that collide with real demand</li>\
      </ul>\
      <p>The deterministic approach persists because it feels precise — but specificity is comforting and misleading. Stochastic forecasting replaces the single line with a confidence band: "130-155 agents at 10am with 90% confidence."</p>\
      <div class="detail-highlight">Determinism scales control. Adaptation scales outcomes.</div>\
    </div>\
  </div>\
</div>',

    b1_whiplash: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Paradox</div>\
    <div class="detail-title">Forecast Miss &rarr; Operations Whiplash</div>\
    <div class="detail-split">\
      <div class="detail-split-text">\
        <div class="detail-lead">Small misses shouldn\'t cause big swings — design for give, not break.</div>\
        <div class="detail-body">\
          <ul>\
            <li><strong>Overtime surges</strong> — expensive and unsustainable</li>\
            <li><strong>Abandonment spikes</strong> — customers leave, NPS drops</li>\
            <li><strong>Agent burnout</strong> — the human cost of brittle systems</li>\
          </ul>\
          <p>Deterministic plans snap under variance. Adaptive systems bend — anticipating variance and responding in real-time.</p>\
        </div>\
      </div>\
      <img src="/img/book/operations-whiplash.svg" alt="Operations Whiplash see-saw" class="detail-illustration" onclick="zoomImage(this)">\
    </div>\
    <div class="detail-highlight">Small misses shouldn\'t cause big swings — design for give, not break.</div>\
  </div>\
</div>',

    // ─── BLOCK 2: WHY? A NEW ERA ───
    block2: '\
<div class="z-view view-section">\
  <div class="section-header">\
    <div class="section-number">2</div>\
    <div class="section-title">Why?</div>\
    <div class="section-subtitle">A New Era</div>\
  </div>\
  <div class="section-grid">\
    <div class="section-card zoom-me" data-to="b2_evolution">\
      <div class="card-title">Evolution of Work</div>\
      <div class="card-preview">From survival instincts to the synergy of human and artificial intelligence.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b2_pace">\
      <div class="card-title">Pace of Change</div>\
      <div class="card-preview">Each era arrives faster than the last — millennia to less than 5 years.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b2_unpredictable">\
      <div class="card-title">Building for the Unpredictable</div>\
      <div class="card-preview">Human + AI is likely. Everything else is a moving target.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b2_boundary">\
      <div class="card-title">The Fuzzy Boundary</div>\
      <div class="card-preview">The spectrum from 100% human to 100% AI — and everything between.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b2_drivers">\
      <div class="card-title">Change Drivers</div>\
      <div class="card-preview">The forces making the boundary fluid — technology, demographics, regulation, and more.</div>\
    </div>\
  </div>\
</div>',

    b2_evolution: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">A New Era</div>\
    <div class="detail-title">Evolution of Work</div>\
    <img src="/img/book/evolution-of-work.svg" alt="Evolution of Work" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">From survival instincts to the synergy of human and artificial intelligence.</div>\
    <div class="detail-body">\
      <p>Work has always evolved with our tools. What\'s different now is the <strong>pace</strong> and the <strong>nature</strong> of the change. Previous transitions replaced physical labor with machine labor. This transition augments cognitive labor.</p>\
      <div class="detail-highlight">The one certainty as we enter the era of collaborative intelligence is uncertainty.</div>\
    </div>\
  </div>\
</div>',

    b2_pace: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">A New Era</div>\
    <div class="detail-title">Pace of Change</div>\
    <div class="detail-lead">Each era arrives faster than the last.</div>\
    <img src="/img/book/pace-of-change.svg" alt="Pace of Change timeline" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <p>The compression is exponential. Organizations that took decades to adapt to the Information Age now have years — or months — to adapt to the Collaborative Intelligence Era.</p>\
      <p>This isn\'t an argument for panic. It\'s an argument for <strong>adaptive systems</strong> — infrastructure that doesn\'t assume a fixed end state.</p>\
    </div>\
  </div>\
</div>',

    b2_unpredictable: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">A New Era</div>\
    <div class="detail-title">Building for an (Unpredictable) Future</div>\
    <img src="/img/book/moving-target.svg" alt="Moving Target" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Human + AI <em>likely</em> for next 5 to 10 years. Everything else is a moving target.</div>\
    <div class="detail-body">\
      <p>The ratio, who leads which task, when the mix changes — is a moving target shaped by time, capability, and context. The organizations that will thrive build systems capable of <strong>continuously rebalancing</strong> as that ratio shifts.</p>\
      <div class="detail-highlight">Don\'t bet on one outcome. Build adaptive systems engineered for whatever comes.</div>\
    </div>\
  </div>\
</div>',

    b2_boundary: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">A New Era</div>\
    <div class="detail-title">The Fuzzy Boundary</div>\
    <img src="/img/book/fuzzy-boundary.svg" alt="The Fuzzy Boundary" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">The line between human work and AI work isn\'t a line at all — it\'s a spectrum.</div>\
    <div class="detail-body">\
      <p>Most conversations about AI present a binary: human or AI. Reality is a continuum of collaboration ratios that shift by task, context, and time. The system needs to support both — simultaneously.</p>\
    </div>\
  </div>\
</div>',

    b2_drivers: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">A New Era</div>\
    <div class="detail-title">Change Drivers</div>\
    <img src="/img/book/change-drivers.svg" alt="Change Drivers" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">The fuzzy boundary is fluid, driven by many change elements.</div>\
    <div class="drivers-grid">\
      <span class="driver-tag">Customer Expectations</span>\
      <span class="driver-tag">Demographics</span>\
      <span class="driver-tag">Resource Scarcity</span>\
      <span class="driver-tag">Regulatory</span>\
      <span class="driver-tag">Technology &amp; Digital Acceleration</span>\
      <span class="driver-tag">Economic &amp; Geopolitical</span>\
      <span class="driver-tag">Culture</span>\
      <span class="driver-tag">Workforce Expectations</span>\
    </div>\
    <div class="detail-body">\
      <p>No single driver determines the pace of change. It\'s the interaction between all of them. This is why point-in-time strategies fail — the drivers don\'t hold still long enough for a five-year plan to survive contact with reality.</p>\
    </div>\
  </div>\
</div>',

    // ─── BLOCK 3: THE BOOK ───
    block3: '\
<div class="z-view view-section">\
  <div class="section-header">\
    <div class="section-number">3</div>\
    <div class="section-title">The Book</div>\
    <div class="section-subtitle">Structure & Playbook</div>\
  </div>\
  <div class="section-grid">\
    <div class="section-card zoom-me" data-to="b3_how">\
      <div class="card-title">How the Book Works</div>\
      <div class="card-preview">Part I: Context, drivers, frameworks. Part II: Five levels, same backbone.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b3_foundations">\
      <div class="card-title">Part I: Foundations that Travel</div>\
      <div class="card-preview">Name the drivers, pick guardrails, adopt variance discipline.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b3_playbook">\
      <div class="card-title">Part II: A Playbook by Level</div>\
      <div class="card-preview">Same GRPIT backbone per level. Enter where you are.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b3_urgency">\
      <div class="card-title">Why This Structure Works</div>\
      <div class="card-preview">Built from real implementations. The capability gap is widening.</div>\
    </div>\
  </div>\
</div>',

    b3_how: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Book</div>\
    <img src="/img/book/adaptive-3d-spread.png" alt="Adaptive books" class="detail-book-img">\
    <div class="detail-title">How the Book Works</div>\
    <div class="detail-body">\
      <p><strong>Part I: Context, drivers, frameworks.</strong></p>\
      <p>Part I establishes the foundations — the forces reshaping workforce management, the frameworks that help you reason under uncertainty, and the mental models that travel across any maturity level.</p>\
      <p><strong>Part II: Five levels, same backbone, enter where you are.</strong></p>\
      <p>Part II is a practical playbook organized by maturity level. Each level uses the same GRPIT backbone (Goals, Roles, Processes, Interpersonal, Technology), so you can enter at your current state and progress without starting over.</p>\
      <div class="detail-highlight">The book isn\'t meant to be read cover-to-cover and then shelved. It\'s designed to be a working reference — pick the chapter that matches where you are today.</div>\
    </div>\
  </div>\
</div>',

    b3_foundations: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Book</div>\
    <div class="detail-title">Part I: Foundations that Travel</div>\
    <img src="/img/book/grpit-framework.svg" alt="GRPIT Framework" class="detail-illustration hero" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <ul>\
        <li><strong>Name the drivers; pick your guardrails.</strong> Understand which forces are acting on your organization and set boundaries for decision-making.</li>\
        <li><strong>Use frameworks to reason under uncertainty.</strong> GRPIT, maturity models, service-profit chain, STaRS — tools that work at any level.</li>\
        <li><strong>Adopt variance discipline (bands &gt; points).</strong> Replace false precision with honest ranges.</li>\
      </ul>\
    </div>\
  </div>\
</div>',

    b3_playbook: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Book</div>\
    <div class="detail-title">Part II: A Playbook by Level</div>\
    <div class="detail-lead">Same GRPIT backbone per level. From basic stability to adaptive orchestration.</div>\
    <div class="detail-body">\
      <ul>\
        <li><strong>Same GRPIT backbone per level</strong> — Goals, Roles, Processes, Interpersonal, Technology structure every chapter</li>\
        <li><strong>From basic stability to adaptive orchestration</strong> — each level builds on the previous one</li>\
        <li><strong>Enter where you are; progression isn\'t rigid</strong> — skip what you\'ve mastered, focus on what you need</li>\
      </ul>\
      <div class="levels-grid">\
        <div class="level-card">\
          <div class="level-number">Level 1</div>\
          <div class="level-name">Initial / Manual</div>\
          <div class="level-desc">Chapter 7</div>\
        </div>\
        <div class="level-card">\
          <div class="level-number">Level 2</div>\
          <div class="level-name">Foundational</div>\
          <div class="level-desc">Chapter 8</div>\
        </div>\
        <div class="level-card">\
          <div class="level-number">Level 3</div>\
          <div class="level-name">Progressive</div>\
          <div class="level-desc">Chapter 9</div>\
        </div>\
        <div class="level-card">\
          <div class="level-number">Level 4</div>\
          <div class="level-name">Advanced</div>\
          <div class="level-desc">Chapter 10</div>\
        </div>\
        <div class="level-card">\
          <div class="level-number">Level 5</div>\
          <div class="level-name">Pioneering</div>\
          <div class="level-desc">Chapter 11</div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>',

    b3_urgency: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Book</div>\
    <div class="detail-title">Why This Structure Works — Urgency + Proof</div>\
    <div class="detail-body">\
      <ul>\
        <li><strong>Built from real implementations — not ideal states.</strong> Every framework in the book was tested in production environments with real constraints.</li>\
        <li><strong>Use whichever level unlocks value fastest.</strong> You don\'t need to climb all five levels sequentially. Start where the ROI is clearest.</li>\
        <li><strong>Capability gap is widening; the window for gradual change is closing.</strong> Organizations that wait for the "right time" to modernize are falling further behind.</li>\
      </ul>\
      <div class="detail-highlight">The gap between where most organizations are and where they need to be isn\'t closing — it\'s widening. The window for gradual, incremental change is narrowing. That\'s the urgency.</div>\
    </div>\
  </div>\
</div>',

    // ─── BLOCK 4: THE MODEL ───
    block4: '\
<div class="z-view view-section">\
  <div class="section-header">\
    <div class="section-number">4</div>\
    <div class="section-title">The Model</div>\
    <div class="section-subtitle">WFM Labs Maturity Model</div>\
  </div>\
  <div class="section-grid">\
    <div class="section-card zoom-me" data-to="b4_overview">\
      <div class="card-title">WFM Labs Maturity Model</div>\
      <div class="card-preview">Five levels from spreadsheet firefighting to AI-augmented orchestration.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b4_l1">\
      <div class="card-title">Level 1 — Initial / Manual</div>\
      <div class="card-preview">No formal WFM. Reactive, excel-based, ad-hoc schedules.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b4_l2">\
      <div class="card-title">Level 2 — Foundational</div>\
      <div class="card-preview">Traditional WFM: predictable, process-driven operations.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b4_l3">\
      <div class="card-title">Level 3 — Progressive</div>\
      <div class="card-preview">Real-time execution mindset. Variance response and automation.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b4_l4">\
      <div class="card-title">Level 4 — Advanced</div>\
      <div class="card-preview">Modern WFM ecosystem. Operations Research and bidirectional data.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b4_l5">\
      <div class="card-title">Level 5 — Pioneering</div>\
      <div class="card-preview">Enterprise orchestration. Human + AI, continuous learning.</div>\
    </div>\
  </div>\
</div>',

    b4_overview: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model</div>\
    <div class="detail-title">WFM Labs Maturity Model</div>\
    <img src="/img/book/maturity-model.svg" alt="WFM Labs Maturity Model" class="detail-illustration hero" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <ul>\
        <li><strong>Reactive</strong> &rarr; Cost Control</li>\
        <li><strong>Operational Stability</strong> &rarr; Foundational processes</li>\
        <li><strong>Adaptive Resilience</strong> &rarr; Real-time variance response</li>\
        <li><strong>Strategic Planning</strong> &rarr; OR-driven decisions</li>\
        <li><strong>Competitive Advantage</strong> &rarr; Enterprise orchestration</li>\
      </ul>\
    </div>\
  </div>\
</div>',

    b4_l1: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model &middot; Level 1</div>\
    <div class="detail-title">Level 1 — Initial / Manual</div>\
    <div class="detail-body">\
      <ul>\
        <li>No WFM: small or new contact center operations</li>\
        <li>Reactive in nature, excel-based</li>\
        <li>No formal forecast; ad-hoc schedules</li>\
      </ul>\
      <p>This is where every organization starts — or where they\'ve remained because "it works well enough." Spreadsheets own the planning process. Supervisors make staffing decisions based on intuition and yesterday\'s experience.</p>\
      <p>Chapter 7 provides the GRPIT-structured path from here to foundational capability.</p>\
    </div>\
  </div>\
</div>',

    b4_l2: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model &middot; Level 2</div>\
    <div class="detail-title">Level 2 — Foundational</div>\
    <div class="detail-body">\
      <ul>\
        <li>Traditional WFM: predictable, process-driven operations</li>\
        <li>Forecasting, skills-based scheduling, adherence</li>\
        <li>Legacy WFM software suite; "all-in-one" approach</li>\
      </ul>\
      <p>Most established contact centers sit here. They have a WFM platform, defined processes, and measurable KPIs. The challenge isn\'t capability — it\'s <strong>rigidity</strong>. The system works when conditions are stable. When they\'re not, it breaks.</p>\
      <p>Chapter 8 addresses the transition from process compliance to adaptive response.</p>\
    </div>\
  </div>\
</div>',

    b4_l3: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model &middot; Level 3</div>\
    <div class="detail-title">Level 3 — Progressive</div>\
    <img src="/img/book/paradigm-shift.svg" alt="The Level 3 Paradigm Shift" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <ul>\
        <li>WFM approach shift: real-time execution mindset</li>\
        <li>Automated training, coaching; variance response</li>\
        <li>Tech: ACD/WFM linked automation</li>\
      </ul>\
      <p>This is where the paradigm shift happens. Level 3 organizations <strong>expect variance and design for it</strong>. Real-time intraday automation replaces manual intervention. Chapter 9.</p>\
    </div>\
  </div>\
</div>',

    b4_l4: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model &middot; Level 4</div>\
    <div class="detail-title">Level 4 — Advanced</div>\
    <div class="detail-lead">The modern WFM ecosystem emerges — breaking the monolith.</div>\
    <img src="/img/book/ecosystem.svg" alt="Modern WFM Ecosystem" class="detail-illustration hero" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <ul>\
        <li><strong>WFM Core</strong> — Forecasting &amp; Scheduling</li>\
        <li><strong>Capacity Planning</strong> — Strategic Workforce Planning</li>\
        <li><strong>Real-Time Automation</strong> — Intraday Optimization</li>\
        <li><strong>Analytics Platform</strong> — Intelligence &amp; Insights</li>\
      </ul>\
    </div>\
  </div>\
</div>',

    b4_l5: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">The Model &middot; Level 5</div>\
    <div class="detail-title">Level 5 — Pioneering</div>\
    <div class="detail-lead">Enterprise orchestration. Human + AI.</div>\
    <div class="detail-body">\
      <ul>\
        <li>Enterprise orchestration, Human + AI</li>\
        <li>Multi-objective optimization; anticipatory routing</li>\
        <li>Tech: decision service, open APIs, continuous learning</li>\
      </ul>\
      <p>Level 5 is where workforce management becomes <strong>enterprise orchestration</strong>. The system doesn\'t just manage schedules — it continuously optimizes across customer experience, cost, employee wellbeing, and strategic objectives simultaneously.</p>\
      <p>AI doesn\'t replace human decision-making. It augments it — handling routine optimization while humans focus on judgment calls, exceptions, and strategy. Chapter 11.</p>\
    </div>\
  </div>\
</div>',

    // ─── BLOCK 5: OUTCOMES ───
    block5: '\
<div class="z-view view-section">\
  <div class="section-header">\
    <div class="section-number">5</div>\
    <div class="section-title">Outcomes</div>\
    <div class="section-subtitle">Results That Compound</div>\
  </div>\
  <div class="section-grid">\
    <div class="section-card zoom-me" data-to="b5_results">\
      <div class="card-title">Results That Compound</div>\
      <div class="card-preview">From manual firefighting to automated micro-moves and Human+AI orchestration.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b5_chasm">\
      <div class="card-title">Crossing the Chasm: L1/2 &rarr; L3</div>\
      <div class="card-preview">Stabilize intraday service levels. Hard in-year ROI: 3x–7x.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b5_l4outcomes">\
      <div class="card-title">Level 4: Ecosystem Outcomes</div>\
      <div class="card-preview">Adaptive loops, confidence bands, continuous multi-objective planning.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b5_l5unlocks">\
      <div class="card-title">Level 5: Enterprise Orchestration</div>\
      <div class="card-preview">Anticipate, learn, reconfigure faster than change itself.</div>\
    </div>\
    <div class="section-card zoom-me" data-to="b5_quickstart">\
      <div class="card-title">Quick Start — 30/60/90</div>\
      <div class="card-preview">Choose your pilot. Plot your level. Chart the course.</div>\
    </div>\
  </div>\
</div>',

    b5_results: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">Outcomes</div>\
    <div class="detail-title">Results That Compound</div>\
    <img src="/img/book/results-compound.svg" alt="Results That Compound" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Lift CX, lower cost, and boost wellbeing — simultaneously.</div>\
    <div class="detail-body">\
      <ul>\
        <li><strong>Customer Experience</strong> — stabilized service levels, reduced wait times, consistent quality</li>\
        <li><strong>Cost Efficiency</strong> — reduced overtime, optimized staffing, less waste</li>\
        <li><strong>Employee Wellbeing</strong> — predictable schedules, time for development, reduced burnout</li>\
      </ul>\
      <p>Each level of maturity unlocks a new tier of compounding results. The ROI isn\'t linear — it accelerates.</p>\
    </div>\
  </div>\
</div>',

    b5_chasm: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">Outcomes</div>\
    <div class="detail-title">Crossing the Chasm: L1/2 &rarr; L3 Outcomes</div>\
    <img src="/img/book/crossing-chasm.svg" alt="Crossing the Chasm" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <div class="outcome-stats">\
        <div class="outcome-stat">\
          <div class="outcome-value">3x–7x</div>\
          <div class="outcome-label">Hard in-year ROI</div>\
        </div>\
        <div class="outcome-stat">\
          <div class="outcome-value">100s</div>\
          <div class="outcome-label">Manual moves automated</div>\
        </div>\
        <div class="outcome-stat">\
          <div class="outcome-value">Real-time</div>\
          <div class="outcome-label">Service level stabilization</div>\
        </div>\
      </div>\
      <p>This is the highest-leverage transition in the model. Moving from reactive (L1/2) to progressive (L3) delivers the fastest, most measurable ROI.</p>\
    </div>\
  </div>\
</div>',

    b5_l4outcomes: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">Outcomes</div>\
    <div class="detail-title">Level 4: Modern Ecosystem Outcomes</div>\
    <img src="/img/book/adaptive-loop.svg" alt="Adaptive Loop" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Sense &rarr; Decide &rarr; Learn &rarr; repeat.</div>\
    <div class="detail-body">\
      <ul>\
        <li><strong>Decisions with confidence bands; explicit residual risk</strong></li>\
        <li><strong>Staffing envelopes + sensitivities &rarr; healthier budgets</strong></li>\
        <li><strong>Continuous strategic multi-objective planning</strong></li>\
      </ul>\
      <div class="detail-highlight">The shift from deterministic to adaptive isn\'t just technical — it changes how leadership thinks about planning, risk, and investment.</div>\
    </div>\
  </div>\
</div>',

    b5_l5unlocks: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">Outcomes</div>\
    <div class="detail-title">Level 5 Unlocks — Enterprise Orchestration</div>\
    <img src="/img/book/pareto-frontier.svg" alt="Pareto Frontier" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-body">\
      <ul>\
        <li><strong>Anticipate, learn, and reconfigure faster than change itself</strong></li>\
        <li><strong>Optimize for CLV, wellbeing, and risk</strong> — not just cost/contact</li>\
        <li><strong>Principles that endure:</strong> orchestrate &gt; control; adaptive &gt; predictive</li>\
      </ul>\
      <div class="detail-highlight">Orchestrate &gt; control. Adaptive &gt; predictive. These principles endure regardless of which specific technologies dominate.</div>\
    </div>\
  </div>\
</div>',

    b5_quickstart: '\
<div class="z-view view-detail">\
  <div class="detail-content">\
    <div class="detail-badge">Outcomes</div>\
    <div class="detail-title">Quick Start — 30/60/90</div>\
    <img src="/img/book/quickstart-30-60-90.svg" alt="30/60/90 Quick Start" class="detail-illustration" onclick="zoomImage(this)">\
    <div class="detail-lead">Choose your pilot now — what would you run Monday?</div>\
    <div class="detail-body">\
      <ul>\
        <li><strong>Day 1–30:</strong> Assess your current maturity level. Identify the highest-leverage gap.</li>\
        <li><strong>Day 31–60:</strong> Run a focused pilot at the next level up. Measure against GRPIT.</li>\
        <li><strong>Day 61–90:</strong> Scale what works. Document what doesn\'t. Iterate.</li>\
      </ul>\
      <div class="detail-highlight">The book is the playbook. WFM Labs is the community. The maturity model is the map. Start where you are.</div>\
      <p style="margin-top:1.5rem"><a href="https://www.amazon.com/Adaptive-Building-Workforce-Systems-Unpredictable/dp/B0FZWDPH2M" target="_blank" style="color:#f5c542">Get Adaptive on Amazon &rarr;</a> &nbsp;&nbsp; <a href="https://wfmlabs.org" target="_blank">Join WFM Labs &rarr;</a></p>\
    </div>\
  </div>\
</div>'

  };

  // ===== INITIALIZATION =====

  var zumlyApp = null;

  window.openBookZoom = function () {
    var overlay = document.getElementById('bookZoomOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Destroy previous instance if exists
    if (zumlyApp) {
      zumlyApp.destroy();
      zumlyApp = null;
      var canvas = document.querySelector('.book-zoom-canvas');
      canvas.innerHTML = '';
    }

    // Small delay to ensure overlay is rendered and has dimensions
    setTimeout(function () {
      try {
        zumlyApp = new Zumly({
          mount: '.book-zoom-canvas',
          initialView: 'overview',
          views: views,
          transitions: {
            duration: '0.8s',
            ease: 'ease-in-out',
            effects: ['blur(2px) brightness(0.7)', 'blur(6px) saturate(0)']
          },
          depthNav: { position: 'bottom-left' },
          lateralNav: { mode: 'always', arrows: true, dots: true, position: 'bottom-center' },
          debug: false
        });
        zumlyApp.init();

        // When at overview and user clicks back, close the overlay
        zumlyApp.on('beforeZoomOut', function () {
          if (zumlyApp.zoomLevel() <= 1) {
            closeBookZoom();
          }
        });
      } catch (e) {
        console.error('Zumly init error:', e);
      }
    }, 50);
  };

  window.closeBookZoom = function () {
    var overlay = document.getElementById('bookZoomOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Destroy and clear canvas so it reinits fresh next time
    if (zumlyApp) {
      zumlyApp.destroy();
      zumlyApp = null;
      var canvas = document.querySelector('.book-zoom-canvas');
      canvas.innerHTML = '';
    }
  };

  // ===== IMAGE LIGHTBOX =====

  // Create lightbox element once
  var lightbox = document.createElement('div');
  lightbox.className = 'img-lightbox';
  lightbox.innerHTML = '<img src="" alt=""><div class="img-lightbox-hint">Click anywhere to close</div>';
  document.body.appendChild(lightbox);

  var lightboxImg = lightbox.querySelector('img');

  window.zoomImage = function (el) {
    lightboxImg.src = el.src;
    lightboxImg.alt = el.alt;
    lightbox.classList.add('active');
  };

  lightbox.addEventListener('click', function () {
    lightbox.classList.remove('active');
  });

  // ESC to close lightbox
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
})();
