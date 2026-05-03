(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const g=[{route:"home",label:"Overview"},{route:"assessment",label:"Assessment"},{route:"ecosystem",label:"Ecosystem"},{route:"horizons",label:"Time Horizons"},{route:"optimization",label:"Optimization"},{route:"adaptive",label:"Adaptive"},{route:"credentials",label:"Credentials"}];function x(r){const e=r.split("/")[0];return`
    <nav class="nav">
      <div class="nav-inner">
        <div class="nav-brand" data-route="home" style="cursor: pointer;">Workforce Architecture</div>
        <div class="nav-links">
          ${g.map(t=>`
            <a class="nav-link ${t.route===e?"active":""}"
               data-route="${t.route}" href="#${t.route}">
              ${t.label}
            </a>
          `).join("")}
        </div>
        <div class="nav-mobile-toggle" onclick="document.querySelector('.nav-mobile').classList.toggle('open')">☰</div>
      </div>
      <div class="nav-mobile">
        ${g.map(t=>`
          <a class="nav-mobile-link ${t.route===e?"active":""}"
             data-route="${t.route}" href="#${t.route}"
             onclick="document.querySelector('.nav-mobile').classList.remove('open')">
            ${t.label}
          </a>
        `).join("")}
      </div>
    </nav>
  `}function l(r,e,t){return`
    <div class="breadcrumb">
      <a data-route="${r}" href="#${r}" class="breadcrumb-link">${e}</a>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">${t}</span>
    </div>
  `}function s(r,e,t,o="blue"){return`
    <a class="deep-link" data-route="${r}" href="#${r}">
      <div class="deep-link-inner">
        <div class="deep-link-header">
          <h3>${e}</h3>
          <span class="deep-link-arrow">→</span>
        </div>
        <p>${t}</p>
        <span class="badge badge-${o}" style="margin-top: 0.75rem;">Deep Dive</span>
      </div>
    </a>
  `}function w(){return`
    <div class="hero">
      <p class="label">Workforce Transformation Architecture</p>
      <h1>Building Adaptive Systems for an Unpredictable Future</h1>
      <p class="subtitle">
        A systems-thinking approach to re-engineering workforce management —
        from rigid, single-objective optimization to adaptive, value-driven orchestration
        across the full planning continuum.
      </p>
    </div>

    <div class="pillars">
      <div class="pillar">
        <span class="badge badge-blue">Principle 1</span>
        <h3>Value Optimization</h3>
        <p>Shift from optimizing service level at lowest cost to maximizing revenue at optimal cost while elevating CX, EX, and reducing effort. When AI reaches skill parity, value classification drives the human-vs-agentic decision.</p>
      </div>
      <div class="pillar">
        <span class="badge badge-emerald">Principle 2</span>
        <h3>Adaptive Architecture</h3>
        <p>Build systems that flex with the future rather than lock in today's assumptions. Architect for the unknown so you never have to tear down and rewire.</p>
      </div>
      <div class="pillar">
        <span class="badge badge-amber">Principle 3</span>
        <h3>Systems Thinking</h3>
        <p>The ecosystem is interconnected — routing, planning, automation, and analytics form a single system. Architect the connections, not just the components.</p>
      </div>
    </div>

    <section class="section">
      <div class="section-header">
        <p class="label">The Four Engines</p>
        <h2>An Interconnected Workforce Ecosystem</h2>
        <p class="subtitle">Workforce architecture requires four engines operating in concert — whether vendor-provided or internally built — tightly integrated as one interconnected system.</p>
      </div>

      <div class="diagram">
        <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg">
          <!-- Central hub -->
          <circle cx="450" cy="210" r="55" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
          <text x="450" y="195" text-anchor="middle" fill="#f1f5f9" font-size="11" font-weight="600" font-family="Inter, sans-serif">Multi-Objective</text>
          <text x="450" y="213" text-anchor="middle" fill="#f1f5f9" font-size="11" font-weight="600" font-family="Inter, sans-serif">Optimization</text>
          <text x="450" y="233" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Revenue x Cost x CX</text>
          <text x="450" y="245" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">x EX x Effort</text>

          <!-- Engine 1: Routing/ACD -->
          <rect x="80" y="80" width="200" height="110" rx="8" fill="#1a2235" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="180" y="108" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="600" font-family="Inter, sans-serif" text-transform="uppercase" letter-spacing="1">ENGINE 1</text>
          <text x="180" y="130" text-anchor="middle" fill="#f1f5f9" font-size="13" font-weight="600" font-family="Inter, sans-serif">Routing / ACD</text>
          <text x="180" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Interaction distribution</text>
          <text x="180" y="168" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Skills-based → Value-based</text>
          <text x="180" y="184" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">Cloud migration foundation</text>

          <!-- Engine 2: Planning/WFM -->
          <rect x="620" y="80" width="200" height="110" rx="8" fill="#1a2235" stroke="#10b981" stroke-width="1.5"/>
          <text x="720" y="108" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600" font-family="Inter, sans-serif">ENGINE 2</text>
          <text x="720" y="130" text-anchor="middle" fill="#f1f5f9" font-size="13" font-weight="600" font-family="Inter, sans-serif">Planning / WFM</text>
          <text x="720" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Demand → Staffing plans</text>
          <text x="720" y="168" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Deterministic → Probabilistic</text>
          <text x="720" y="184" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">Tight integration, evergreen not static</text>

          <!-- Engine 3: Real-Time Automation -->
          <rect x="80" y="240" width="200" height="110" rx="8" fill="#1a2235" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="180" y="268" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600" font-family="Inter, sans-serif">ENGINE 3</text>
          <text x="180" y="290" text-anchor="middle" fill="#f1f5f9" font-size="13" font-weight="600" font-family="Inter, sans-serif">Real-Time Automation</text>
          <text x="180" y="312" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Interval-level reallocation</text>
          <text x="180" y="328" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">SL-based → Multi-objective</text>
          <text x="180" y="344" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">Overlaps with routing engine</text>

          <!-- Engine 4: Analytics -->
          <rect x="620" y="240" width="200" height="110" rx="8" fill="#1a2235" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="720" y="268" text-anchor="middle" fill="#8b5cf6" font-size="10" font-weight="600" font-family="Inter, sans-serif">ENGINE 4</text>
          <text x="720" y="290" text-anchor="middle" fill="#f1f5f9" font-size="13" font-weight="600" font-family="Inter, sans-serif">Analytics</text>
          <text x="720" y="312" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Deep quantitative insight</text>
          <text x="720" y="328" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">Canned reports → Black Belt</text>
          <text x="720" y="344" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">Python, Jupyter, causal inference</text>

          <!-- Connection lines to center -->
          <line x1="280" y1="135" x2="395" y2="195" stroke="#3b82f6" stroke-width="1" opacity="0.4" stroke-dasharray="4,3"/>
          <line x1="620" y1="135" x2="505" y2="195" stroke="#10b981" stroke-width="1" opacity="0.4" stroke-dasharray="4,3"/>
          <line x1="280" y1="295" x2="395" y2="225" stroke="#f59e0b" stroke-width="1" opacity="0.4" stroke-dasharray="4,3"/>
          <line x1="620" y1="295" x2="505" y2="225" stroke="#8b5cf6" stroke-width="1" opacity="0.4" stroke-dasharray="4,3"/>

          <!-- Overlap indicator between Engine 1 and Engine 3 -->
          <rect x="130" y="196" width="100" height="38" rx="4" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="180" y="212" text-anchor="middle" fill="#f43f5e" font-size="8" font-weight="500" font-family="Inter, sans-serif">DECISIONING</text>
          <text x="180" y="225" text-anchor="middle" fill="#f43f5e" font-size="8" font-weight="500" font-family="Inter, sans-serif">OVERLAP</text>

          <!-- Feedback loop arrow -->
          <path d="M 820 300 C 860 300, 860 150, 820 150" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="870" y="228" text-anchor="middle" fill="#64748b" font-size="8" font-family="Inter, sans-serif" transform="rotate(90, 870, 228)">FEEDBACK LOOP</text>
        </svg>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <p class="label">The Approach</p>
        <h2>A Multi-Year Transformation, Architected from Day One</h2>
      </div>
      <div class="card-grid">
        <a class="card" data-route="assessment" href="#assessment" style="text-decoration: none; color: inherit; cursor: pointer;">
          <div class="card-icon" style="background: rgba(59, 130, 246, 0.15);">
            <span style="color: var(--accent-blue);">1</span>
          </div>
          <h3>Deep Assessment</h3>
          <p>GRPIT-based diagnostic across Goals, Roles, Processes, Interpersonal, and Technology — applied to the entire ecosystem, not just WFM. Systems thinking from Day One. Map current state across all interconnected engines.</p>
          <span class="badge badge-blue" style="margin-top: 0.75rem;">Explore →</span>
        </a>
        <a class="card" data-route="ecosystem" href="#ecosystem" style="text-decoration: none; color: inherit; cursor: pointer;">
          <div class="card-icon" style="background: rgba(16, 185, 129, 0.15);">
            <span style="color: var(--accent-emerald);">2</span>
          </div>
          <h3>Architecture Design</h3>
          <p>Design the target ecosystem with adaptive principles — API-first integration, configurable objectives, platform-agnostic intelligence layers. Systems thinking across the full technology landscape.</p>
          <span class="badge badge-emerald" style="margin-top: 0.75rem;">Explore →</span>
        </a>
        <a class="card" data-route="horizons" href="#horizons" style="text-decoration: none; color: inherit; cursor: pointer;">
          <div class="card-icon" style="background: rgba(245, 158, 11, 0.15);">
            <span style="color: var(--accent-amber);">3</span>
          </div>
          <h3>Phased Execution</h3>
          <p>Multi-year roadmap with value delivery at each phase. Cloud routing migration as foundation. WFM modernization as bridge. Value-based orchestration as destination. Each phase stands alone — no "big bang."</p>
          <span class="badge badge-amber" style="margin-top: 0.75rem;">Explore →</span>
        </a>
        <a class="card" data-route="optimization" href="#optimization" style="text-decoration: none; color: inherit; cursor: pointer;">
          <div class="card-icon" style="background: rgba(139, 92, 246, 0.15);">
            <span style="color: var(--accent-purple);">4</span>
          </div>
          <h3>Continuous Intelligence</h3>
          <p>Build the analytical muscle and evergreen feedback loops. Every day generates data that should flow back into strategic planning. Close the gap between execution and modeling.</p>
          <span class="badge badge-purple" style="margin-top: 0.75rem;">Explore →</span>
        </a>
      </div>
    </section>
  `}function z(){return`
    <div class="section-header">
      <p class="label">Day One Methodology</p>
      <h1>Deep Assessment: Understanding Where You Stand</h1>
      <p class="subtitle">
        Before architecting the future, rigorously diagnose the present.
        The GRPIT framework provides a systematic lens for evaluating organizational
        readiness across five interconnected dimensions.
      </p>
    </div>

    <section class="section">
      <h2>The GRPIT Framework: Applied to the Entire Ecosystem</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Most transformation efforts fail because they address technology in isolation.
        GRPIT forces examination of the full system — routing, planning, automation, analytics,
        and the human organization that operates them. This is systems thinking applied to workforce
        architecture: we're not assessing "WFM" — we're assessing the interconnected ecosystem
        of decisions, data flows, and optimization objectives across every engine.
      </p>

      <div class="card-grid">
        <div class="card">
          <span class="badge badge-blue">G</span>
          <h3>Goals</h3>
          <p>What does "good" mean? Service level targets, occupancy bands, cost per contact, value delivery metrics. Are goals aligned with where the organization needs to go — or where it's been?</p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              <strong style="color: var(--text-secondary);">Evolution:</strong> SL targets → Multi-objective (Cost x CX x EX) → Value delivery metrics
            </p>
          </div>
        </div>
        <div class="card">
          <span class="badge badge-cyan">R</span>
          <h3>Roles</h3>
          <p>Who owns planning, execution, governance? Is there accountability clarity between forecasting, scheduling, real-time, and analytics? Where are the handoff gaps?</p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              <strong style="color: var(--text-secondary);">Evolution:</strong> Spreadsheet power users → ROC analysts → Automation strategists → Intelligence architects
            </p>
          </div>
        </div>
        <div class="card">
          <span class="badge badge-emerald">P</span>
          <h3>Processes</h3>
          <p>Cadences, handoffs, decision protocols. How do plans get built, approved, executed, and revised? Where are manual interventions required that should be automated?</p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              <strong style="color: var(--text-secondary);">Evolution:</strong> Manual reconciliation → Rule-based execution → Continuous adaptation → Autonomous orchestration
            </p>
          </div>
        </div>
        <div class="card">
          <span class="badge badge-amber">I</span>
          <h3>Interpersonal</h3>
          <p>Trust norms, communication patterns, governance behaviors. Does finance accept ranges instead of point estimates? Does the organization blame "forecast failure" or embrace variance?</p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              <strong style="color: var(--text-secondary);">Evolution:</strong> Adherence policing → Variance acceptance → Probabilistic confidence → Autonomous trust
            </p>
          </div>
        </div>
        <div class="card">
          <span class="badge badge-purple">T</span>
          <h3>Technology</h3>
          <p>Systems, integrations, data flow. ACD, WFM, automation, analytics — how do they connect? Where is data manual? Where are APIs missing? What's the integration debt?</p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              <strong style="color: var(--text-secondary);">Evolution:</strong> Excel + manual exports → Integrated platforms → API-first ecosystem → Intelligence layer
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Maturity Model: L1 through L5</h2>
      <p style="color: var(--text-secondary); margin-bottom: 2rem;">
        Five levels of workforce planning maturity. Each level builds foundational capability for the next.
        The critical insight: L3 to L4 is not incremental — it's a phase transition requiring different math,
        different architecture, and different organizational muscle.
      </p>

      <div class="maturity-track">
        ${c(1,"Initial / Manual","Spreadsheet-driven, reactive planning. No formal WFM function. Supervisors compensating for missing instrumentation.","~40% of industry","rose")}
        ${c(2,"Foundational","Structured forecasting & scheduling. Enterprise WFM platform. Siloed roles. Automated planning but not adaptation.","~45% of industry","amber")}
        ${c(3,"Progressive","Real-time automation. Variance harvesting. Sub-minute actuation. Tactical flexibility as competitive advantage.","~10% of industry","emerald")}
        ${c(4,"Advanced","Operations Research. Probabilistic planning. Multi-objective optimization. Three-pool architecture. Phase transition.","<5% of industry","blue")}
        ${c(5,"Pioneering","Enterprise orchestration. Distributed truth. Human-AI portfolio optimization. Autonomous operations with oversight.","<1% of industry","purple")}
      </div>

      <div class="card" style="margin-top: 2rem; border-color: var(--accent-rose); background: rgba(244, 63, 94, 0.05);">
        <h3 style="color: var(--accent-rose);">The Phase Transition (L3 → L4)</h3>
        <p style="margin-top: 0.5rem;">
          L1 through L3 is linear progression — better tools, better processes, better automation.
          L3 to L4 is qualitatively different. It requires shifting from deterministic to probabilistic thinking,
          from single-objective (service level) to multi-dimensional (cost, customer experience, employee experience),
          from single-channel to ecosystem orchestration. Most organizations that attempt to jump directly fail —
          not because the technology doesn't exist, but because the foundational processes and data infrastructure aren't in place.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Five-Stage Discovery Process</h2>
      <div class="card-grid" style="grid-template-columns: 1fr;">
        <div class="card">
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; text-align: center;">
            ${d(1,"Current State","Map infrastructure, routing logic, capacity processes, integration points")}
            ${d(2,"Integration","Assess API capabilities, data flow, manual handoffs, system connectivity")}
            ${d(3,"Decision Logic","Audit routing criteria, planning constraints, optimization objectives")}
            ${d(4,"Future State","Define multi-objective goals, agentic readiness, value classification")}
            ${d(5,"Pathway","Prioritize implementation, manage change, measure at each phase")}
          </div>
        </div>
      </div>
    </section>
  `}function c(r,e,t,o,i){return`
    <div class="card" style="margin-bottom: 0.75rem; display: grid; grid-template-columns: 60px 1fr auto; align-items: center; gap: 1.25rem;">
      <div style="text-align: center;">
        <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-${i});">L${r}</div>
      </div>
      <div>
        <h3 style="margin-bottom: 0.25rem;">${e}</h3>
        <p style="font-size: 0.85rem;">${t}</p>
      </div>
      <div>
        <span class="badge badge-${i}">${o}</span>
      </div>
    </div>
  `}function d(r,e,t){return`
    <div>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(59, 130, 246, 0.15); color: var(--accent-blue); display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem; margin-bottom: 0.5rem;">${r}</div>
      <h3 style="font-size: 0.9rem;">${e}</h3>
      <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">${t}</p>
    </div>
  `}function k(){return`
    <div class="section-header">
      <p class="label">Systems Thinking</p>
      <h1>The Interconnected Workforce Ecosystem</h1>
      <p class="subtitle">
        Four engines forming a single system. Architect the connections between them —
        not just the components individually. Where they overlap is where the hardest
        design decisions live.
      </p>
    </div>

    <section class="section">
      <h2>Go Deeper</h2>
      <div class="deep-grid">
        ${s("ecosystem/integration","Integration Continuum","How capacity planning, mid-term planning, tactical WFM, and real-time execution connect — and where the handoffs break today. API architecture, data contracts, and the evergreen feedback loop.","cyan")}
        ${s("ecosystem/decisioning","Decisioning Architecture",'Where intelligence lives across the platform stack. The "should vs. can" question. Three layers of decisioning. How routing and automation engines share state without competing.',"purple")}
      </div>
    </section>

    <section class="section">
      <div class="diagram">
        <svg viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg">
          <!-- Intelligence Layer (top) -->
          <rect x="200" y="20" width="500" height="60" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="450" y="45" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="600" font-family="Inter, sans-serif">VALUE-BASED INTELLIGENCE LAYER</text>
          <text x="450" y="63" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Defines WHAT to optimize for — consumed by engines below</text>

          <!-- Engine 1: Routing -->
          <rect x="50" y="120" width="380" height="180" rx="8" fill="#1a2235" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="240" y="148" text-anchor="middle" fill="#3b82f6" font-size="11" font-weight="600" font-family="Inter, sans-serif">ROUTING / ACD ENGINE</text>

          <text x="80" y="175" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Cloud-Based Platform (Migration Target)</text>
          <text x="80" y="195" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Microservices architecture, API-first design</text>
          <text x="80" y="215" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Predictive routing, ML-powered matching</text>
          <text x="80" y="235" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Skills-based routing (today)</text>
          <text x="80" y="255" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Value-based routing (future)</text>
          <text x="80" y="275" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Human-vs-agentic decisioning (future)</text>

          <!-- Decisioning capability badge -->
          <rect x="280" y="260" width="130" height="24" rx="4" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" stroke-width="1"/>
          <text x="345" y="276" text-anchor="middle" fill="#f43f5e" font-size="8" font-weight="600" font-family="Inter, sans-serif">CAN MAKE DECISIONS</text>

          <!-- Engine 3: Automation -->
          <rect x="470" y="120" width="380" height="180" rx="8" fill="#1a2235" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="660" y="148" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="600" font-family="Inter, sans-serif">REAL-TIME AUTOMATION ENGINE</text>

          <text x="500" y="175" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Constraint-Solver Reallocation</text>
          <text x="500" y="195" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Metaheuristic optimization (Tabu, SA, Late Acceptance)</text>
          <text x="500" y="215" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Configurable queue targets and fill strategies</text>
          <text x="500" y="235" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">SL-based reallocation (today)</text>
          <text x="500" y="255" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Multi-objective reallocation (future)</text>
          <text x="500" y="275" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Value-aware capacity shifting (future)</text>

          <!-- Decisioning capability badge -->
          <rect x="700" y="260" width="130" height="24" rx="4" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" stroke-width="1"/>
          <text x="765" y="276" text-anchor="middle" fill="#f43f5e" font-size="8" font-weight="600" font-family="Inter, sans-serif">CAN MAKE DECISIONS</text>

          <!-- Overlap zone -->
          <rect x="350" y="305" width="200" height="50" rx="6" fill="rgba(244, 63, 94, 0.08)" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="450" y="325" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="600" font-family="Inter, sans-serif">DECISIONING OVERLAP</text>
          <text x="450" y="343" text-anchor="middle" fill="#f43f5e" font-size="8" font-family="Inter, sans-serif">Design for this intentionally, not accidentally</text>

          <!-- Engine 2: Planning -->
          <rect x="50" y="380" width="380" height="150" rx="8" fill="#1a2235" stroke="#10b981" stroke-width="1.5"/>
          <text x="240" y="408" text-anchor="middle" fill="#10b981" font-size="11" font-weight="600" font-family="Inter, sans-serif">PLANNING / WFM ENGINE</text>

          <text x="80" y="435" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Demand Forecasting → Staffing Plans</text>
          <text x="80" y="455" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Traditional WFM: Erlang-based, deterministic</text>
          <text x="80" y="475" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Platform decision pending (future state open)</text>
          <text x="80" y="495" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Probabilistic planning (P50/P80/P95)</text>
          <text x="80" y="515" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Three-pool staffing models (non-Erlang)</text>

          <!-- Engine 4: Analytics -->
          <rect x="470" y="380" width="380" height="150" rx="8" fill="#1a2235" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="660" y="408" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="600" font-family="Inter, sans-serif">ANALYTICS ENGINE</text>

          <text x="500" y="435" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Deep Quantitative Intelligence</text>
          <text x="500" y="455" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Not canned reports — Black Belt methodology</text>
          <text x="500" y="475" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Python, Jupyter notebooks, causal inference</text>
          <text x="500" y="495" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Custom ML models, stochastic simulation</text>
          <text x="500" y="515" fill="#8b5cf6" font-size="9" font-weight="500" font-family="Inter, sans-serif">→ Feeds insights back into ALL engines</text>

          <!-- Connecting arrows -->
          <path d="M 240 300 L 240 380" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
          <path d="M 660 300 L 660 380" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
          <path d="M 430 455 L 470 455" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrow)"/>

          <!-- Arrow marker -->
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#64748b"/>
            </marker>
          </defs>
        </svg>
      </div>
    </section>

    <section class="section">
      <h2>Design Principles for the Ecosystem</h2>
      <div class="card-grid">
        <div class="card">
          <span class="badge badge-rose">Critical</span>
          <h3>No Single Decisioning Engine</h3>
          <p>Both routing and automation platforms can make optimization-based decisions. They overlap. Architecture must define clear decision domains — which platform decides what, under what conditions, with what data.</p>
        </div>
        <div class="card">
          <span class="badge badge-blue">Principle</span>
          <h3>Intelligence Above Execution</h3>
          <p>The value-based intelligence layer sits above execution platforms. It defines optimization objectives. Both routing and automation engines consume those objectives for their respective decision domains.</p>
        </div>
        <div class="card">
          <span class="badge badge-emerald">Principle</span>
          <h3>API-First Integration</h3>
          <p>Every connection between engines must be programmatic, bi-directional, and real-time. Manual data transfers between systems is integration debt that compounds with every planning cycle.</p>
        </div>
        <div class="card">
          <span class="badge badge-amber">Principle</span>
          <h3>Evergreen Feedback Loops</h3>
          <p>Analytics feeds back into planning. Execution outcomes feed back into strategic models. Every day generates data that should update the entire system — not just the interval plan.</p>
        </div>
        <div class="card">
          <span class="badge badge-purple">Principle</span>
          <h3>Platform Agnosticism</h3>
          <p>The intelligence layer must not be locked to any single vendor. If the automation platform changes, or the WFM platform is replaced, the value logic and optimization objectives persist independently.</p>
        </div>
        <div class="card">
          <span class="badge badge-cyan">Principle</span>
          <h3>Build for the Unknown</h3>
          <p>Today's skill-based routing may be tomorrow's value-based routing. Today's human agent pool may be tomorrow's human-AI portfolio. Architect configurable objectives — not hardcoded assumptions.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Overlap Question</h2>
      <div class="card" style="border-color: var(--accent-rose);">
        <p style="font-size: 0.95rem; line-height: 1.8;">
          When a cloud routing platform and a real-time automation platform both have the capability
          to reallocate agents based on multi-objective criteria, the architectural question becomes:
          <strong style="color: var(--text-primary);">who decides what, and when?</strong>
        </p>
        <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-blue);">
            <h3 style="font-size: 0.9rem; color: var(--accent-blue);">Routing Engine Decides:</h3>
            <p style="font-size: 0.82rem; margin-top: 0.5rem;">Where does this NEW interaction go? Which pool? Which resource type? What's the expected value of each path?</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-amber);">
            <h3 style="font-size: 0.9rem; color: var(--accent-amber);">Automation Engine Decides:</h3>
            <p style="font-size: 0.82rem; margin-top: 0.5rem;">Should this EXISTING agent be reallocated? Based on current queue states, cognitive load, and multi-objective targets?</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1.5rem;">
          Both may be correct answers simultaneously. The design challenge is ensuring they don't conflict,
          they share state, and they're governed by the same value-based objectives from the intelligence layer above.
        </p>
      </div>
    </section>
  `}function I(){return`
    <div class="section-header">
      <p class="label">The Time Continuum</p>
      <h1>Planning Across Horizons</h1>
      <p class="subtitle">
        Reallocation decisions exist at every time scale — from years to seconds.
        Each horizon optimizes different things with different data. The opportunities
        lie in strengthening the connections between them.
      </p>
    </div>

    <section class="section">
      <div class="diagram">
        <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
          <!-- Time axis -->
          <line x1="50" y1="450" x2="850" y2="450" stroke="#2a3a52" stroke-width="2"/>
          <text x="50" y="475" fill="#64748b" font-size="9" font-family="Inter, sans-serif">YEARS</text>
          <text x="270" y="475" fill="#64748b" font-size="9" font-family="Inter, sans-serif">MONTHS</text>
          <text x="510" y="475" fill="#64748b" font-size="9" font-family="Inter, sans-serif">WEEKS/DAYS</text>
          <text x="750" y="475" fill="#64748b" font-size="9" font-family="Inter, sans-serif">INTERVALS</text>

          <!-- Strategic Layer -->
          <rect x="50" y="40" width="230" height="130" rx="8" fill="#1a2235" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="165" y="65" text-anchor="middle" fill="#8b5cf6" font-size="10" font-weight="600" font-family="Inter, sans-serif">STRATEGIC PLANNING</text>
          <text x="70" y="88" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Capacity Modeling</text>
          <text x="70" y="106" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">ML-driven demand forecasting</text>
          <text x="70" y="122" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Stochastic simulation engine</text>
          <text x="70" y="138" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Budget + headcount decisions</text>
          <text x="70" y="156" fill="#f59e0b" font-size="9" font-weight="500" font-family="Inter, sans-serif">Build vs. buy: security + flexibility</text>

          <!-- Mid-Term Layer -->
          <rect x="310" y="40" width="230" height="130" rx="8" fill="#1a2235" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="425" y="65" text-anchor="middle" fill="#06b6d4" font-size="10" font-weight="600" font-family="Inter, sans-serif">MID-TERM PLANNING</text>
          <text x="330" y="88" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">The 90-Day Bridge</text>
          <text x="330" y="106" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Traffic-type to supply-type matching</text>
          <text x="330" y="122" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Pool allocation decisions</text>
          <text x="330" y="138" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Hiring/training pipeline</text>
          <text x="330" y="156" fill="#06b6d4" font-size="9" font-weight="500" font-family="Inter, sans-serif">Strategic reallocation at weeks level</text>

          <!-- Tactical Layer -->
          <rect x="570" y="40" width="200" height="130" rx="8" fill="#1a2235" stroke="#10b981" stroke-width="1.5"/>
          <text x="670" y="65" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600" font-family="Inter, sans-serif">TACTICAL / WFM</text>
          <text x="590" y="88" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Schedule Execution</text>
          <text x="590" y="106" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Demand signals → staffing plans</text>
          <text x="590" y="122" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Intraday management</text>
          <text x="590" y="138" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Schedule optimization</text>
          <text x="590" y="156" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">Current platform + migration</text>

          <!-- Real-Time Layer -->
          <rect x="700" y="210" width="170" height="130" rx="8" fill="#1a2235" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="785" y="235" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600" font-family="Inter, sans-serif">REAL-TIME</text>
          <text x="720" y="258" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Interval Execution</text>
          <text x="720" y="276" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Constraint-solver reallocation</text>
          <text x="720" y="292" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Queue assignment optimization</text>
          <text x="720" y="308" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Sub-minute response</text>
          <text x="720" y="326" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">Patented technology (QRE)</text>

          <!-- Connection arrows between layers -->
          <line x1="280" y1="105" x2="310" y2="105" stroke="#64748b" stroke-width="1.5" marker-end="url(#grayarrow)"/>
          <line x1="540" y1="105" x2="570" y2="105" stroke="#64748b" stroke-width="1.5" marker-end="url(#grayarrow)"/>
          <line x1="670" y1="170" x2="720" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#grayarrow)"/>

          <!-- Opportunity indicators (between each layer) -->
          <rect x="281" y="85" width="28" height="16" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="0.8"/>
          <text x="295" y="96" text-anchor="middle" fill="#f59e0b" font-size="6" font-weight="600" font-family="Inter, sans-serif">⚡</text>

          <rect x="541" y="85" width="28" height="16" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="0.8"/>
          <text x="555" y="96" text-anchor="middle" fill="#f59e0b" font-size="6" font-weight="600" font-family="Inter, sans-serif">⚡</text>

          <rect x="678" y="180" width="28" height="16" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="0.8"/>
          <text x="692" y="191" text-anchor="middle" fill="#f59e0b" font-size="6" font-weight="600" font-family="Inter, sans-serif">⚡</text>

          <!-- Legend for opportunity indicators -->
          <rect x="50" y="195" width="12" height="12" rx="2" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="0.8"/>
          <text x="70" y="205" fill="#f59e0b" font-size="8" font-family="Inter, sans-serif">= Opportunity to strengthen connection</text>

          <!-- Evergreen feedback loop -->
          <path d="M 785 340 C 830 360, 850 400, 830 430 L 120 430 C 80 430, 60 400, 60 370 L 60 170 C 60 150, 70 130, 80 120"
                fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.6"
                marker-end="url(#bluearrow2)"/>
          <text x="450" y="420" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="500" font-family="Inter, sans-serif">EVERGREEN FEEDBACK LOOP — Each day's data flows back to strategic</text>

          <!-- Feedback opportunity indicator -->
          <rect x="42" y="240" width="28" height="16" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="0.8"/>
          <text x="56" y="251" text-anchor="middle" fill="#3b82f6" font-size="6" font-weight="600" font-family="Inter, sans-serif">⚡</text>

          <defs>
            <marker id="grayarrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#64748b"/>
            </marker>
            <marker id="bluearrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#3b82f6"/>
            </marker>
          </defs>
        </svg>
      </div>
    </section>

    <section class="section">
      <h2>Reallocation Decisions Across Time</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        "Reallocation" means fundamentally different things at different time scales.
        Each operates on different data, different constraints, different optimization engines.
      </p>

      <div class="card-grid" style="grid-template-columns: repeat(2, 1fr);">
        <div class="card">
          <span class="badge badge-purple">Strategic</span>
          <h3>Portfolio Allocation</h3>
          <p>"Over the next quarter, shift 200 FTE from Pool 1 (routine) to Pool 2 (collaborative) as AI containment matures."</p>
          <p style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">Data: AI maturity curves, volume trends, budget constraints, hiring pipeline capacity</p>
        </div>
        <div class="card">
          <span class="badge badge-cyan">Mid-Term</span>
          <h3>Traffic-to-Supply Matching</h3>
          <p>"Over the next three weeks, match billing dispute traffic against the specialist supply pool with fraud cross-training."</p>
          <p style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">Data: Forecasted volume by type, skill inventory, training completion, seasonal patterns</p>
        </div>
        <div class="card">
          <span class="badge badge-emerald">Tactical</span>
          <h3>Schedule Optimization</h3>
          <p>"For next Monday, ensure 85% coverage of high-value queues during peak hours with appropriately skilled agents."</p>
          <p style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">Data: Demand forecast, agent schedules, skill matrices, time-off requests, adherence patterns</p>
        </div>
        <div class="card">
          <span class="badge badge-amber">Real-Time</span>
          <h3>Interval Reallocation</h3>
          <p>"Right now, move 3 agents from low-value queue (AI can absorb) to high-value queue (building) because net staffing is -2."</p>
          <p style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">Data: Live queue metrics, agent states, SL trajectory, constraint solver optimization</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Continuum Gap — Opportunities to Examine</h2>
      <div class="card" style="border-color: var(--accent-amber);">
        <h3>Areas Where Horizon Connectivity Creates Value</h3>
        <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <p style="font-size: 0.88rem; font-weight: 500; color: var(--accent-amber); margin-bottom: 0.5rem;">Opportunities:</p>
            <ul style="color: var(--text-secondary); font-size: 0.85rem; list-style: none; padding: 0;">
              <li style="margin-bottom: 0.4rem;">- Smoothing the handoff between strategic and WFM planning</li>
              <li style="margin-bottom: 0.4rem;">- Integrating stochastic modeling into the planning workflow</li>
              <li style="margin-bottom: 0.4rem;">- Creating feedback loops where daily data informs mid-term plans</li>
              <li style="margin-bottom: 0.4rem;">- Building API continuity between planning layers</li>
              <li style="margin-bottom: 0.4rem;">- Aligning optimization objectives consistently across horizons</li>
              <li style="margin-bottom: 0.4rem;">- Strengthening tactical-to-real-time connectivity</li>
            </ul>
          </div>
          <div>
            <p style="font-size: 0.88rem; font-weight: 500; color: var(--accent-emerald); margin-bottom: 0.5rem;">Target State:</p>
            <ul style="color: var(--text-secondary); font-size: 0.85rem; list-style: none; padding: 0;">
              <li style="margin-bottom: 0.4rem;">+ Continuous flow from strategic → execution</li>
              <li style="margin-bottom: 0.4rem;">+ Stochastic engine integrated via APIs</li>
              <li style="margin-bottom: 0.4rem;">+ Daily actuals update all planning horizons</li>
              <li style="margin-bottom: 0.4rem;">+ Programmatic handoffs with shared data models</li>
              <li style="margin-bottom: 0.4rem;">+ Same value-based objectives govern all layers</li>
              <li style="margin-bottom: 0.4rem;">+ Evergreen loop strengthens all connections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Build vs. Buy: The Stochastic Engine Question</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card">
          <span class="badge badge-amber">Vendor</span>
          <h3>Enterprise Point Solution</h3>
          <p>Must meet banking regulatory compliance (SOC 2, data residency). Must offer true OR-grade stochastic simulation — not just deterministic forecasting. Must have open integration framework to incorporate proprietary intelligence. Enterprise maturity is non-negotiable.</p>
        </div>
        <div class="card">
          <span class="badge badge-emerald">Internal</span>
          <h3>Build with ML Team</h3>
          <p>Security engineering and compliance baked in from design. Full flexibility to incorporate massive internal intelligence — customer behavior data, economic sensitivity models, proprietary variables no vendor anticipates. Own the most strategic analytical capability.</p>
        </div>
      </div>
    </section>

    <section class="section" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <h2>Read More</h2>
      <div class="deep-grid">
        ${s("horizons/handoffs","Handoff Architecture","Deep dive into the handoff between strategic and tactical planning. API design principles, data contracts, refresh cadences, and implementation approach for closing the continuum gap.","rose")}
      </div>
    </section>
  `}function A(){return`
    <div class="section-header">
      <p class="label">The Heartbeat</p>
      <h1>Multi-Objective Value Optimization</h1>
      <p class="subtitle">
        Stop optimizing service level at the lowest cost.
        Start optimizing value delivery at the optimal cost.
        When agentic AI reaches skill parity, value classification becomes the decisive factor.
      </p>
    </div>

    <section class="section">
      <h2>Go Deeper</h2>
      <div class="deep-grid">
        ${s("optimization/revenue","Value as Revenue","From cost minimization to revenue maximization. Financial services value taxonomy. The revenue math — why a $3.50 specialist interaction protecting $12K CLV is the highest-ROI routing decision.","emerald")}
        ${s("optimization/culture","Culture as Competitive Advantage","When the #1 workplace meets cost pressure. Why low attrition is an asset, not a problem. The Service-Profit Chain. New revenue streams from elevated roles.","amber")}
      </div>
    </section>

    <section class="section">
      <h2>The Paradigm Shift</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <span class="badge badge-rose">Legacy Model</span>
          <h3>Single-Objective Optimization</h3>
          <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary);">
            <p>MINIMIZE cost</p>
            <p>SUBJECT TO service_level >= 80%</p>
            <p style="margin-top: 0.5rem; color: var(--text-muted);">// That's it. One dimension.</p>
            <p style="color: var(--text-muted);">// Employee experience? Ignored.</p>
            <p style="color: var(--text-muted);">// Customer lifetime value? Invisible.</p>
            <p style="color: var(--text-muted);">// Revenue opportunity? Not modeled.</p>
          </div>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <span class="badge badge-emerald">Value Model</span>
          <h3>Multi-Objective Optimization</h3>
          <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary);">
            <p>MAXIMIZE value_delivered</p>
            <p>ACROSS cost, customer_experience, employee_experience</p>
            <p>WHERE routing_decision = f(interaction_value, ai_capability)</p>
            <p style="margin-top: 0.5rem; color: var(--text-muted);">// Pareto frontier of efficient tradeoffs</p>
            <p style="color: var(--text-muted);">// Human judgment where it creates value</p>
            <p style="color: var(--text-muted);">// AI where it achieves parity or better</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Agentic Question</h2>
      <div class="card" style="border-color: var(--accent-blue);">
        <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary);">
          When AI reaches parity with a human on a given skill — and it will, progressively,
          across interaction types — the question shifts from <em>"can AI handle this?"</em> to
          <strong style="color: var(--text-primary);">"does a human create more value here?"</strong>
        </p>
        <div style="margin-top: 1.5rem; padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-blue);">
          <p style="font-size: 0.9rem; color: var(--text-primary); font-weight: 500;">The Value Classification Framework:</p>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
            For every interaction type, score two dimensions:<br/>
            <strong>AI Capability</strong> (0-100%): How well can AI handle this today?<br/>
            <strong>Business Value</strong> (1-10): What is this interaction worth?
          </p>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.75rem;">
            The routing decision becomes: For this specific interaction, given its value and AI's capability,
            which path — autonomous AI, collaborative, or specialist human — maximizes expected value delivery?
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Three Operational Pools</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Work naturally decomposes into three fundamentally different operational models,
        each with different economics, different staffing math, and different optimization logic.
      </p>

      <div class="card-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="card" style="border-top: 3px solid var(--accent-cyan);">
          <span class="badge badge-cyan">Pool 1</span>
          <h3>Autonomous AI</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Trigger:</strong> AI Capability > 80%, Value &le; 4</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Economics:</strong> Linear cost per transaction ($0.15-0.25)</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Capacity:</strong> Elastic / infinite</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Planning driver:</strong> Containment rate + escalation cost</p>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.78rem; color: var(--text-muted);">Examples: Balance checks, payment processing, card activation, address updates</p>
          </div>
        </div>
        <div class="card" style="border-top: 3px solid var(--accent-amber);">
          <span class="badge badge-amber">Pool 2</span>
          <h3>Collaborative</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Trigger:</strong> AI 30-80%, Value 4-7</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Economics:</strong> Cognitive portfolio (1 human : 20-40 AI cases)</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Capacity:</strong> Constrained by cognitive load (N*)</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Planning driver:</strong> Optimal portfolio size, not utilization</p>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.78rem; color: var(--text-muted);">Examples: Billing inquiries, early collections, credit applications, billing disputes</p>
          </div>
        </div>
        <div class="card" style="border-top: 3px solid var(--accent-purple);">
          <span class="badge badge-purple">Pool 3</span>
          <h3>Specialist Human</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Trigger:</strong> AI < 30% OR Value &ge; 8</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Economics:</strong> Erlang-C + complexity premium</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Capacity:</strong> Finite, traditional queueing</p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong style="color: var(--text-primary);">Planning driver:</strong> Value justifies higher cost per agent</p>
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border);">
            <p style="font-size: 0.78rem; color: var(--text-muted);">Examples: Fraud investigation, hardship cases, regulatory complaints, partner management</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Why Naive Deflection Fails</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; text-align: center;">
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--accent-rose);">15-20%</div>
            <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">Volume Rebound</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Jevons Effect: deflected demand resurfaces through other channels</p>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--accent-amber);">18%</div>
            <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">Complexity Concentration</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Remaining work gets harder as routine work deflects to AI</p>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--accent-purple);">7-10x</div>
            <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">Escalation Tax</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Failed AI attempts cost dramatically more than human-first routing</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <p style="font-size: 0.9rem; color: var(--text-secondary); text-align: center;">
            "AI handles 50% of volume → Cut 50% of headcount" ignores all three effects.<br/>
            <strong style="color: var(--text-primary);">Real savings: 30-70% of naive projection.</strong>
            The value framework makes second-order effects visible and plannable.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>For a Financial Services Organization</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        A bank wants to maximize revenue at optimal cost — not minimize cost at target service level.
        The value framework shifts the optimization objective to what actually matters to the business.
      </p>
      <div class="card" style="border-color: var(--accent-emerald);">
        <div style="font-family: var(--font-mono); font-size: 0.85rem; line-height: 2;">
          <p style="color: var(--accent-emerald);">// Old equation:</p>
          <p style="color: var(--text-secondary);">minimize(cost) subject_to service_level >= target</p>
          <p style="color: var(--accent-emerald); margin-top: 1rem;">// New equation:</p>
          <p style="color: var(--text-primary);">maximize(revenue + customer_lifetime_value + employee_retention)</p>
          <p style="color: var(--text-primary);">at optimize(cost_efficiency)</p>
          <p style="color: var(--text-primary);">where routing = f(interaction_value, ai_capability, pool_capacity)</p>
          <p style="color: var(--text-primary);">across all_time_horizons(strategic, midterm, tactical, realtime)</p>
        </div>
      </div>
    </section>
  `}function T(){return`
    <div class="section-header">
      <p class="label">Architecture Philosophy</p>
      <h1>Architecting the Entire Ecosystem for an Unpredictable Future</h1>
      <p class="subtitle">
        This isn't about migrating a routing platform. It's about architecting the full ecosystem —
        capacity planning, routing, workforce management, execution, and the integration to surrounding
        systems like HR, payroll, training, and quality — so the whole system flexes with the future.
      </p>
    </div>

    <section class="section">
      <h2>Why Migrations Fail</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <span class="badge badge-rose">Anti-Pattern</span>
          <h3>Optimize for Today</h3>
          <ul style="color: var(--text-secondary); font-size: 0.88rem; list-style: none; padding: 0; margin-top: 0.75rem;">
            <li style="margin-bottom: 0.5rem;">- Hardcode current skill groups into routing logic</li>
            <li style="margin-bottom: 0.5rem;">- Build SL as the sole optimization target</li>
            <li style="margin-bottom: 0.5rem;">- Assume human-only agent pools</li>
            <li style="margin-bottom: 0.5rem;">- Lock to one vendor's decisioning model</li>
            <li style="margin-bottom: 0.5rem;">- Treat planning horizons as independent systems</li>
            <li style="margin-bottom: 0.5rem;">- No integration path to HR, training, quality, or payroll</li>
          </ul>
          <p style="margin-top: 1rem; font-size: 0.82rem; color: var(--accent-rose); font-weight: 500;">Result: Rebuild in 2-3 years when assumptions break</p>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <span class="badge badge-emerald">Pattern</span>
          <h3>Architect for Adaptability</h3>
          <ul style="color: var(--text-secondary); font-size: 0.88rem; list-style: none; padding: 0; margin-top: 0.75rem;">
            <li style="margin-bottom: 0.5rem;">+ Capability-based skill modeling (dimensional, not rigid)</li>
            <li style="margin-bottom: 0.5rem;">+ Configurable optimization objectives (Revenue x Cost x CX x EX x Effort)</li>
            <li style="margin-bottom: 0.5rem;">+ Resource-type agnostic (human OR AI as "compute instances")</li>
            <li style="margin-bottom: 0.5rem;">+ Platform-agnostic intelligence layer</li>
            <li style="margin-bottom: 0.5rem;">+ API-connected planning continuum</li>
            <li style="margin-bottom: 0.5rem;">+ Extensible integration to surrounding enterprise systems</li>
          </ul>
          <p style="margin-top: 1rem; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 500;">Result: System flexes as AI matures, pools shift, objectives evolve</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Queue Architecture: Two Approaches</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <span class="badge badge-rose">Fragile</span>
          <h3>Skills-Based Queue Structure</h3>
          <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); line-height: 1.8; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p>Queue: Credit_Cards_English_L2</p>
            <p>Queue: Collections_Early_L1</p>
            <p>Queue: Fraud_L3</p>
            <p>Queue: General_Inquiry_L1</p>
            <p style="color: var(--text-muted);">// 150+ queues, org-chart-driven</p>
            <p style="color: var(--text-muted);">// No value signal, no AI path</p>
          </div>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-rose);">
            Breaks when AI achieves parity. Requires full rewiring to change routing criteria.
          </p>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <span class="badge badge-emerald">Adaptive</span>
          <h3>Value-Aware Queue Structure</h3>
          <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); line-height: 1.8; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="color: var(--accent-cyan);">// Pool 1: Autonomous (AI-first)</p>
            <p>Queue: AA_Transactions (value: 1-3)</p>
            <p style="color: var(--accent-amber);">// Pool 2: Collaborative</p>
            <p>Queue: Collab_Billing (value: 4-6)</p>
            <p style="color: var(--accent-purple);">// Pool 3: Specialist</p>
            <p>Queue: Spec_Fraud (value: 9)</p>
          </div>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-emerald);">
            When AI matures: interactions migrate between pools via config. No rebuild.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Cloud Capabilities That Enable Adaptive Architecture</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        A cloud-based routing platform provides the foundation — but only if you leverage these six
        capabilities to build an extensible, intelligence-driven ecosystem from the start.
      </p>
      <div class="card-grid">
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 0.5rem;">01</div>
          <h3>API Extensibility</h3>
          <p>Not just custom routing — extensibility to the entire surrounding ecosystem. APIs that connect to HR systems (Workday), training platforms (LMS), quality management, payroll, and CRM. Bi-directional data flow so that routing decisions are informed by the full organizational context, and routing outcomes feed back into every connected system.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.5rem;">02</div>
          <h3>Predictive Routing</h3>
          <p>Built-in ML that matches customers to agents based on predicted outcomes. Today this optimizes for "best match." Future: train models on value-delivered outcomes — CLV impact, revenue generated, retention probability. The models evolve as the objective function evolves.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem;">03</div>
          <h3>Architect Data Model</h3>
          <p>Complex routing flows with data dips, conditional logic, and external system queries. Build flows that query customer value tier, interaction type value, and AI capability assessment BEFORE making routing decisions. The data model is the foundation for value-based routing.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">04</div>
          <h3>A/B Testing Framework</h3>
          <p>Run routing experiments: 50% of interactions route on traditional skills, 50% on value criteria. Measure outcomes. Prove value-based routing delivers better business results before full rollout. This de-risks the entire transition.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-purple); margin-bottom: 0.5rem;">05</div>
          <h3>Surrounding System Integration</h3>
          <p>The ecosystem doesn't stop at the ACD. Training systems need to know which skills are growing in demand. Quality systems need routing outcome data. HR systems need workforce reallocation signals. Payroll needs pool-based cost attribution. Every system in the orbit is a data consumer and producer.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-rose); margin-bottom: 0.5rem;">06</div>
          <h3>Intelligence Engine</h3>
          <p>People-based planning systems should become deep intelligence-gathering elements. Predicting human behavior within the knowledge workforce. Modeling for value creation — the hardest problem in traditional service centers, where assigning value to interactions has historically been impossible. Architect for value measurement today so you can optimize for value tomorrow.</p>
        </div>
      </div>
      <div class="callout callout-blue" style="margin-top: 1.5rem;">
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          <strong style="color: var(--text-primary);">The intelligence angle:</strong> Your workforce planning systems generate enormous intelligence about human behavior, customer patterns, and operational dynamics. This intelligence feeds not just routing and staffing — it feeds the entire organization's understanding of where value is created and where it's at risk.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Six Principles of Adaptive Architecture</h2>
      <div class="card-grid">
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 0.5rem;">01</div>
          <h3>API-First Integration</h3>
          <p>Every connection between engines is programmatic, bi-directional, and versioned. No manual data transfers. No export-import cycles. Systems talk to each other in real-time — including surrounding enterprise systems.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.5rem;">02</div>
          <h3>Configurable Objectives</h3>
          <p>Optimization targets are parameters, not code. Today: service level. Tomorrow: value delivery. Next year: Pareto frontier across Revenue x Cost x CX x EX x Effort. The system adapts without rebuilding.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem;">03</div>
          <h3>Platform-Agnostic Intelligence</h3>
          <p>The value classification logic and optimization objectives exist independently of execution engines. If you swap the automation platform or replace the WFM system, the intelligence persists.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">04</div>
          <h3>Resource-Type Agnostic</h3>
          <p>Treat humans and AI agents as interchangeable resource types with different characteristics. The system doesn't care what handles work — it cares about value delivered per interaction.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-purple); margin-bottom: 0.5rem;">05</div>
          <h3>Data Architecture for ML</h3>
          <p>Build data pipelines that enable model evolution. Proprietary variables, security-controlled access, flexible feature engineering. Own the intelligence — don't rent it from vendors.</p>
        </div>
        <div class="card">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-rose); margin-bottom: 0.5rem;">06</div>
          <h3>Modular by Design</h3>
          <p>Each component can be enhanced, replaced, or extended independently. No monolithic dependencies. Swap a planning engine without touching routing. Upgrade analytics without rebuilding automation.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Variance as Asset, Not Failure</h2>
      <div class="card" style="border-color: var(--accent-blue);">
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">
          Traditional WFM treats variance as planning failure — something to eliminate through better forecasting.
          Adaptive systems treat variance as a predictable operational asset to be harvested.
        </p>
        <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.85rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Traditional Response to Variance:</p>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">Queue spikes → cancel training → force adherence → manual adjustments → blame forecast</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.85rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Adaptive Response to Variance:</p>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">Lulls detected → auto-offer training → spikes detected → auto-reallocate from low-value → variance captured as development time</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1.25rem; text-align: center;">
          847 micro-gaps per day (2-5 agents idle for 30s-5min) = 42 hours of unharvested capacity.
          That's the equivalent of 0.8 FTE per 100 agents — without hiring anyone.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>The Phase Transition: L3 to L4</h2>
      <div class="card">
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
          Most organizations progress linearly from L1 through L3 — better tools, better processes,
          better automation. The jump from L3 to L4 is qualitatively different. It requires:
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); text-align: center;">
            <p style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue);">Different Math</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem;">Deterministic → Probabilistic. Point estimates → Confidence intervals. Erlang → Multi-model.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); text-align: center;">
            <p style="font-size: 0.85rem; font-weight: 600; color: var(--accent-emerald);">Different Architecture</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem;">Single-objective → Multi-objective. One pool → Three pools. SL target → Pareto frontier.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); text-align: center;">
            <p style="font-size: 0.85rem; font-weight: 600; color: var(--accent-amber);">Different Muscle</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem;">Operational excellence → Strategic intelligence. Report consumers → Analytical builders. Excel → Python.</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1.5rem; text-align: center;">
          Ecosystem architecture is the foundation layer. Getting it right during migration
          determines whether L4 is achievable — or whether you'll need to rebuild to get there.
        </p>
      </div>
    </section>

    <section class="section" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <h2>Read More</h2>
      <div class="deep-grid">
        ${s("adaptive/routing","Future-Proof Routing","Deep dive into cloud routing architecture. Queue taxonomy design. The skills→capability→value evolution. Migration phases that build toward value-based routing without rebuilding.","blue")}
      </div>
    </section>
  `}const y="https://resume-agent.tedlango.workers.dev",u="https://living-resume-api.tedlango.workers.dev";function h(r){const e=document.createElement("div");return e.textContent=r,e.innerHTML}function C(r){let e=h(r);return e=e.replace(/\*\*(.*?)\*\*/g,'<strong style="color: var(--text-primary);">$1</strong>'),e=e.replace(/\*(.*?)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,'<a href="$2" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">$1</a>'),e=e.replace(/(^|[^"'])(https?:\/\/[^\s<]+)/g,'$1<a href="$2" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">$2</a>'),e=e.replace(/\n/g,"<br>"),e}function E(){const r=document.getElementById("chat-input"),e=document.getElementById("chat-messages"),t=document.getElementById("chat-send");async function o(){const i=r.value.trim();if(!i)return;e.innerHTML+=`<div class="chat-bubble-row chat-bubble-row-user"><div class="chat-bubble chat-bubble-user">${h(i)}</div></div>`,r.value="",t.setAttribute("disabled","true"),t.textContent="...";const a="loading-"+Date.now();e.innerHTML+=`<div id="${a}" class="chat-bubble-row chat-bubble-row-agent"><div class="chat-bubble chat-bubble-agent" style="color: var(--text-muted); font-style: italic;">Thinking...</div></div>`,e.scrollTop=e.scrollHeight;try{const m=await(await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i})})).json(),b=m.response||m.reply||m.message||"No response received.",p=document.getElementById(a);p&&p.remove(),e.innerHTML+=`<div class="chat-bubble-row chat-bubble-row-agent"><div class="chat-bubble chat-bubble-agent">${C(b)}</div></div>`}catch{const n=document.getElementById(a);n&&n.remove(),e.innerHTML+='<div class="chat-bubble-row chat-bubble-row-agent"><div class="chat-bubble chat-bubble-agent" style="color: var(--accent-rose);">Unable to reach the agent. Try again in a moment.</div></div>'}t.removeAttribute("disabled"),t.textContent="Ask",e.scrollTop=e.scrollHeight}t.addEventListener("click",o),r.addEventListener("keydown",i=>{i.key==="Enter"&&o()})}function P(){return setTimeout(E,50),`
    <div class="section-header">
      <p class="label">Ted Lango</p>
      <h1>Why This Approach Works</h1>
      <p class="subtitle">
        Not theory — demonstrated through innovation, transformation delivery,
        published frameworks, and patented technology.
      </p>
    </div>

    <section class="section">
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-top: 3px solid var(--accent-blue);">
          <span class="badge badge-blue">Innovation</span>
          <h3>Patented Technology</h3>
          <p style="margin-top: 0.75rem;">Co-inventor, US Patent 12,445,559 B1: <em>"Systems and Methods for Modifying Contact Center Queue Assignments"</em></p>
          <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
            Constraint-solver engine using metaheuristic optimization (Tabu Search, Simulated Annealing)
            for real-time queue reallocation. Treats humans and AI as equivalent computing device instances.
            Configurable queue targets, fill strategies, and requirements models.
          </p>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-muted);">Filed Dec 2024 | Granted Oct 2025 | Active through 2044</p>
        </div>
        <div class="card" style="border-top: 3px solid var(--accent-emerald);">
          <span class="badge badge-emerald">Methodology</span>
          <h3>Published Framework</h3>
          <p style="margin-top: 0.75rem;"><em>"Adaptive: Building Workforce Systems for a Flexible/Unpredictable Future"</em></p>
          <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
            Complete five-level maturity model (L1-L5) from manual operations through enterprise orchestration.
            GRPIT diagnostic framework. Variance harvesting methodology. Operations Research integration.
            Tested across enterprise transformations.
          </p>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-muted);">12 chapters | 300+ pages | Battle-tested methodology</p>
        </div>
        <div class="card" style="border-top: 3px solid var(--accent-amber);">
          <span class="badge badge-amber">Transformation</span>
          <h3>Enterprise Delivery</h3>
          <p style="margin-top: 0.75rem;">Led workforce transformation at enterprise scale:</p>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); padding-left: 1rem;">
            <li style="margin-bottom: 0.4rem;">Global, highly matrixed insurance operations (10,000+ agents)</li>
            <li style="margin-bottom: 0.4rem;">Major telecom operations (multi-site, multi-channel)</li>
            <li style="margin-bottom: 0.4rem;">Systems thinking across interconnected workforce ecosystems</li>
            <li style="margin-bottom: 0.4rem;">Deep understanding of people, knowledge work, and how to optimize multi-objective across human systems</li>
          </ul>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-muted);">20+ years | Fortune 100 scale | Full lifecycle</p>
        </div>
        <div class="card" style="border-top: 3px solid var(--accent-purple);">
          <span class="badge badge-purple">Analytics</span>
          <h3>Deep Quantitative Capability</h3>
          <p style="margin-top: 0.75rem;">Not surface-level reporting — deep analytical muscle:</p>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); padding-left: 1rem;">
            <li style="margin-bottom: 0.4rem;">Python / Jupyter / custom ML pipelines</li>
            <li style="margin-bottom: 0.4rem;">Causal inference and statistical modeling</li>
            <li style="margin-bottom: 0.4rem;">Operations Research (optimization, stochastic simulation)</li>
            <li style="margin-bottom: 0.4rem;">AI-accelerated analytical engines</li>
            <li style="margin-bottom: 0.4rem;">Deterministic vs. probabilistic applied correctly — DAGs, LLMs, and statistical models each used where appropriate</li>
          </ul>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-muted);">Build the models, not just consume the reports</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Convergence</h2>
      <div class="card" style="border-color: var(--accent-blue);">
        <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.9;">
          This isn't a collection of separate capabilities. It's a convergent system:
        </p>
        <div style="margin-top: 1.5rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-blue);">
            <p style="font-size: 0.88rem; font-weight: 500;">Strategic Vision</p>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.3rem;">Value-based optimization framework. Multi-objective. Three pools. Pareto frontier.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-emerald);">
            <p style="font-size: 0.88rem; font-weight: 500;">Transformation Roadmap</p>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.3rem;">L1-L5 maturity model. GRPIT diagnostic. Phased implementation. Proven methodology.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-amber);">
            <p style="font-size: 0.88rem; font-weight: 500;">Execution Technology</p>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.3rem;">Patented constraint solver. Real-time queue optimization. Configurable objectives.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 3px solid var(--accent-purple);">
            <p style="font-size: 0.88rem; font-weight: 500;">Analytical Depth</p>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.3rem;">Custom ML pipelines. Causal inference. Stochastic simulation. AI-accelerated engines. Build, not buy.</p>
          </div>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-primary); margin-top: 1.5rem; text-align: center; font-weight: 500;">
          One person brings the vision, the roadmap, the technology, and the analytical capability.
          Day One is not a learning curve — it's a deployment.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>I Live This</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.7;">
        This isn't methodology on paper. I build the infrastructure myself — the AI agents, the APIs,
        the analytical pipelines, the interactive tools you've been exploring on this site.
        Below is a live connection to my professional profile, queryable conversationally or programmatically.
      </p>

      <div class="chat-container">
        <div class="chat-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="chat-status-dot"></div>
            <div>
              <p style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin: 0;">Ask About My Background</p>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">AI agent with full professional profile</p>
            </div>
          </div>
        </div>
        <div id="chat-messages" class="chat-messages">
          <div class="chat-bubble-row chat-bubble-row-agent">
            <div class="chat-bubble chat-bubble-agent" style="color: var(--text-muted); font-style: italic;">
              Ask me anything — experience with routing migrations, operations research methodology, transformation approach, or any aspect of my background.
            </div>
          </div>
        </div>
        <div class="chat-input-row">
          <input id="chat-input" type="text" placeholder="Ask about experience, approach, or background..."
            class="chat-input-field"
          />
          <button id="chat-send" class="chat-send-btn">Ask</button>
        </div>
      </div>
    </section>

    <section class="section" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <h2>Living Resume API</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.92rem; line-height: 1.7;">
        Want to explore how this was built? My professional profile is also available as a structured API —
        queryable programmatically by AI agents, recruiters, and integrations. This is what the future of
        talent discovery looks like.
      </p>

      <div class="card" style="border-color: var(--accent-cyan);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
          <span class="badge badge-emerald">Online</span>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Cloudflare Workers + Claude API</span>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Endpoint</p>
          <div style="padding: 0.6rem 1rem; background: var(--bg-primary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); overflow-x: auto;">
            ${u}
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Try It</p>
          <div style="padding: 0.75rem 1rem; background: var(--bg-primary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); overflow-x: auto; line-height: 1.8;">
            <p style="color: var(--text-muted);"># Query the conversational agent</p>
            <p>curl -X POST ${y} \\</p>
            <p>&nbsp;&nbsp;-H "Content-Type: application/json" \\</p>
            <p>&nbsp;&nbsp;-d '{"message": "What is Ted's approach to workforce transformation?"}'</p>
            <p style="margin-top: 0.75rem; color: var(--text-muted);"># Get structured profile data</p>
            <p>curl ${u}</p>
          </div>
        </div>

        <div>
          <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Response Format</p>
          <div style="padding: 0.75rem 1rem; background: var(--bg-primary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); overflow-x: auto; line-height: 1.8;">
            <p>{"response": "Ted has 20+ years in workforce management..."}</p>
          </div>
        </div>

        <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <p style="font-size: 0.82rem; color: var(--text-muted);">
            Built with Cloudflare Workers, Claude API, and a structured professional profile.
            The same architecture pattern used throughout this site — APIs that serve intelligence on demand.
            <a href="https://tedlango.com" target="_blank" style="color: var(--accent-cyan); text-decoration: none; margin-left: 0.25rem;">Explore more at tedlango.com →</a>
          </p>
        </div>
      </div>
    </section>
  `}function S(){return`
    ${l("ecosystem","Ecosystem","Integration Continuum")}

    <div class="section-header">
      <p class="label">Deep Dive: Connected Systems</p>
      <h1>The Integration Continuum: Capacity Planning to Real-Time Execution</h1>
      <p class="subtitle">
        Four planning horizons that should form a continuous flow of intelligence —
        but today operate as disconnected islands with manual handoffs, data gaps,
        and inconsistent objectives.
      </p>
    </div>

    <section class="section">
      <h2>The Current Reality: Four Disconnected Systems</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; text-align: center;">
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-purple); margin-bottom: 0.5rem;">STRATEGIC</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">Internal ML engine</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Quarterly/Annual</p>
          </div>
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 0.5rem;">MID-TERM</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">??? (Gap)</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Monthly</p>
          </div>
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 0.5rem;">TACTICAL</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">WFM Platform</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Weekly/Daily</p>
          </div>
          <div style="padding: 1rem;">
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-amber); margin-bottom: 0.5rem;">REAL-TIME</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">Automation + ACD</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Intervals</p>
          </div>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(244, 63, 94, 0.05); border-radius: var(--radius); text-align: center;">
          <p style="font-size: 0.85rem; color: var(--accent-rose); font-weight: 500;">Hard 90-day handoff. No API continuity. Manual data transfers. Inconsistent objectives.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>What Each Layer Needs from the Others</h2>

      <div class="flow-step">
        <span class="badge badge-purple">Strategic → Mid-Term</span>
        <h3 style="margin-top: 0.75rem;">Capacity Model Outputs</h3>
        <div style="margin-top: 0.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Core Capabilities:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">- Total demand forecast (by type, by month)</li>
              <li style="margin-bottom: 0.3rem;">- AI containment projections (maturing over time)</li>
              <li style="margin-bottom: 0.3rem;">- Headcount envelope (P50/P80/P95 scenarios)</li>
              <li style="margin-bottom: 0.3rem;">- Budget constraints and hiring pipeline capacity</li>
              <li style="margin-bottom: 0.3rem;">- Pool allocation targets (% AA / Collab / Specialist)</li>
            </ul>
          </div>
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan); margin-bottom: 0.5rem;">Expanded Capabilities to Examine:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">- API connectivity from strategic engine to downstream systems</li>
              <li style="margin-bottom: 0.3rem;">- Dynamic refresh as actuals diverge from projections</li>
              <li style="margin-bottom: 0.3rem;">- Continuous assumption validation against execution data</li>
              <li style="margin-bottom: 0.3rem;">- Value classification integration into demand models</li>
              <li style="margin-bottom: 0.3rem;">- Programmatic handoff to mid-term planning layer</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flow-connector">↓</div>

      <div class="flow-step">
        <span class="badge badge-cyan">Mid-Term → Tactical</span>
        <h3 style="margin-top: 0.75rem;">Staffing Plans and Pool Composition</h3>
        <div style="margin-top: 0.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">Core Capabilities:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">- Traffic-type to supply-type matching (3-week window)</li>
              <li style="margin-bottom: 0.3rem;">- Training pipeline requirements (skill gaps)</li>
              <li style="margin-bottom: 0.3rem;">- Hiring/attrition projections into the schedule</li>
              <li style="margin-bottom: 0.3rem;">- AI expansion/contraction signals</li>
              <li style="margin-bottom: 0.3rem;">- Queue assignment recommendations</li>
            </ul>
          </div>
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan); margin-bottom: 0.5rem;">Expanded Capabilities to Examine:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">- Integration of stochastic modeling into planning workflow</li>
              <li style="margin-bottom: 0.3rem;">- Seamless data flow between cap plan and WFM</li>
              <li style="margin-bottom: 0.3rem;">- WFM consumption of probabilistic inputs (P50/P80/P95)</li>
              <li style="margin-bottom: 0.3rem;">- Automated refresh cadence as daily actuals arrive</li>
              <li style="margin-bottom: 0.3rem;">- Continuous rolling handoff vs. periodic static handoff</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flow-connector">↓</div>

      <div class="flow-step">
        <span class="badge badge-emerald">Tactical → Real-Time</span>
        <h3 style="margin-top: 0.75rem;">Schedule to Execution</h3>
        <div style="margin-top: 0.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">What tactical provides:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">- Optimized schedules with queue assignments</li>
              <li style="margin-bottom: 0.3rem;">- Intraday demand forecast (15-min intervals)</li>
              <li style="margin-bottom: 0.3rem;">- Adherence expectations and shrinkage budgets</li>
              <li style="margin-bottom: 0.3rem;">- Overtime/VTO triggers</li>
              <li style="margin-bottom: 0.3rem;">- Baseline staffing requirements per queue</li>
            </ul>
          </div>
          <div>
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-emerald); margin-bottom: 0.5rem;">What works reasonably well:</p>
            <ul style="font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.3rem;">+ WFM → ACD integration exists (schedule publishing)</li>
              <li style="margin-bottom: 0.3rem;">+ Automation engine reads queue states in real-time</li>
              <li style="margin-bottom: 0.3rem;">+ Constraint solver has net staffing visibility</li>
              <li style="margin-bottom: 0.3rem;">- But optimization objective is SL only (not value)</li>
              <li style="margin-bottom: 0.3rem;">- No value classification in real-time decisions</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flow-connector">↓ ↑ (Feedback)</div>

      <div class="flow-step" style="border-color: var(--accent-blue);">
        <span class="badge badge-blue">Real-Time → Strategic (The Missing Loop)</span>
        <h3 style="margin-top: 0.75rem;">Execution Outcomes Back to Strategic Models</h3>
        <div style="margin-top: 0.75rem;">
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            Every day generates data that should update ALL planning horizons:
          </p>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.4rem;">- Actual AI containment rates vs. projected → update strategic model assumptions</li>
            <li style="margin-bottom: 0.4rem;">- Escalation costs observed → update value classification and routing decisions</li>
            <li style="margin-bottom: 0.4rem;">- Handle time drift → update staffing requirements across all horizons</li>
            <li style="margin-bottom: 0.4rem;">- Volume rebound signals → update demand forecasts</li>
            <li style="margin-bottom: 0.4rem;">- Employee engagement metrics → update EX dimension in optimization</li>
          </ul>
          <div class="callout callout-blue" style="margin-top: 1rem;">
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              <strong style="color: var(--text-primary);">The evergreen principle:</strong> Strategic models are never "done."
              They should be continuously updated as execution generates new evidence.
              This requires API infrastructure that doesn't exist in most organizations today.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Target Architecture: API-Connected Continuum</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card">
          <h3>Data Contracts Between Layers</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7;">
            Each layer publishes and subscribes to defined data contracts:
          </p>
          <div style="margin-top: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
            <p style="color: var(--accent-purple);">// Strategic publishes:</p>
            <p>demand_forecast.by_type.monthly</p>
            <p>headcount_envelope.p50_p80_p95</p>
            <p>pool_allocation.targets</p>
            <p style="margin-top: 0.5rem; color: var(--accent-cyan);">// Mid-term subscribes to strategic, publishes:</p>
            <p>staffing_plan.by_pool.weekly</p>
            <p>queue_composition.recommendations</p>
            <p style="margin-top: 0.5rem; color: var(--accent-emerald);">// Tactical subscribes to mid-term, publishes:</p>
            <p>schedule.by_agent.daily</p>
            <p>intraday_forecast.15min</p>
            <p style="margin-top: 0.5rem; color: var(--accent-amber);">// Real-time subscribes to tactical, publishes:</p>
            <p>execution_outcomes.per_interval</p>
            <p>reallocation_actions.log</p>
          </div>
        </div>
        <div class="card">
          <h3>Refresh Cadences</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7;">
            Each layer has a natural update rhythm — but execution data feeds back continuously:
          </p>
          <div style="margin-top: 0.75rem;">
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border);">
              <span style="font-size: 0.82rem; color: var(--text-primary);">Strategic model</span>
              <span style="font-size: 0.82rem; color: var(--text-muted);">Monthly refresh (daily data ingestion)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border);">
              <span style="font-size: 0.82rem; color: var(--text-primary);">Mid-term plan</span>
              <span style="font-size: 0.82rem; color: var(--text-muted);">Weekly refresh (rolling 90-day window)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border);">
              <span style="font-size: 0.82rem; color: var(--text-primary);">Tactical schedule</span>
              <span style="font-size: 0.82rem; color: var(--text-muted);">Daily publish (intraday updates)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0;">
              <span style="font-size: 0.82rem; color: var(--text-primary);">Real-time execution</span>
              <span style="font-size: 0.82rem; color: var(--text-muted);">Continuous (per-interval decisions)</span>
            </div>
          </div>
          <div class="callout callout-emerald" style="margin-top: 1rem;">
            <p style="font-size: 0.82rem; color: var(--text-secondary);">
              Key: The strategic model doesn't wait for quarterly reviews. It ingests daily execution data and surfaces when assumptions are drifting from reality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Stochastic Engine: Build vs. Buy</h2>
      <div class="card" style="border-color: var(--accent-amber);">
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
          At the heart of the strategic planning layer sits a stochastic simulation engine.
          This is where Monte Carlo methods, scenario modeling, and confidence intervals replace
          point estimates. The build-vs-buy decision is consequential:
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-amber); margin-bottom: 0.5rem;">Vendor (Point Solution or Platform)</p>
            <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.6;">
              Must be vetted rigorously for financial services requirements: SOC 2 compliance, banking regulatory frameworks, data residency controls. Must offer true operations research — stochastic simulation, not just deterministic forecasting. Must have an open enough framework to integrate with proprietary intelligence and internal data sources. The vendor must be enterprise-mature.
            </p>
            <p style="font-size: 0.75rem; color: var(--accent-amber); margin-top: 0.75rem; font-weight: 500;">Key question: Can they meet FS compliance AND provide OR-grade simulation with open integration?</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 0.5rem;">Internal Build</p>
            <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.6;">
              Full control over security engineering. SOC 2 and banking compliance baked in from design. Proprietary variables and internal intelligence integrated directly. Custom feature engineering. Flexible model evolution. No vendor dependency on the most strategic analytical capability.
            </p>
            <p style="font-size: 0.75rem; color: var(--accent-emerald); margin-top: 0.75rem; font-weight: 500;">Strong option: Security, flexibility, and the ability to incorporate massive internal intelligence</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1.25rem;">
          A bank generates enormous amounts of proprietary intelligence — customer behavior data, product interaction patterns,
          economic sensitivity models, regulatory constraints. This internal intelligence may ultimately dictate an internal build
          over the security engineering requirements and flexibility to incorporate variables that no external vendor can anticipate.
          The right ML team with OR expertise can build a stochastic simulation engine that is both compliant and purpose-built for the organization's unique needs.
        </p>
      </div>
    </section>
  `}function L(){return`
    ${l("ecosystem","Ecosystem","Decisioning Architecture")}

    <div class="section-header">
      <p class="label">Deep Dive: Where Intelligence Lives</p>
      <h1>Decisioning Architecture: Who Decides What, When, and Why</h1>
      <p class="subtitle">
        The most critical architectural decision in a multi-platform workforce ecosystem
        isn't which platform you choose — it's where the decisioning logic lives and how
        it evolves as the world changes.
      </p>
    </div>

    <section class="section">
      <h2>The "Should" vs. "Can" Question</h2>
      <div class="callout callout-blue">
        <p style="font-size: 1rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.75rem;">
          Most organizations are asking: "Can AI handle this interaction?"
        </p>
        <p style="font-size: 1rem; color: var(--text-secondary);">
          The forward-thinking question is: <strong style="color: var(--accent-blue);">"Should AI handle this interaction — even if it can?"</strong>
        </p>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.75rem;">
          This distinction is what separates architectures that last from architectures that need rebuilding
          in 2-3 years. Today "can" is the limiting factor. Within 18-24 months, AI will achieve parity on
          70-80% of interaction types. At that point, "can" is irrelevant — "should" is all that remains.
        </p>
      </div>

      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <h3 style="color: var(--accent-rose);">Architecture Built on "Can"</h3>
          <div style="margin-top: 1rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            <p><strong>Routing logic:</strong> IF ai_capability > threshold → route to AI</p>
            <p><strong>Problem:</strong> When AI capability crosses threshold on ALL types, the logic has no differentiator</p>
            <p><strong>Result:</strong> Everything goes to AI. No value discrimination. Escalation costs spike on high-value interactions. You rebuild.</p>
          </div>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <h3 style="color: var(--accent-emerald);">Architecture Built on "Should"</h3>
          <div style="margin-top: 1rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            <p><strong>Routing logic:</strong> GIVEN interaction_value AND ai_capability AND expected_outcome → route to optimal path</p>
            <p><strong>Advantage:</strong> When AI achieves parity, value classification still differentiates routing</p>
            <p><strong>Result:</strong> High-value interactions get human judgment (revenue protection). Low-value gets AI (cost optimization). System adapts without rewiring.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Three Layers of Decisioning</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Decisioning doesn't live in one place. It lives across three distinct layers,
        each with different time constants, different data inputs, and different optimization targets.
      </p>

      <div class="diagram">
        <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
          <!-- Layer 1: Intelligence -->
          <rect x="100" y="30" width="700" height="120" rx="8" fill="rgba(139, 92, 246, 0.06)" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="450" y="55" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="600" font-family="Inter, sans-serif">LAYER 1: INTELLIGENCE (Strategic Decisioning)</text>
          <text x="130" y="80" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Defines optimization objectives and value classification</text>
          <text x="130" y="100" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Inputs: Business strategy, revenue data, CLV models, AI maturity curves, employee engagement scores</text>
          <text x="130" y="116" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Outputs: Value taxonomy, pool assignment rules, optimization weights (Cost x CX x EX)</text>
          <text x="130" y="136" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Update frequency: Monthly / quarterly — as AI matures, interactions migrate between pools</text>

          <!-- Layer 2: Platform -->
          <rect x="100" y="180" width="700" height="140" rx="8" fill="rgba(59, 130, 246, 0.06)" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="450" y="205" text-anchor="middle" fill="#3b82f6" font-size="11" font-weight="600" font-family="Inter, sans-serif">LAYER 2: PLATFORM (Operational Decisioning)</text>

          <!-- Routing sub-box -->
          <rect x="120" y="220" width="310" height="85" rx="6" fill="#1a2235" stroke="#3b82f6" stroke-width="1"/>
          <text x="275" y="240" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="600" font-family="Inter, sans-serif">ROUTING ENGINE</text>
          <text x="135" y="258" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Decides: Where does this interaction go?</text>
          <text x="135" y="274" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Logic: Value score + AI capability → pool → resource</text>
          <text x="135" y="290" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Speed: Per-interaction (milliseconds)</text>

          <!-- Automation sub-box -->
          <rect x="470" y="220" width="310" height="85" rx="6" fill="#1a2235" stroke="#f59e0b" stroke-width="1"/>
          <text x="625" y="240" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="600" font-family="Inter, sans-serif">AUTOMATION ENGINE</text>
          <text x="485" y="258" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Decides: Should this agent move?</text>
          <text x="485" y="274" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Logic: Net staffing + value targets → reallocation</text>
          <text x="485" y="290" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Speed: Per-interval (seconds to minutes)</text>

          <!-- Layer 3: Execution -->
          <rect x="100" y="350" width="700" height="120" rx="8" fill="rgba(16, 185, 129, 0.06)" stroke="#10b981" stroke-width="1.5"/>
          <text x="450" y="375" text-anchor="middle" fill="#10b981" font-size="11" font-weight="600" font-family="Inter, sans-serif">LAYER 3: EXECUTION (Operational Reality)</text>
          <text x="130" y="400" fill="#f1f5f9" font-size="10" font-weight="500" font-family="Inter, sans-serif">Where work actually gets done — humans and AI operating in pools</text>
          <text x="130" y="420" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Pool 1 (Autonomous AI): Elastic capacity, linear cost, containment monitoring</text>
          <text x="130" y="436" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Pool 2 (Collaborative): Cognitive portfolio, human oversight of AI-assisted cases</text>
          <text x="130" y="452" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Pool 3 (Specialist Human): Protected capacity, high-value judgment work</text>

          <!-- Arrows -->
          <path d="M 450 150 L 450 180" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
          <path d="M 450 320 L 450 350" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>

          <!-- Labels on arrows -->
          <text x="470" y="168" fill="#8b5cf6" font-size="8" font-family="Inter, sans-serif">Objectives + Rules</text>
          <text x="470" y="338" fill="#3b82f6" font-size="8" font-family="Inter, sans-serif">Routing + Allocation Commands</text>

          <!-- Feedback arrow -->
          <path d="M 800 400 C 850 400, 870 250, 870 100 C 870 60, 850 50, 800 50"
                fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="885" y="225" fill="#10b981" font-size="8" font-family="Inter, sans-serif" transform="rotate(90, 885, 225)">Outcomes feed back</text>

          <defs>
            <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#64748b"/>
            </marker>
          </defs>
        </svg>
      </div>
    </section>

    <section class="section">
      <h2>Decisioning Criteria: Today vs. Tomorrow</h2>
      <div class="card">
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border);">
                <th style="text-align: left; padding: 0.75rem; color: var(--text-muted); font-weight: 500;">Criterion</th>
                <th style="text-align: left; padding: 0.75rem; color: var(--text-muted); font-weight: 500;">Today (Skills-Based)</th>
                <th style="text-align: left; padding: 0.75rem; color: var(--text-muted); font-weight: 500;">Tomorrow (Value-Based)</th>
                <th style="text-align: left; padding: 0.75rem; color: var(--text-muted); font-weight: 500;">Where It Lives</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Routing trigger</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Agent has skill X at proficiency Y</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Interaction value + AI capability + expected outcome</td>
                <td style="padding: 0.75rem;"><span class="badge badge-purple">Intelligence Layer</span></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Optimization target</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Service level (80/20)</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Pareto frontier: Cost x CX x EX</td>
                <td style="padding: 0.75rem;"><span class="badge badge-purple">Intelligence Layer</span></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Reallocation logic</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">SL dropping → move agent to queue</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Value opportunity → shift capacity to high-value pool</td>
                <td style="padding: 0.75rem;"><span class="badge badge-amber">Platform Layer</span></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Agent-vs-AI decision</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">"Can AI handle it?" (capability threshold)</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">"Should AI handle it?" (value maximization)</td>
                <td style="padding: 0.75rem;"><span class="badge badge-purple">Intelligence Layer</span></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Queue assignment</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Static skill groups, manual updates</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Dynamic pools, constraint-solver optimized</td>
                <td style="padding: 0.75rem;"><span class="badge badge-blue">Platform Layer</span></td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; color: var(--text-primary); font-weight: 500;">Success measurement</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">SL achieved, cost per contact</td>
                <td style="padding: 0.75rem; color: var(--text-secondary);">Value delivered, CES, revenue impact, employee engagement</td>
                <td style="padding: 0.75rem;"><span class="badge badge-emerald">Execution Layer</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Cloud Routing Setup: Architecting for the Future</h2>
      <div class="callout callout-amber">
        <p style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem;">
          The architecture decisions being made NOW in the routing platform determine whether value-based routing is a configuration change or a rebuild.
        </p>
      </div>

      <div class="card-grid">
        <div class="card">
          <h3>Queue Taxonomy Design</h3>
          <p style="margin-top: 0.5rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            Don't build 200 skill-based queues that mirror today's org chart. Build a taxonomy with value dimensions baked in:
          </p>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.4rem;">- Interaction type (what is this about?)</li>
            <li style="margin-bottom: 0.4rem;">- Value tier (how much is this worth to the business?)</li>
            <li style="margin-bottom: 0.4rem;">- Complexity class (how hard is this?)</li>
            <li style="margin-bottom: 0.4rem;">- Resource type eligibility (human, AI, collaborative)</li>
            <li style="margin-bottom: 0.4rem;">- Pool assignment (which operational pool handles this?)</li>
          </ul>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-emerald);">
            This taxonomy becomes the foundation for value-based routing without queue restructuring.
          </p>
        </div>
        <div class="card">
          <h3>Routing Logic as Configuration</h3>
          <p style="margin-top: 0.5rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            Cloud routing platforms support custom routing algorithms via microservices architecture. The key design principle:
          </p>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.4rem;">- Routing rules reference value scores, not just skill IDs</li>
            <li style="margin-bottom: 0.4rem;">- Customer data integration includes CLV and interaction history</li>
            <li style="margin-bottom: 0.4rem;">- Predictive routing models trained on outcome data (not just SL)</li>
            <li style="margin-bottom: 0.4rem;">- A/B testing framework for routing strategy experiments</li>
            <li style="margin-bottom: 0.4rem;">- API hooks for external intelligence layer to inject objectives</li>
          </ul>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-emerald);">
            When "should" replaces "can" as the routing question, it's a parameter change — not a platform migration.
          </p>
        </div>
        <div class="card">
          <h3>Capability-Based Skill Modeling</h3>
          <p style="margin-top: 0.5rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            Replace rigid skill groups with dimensional capability modeling:
          </p>
          <div style="margin-top: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
            <p style="color: var(--text-muted);">// Old: Rigid skill assignment</p>
            <p>"Credit_Cards_L3" → agent assigned or not</p>
            <p style="margin-top: 0.75rem; color: var(--text-muted);">// New: Dimensional capability</p>
            <p>Product(Credit): Knowledge(Expert)</p>
            <p>Problem(Financial): Complexity(Advanced)</p>
            <p>ValueTier: High | ResourceType: Human+AI</p>
          </div>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-emerald);">
            Reduces skill group proliferation. Enables intelligent relaxation. Supports AI capability scoring on same dimensions.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Overlap Resolution Pattern</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        When both the routing engine and automation engine can make optimization-based decisions,
        the architecture needs clear domain boundaries — not competition between platforms.
      </p>

      <div class="card">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 1.5rem; align-items: start;">
          <div>
            <h3 style="color: var(--accent-blue); font-size: 0.95rem;">Routing Engine Domain</h3>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">New interactions arriving</p>
            <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.5rem;">Which pool receives this interaction?</li>
              <li style="margin-bottom: 0.5rem;">Which resource type (human/AI/collab)?</li>
              <li style="margin-bottom: 0.5rem;">Which specific agent (if human)?</li>
              <li style="margin-bottom: 0.5rem;">What's the expected value of this path?</li>
              <li style="margin-bottom: 0.5rem;">Customer context + history informs choice</li>
            </ul>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding-top: 2rem;">
            <div style="width: 1px; height: 120px; background: var(--border);"></div>
            <span style="font-size: 0.75rem; color: var(--text-muted); writing-mode: vertical-lr;">SHARED STATE</span>
            <div style="width: 1px; height: 120px; background: var(--border);"></div>
          </div>
          <div>
            <h3 style="color: var(--accent-amber); font-size: 0.95rem;">Automation Engine Domain</h3>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">Existing resources in pools</p>
            <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.5rem;">Should this agent move to another pool?</li>
              <li style="margin-bottom: 0.5rem;">Is net staffing balanced across pools?</li>
              <li style="margin-bottom: 0.5rem;">Are value targets being met per queue?</li>
              <li style="margin-bottom: 0.5rem;">Cognitive load within acceptable range?</li>
              <li style="margin-bottom: 0.5rem;">Constraint solver optimizes allocation</li>
            </ul>
          </div>
        </div>

        <div class="callout callout-rose" style="margin-top: 1.5rem;">
          <p style="font-size: 0.88rem; color: var(--text-secondary);">
            <strong style="color: var(--text-primary);">Design principle:</strong> Both engines consume the SAME value-based objectives
            from the intelligence layer. They don't compete — they operate on different questions
            (where does new work go vs. where should existing capacity shift) governed by the same optimization framework.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Evolution Path: Skills → Capability → Value</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;">
          <div style="padding: 1.25rem; border-right: 1px solid var(--border);">
            <span class="badge badge-rose">Phase 1 (Today)</span>
            <h3 style="margin-top: 0.75rem;">Skills-Based</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
              Agent has Skill X → Route to Queue X. Binary assignment. Rigid groups. No value awareness. This is what typically gets migrated to cloud as-is.
            </p>
          </div>
          <div style="padding: 1.25rem; border-right: 1px solid var(--border);">
            <span class="badge badge-amber">Phase 2 (6-18mo)</span>
            <h3 style="margin-top: 0.75rem;">Capability + Context</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
              Dimensional capabilities + customer context inform routing. Predictive models trained on outcomes. AI begins handling Pool 1 work. Value taxonomy built.
            </p>
          </div>
          <div style="padding: 1.25rem;">
            <span class="badge badge-emerald">Phase 3 (18-36mo)</span>
            <h3 style="margin-top: 0.75rem;">Value-Optimized</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
              Full value-based routing. "Should" > "Can." Three pools operating with different math. Multi-objective optimization live. AI handles majority of volume by value design, not default.
            </p>
          </div>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem; text-align: center;">
        The architecture built in Phase 1 must support Phases 2 and 3 without rebuilding.
        This is the meaning of "adaptive architecture" — build the taxonomy and API hooks now,
        even if you route on skills today.
      </p>
    </section>
  `}function M(){return`
    ${l("optimization","Optimization","Value as Revenue")}

    <div class="section-header">
      <p class="label">Deep Dive: The Revenue Equation</p>
      <h1>From Cost Minimization to Revenue Maximization</h1>
      <p class="subtitle">
        A bank wants to maximize revenue at optimal cost — not minimize cost at target service level.
        The value framework shifts the entire optimization equation from expense management
        to revenue engineering.
      </p>
    </div>

    <section class="section">
      <h2>The Fundamental Shift in Objective Function</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div>
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-rose); margin-bottom: 0.75rem;">LEGACY OBJECTIVE</p>
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.8;">
              <p style="color: var(--accent-rose);">minimize(total_labor_cost)</p>
              <p style="color: var(--text-secondary);">subject_to:</p>
              <p style="color: var(--text-secondary);">  service_level >= 80%</p>
              <p style="color: var(--text-secondary);">  ASA <= 30s</p>
              <p style="color: var(--text-muted);">  // That's the entire model</p>
              <p style="color: var(--text-muted);">  // Customer value? Not modeled</p>
              <p style="color: var(--text-muted);">  // Revenue impact? Invisible</p>
              <p style="color: var(--text-muted);">  // Employee growth? Externality</p>
            </div>
          </div>
          <div>
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 0.75rem;">VALUE OBJECTIVE</p>
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.8;">
              <p style="color: var(--accent-emerald);">maximize(value_delivered)</p>
              <p style="color: var(--text-secondary);">where value = f(</p>
              <p style="color: var(--text-secondary);">  revenue_protected,</p>
              <p style="color: var(--text-secondary);">  revenue_generated,</p>
              <p style="color: var(--text-secondary);">  customer_lifetime_value_impact,</p>
              <p style="color: var(--text-secondary);">  cost_efficiency</p>
              <p style="color: var(--text-secondary);">)</p>
              <p style="color: var(--text-secondary);">at optimal(cost_per_value_unit)</p>
              <p style="color: var(--text-secondary);">preserving(employee_experience)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Value Classification: What Is Each Interaction Worth?</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Financial services interactions carry dramatically different business value.
        Treating them all as "contacts to handle at minimum cost" leaves revenue on the table
        and misallocates the most expensive resource (experienced humans) to the lowest-value work.
      </p>

      <div class="card">
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border);">
                <th style="text-align: left; padding: 0.6rem; color: var(--text-muted);">Interaction Type</th>
                <th style="text-align: center; padding: 0.6rem; color: var(--text-muted);">Value Score</th>
                <th style="text-align: center; padding: 0.6rem; color: var(--text-muted);">Revenue Impact</th>
                <th style="text-align: center; padding: 0.6rem; color: var(--text-muted);">Optimal Resource</th>
                <th style="text-align: left; padding: 0.6rem; color: var(--text-muted);">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Balance / Payment Status</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-cyan">1</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--text-muted);">None</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-cyan);">AI</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Pure information retrieval — zero human value-add</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Payment Processing</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-cyan">2</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--text-muted);">Minimal</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-cyan);">AI</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Transaction execution — AI achieves 88%+ containment</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Billing Inquiry</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-amber">4</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--text-secondary);">Indirect (retention)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-amber);">Collaborative</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Confusion = churn risk. Human review catches nuance AI misses</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Early Collections</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-amber">5</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--text-secondary);">Direct (recovery)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-amber);">Collaborative</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">AI handles arrangement setup; human negotiates exceptions</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Credit Application Support</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-amber">6</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-emerald);">Direct (new revenue)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-amber);">Collaborative</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Every completed application = revenue. Human guidance increases completion rate</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Billing Dispute</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-purple">7</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-emerald);">Direct (retention)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-amber);">Collaborative</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Resolution quality determines whether customer stays or goes</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Late-Stage Collections</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-purple">8</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-emerald);">Direct (recovery)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-purple);">Specialist</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Empathy + judgment = higher recovery rates and regulatory compliance</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 0.6rem; color: var(--text-primary);">Fraud Investigation</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-purple">9</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-emerald);">Direct (loss prevention)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-purple);">Specialist</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Every fraud caught = direct P&L protection. Human judgment essential</td>
              </tr>
              <tr>
                <td style="padding: 0.6rem; color: var(--text-primary);">Regulatory Complaint</td>
                <td style="padding: 0.6rem; text-align: center;"><span class="badge badge-purple">10</span></td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-rose);">Risk (regulatory penalty)</td>
                <td style="padding: 0.6rem; text-align: center; color: var(--accent-purple);">Specialist</td>
                <td style="padding: 0.6rem; color: var(--text-secondary);">Mishandled = millions in fines. Zero tolerance for AI error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Revenue Math</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr 1fr;">
        <div class="card" style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700; color: var(--accent-blue);">$0.20</div>
          <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">Cost: AI handles balance check</p>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Value created: $0</p>
        </div>
        <div class="card" style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700; color: var(--accent-amber);">$3.50</div>
          <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">Cost: Specialist handles dispute</p>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Value protected: $12,000 CLV</p>
        </div>
        <div class="card" style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700; color: var(--accent-emerald);">3,400x</div>
          <p style="font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem;">ROI difference</p>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Value per dollar invested</p>
        </div>
      </div>
      <div class="callout callout-emerald" style="margin-top: 1.5rem;">
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
          The cost-minimization model would route BOTH to the cheapest option.
          The value model routes each to the path that maximizes value per dollar.
          Same budget — dramatically different business outcomes.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Connecting to the Value-Based Planning Framework</h2>
      <div class="card" style="border-color: var(--accent-blue);">
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
          This revenue-oriented thinking is the core of the Value Planning Model — a comprehensive
          framework for shifting organizations from cost-based to value-based workforce optimization.
        </p>
        <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
          <p style="font-size: 0.85rem; color: var(--text-primary); font-weight: 500; margin-bottom: 0.75rem;">The Five-Step VPM Process:</p>
          <ol style="font-size: 0.85rem; color: var(--text-secondary); padding-left: 1.25rem; line-height: 2;">
            <li><strong style="color: var(--text-primary);">Total Workload</strong> — What's coming in across all channels</li>
            <li><strong style="color: var(--text-primary);">Value Classification</strong> — What each interaction is worth (the taxonomy above)</li>
            <li><strong style="color: var(--text-primary);">Routing Model</strong> — AI-led, collaborative, or specialist by value tier</li>
            <li><strong style="color: var(--text-primary);">Staff by Pool</strong> — Different math for each pool (elastic AI, cognitive portfolio, Erlang)</li>
            <li><strong style="color: var(--text-primary);">Value-Optimized Output</strong> — Staffing tied to value delivery, measured on the Pareto frontier</li>
          </ol>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 1rem;">
          Full framework available at the Value Planning Model interactive site — includes mathematical foundations,
          financial services application, measurement methodology, and deployment roadmap.
        </p>
      </div>
    </section>
  `}function R(){return`
    ${l("adaptive","Adaptive","Future-Proof Routing")}

    <div class="section-header">
      <p class="label">Deep Dive: Cloud Routing Migration</p>
      <h1>Architecting Cloud Routing for the Next Decade</h1>
      <p class="subtitle">
        A multi-year cloud routing migration is the foundation layer for everything that follows.
        Get it right, and value-based routing is a configuration change. Get it wrong, and you rebuild in three years.
      </p>
    </div>

    <section class="section">
      <h2>The Forward-Thinking Logic</h2>
      <div class="callout callout-blue">
        <p style="font-size: 1rem; color: var(--text-primary); font-weight: 500; margin-bottom: 0.75rem;">
          Most routing architectures ask: "Can AI handle this?"
        </p>
        <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Within 18-24 months, AI will achieve functional parity on 70-80% of interaction types.
          At that point, "can" is a useless question — everything can be handled by AI.
        </p>
        <p style="font-size: 1rem; color: var(--accent-blue); font-weight: 500;">
          The question that endures: "Should AI handle this — or does a human create more value here?"
        </p>
      </div>

      <div class="card" style="margin-top: 1.5rem;">
        <h3>The Implication for Queue Architecture</h3>
        <p style="margin-top: 0.75rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8;">
          If you build your cloud routing queue structure around skills ("who CAN handle this?"),
          the entire taxonomy breaks when AI CAN handle everything. You'd need to rebuild queues,
          rework routing rules, retrain the system, and migrate agents — mid-flight.
        </p>
        <p style="margin-top: 0.75rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8;">
          If you build around value ("who SHOULD handle this for maximum business value?"),
          the taxonomy persists even as AI capability grows. Interactions simply migrate between pools
          as AI matures — a configuration change, not an architecture change.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Queue Architecture: Two Approaches</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <span class="badge badge-rose">Fragile</span>
          <h3 style="margin-top: 0.75rem;">Skills-Based Queue Structure</h3>
          <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); line-height: 1.8; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p>Queue: Credit_Cards_English_L2</p>
            <p>Queue: Credit_Cards_Spanish_L3</p>
            <p>Queue: Collections_Early_L1</p>
            <p>Queue: Collections_Late_L3</p>
            <p>Queue: Fraud_L3</p>
            <p>Queue: General_Inquiry_L1</p>
            <p style="color: var(--text-muted);">// 150+ queues, rigid, org-chart-driven</p>
            <p style="color: var(--text-muted);">// Adding AI means: new queues? skills on bots?</p>
            <p style="color: var(--text-muted);">// Changing routing = rewiring the whole system</p>
          </div>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-rose);">
            Breaks when AI achieves parity. No value signal. Requires rebuild to shift routing criteria.
          </p>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <span class="badge badge-emerald">Adaptive</span>
          <h3 style="margin-top: 0.75rem;">Value-Aware Queue Structure</h3>
          <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); line-height: 1.8; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="color: var(--accent-emerald);">// Pool 1: Autonomous (AI-first)</p>
            <p>Queue: AA_Transactions (value: 1-3)</p>
            <p>Queue: AA_Information (value: 1-2)</p>
            <p style="margin-top: 0.5rem; color: var(--accent-amber);">// Pool 2: Collaborative (human + AI)</p>
            <p>Queue: Collab_Billing (value: 4-6)</p>
            <p>Queue: Collab_Collections (value: 5-7)</p>
            <p>Queue: Collab_Applications (value: 5-7)</p>
            <p style="margin-top: 0.5rem; color: var(--accent-purple);">// Pool 3: Specialist (human-led)</p>
            <p>Queue: Spec_Fraud (value: 9)</p>
            <p>Queue: Spec_Regulatory (value: 10)</p>
            <p>Queue: Spec_Hardship (value: 8)</p>
          </div>
          <p style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--accent-emerald);">
            When AI matures: interactions migrate between pools via config. Taxonomy persists. No rebuild.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Cloud Platform Capabilities That Enable This</h2>
      <div class="card-grid">
        <div class="card">
          <h3>API-First Custom Routing</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Modern cloud routing platforms expose routing decisions via APIs. Custom algorithms can be injected alongside
            native routing logic. This means an external intelligence layer can feed value scores into
            routing decisions without replacing the native engine.
          </p>
          <p style="margin-top: 0.5rem; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 500;">
            → Design hook: External data integration API that accepts value classification per interaction
          </p>
        </div>
        <div class="card">
          <h3>Predictive Routing (ML-Native)</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Built-in machine learning matches customers to agents based on predicted outcomes.
            Today this optimizes for "best match." Future: train models on value-delivered outcomes
            (CLV impact, revenue generated, retention probability) — not just handle time or CSAT.
          </p>
          <p style="margin-top: 0.5rem; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 500;">
            → Design hook: Outcome data pipeline that feeds value metrics back into ML training
          </p>
        </div>
        <div class="card">
          <h3>Architect Data Model</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Cloud routing platforms allow complex routing flows with data dips, conditional logic, and
            external system queries. Build flows that query customer value tier, interaction type value,
            and AI capability assessment BEFORE making routing decisions.
          </p>
          <p style="margin-top: 0.5rem; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 500;">
            → Design hook: Data dip to value classification service at flow entry point
          </p>
        </div>
        <div class="card">
          <h3>A/B Testing Framework</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Run routing experiments: 50% of interactions route on traditional skills, 50% on value criteria.
            Measure outcomes. Prove value-based routing delivers better business results before full rollout.
          </p>
          <p style="margin-top: 0.5rem; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 500;">
            → Design hook: Split routing with outcome tracking from day one
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Migration Phases: Skills Today, Value Tomorrow</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;">
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <span class="badge badge-rose">Phase 1</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Migrate As-Is</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Lift current routing to cloud platform. Skills-based. Validate operations. Establish baseline.
            </p>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Months 1-6</p>
          </div>
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <span class="badge badge-amber">Phase 2</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Instrument + Classify</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Build value taxonomy. Tag interactions. Collect outcome data. Train predictive models on value metrics.
            </p>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Months 6-12</p>
          </div>
          <div style="padding: 1rem; border-right: 1px solid var(--border);">
            <span class="badge badge-emerald">Phase 3</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Value-Aware Routing</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Introduce value scores into routing logic. A/B test. Route high-value interactions to specialists. Measure ROI.
            </p>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Months 12-18</p>
          </div>
          <div style="padding: 1rem;">
            <span class="badge badge-purple">Phase 4</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Full Value Optimization</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Three pools operating. Human-vs-AI decisioning live. Multi-objective optimization. Continuous learning.
            </p>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Months 18-36</p>
          </div>
        </div>
        <div class="callout callout-blue" style="margin-top: 1rem;">
          <p style="font-size: 0.85rem; color: var(--text-secondary);">
            <strong style="color: var(--text-primary);">Critical principle:</strong> Phase 1 architecture must support Phases 2-4 without rebuilding.
            Build the value taxonomy hooks, data integration points, and API connections in Phase 1 —
            even if you route purely on skills initially. The cost of including them now is minimal.
            The cost of adding them later is a second migration.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>What "Getting It Right" Looks Like</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card">
          <h3>In the Queue Taxonomy</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- Queues organized by value pool, not org chart</li>
            <li>- Each queue has value tier metadata</li>
            <li>- Resource type eligibility (human/AI/both) per queue</li>
            <li>- Flexible queue membership (agents move between pools)</li>
            <li>- Queue taxonomy supports interaction migration as AI matures</li>
          </ul>
        </div>
        <div class="card">
          <h3>In the Routing Logic</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- Value score as routing criterion (even if weight = 0 initially)</li>
            <li>- Customer CLV accessible in routing decisions</li>
            <li>- AI capability score per interaction type (updateable)</li>
            <li>- Outcome tracking per routing path (for ML training)</li>
            <li>- Configurable objective weights (not hardcoded SL-only)</li>
          </ul>
        </div>
        <div class="card">
          <h3>In the Data Architecture</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- Real-time customer data accessible at routing decision point</li>
            <li>- Interaction outcome data captured and fed back</li>
            <li>- Value classification service queryable via API</li>
            <li>- Escalation tracking (AI → human) with cost attribution</li>
            <li>- Revenue/retention outcomes linked to routing paths</li>
          </ul>
        </div>
        <div class="card">
          <h3>In the Integration Layer</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- Bi-directional API with automation engine</li>
            <li>- Shared state: both engines see current pool staffing</li>
            <li>- WFM integration publishes value-aware schedules</li>
            <li>- Analytics receives routing decision logs + outcomes</li>
            <li>- Strategic planning consumes execution data daily</li>
          </ul>
        </div>
      </div>
    </section>
  `}function D(){return`
    ${l("horizons","Time Horizons","Handoff Architecture")}

    <div class="section-header">
      <p class="label">Deep Dive: The 90-Day Gap</p>
      <h1>Closing the Handoff Between Strategic and Tactical Planning</h1>
      <p class="subtitle">
        The most expensive gap in workforce management isn't a technology gap —
        it's the data continuity gap between long-term capacity planning and short-term execution.
        Each day generates intelligence that never flows back.
      </p>
    </div>

    <section class="section">
      <h2>Anatomy of the 90-Day Gap</h2>
      <div class="card">
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
          In most organizations, strategic capacity planning happens in a separate system, on a quarterly cadence,
          producing static outputs (headcount numbers, budget allocations) that get "handed off" to the WFM team.
          The WFM team then builds their own forecasts from scratch — ignoring the strategic model's assumptions,
          using different data sources, and optimizing for different objectives.
        </p>
        <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 0.5rem; align-items: center; text-align: center;">
          <div style="padding: 1rem; background: rgba(139, 92, 246, 0.08); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-purple);">STRATEGIC</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Internal ML engine</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Quarterly refresh</p>
          </div>
          <div style="padding: 0.5rem; color: var(--accent-rose); font-size: 1.5rem; font-weight: 700;">⚡</div>
          <div style="padding: 1rem; background: rgba(244, 63, 94, 0.08); border-radius: var(--radius); border: 1px dashed var(--accent-rose);">
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-rose);">THE GAP</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Manual spreadsheet</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Static handoff</p>
          </div>
          <div style="padding: 0.5rem; color: var(--accent-rose); font-size: 1.5rem; font-weight: 700;">⚡</div>
          <div style="padding: 1rem; background: rgba(16, 185, 129, 0.08); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 600; color: var(--accent-emerald);">TACTICAL</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">WFM platform</p>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Daily execution</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>What Gets Lost in the Handoff</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card">
          <h3 style="color: var(--accent-rose);">Strategic Assumptions That Don't Transfer</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- AI containment rate projections (optimistic vs. actual)</li>
            <li>- Volume rebound expectations (Jevons effect modeled or not)</li>
            <li>- Complexity concentration factors (AHT drift assumptions)</li>
            <li>- Pool migration timeline (when interactions shift between pools)</li>
            <li>- Confidence intervals (P50 vs. P95 — which did tactical get?)</li>
          </ul>
        </div>
        <div class="card">
          <h3 style="color: var(--accent-rose);">Execution Intelligence That Never Flows Back</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0; line-height: 1.8;">
            <li>- Actual containment rates vs. projected (is AI ahead or behind?)</li>
            <li>- Escalation costs observed (is the cascade tax real?)</li>
            <li>- Handle time drift by interaction type (complexity concentration)</li>
            <li>- Volume patterns diverging from forecast (demand signals)</li>
            <li>- Agent capability development (are skills growing as planned?)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Target State: The Continuous Planning Loop</h2>
      <div class="diagram">
        <svg viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg">
          <!-- Strategic -->
          <rect x="50" y="50" width="200" height="100" rx="8" fill="#1a2235" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="150" y="75" text-anchor="middle" fill="#8b5cf6" font-size="10" font-weight="600" font-family="Inter, sans-serif">STRATEGIC ENGINE</text>
          <text x="70" y="100" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">ML-based demand model</text>
          <text x="70" y="116" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Stochastic simulation</text>
          <text x="70" y="132" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">P50/P80/P95 envelopes</text>

          <!-- Mid-Term -->
          <rect x="350" y="50" width="200" height="100" rx="8" fill="#1a2235" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="450" y="75" text-anchor="middle" fill="#06b6d4" font-size="10" font-weight="600" font-family="Inter, sans-serif">MID-TERM BRIDGE</text>
          <text x="370" y="100" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Rolling 90-day window</text>
          <text x="370" y="116" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Traffic-to-pool matching</text>
          <text x="370" y="132" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Weekly refresh from actuals</text>

          <!-- Tactical -->
          <rect x="650" y="50" width="200" height="100" rx="8" fill="#1a2235" stroke="#10b981" stroke-width="1.5"/>
          <text x="750" y="75" text-anchor="middle" fill="#10b981" font-size="10" font-weight="600" font-family="Inter, sans-serif">TACTICAL / WFM</text>
          <text x="670" y="100" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Demand → Schedule</text>
          <text x="670" y="116" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Intraday management</text>
          <text x="670" y="132" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Real-time execution</text>

          <!-- Forward flow -->
          <line x1="250" y1="100" x2="350" y2="100" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bluearrow)"/>
          <line x1="550" y1="100" x2="650" y2="100" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bluearrow)"/>

          <!-- API labels -->
          <text x="300" y="88" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="500" font-family="Inter, sans-serif">API</text>
          <text x="600" y="88" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="500" font-family="Inter, sans-serif">API</text>

          <!-- Feedback loop -->
          <path d="M 750 150 L 750 220 L 150 220 L 150 150" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#greenarrow)"/>
          <text x="450" y="240" text-anchor="middle" fill="#10b981" font-size="9" font-weight="500" font-family="Inter, sans-serif">DAILY ACTUALS FLOW BACK — Assumptions validated or flagged</text>

          <!-- Data bus -->
          <rect x="50" y="270" width="800" height="50" rx="6" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="450" y="295" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="500" font-family="Inter, sans-serif">SHARED DATA BUS: Common data model, event-driven updates, version-controlled assumptions</text>
          <text x="450" y="311" text-anchor="middle" fill="#64748b" font-size="8" font-family="Inter, sans-serif">Every layer publishes outcomes and subscribes to upstream changes</text>

          <defs>
            <marker id="bluearrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#3b82f6"/>
            </marker>
            <marker id="greenarrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#10b981"/>
            </marker>
          </defs>
        </svg>
      </div>
    </section>

    <section class="section">
      <h2>The Mid-Term Bridge: What's Missing Today</h2>
      <div class="card" style="border-color: var(--accent-cyan);">
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
          The mid-term bridge is the most under-invested layer in workforce planning.
          It's where strategic headcount decisions become operational staffing realities.
          Most organizations handle this with spreadsheets and meetings.
        </p>
        <h3 style="margin-top: 1rem;">What the Mid-Term Bridge Should Do:</h3>
        <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan);">Strategic Reallocation Decisions</p>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">
              "Over the next 3 weeks, shift billing dispute traffic from Pool 2 (collaborative) to Pool 3 (specialist) because escalation costs are exceeding threshold."
            </p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan);">Training Pipeline Signals</p>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">
              "AI containment on billing inquiries reached 70% — start cross-training 15 billing agents toward collections specialist role (Pool 3 need in 6 weeks)."
            </p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan);">AI Scope Adjustment</p>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">
              "Payment processing AI containment hit 92% with 3% escalation rate — expand AI scope to include payment arrangement setup (currently collaborative)."
            </p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <p style="font-size: 0.82rem; font-weight: 500; color: var(--accent-cyan);">Assumption Validation</p>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">
              "Strategic model assumed 50% AI containment by Q3 — actuals show 38%. Adjusting headcount envelope upward by 12 FTE. Flagging for strategic review."
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>API Design Principles for the Continuum</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Event-Driven Updates</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Don't poll for changes. Publish events when assumptions are violated.
            "AI containment dropped below forecast by >5% for 3 consecutive days" → triggers mid-term re-plan automatically.
          </p>
        </div>
        <div class="card">
          <h3>Version-Controlled Assumptions</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Every planning layer should know which version of strategic assumptions it's working from.
            When assumptions update, downstream plans are flagged for refresh — not silently stale.
          </p>
        </div>
        <div class="card">
          <h3>Common Data Model</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            "Interaction type" means the same thing across all layers. "Value score" is computed once and consumed everywhere. No translation layers that introduce drift.
          </p>
        </div>
        <div class="card">
          <h3>Confidence Propagation</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Strategic publishes P50/P80/P95. Mid-term narrows based on recent actuals. Tactical gets a specific target with explicit confidence. Everyone knows the uncertainty.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Implementation Approach</h2>
      <div class="card">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <span class="badge badge-blue">Phase 1</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Instrument the Gap</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Document current handoff. Identify what data exists vs. what's needed.
              Build lightweight API between strategic engine outputs and WFM inputs.
              Start capturing daily actuals in structured format.
            </p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <span class="badge badge-amber">Phase 2</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Build the Bridge</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Create mid-term planning capability (rolling 90-day, weekly refresh).
              Connect to strategic model assumptions. Implement assumption-validation alerts.
              Start making strategic reallocation decisions with data backing.
            </p>
          </div>
          <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <span class="badge badge-emerald">Phase 3</span>
            <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Close the Loop</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Full feedback loop operational. Daily actuals update all horizons.
              Confidence propagation live. Event-driven re-planning.
              Single source of truth for objectives across all layers.
            </p>
          </div>
        </div>
      </div>
    </section>
  `}function O(){return`
    ${l("optimization","Optimization","Culture as Competitive Advantage")}

    <div class="section-header">
      <p class="label">Deep Dive: The Employee Experience Dimension</p>
      <h1>When #1 Workplace Meets Cost Optimization</h1>
      <p class="subtitle">
        Being named the top workplace in America creates a unique strategic tension:
        How do you optimize cost without sacrificing the culture that earned that recognition?
        The answer isn't a tradeoff — it's a different optimization model entirely.
      </p>
    </div>

    <section class="section">
      <h2>The Strategic Tension</h2>
      <div class="card" style="border-color: var(--accent-amber);">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: center;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-emerald);">#1</div>
            <p style="font-size: 0.9rem; font-weight: 500; margin-top: 0.25rem;">Best Place to Work</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Fortune ranking — multiyear investment to achieve</p>
          </div>
          <div style="font-size: 1.5rem; color: var(--text-muted);">vs.</div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-rose);">?</div>
            <p style="font-size: 0.9rem; font-weight: 500; margin-top: 0.25rem;">Cost Optimization</p>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Pressure to reduce headcount as AI scales</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <p style="font-size: 0.92rem; color: var(--text-secondary); text-align: center; line-height: 1.8;">
            Low attrition is a strength — but it raises a genuine question:
            <strong style="color: var(--text-primary);">Is the organization truly optimizing cost,
            or is it delivering excellent service at premium cost?</strong>
            The value-based model resolves this tension by reframing the question entirely.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Wrong Frame: Cost vs. Culture</h2>
      <div class="card-grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="border-color: var(--accent-rose);">
          <span class="badge badge-rose">Old Thinking</span>
          <h3 style="margin-top: 0.75rem;">Cost Reduction = Headcount Reduction</h3>
          <p style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            "AI handles 40% → reduce 40% of staff → costs drop → culture takes a hit but we hit our numbers."
          </p>
          <ul style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.4rem;">- Attrition spikes from survivors' guilt and fear</li>
            <li style="margin-bottom: 0.4rem;">- Remaining work is harder (complexity concentration)</li>
            <li style="margin-bottom: 0.4rem;">- Fortune ranking drops — recruiting cost increases</li>
            <li style="margin-bottom: 0.4rem;">- Institutional knowledge walks out the door</li>
            <li style="margin-bottom: 0.4rem;">- Short-term savings, long-term value destruction</li>
          </ul>
        </div>
        <div class="card" style="border-color: var(--accent-emerald);">
          <span class="badge badge-emerald">New Thinking</span>
          <h3 style="margin-top: 0.75rem;">Value Optimization = Role Elevation</h3>
          <p style="margin-top: 0.75rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
            "AI absorbs low-value work → humans shift to high-value work → cost per value unit drops → culture strengthens because work is more meaningful."
          </p>
          <ul style="margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.4rem;">+ Agents doing more meaningful, challenging work</li>
            <li style="margin-bottom: 0.4rem;">+ Career paths toward specialist/collaborative roles</li>
            <li style="margin-bottom: 0.4rem;">+ Lower attrition → lower recruiting/training costs</li>
            <li style="margin-bottom: 0.4rem;">+ Fortune ranking maintained or improved</li>
            <li style="margin-bottom: 0.4rem;">+ Cost optimized through value delivery, not headcount cuts</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Service-Profit Chain: Why Culture = Revenue</h2>
      <div class="card">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
          This isn't sentiment — it's empirically validated causal linkage (Heskett et al., 1994; validated by meta-analysis 2022):
        </p>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; justify-content: center; padding: 1rem;">
          <div style="padding: 0.5rem 0.75rem; background: rgba(139, 92, 246, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-purple);">Internal Service Quality</div>
          <span style="color: var(--text-muted);">→</span>
          <div style="padding: 0.5rem 0.75rem; background: rgba(59, 130, 246, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-blue);">Employee Satisfaction</div>
          <span style="color: var(--text-muted);">→</span>
          <div style="padding: 0.5rem 0.75rem; background: rgba(6, 182, 212, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-cyan);">Employee Loyalty</div>
          <span style="color: var(--text-muted);">→</span>
          <div style="padding: 0.5rem 0.75rem; background: rgba(16, 185, 129, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-emerald);">Productivity</div>
          <span style="color: var(--text-muted);">→</span>
          <div style="padding: 0.5rem 0.75rem; background: rgba(245, 158, 11, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-amber);">Customer Value</div>
          <span style="color: var(--text-muted);">→</span>
          <div style="padding: 0.5rem 0.75rem; background: rgba(244, 63, 94, 0.1); border-radius: var(--radius); font-size: 0.8rem; font-weight: 500; color: var(--accent-rose);">Revenue Growth</div>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius);">
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7;">
            <strong style="color: var(--text-primary);">Key evidence:</strong>
            6-12 month lag between employee satisfaction changes and customer satisfaction impact.
            Organizations in top quartile of employee engagement show 23% higher profitability (Gallup).
            The #1 workplace ranking isn't just a recruiting tool — it's a leading indicator of revenue performance.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Low Attrition as Strategic Asset (Not Cost Problem)</h2>
      <div class="callout callout-blue">
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.8;">
          Low attrition means institutional knowledge retention, lower recruiting costs, lower training costs,
          and a workforce that knows the business deeply. The question isn't "is attrition too low?" —
          it's <strong style="color: var(--text-primary);">"are we deploying this experienced workforce on work that leverages their expertise?"</strong>
        </p>
      </div>

      <div class="card-grid">
        <div class="card">
          <h3>Cost of Attrition (Industry Average)</h3>
          <div style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
            <p><strong style="color: var(--text-primary);">Recruiting:</strong> $4,000-6,000 per hire</p>
            <p><strong style="color: var(--text-primary);">Training:</strong> $8,000-15,000 per agent (nesting period)</p>
            <p><strong style="color: var(--text-primary);">Productivity ramp:</strong> 3-6 months to full proficiency</p>
            <p><strong style="color: var(--text-primary);">Knowledge loss:</strong> Unquantified but real</p>
            <p style="margin-top: 0.75rem; font-weight: 500; color: var(--accent-emerald);">Low attrition saves $15,000-25,000 per position per year vs. industry average turnover.</p>
          </div>
        </div>
        <div class="card">
          <h3>Redeploying Experienced Staff</h3>
          <div style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
            <p><strong style="color: var(--text-primary);">From:</strong> Handling balance checks and payment processing</p>
            <p><strong style="color: var(--text-primary);">To:</strong> Specialist fraud investigation, complex collections, relationship management</p>
            <p><strong style="color: var(--text-primary);">Value shift:</strong> Same person, 3-5x more value per interaction</p>
            <p><strong style="color: var(--text-primary);">Culture impact:</strong> More meaningful work = higher engagement</p>
            <p style="margin-top: 0.75rem; font-weight: 500; color: var(--accent-emerald);">Experienced staff + high-value work = optimal deployment.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Revenue Shift: Service as Value Creation</h2>
      <div class="card" style="border-color: var(--accent-blue);">
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
          When routine work shifts to AI, the remaining human interactions are inherently higher-value.
          This creates an opportunity most organizations miss: <strong style="color: var(--text-primary);">the contact center shifts from cost center to revenue driver.</strong>
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <h3 style="font-size: 0.9rem; color: var(--accent-rose);">Cost Center Model (Legacy)</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
              Service = expense to minimize. Agents are "cost per contact." Success = handle more calls for less money. Every interaction is overhead.
            </p>
          </div>
          <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <h3 style="font-size: 0.9rem; color: var(--accent-emerald);">Value Center Model (Future)</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
              Service = revenue protection and expansion. Agents are "value per interaction." Success = maximize customer lifetime value through each touchpoint.
            </p>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(16, 185, 129, 0.05); border-radius: var(--radius); border: 1px solid rgba(16, 185, 129, 0.2);">
          <h3 style="font-size: 0.9rem; color: var(--accent-emerald);">New Revenue Streams from Elevated Roles</h3>
          <ul style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary); list-style: none; padding: 0;">
            <li style="margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Relationship-driven cross-sell:</strong>
              Specialist agents who know the customer deeply identify product fit naturally — not scripted upsell
            </li>
            <li style="margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Retention at moments of truth:</strong>
              High-value interactions (cancellations, complaints, hardship) become retention opportunities when handled by experienced specialists
            </li>
            <li style="margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Advisory services:</strong>
              As agents shift from transactional to consultative, they become financial advisors — a revenue-positive function
            </li>
            <li style="margin-bottom: 0.5rem;">
              <strong style="color: var(--text-primary);">Proactive value creation:</strong>
              AI monitors accounts for opportunities (rate optimization, product upgrades, risk signals) — humans execute relationship-based outreach
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>The Three-Dimensional Optimization</h2>
      <div class="card">
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
          For an organization that's both a top employer AND a bank needing cost efficiency,
          the optimization must be explicitly three-dimensional:
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
          <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-blue);">Cost</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Optimize total cost of value delivery — not just headcount. AI absorbs volume; humans create value. Cost per value unit drops even if cost per agent rises.
            </p>
          </div>
          <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-emerald);">CX</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Customer experience as revenue driver. CES 1.8x more predictive than CSAT. FCR directly reduces cost AND increases loyalty. Value-based routing matches right resource to right interaction.
            </p>
          </div>
          <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: var(--radius);">
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-purple);">EX</div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem;">
              Employee experience as competitive moat. #1 ranking = recruiting advantage = lower acquisition cost = deeper expertise retention = better CX = revenue. The flywheel.
            </p>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 1.5rem; text-align: center;">
          The Pareto frontier shows the set of efficient tradeoffs across all three.
          The organization chooses where to operate on that frontier — not whether to optimize one dimension at the expense of others.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>Practical Implication: What Changes in Planning</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Staffing Decisions</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Don't ask "how many agents do we need?" Ask "what value are we delivering per agent, and how do we increase it while AI absorbs volume?"
          </p>
        </div>
        <div class="card">
          <h3>Routing Decisions</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Don't route to minimize cost. Route to maximize value. A $3.50 specialist interaction that retains a $50K CLV customer is the highest-ROI routing decision.
          </p>
        </div>
        <div class="card">
          <h3>Career Path Decisions</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Build explicit progression from Pool 1 support (shrinking) → Pool 2 collaborative (growing) → Pool 3 specialist (premium). Give people a future.
          </p>
        </div>
        <div class="card">
          <h3>Technology Decisions</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            Invest in tools that elevate human capability (AI-assisted case preparation, real-time coaching, knowledge surfaces) — not just deflection technology.
          </p>
        </div>
      </div>
    </section>
  `}const f={home:w,assessment:z,ecosystem:k,horizons:I,optimization:A,adaptive:T,credentials:P,"ecosystem/integration":S,"ecosystem/decisioning":L,"optimization/revenue":M,"optimization/culture":O,"adaptive/routing":R,"horizons/handoffs":D};function F(){const r=window.location.hash.slice(1)||"home";return r in f?r:"home"}function v(){const r=F(),e=document.getElementById("app");e.innerHTML=`
    ${x(r)}
    <main class="main">
      <div class="page">
        ${f[r]()}
      </div>
    </main>
  `,e.querySelectorAll("[data-route]").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const i=o.currentTarget.dataset.route;i&&(window.location.hash=i,window.scrollTo(0,0))})})}window.addEventListener("hashchange",v);v();
