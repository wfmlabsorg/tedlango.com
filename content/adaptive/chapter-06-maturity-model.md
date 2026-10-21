---
title: "The WFM Labs Maturity Model: A Framework for Transformation"
label: "Chapter 6"
chapter: 6
weight: 16
slug: "chapter-06-maturity-model"
description: "The workforce management landscape is undergoing a radical transformation. Traditional scheduling and forecasting methods—rooted in historical data and rigid capacity…"
part: "Part I — Adaptive Foundations: Context, Drivers, and Frameworks"
audio_file: "chapter-06.mp3"
audio_duration: 2439
wiki_page: "The Maturity Model as a Transformation Framework"
hero: "/img/book/maturity-model.svg"
math: true
type: adaptive
---

## Introduction: Your Roadmap from Theory to Practice

The workforce management landscape is undergoing a radical transformation. Traditional scheduling and forecasting methods—rooted in historical data and rigid capacity planning—are no longer sufficient in an era defined by real-time adaptability, automation, and employee-centric (EX-first) workforce strategies. Organizations that continue to rely on static workforce planning models face growing inefficiencies, increased attrition, and an inability to respond dynamically to the variance and volatility we explored in [Chapter 5](/adaptive/chapter-05-variance-and-volatility/).

The frameworks in [Chapter 4](/adaptive/chapter-04-frameworks/)—STaRS, Service-Profit Chain, GRPIT, and understanding variance management—provide the strategic foundation for transformation. But how do you actually implement them?

The WFM Labs Maturity Model is your roadmap from where you are to where you need to be.

<figure class="book-figure" id="fig-wfmaturitymodel">
<img src="/img/adaptive/wfm_maturity_final.svg" alt="WFM Labs Maturity Model" loading="lazy">
<figcaption><strong>Figure 6.1.</strong> WFM Labs Maturity Model</figcaption>
</figure>

**Five Levels, Five Chapters, One Clear Path**

This model distills decades of workforce management evolution into five progressive levels. Each level represents a fundamental shift in capability and is summarized in [Table 6.1](/adaptive/chapter-06-maturity-model/#tab-maturity-roadmap). Unlike academic maturity models that describe ideal states, this framework is built from real implementations. Every level reflects what actually works in practice, not what sounds good in theory. The progression isn’t just about technology—it’s about fundamentally changing how organizations think about their workforce as a strategic asset.

**From Cost Center to Competitive Advantage**

Most organizations still treat workforce management as a cost-control function: minimize labor expense while hitting service targets. This mentality guarantees mediocrity. The Collaborative Intelligence Era demands a different approach—*Adaptive Orchestration*—where workforce optimization becomes a source of competitive advantage through employee engagement, operational resilience, and customer value creation.

The maturity model shows this evolution clearly. At Level 1, you’re fighting fires with spreadsheets. By Level 5, you’re orchestrating enterprise-wide intelligence—*integration without ownership* of data—making workforce management a strategic differentiator. The journey between these points is systematic, measurable, and achievable.

<div class="book-table" id="tab-maturity-roadmap">

| **Level**                   | **Core Capability**                        | **Deep-Dive**          |
|:----------------------------|:-------------------------------------------|:-----------------------|
| **Level 1: Initial/Manual** | Spreadsheet-driven reactive planning       | [Chapter 7](/adaptive/chapter-07-level-1-initial/)   |
| **Level 2: Foundational**   | Structured forecasting & scheduling        | [Chapter 8](/adaptive/chapter-08-level-2-foundational/)   |
| **Level 3: Progressive**    | Real-time automation & variance harvesting | [Chapter 9](/adaptive/chapter-09-level-3-progressive/)   |
| **Level 4: Advanced**       | Operations Research & ecosystem thinking   | [Chapter 10](/adaptive/chapter-10-level-4-advanced/) |
| **Level 5: Pioneering**     | AI-augmented enterprise orchestration      | [Chapter 11](/adaptive/chapter-11-level-5-pioneering/) |

WFM Labs Maturity Model — Your Implementation Roadmap

</div>

**How to Use This Model**

First, assess where you are today. Unlike other maturity models that describe organizations scattered across multiple levels, workforce management maturity tends to cluster around specific stages. At the time of this publication, approximately 85% of contact centers operate at either Level 1 or Level 2, with the distinction often determined by scale and investment capacity.

Many smaller contact centers remain at Level 1—managing operations through spreadsheets and manual processes—either because they haven’t reached the scale requiring formal WFM software investment or are just beginning to grow into that requirement. The majority sit at Level 2, having invested in traditional WFM software and established the legacy processes that define this level: building detailed plans, pre-scheduling training and coaching, and reacting to variance as it unfolds.

A smaller but growing portion of the industry has advanced to Level 3, where they’ve fundamentally rethought these legacy processes, invested in automation software, and transformed variance from enemy to asset through dynamic delivery of training and development. Level 4 represents organizations that have broken free from deterministic capacity planning and migrated to ecosystem thinking—an even smaller group. Level 5 encompasses those pioneering enterprise-wide orchestration capabilities.

Second, understand that progression isn’t strictly linear. You might implement Level 3 real-time capabilities before perfecting Level 2 processes. The model provides guardrails, not rigid sequencing. What matters is building capability that supports your specific business context—the STaRS framework from Chapter 4 helps determine where to focus first.

Third, recognize that each level unlocks different value. Level 2 brings operational stability. Level 3 enables automation and adaptive resilience. Level 4 provides strategic planning capability. Level 5 creates competitive differentiation. Your organization’s urgency and resources should guide how fast you advance.

**The Implementation Reality**

Transformation is hard. Every level requires not just new technology but new ways of thinking, working, and measuring success. You’ll face resistance from people comfortable with current processes. You’ll encounter vendors selling solutions that promise to skip levels. You’ll discover gaps between what you thought you needed and what actually drives results.

This is why Part II exists. Rather than theoretical descriptions, you’ll follow Sarah Chen’s real-world journey through each level. You’ll see the specific challenges she faces, the decisions she makes, and the results she achieves. Her story becomes your implementation guide, showing not just *what* to do but *how* to do it effectively.

<figure class="book-figure" id="fig-implementationpath">
<img src="/img/adaptive/maturity-stair.svg" alt="Implementation Path" loading="lazy">
<figcaption><strong>Figure 6.2.</strong> Implementation Path</figcaption>
</figure>

**Your Preview of the Journey Ahead**

This chapter now sketches each level—what defines it, why organizations get stuck, and which capabilities unlock the next step—while showing how GRPIT and variance/volatility practices mature across the spectrum. Use this overview as the map for Part II’s implementation stories.

## Level 1: Initial/Manual — The Excel Foundation

Level 1 organizations run workforce operations through spreadsheets, manual processes, and reactive adjustments. This is the *Excel stage*: scheduling happens in workbooks, forecasting leans on recent history, and real-time management means supervisors phoning and messaging when problems emerge. It often fits smaller contact centers—frequently under 100 agents—before a dedicated WFM function exists.

This approach works at small scale but has predictable limits. Without an interval forecast (15–30 minutes) and a clear translation from the service promise (e.g., 80/30) to staffing, teams cannot tell normal pattern drift from a real disruption. Routine changes—volume up a few points, AHT creeping—may go unnoticed until backlog and ASA jump, prompting *basic, reactive* moves (calls, texts, sliding lunches) rather than planned levers. Because queue dynamics are non-linear, small staffing changes can produce outsized service swings (the “Power of One”).

**Operational profile (GRPIT)**

- **Goals (G):** Daily promise stated but not enforced at the interval level; no posted occupancy band (e.g., 78–88%); shrinkage treated as a fuzzy buffer rather than a policy.

- **Roles (R):** No dedicated WFM owner; forecasting, scheduling, and real-time split across supervisors and an “Excel power user.”

- **Processes (P):** Weekly roster from historical averages; ad hoc intraday changes; no Rule→Trigger→Action playbook or variance log.

- **Interpersonal (I):** Goodwill bridges gaps, but unpredictability taxes agents (overtime asks, sliding lunches, canceled coaching).

- **Technology (T):** Excel/email/whiteboards as the system; no ACD≤ftrightarrowWFM link; limited interval visibility.

**Why instability appears.** Customer arrivals are random, handle times vary, and agents have real constraints. An Erlang‑C baseline translates interval workload (arrivals × AHT) into staffing for a timeliness promise—but Level 1 typically discovers this relationship through service failures rather than proactive planning. Pairing SL with ASA and an occupancy band exposes the depth and cost of misses. A clear short-abandon policy (e.g., exclude abandons under 5–10 seconds) keeps definitions honest.

**Growth and integration pressure.** Manual scheduling that works for 50 agents becomes unmanageable at 150. Spreadsheet coordination fails when multiple supervisors need simultaneous edits. Acquisitions magnify the pain: different Excel formats, scheduling philosophies, and coordination methods collide; what functioned separately becomes chaos when merged without common definitions and cadence. Employee experience erodes as unpredictability drives turnover, which steals more capacity from the plan.

**The minimum path forward.** Advancing from Level 1 requires four concrete steps that stabilize today and enable Level 2:

1.  **Name ownership.** Assign a WFM owner (even part-time) who curates definitions and handoffs across forecasting, scheduling, and real-time.

2.  **Post the instruments.** Publish interval SL, an occupancy band (e.g., 78–88%), a shrinkage policy, and a short-abandon rule; use an Erlang‑C sheet to translate promises into required staff.

3.  **Run a simple rhythm.** Weekly interval forecast → shrinkage-aware roster → intraday micro-moves via a small Rule→Trigger→Action log → two-line variance log at day’s end.

4.  **Tool the basics.** Keep Excel systematic (one source-of-truth workbook); prepare for a starter WFM platform by standardizing inputs and guardrails rather than chasing features.

**Why Level 1 matters.** Level 1 is the common starting point. Naming its limits makes the business case for structure without blaming people. Teams typically see quick gains in service stability, efficiency, and morale once interval goals, occupancy bands, shrinkage, and a few repeatable intraday moves are in place. The move to Level 2 is then an upgrade of habits already working, not a reboot.

## Level 2: Foundational — Structured Workforce Management

Level 2 is where most contact centers operate today. Organizations establish dedicated workforce management functions, implement a WFM platform, and document processes that turn manual chaos into professional operations. Service levels stabilize, interval goals are tracked, and schedules arrive predictably. This structure delivers clear improvements over Level 1’s reactive firefighting.

**Built-in constraint (made explicit).** The same strengths become limits. Planning remains largely *deterministic* (often in external spreadsheets), and *no real-time automation* executes micro-moves. When reality deviates—a mathematical certainty in queues—the system reacts through manual edits rather than adapting in minutes. Multi-channel mixes (voice/chat/email) expose rigidity as cross-channel shifts are slow and policy-bound. Staffing baselines are often *abandonment-blind* (Erlang‑C), optimistic when queues are tight unless short-abandon treatment or abandonment-aware thinking is applied.

**Operational profile (GRPIT)**

- **Goals (G):** SL is formal (e.g., 80/30) and visible with ASA; *publish* short-abandon policy, an *occupancy band* (e.g., 78–88%), and a *shrinkage policy* to balance service, people, and cost.

- **Roles (R):** Dedicated forecasters, schedulers, and real-time analysts exist; handoffs work, but learning loops are weak across silos.

- **Processes (P):** Capacity planning deterministic; schedules post on cadence; intraday adjustments are manual; coaching often yields under pressure.

- **Interpersonal (I):** Professional structure improves predictability, yet rigid adherence and repeated training cancellations erode flexibility and growth.

- **Technology (T):** The WFM platform is the single source of truth for rosters and targets. You can see issues, but fixes still require people to push buttons—changes roll out at human speed without automation.

**The Professional Structure**

Level 2 builds impressive capabilities within traditional frames. Forecasters maintain seasonality and event calendars and project demand months ahead, assuming patterns repeat with modest variation. Schedulers optimize staffing with precision, balancing breaks and lunches down to minutes. Real-time analysts monitor SL, ASA, abandon, and adherence, processing exceptions when agents deviate from the plan. These are real advances over Level 1.

The limits are predictable. Functions operate as strong *silos*: forecasters measure accuracy against history but rarely integrate fast floor signals; schedulers assume perfect adherence and static forecasts; real-time reacts to variance rather than feeding design changes upstream. Traditional platforms excel at making detailed plans visible; they struggle to *execute small, timely corrections* across skills and channels. Dashboards show variance with precision; responses still arrive at human speed.

**The Human Reality**

Professionalization brings wins—schedules are posted further in advance with fewer last-minute changes, processes are clearer, and operational visibility improves. Yet rigid templates and policy-heavy adherence trap employees in patterns that ignore life’s unpredictability. Training cancellations protect short-term SL at the expense of long-term capability. Over time, the metric trio that signals Level 2 “success”—forecast accuracy, schedule adherence, service level attainment—can incentivize defending a static plan instead of building adaptive capacity. Turnover follows, often misattributed to “the industry” rather than design choices.

**The ROC Evolution**

Progressive Level 2 organizations stand up a *Resource Optimization Center (ROC)* that reframes real-time from exception processing to operational coordination. The ROC treats variance as expected and manages it with *Rule→Trigger→Action* ladders. Its value is visibility that *quantifies* Level 2’s limits and the opportunity cost of manual speed: every manual intervention becomes a candidate for automation; every delay has a measured impact (e.g., *time-to-stabilize* and *protected-time retention*). This evidence builds the business case for Level 3 automation grounded in your own intervals.

**The Industry Reality**

Most centers remain at Level 2 because structure “works well enough” and looks professionally sophisticated. A mature vendor ecosystem has optimized for *static planning plus reactive management*. External pressure is changing the math: customers expect immediacy and personalization; employees expect flexibility; market cycles compress. Level 2, once revolutionary, becomes increasingly inadequate in dynamic environments.

**The Path Forward**

Advancing beyond Level 2 does not discard investments; it *transcends* their limits. Forecasting engines become inputs to *automated* decision systems; scheduling platforms generate *flexible frames* with guardrails; real-time moves from exception handling to *variance harvesting*. Concretely: publish SL/ASA/short-abandon, an occupancy band, and shrinkage policy; close role handoffs with a daily variance loop; codify micro-moves so the ROC can act consistently now and automation can safely press the same buttons at Level 3. Level 2 is a foundation, not a destination—the platform from which dynamic workforce management becomes possible.

## Level 3: Progressive — Real-Time Variance Harvesting

Level 3 upgrades the operation from *defending a plan* to *continuously planning*. An automation layer sits between ACD, WFM, and LMS/Comms, reads live signals, and executes small, safe actions in seconds. Variance stops being the enemy; it becomes fuel for stability, development, and cost control—simultaneously.

**Design principle (made explicit).** Variance is expected and instrumented. Published guardrails (SL/ASA/short-abandon, occupancy band, shrinkage policy) remain the rules of the game; automation enforces them at machine speed. Agents keep control (accept/defer where appropriate); every action is auditable and written back to systems of record.

**Operational profile (GRPIT)**

- **Goals (G):** Classic KPIs persist, now joined by *service-level stability (SLS)*, *Automation Acceptance Rate (AAR)*, and *Variance Capture Efficiency (VCE)*. Supervisor time shifts from admin to coaching (track a *focus* metric).

- **Roles (R):** Real-time analysts become *rule orchestrators*; forecasters publish risk bands; schedulers design flexible frames; many shops add an *automation strategist*. The ROC stewards rules and learning.

- **Processes (P):** Dynamic training/coaching, break/lunch protection, end-of-shift and VTO/VOT automation; exceptions disappear by design; rule registry and weekly tune-ups replace manual workarounds.

- **Interpersonal (I):** Trust grows as prompts explain *why*, options replace mandates, and supervisors return to coaching. Transparency and co-design matter more than slogans.

- **Technology (T):** Real-time automation ingests ACD signals live, with bi-directional reads/writes to WFM and LMS on their native cadences (often every few minutes). Analysts author rules; sub-minute actuation happens where the ACD is the source, and all updates are auditable—the value is orchestration, not another dashboard.

**The Operating Model**

Where Level 2 had strong silos and precise dashboards, Level 3 adds *actuation*. Rules convert signals to the smallest effective move: deliver micro-learning in safe lulls, protect breaks when calls overrun, surface long-call assists with context, nudge early/late meals within the occupancy band, offer VTO ahead of surplus. The WFM platform remains the schedule source of truth; automation updates it in-line so audits and trust hold.

**The Human Reality**

The day becomes more humane: fewer adherence tickets, preserved development, less firefighting. Agents gain real flexibility (accept/defer with no penalty); supervisors stop policing minutes and coach; RTAs design and tune rules instead of chasing the board. Adoption hinges on simple, honest copy (“*Your call ran long; your break moved +6 to protect adherence.*”) and visible wins.

**The ROC, Evolving**

The *Resource Optimization Center* is a natural extension of Level 2—not a new bureaucracy. It keeps the same real-time visibility and coordination role, but now also *owns the rulebook*: what the system may do, when, and with what agent choices. When guardrails wobble, automation takes the first safe step; the ROC confirms or overrides and handles the few cases that require human judgment. Recurring patterns are codified into rules; effective rules become part of the standard frame. Over time, more fixes happen in seconds, and the ROC concentrates on tuning rules, managing judgment-heavy exceptions, and introducing or retiring rules as the operation learns.

**The Industry Reality**

The legacy ecosystem optimized for static planning + reactive management. Level 3 changes the cost curve: steadier SL with lower planned shrinkage and higher delivered development. As peers adopt, standing still raises your relative unit cost and erodes talent appeal.

**The Path Forward**

Keep the Level 2 guardrails; let automation press the buttons. Institutionalize a rule registry, a weekly tune-up, and shared dashboards for AAR, VCE, and SLS. Treat the ROC as rule mission control. The data you generate (signals → actions → outcomes) becomes the runway for Level 4 prediction and Level 5 orchestration.

## Level 4: Advanced — The Ecosystem Revolution

Level 4 is the pivot from spreadsheet arithmetic to *Operations Research* at ecosystem scale. Organizations replace point estimates with *probability ranges*, and monolith thinking with *composable* planning: a best-in-breed WFM core, a real-time automation layer, an OR-driven capacity engine, and an analytics workspace wired by APIs and data contracts. The result is a *living* capacity plan that updates as drivers change and expresses staffing as P50/P80/P95 bands rather than single numbers.

**Scientific premise (made explicit).** We plan for distributions, not points. Inputs (arrivals, AHT, shrinkage, attrition, deflection) are modeled as uncertain; outputs are *envelopes with confidence* and *playbooks for tails*. Leadership chooses risk posture (e.g., staff to P80), and automation executes within those bands day-to-day. Assumptions, constraints, and model limits are published as *model cards* with a versioned *constraint register*.

**Operational profile (GRPIT)**

- **Goals (G):** Optimize across *service stability, cost, agent experience, resilience*—measured as hit-rates to targets (e.g., \(P_{85}\) of meeting 80/30), total cost (incl. OT/BPO risk), schedule quality, and robustness under stress tests. Report ranges (P50/P80/P95) and sensitivities, not single asks.

- **Roles (R):** Add a *Capacity Planning Data Scientist* (probabilistic models, simulation), an *OR–WFM Translator* (turns policies into constraints and trade-offs into decisions), and an *Automation Orchestrator* (links bands to real-time rules). Core WFM upskills to probabilistic literacy.

- **Processes (P):** Move from annual snapshot to *continuous refresh*: daily/weekly range updates, monthly calibration, quarterly stress scenarios. Standard artifacts: *staffing envelope*, *constraint register*, *model cards*, and *decision packs*.

- **Interpersonal (I):** Shift from handoffs to *joint ownership of uncertainty*: one model, many role-based views (Ops/Finance/Marketing), explicit triggers, and blameless post-mortems that update models—no “precision theater.”

- **Technology (T):** Ecosystem architecture: API-first WFM single source of truth (SSoT); intraday automation for variance harvesting; OR planning layer (Monte Carlo, simulation, optimization); analytics workbench; event streaming + governed data contracts for ranges/constraints/outcomes.

**Mathematical sophistication (right-sized).** Monte Carlo replaces single-point staffing with confidence bands; discrete-event simulation handles multi-skill routing, abandonment, and policy tests; linear/mixed-integer programming optimizes across constraints (labor, skills, preferences) and objectives. Leaders pick from *Pareto-efficient* options rather than defend “exactly 287 agents.”

**Ecosystem architecture (how it fits together).** Keep your WFM core for scheduling/adherence; add an *OR capacity layer* for ranges and scenarios; use *real-time automation* to enforce the selected service posture; and operate an *analytics workspace* to back-test, explain, and learn. Integrations are bi-directional: planning publishes bands/guardrails; automation returns telemetry (acceptance, micro-availability, drift) that tightens distributions.

**Strategic business intelligence (why it matters).** With ranges tied to business drivers, WFM becomes a strategy partner: Finance prices cost/risk, Marketing schedules campaigns within capacity envelopes, HR times classes to band thresholds, and Ops selects posture by line of business. Decisions come with *confidence, triggers, and residual risk*—not wishful precision.

**Implementation and evolution.** Phase in: (1) establish probabilistic literacy and data contracts; (2) run side-by-side pilots that publish P50/P80/P95 and sensitivities; (3) formalize governance (model cards, calibration cadence, rollback); (4) scale across units and feed bands to automation. Level 4 lays the foundation for Level 5’s autonomous optimization by making plans living, transparent, and machine-consumable.

## Level 5: Pioneering — Adaptive Orchestration

Level 5 is workforce management’s next frontier—from contact center optimization to enterprise-wide *Adaptive Orchestration*. Organizations transcend WFM’s boundaries to coordinate human capability, artificial intelligence, and business purpose across functions, turning the operation into a *living* intelligence system that senses, decides, and adapts.

The defining shift reframes the question from “Will AI replace workers?” to “How do we *optimize* human–AI collaboration for multi-stakeholder value (customers, employees, business, and risk)?” Level 5 ecosystems amplify human potential rather than replace it, using portfolio decisioning to route each interaction to the highest-value handler—human, AI, or hybrid.

This isn’t “better WFM tools.” It is WFM becoming the enterprise *decisioning platform*: a federated *orchestration layer* that connects to truths where they live (CRM, HR, Finance, Marketing) and a *decision layer* that balances objectives and constraints in real time. The result is a self-evolving system that learns continuously.

**Enterprise Integration and Predictive Operations**

Level 5 dissolves the artificial boundary that confined WFM to service. Intelligence is *federated*: the platform queries authoritative systems at decision time (integration without ownership), reconciles by policy, and publishes insights back.

Workforce choices ripple across the enterprise: marketing spend shifts demand; product launches alter intent; competitor moves change sentiment. Level 5 systems ingest these signals *before* impacts arrive—digital exhaust, journey patterns, and social sentiment—and pre-position resources accordingly. Questions become: “What’s the enterprise value and workforce impact of +30% marketing spend?” or “How should we posture resources for the competitor outage we just detected?” Predictive operations prevent problems and accelerate opportunities.

**Adaptive Human–AI Collaboration**

Level 5 mathematically optimizes *how* people and AI work together: AI as *tool* (intelligence amplification), AI as *teammate* (task specialization), and AI as *orchestrator* (dynamic allocation). Each request routes based on expected value across complexity, emotion, risk, and capability—choosing human, AI, or hybrid.

Crucially, human value is *quantified*: empathy lift to lifetime value, creative problem-solving to saves/referrals, and judgment in novel or ethical contexts. Boundaries shift with evidence, not belief, within fairness and compliance guardrails.

**Autonomous Operations with Human Governance**

Autonomy increases human value. Self-optimizing systems make thousands of micro-decisions per second—routing, scheduling, interventions—while escalating novelty, ambiguity, or high-stakes situations. Reinforcement loops improve decisions where safe; optimization handles constrained trade-offs elsewhere.

Humans set goals and constraints; the platform acts within them. Every action is explainable and auditable (model cards, decision traces, overrides). Autonomy serves human flourishing: AI handles routine optimization; people focus on relationships, creativity, ethics, and the moments that create durable value.

**Continuous Innovation and Future Readiness**

Level 5 advantages compound. Competitors can buy tools; they cannot copy federated relationships, learning loops, or culture. The platform runs *always-on* experiments (champion–challenger), scales winners automatically, and retires losers with learning credits. Architecture remains modular and vendor-agnostic, preserving option value and scenario robustness across uncertain AI and regulatory futures.

**The Ultimate Transformation**

Level 5 prepares for unknowable futures by building adaptive capacity: orchestration that accepts new AI services as they emerge, learning algorithms that improve regardless of vendor, and human development that increases the value of distinctly human skills as automation scales. WFM completes its shift from cost center to strategic differentiator and becomes the enterprise’s orchestration function.

Level 5 is not an end state but a beginning—continuous evolution where the ability to blend human and artificial intelligence becomes the ultimate, sustainable advantage.

**From Framework to Implementation**

Part II applies the model through a running case. You’ll work alongside Sarah as she inherits an operation and moves it forward. Each chapter opens with her context and constraints, then walks the same pattern: diagnose what she has, choose the minimum viable moves, set guardrails, and define checkpoints. The artifacts and checklists are designed to be lifted and adapted.

Read with your own numbers in hand. Locate your current level, map Sarah’s steps to your environment, and take the next bounded move.
