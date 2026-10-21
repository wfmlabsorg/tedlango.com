---
title: "Level 1: Initial/Manual – The Excel Foundation"
label: "Chapter 7"
chapter: 7
weight: 17
slug: "chapter-07-level-1-initial"
description: "Sarah Chen set down her coffee and surveyed Midwest Mutual’s specialty lines floor for the first time as WFM Manager. Forty-five agents handled niche insurance…"
part: "Part II — The Five-Level Playbook to Enterprise Orchestration"
audio_file: "chapter-07.mp3"
audio_duration: 4792
wiki_page: "Level 1: The Excel Foundation"
hero: "/img/book/deterministic-dna.svg"
math: true
type: adaptive
---

## Introduction: Sarah’s Proving Ground

Sarah Chen set down her coffee and surveyed Midwest Mutual’s specialty lines floor for the first time as WFM Manager. Forty-five agents handled niche insurance products—collectibles, marine, aviation—the profitable oddities that larger divisions wouldn’t touch. Two supervisors walked the aisles between cubicles. The ACD hummed. Excel spreadsheets covered three monitors at what passed for the command center.

"Congratulations on the promotion," said Marcus Webb, the senior supervisor who’d been running scheduling in his spare time. His tone suggested condolences might be more appropriate. "Fair warning—we’re absorbing two acquisitions next quarter. Vintage Auto Specialists and Classic Marine Insurance. Twenty more agents, different systems, and nobody’s modeled the impact."

Sarah had earned this chance after three years as a senior analyst in the main contact center, watching opportunities disappear into politics and inertia. Corporate gave her specialty lines as a test: stabilize this operation, prove her ideas worked, and maybe—maybe—they’d let her touch the 3,000-agent main floor.

"Show me how you forecast," she said.

Marcus pulled up Excel. The roster was neat—names, shifts, time blocks—but static. No 15-minute intervals. No connection to the ACD. No automated reconciliation between plan and reality.

"We look at last month’s call counts and add bodies when it seems busy," he admitted. "Monday mornings are rough. Lunch hurts. Fridays are light except month-end." No interval service-level target translated into staffing. No shrinkage segmentation for breaks, training, or PTO. Occupancy wasn’t even measured, let alone used as a guardrail.

Sarah watched the floor through the morning. By 10 AM, three agents were out sick. A product update had pushed aviation quotes from five to eight minutes. The queue for marine claims stretched to twelve calls.

"Pull Jenkins from training," Marcus called to the other supervisor. "Cancel the coaching session for Smith—third time this month. Tell everyone breaks are sliding fifteen minutes."

This was **Level 1: Manual Operations**—competent people compensating for missing instruments. Excel and email carried the load. Decisions happened in real-time crisis. Variance was treated as betrayal rather than input. **Discovering the Reality**

Sarah spent her first week documenting what actually happened versus what was planned. The patterns were predictable:

- No annual or monthly capacity plan guiding hiring or backfill—just reactive requisitions when pain became unbearable.

- No 15–30 minute targets or guardrails to steer the day—only end-of-day autopsies.

- Intraday adjustments through overtime heroics, emergency call-ins, and perpetually canceled development.

Wednesday brought the proof point. A marine underwriter released new documentation requirements without warning. Handle times jumped 40%. The queue backed up. Service levels crashed from 82% to 31% in two hours.

"All hands!" Marcus shouted. Break schedules collapsed. The training coordinator became a temporary agent. Sarah watched \$8,000 in overtime authorize itself while three agents’ certification training—required for next month—got pushed again.

"This happens every time," said Patricia, the other supervisor, exhaustion clear in her voice. "Marketing launches something. Product changes something. Weather hits somewhere. We scramble, people burn out, someone quits, and we’re deeper in the hole."

The death spiral was obvious: crisis drives canceled development, which degrades quality, which extends handle times, which creates more crises. No one was negligent. There simply wasn’t a system.

**Finding the Leverage**

That evening, Sarah mapped the operation against what she’d learned in the main center. The tools existed—the ACD could export interval data, Excel could run Erlang calculations, patterns were visible if anyone looked. The gap wasn’t technology; it was instrumentation and discipline.

She pulled three years of historical data, working until midnight. Patterns emerged:

- Mondays ran 18% above weekly average, concentrated 9–11 AM

- Marine insurance spiked with weather systems (trackable via NOAA)

- Aviation quotes clustered around air show season and tax deadlines

- Collection appraisals surged after estate tax announcements

The business was more predictable than anyone realized. It just required looking.

**The Proposition**

Thursday morning, Sarah presented Marcus and Patricia with a simple framework:

"We’re going to install basic instrumentation. Not a platform—we don’t have budget. Not transformation—we don’t have time. Just enough structure to stop drowning."

She outlined three foundations:

**1. Interval Visibility:** Export ACD data every 15 minutes. Track service level, calls offered, calls handled, and ASA. Build a simple Excel heat map showing where reality diverged from plan. "We can’t fix what we don’t measure at the right granularity."

**2. Erlang-Based Staffing:** One formula, consistently applied. Input: calls, handle time, service goal. Output: bodies needed. "It’s imperfect but infinitely better than guessing. We’ll adjust for reality, but we start with math."

**3. Protected Minimums:** Define non-negotiable shrinkage for breaks, training, and development. Calculate the true bodies needed including shrinkage. "When we cancel training, we’re borrowing from next month’s capacity. That debt compounds."

Marcus looked skeptical. "Corporate won’t approve overtime for proper staffing."

"They will when I show them the math," Sarah replied. "We’re already paying overtime—just reactively, at premium rates, after service fails. I’m proposing we staff correctly upfront."

**Week Two: Installing the Foundation**

Sarah started with small, visible wins:

**Monday:** Created the first interval staffing requirement chart. The 9–11 AM gap was stark—six bodies short every Monday. "We’ve been failing before lunch for three years," Patricia said, seeing it clearly for the first time.

**Tuesday:** Built a simple shrinkage tracker. Actual shrinkage: 28%. Planned shrinkage: "What’s shrinkage?" The gap explained everything.

**Wednesday:** Implemented the first "rule trigger": If service level drops below 60% for two consecutive intervals, authorize overtime immediately rather than waiting for end-of-day approval. Simple, clear, executable.

**Thursday:** Created a one-page "State of the Floor" report—interval performance, shrinkage actuals, top variance drivers. Replaced seventeen ad-hoc reports nobody read.

**Friday:** Held the first proper planning session. Reviewed the week’s patterns, identified three specific improvements for next week, assigned owners. Thirty minutes, focused, actionable.

**The Acquisition Test**

Week three brought the integration kickoff. Twenty agents from two acquired companies would join in six weeks. The old approach would have been: "We’ll figure it out when they get here."

Sarah’s approach:

- Pulled historical volume from both acquisitions

- Modeled the combined operation using Erlang calculations

- Identified the critical gaps: Monday coverage, marine expertise, aviation certification timing

- Built a ramp plan with specific weekly checkpoints

"We need four more bodies for Mondays, two marine specialists, and aviation certification for six agents," she told corporate. "Here’s the math, the cost of not doing it, and the ROI."

For the first time, specialty lines presented a capacity plan backed by data. Corporate approved—not because they loved spending, but because the alternative was obviously worse.

**Six Weeks Later: The Quiet Victory**

The acquisitions integrated on a Tuesday. By Thursday, operations were stable. No heroics. No crisis. Just the plan working as designed.

"I kept waiting for the explosion," Marcus admitted. "It just... didn’t happen."

Service levels held at 83%. Overtime dropped 30%. Smith finally completed his certification. Patricia ran her first full coaching session without interruption.

More importantly, patterns emerged that pointed toward Level 2:

- Erlang worked, but multi-skill complexity needed better tools

- Excel reached its limits at 65 agents and three distinct products

- Manual intraday adjustments consumed two hours of supervisor time

- The business case for a proper WFM platform was now obvious

**The Recognition**

The quarterly business review brought unexpected visitors. David Kim, COO of Midwest Mutual, had noticed something unusual in the metrics: specialty lines’ service improved while cost per contact dropped.

"Walk me through what changed," he said.

Sarah presented the journey from chaos to control. Simple disciplines. Basic math. Protected development. Clear rules. Nothing revolutionary—just fundamentals properly applied.

"Could this scale?" David asked.

"With the right tools and team, absolutely," Sarah replied. "But we’d need to move beyond Excel. The foundation is proven; now we need infrastructure."

David exchanged glances with the head of the main contact center operation. "We’re restructuring workforce management for our primary operation—3,000 agents, multiple sites, seven-figure SLA penalties. Interested?"

Sarah thought of Smith finally getting trained, Patricia coaching again, Marcus no longer firefighting every day. Level 1 had stabilized. The foundation was solid.

"When do I start?"

**Operational Profile: Level 1 Essentials**

As Sarah prepared to hand specialty lines to her successor, she documented what made Level 1 sustainable:

- **Scale & Tools:** Works up to  100 agents; Excel-based but systematic; one source of truth for roster, PTO, and changes

- **Roles:** Blended responsibilities acknowledged and protected; scheduling gets dedicated time; reporting automated where possible

- **Planning:** Basic interval forecasting (15–30 min); Erlang-based staffing; explicit shrinkage calculation

- **Scheduling:** Still manual but rules-based; protected development minimums; clear escalation triggers

- **Metrics:** Interval visibility standard; variance tracked and discussed; simple root-cause hygiene

- **Behavior Under Variance:** Rules trump panic; overtime authorized proactively; development protected by policy

The specialty lines team gathered for Sarah’s farewell. Marcus spoke for the group: "You didn’t just fix our operations. You showed us we weren’t broken—we just needed a system."

Patricia added, "Three months ago, I was ready to quit. Now I’m actually teaching other supervisors how to forecast."

Sarah looked at the heat map on the wall—mostly green now, with variance contained rather than cascading. Level 1 wasn’t sophisticated, but it was stable. The Excel foundation could hold.

As she packed her desk, an email arrived from David Kim: "Main operations Monday, 8 AM. Bring the specialty lines playbook. We’re going to need it."

The foundation was built. The journey to Level 2 was about to begin.

## What Defines Level 1?

Level 1 is the manual baseline. Competent people hold the day together with spreadsheets, hallway asks, and overtime when variance spikes. Plans exist as artifacts (tabs, emails), not as a loop that connects forecast, schedule, and intraday action. When the day stays average, the operation looks fine; when demand bends, outcomes depend on individual heroics rather than a designed system. This section names the operating reality of Level 1 so we can improve it deliberately in [“Key Challenges at Level 1”](/adaptive/chapter-07-level-1-initial/#key-challenges-at-level-1) and beyond.

##### Scope and scale.

Teams typically range from a few dozen to low hundreds of agents, often in a single site or two, with one primary channel and light spillover into email/chat. Interval forecasts (if any) live apart from the roster, and there is no consistent link between “what we thought would happen” and “what hit the queues.” Hiring and overtime tend to be reactive; scenario work is episodic rather than planned.

##### Roles that exist—without clear boundaries.

Forecasting, scheduling, and real-time monitoring are *activities* shared across supervisors and an “Excel owner,” not distinct *roles* with explicit accountabilities. When service slips, fixes arrive through one-off messages and ad hoc favors. Wins and misses rarely roll into a repeatable learning loop because no one is tasked to keep it. (Later, [“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions) will name minimal role ownership without changing headcount.)

##### Metrics and limits.

SL/ASA/AHT may appear on wallboards, but definitions vary, data sources shift, and interval red/green is inconsistently captured. Daily rollups can mask volatile 15–30 minute windows customers actually experience. Occupancy is described as “busy” or “light,” not governed against a band. Shrinkage is a remembered percentage, not a managed component. In [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics) we lock definitions and point them to a single source of truth; here we simply acknowledge the current ambiguity.

##### Technology reality.

The ACD routes and reports; nearly everything else is manual. Exports are copy/paste, time zones drift, and interval alignment is inconsistent. There is no reliable way to convert a signal (unexpected arrival rate, sudden handle-time change) into a small, timely move. Level 1 does not require a platform upgrade to improve; it requires naming the few signals that matter and agreeing how they will be seen. (Mechanics follow in [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics))

##### Culture and agent experience.

Adherence is a feeling, not a contract. Breaks and lunches are honored when the queue allows; development time is scheduled optimistically and often sacrificed to defend SL. Rules can feel rigid but are enforced unevenly, leading to fairness questions and fatigue. Level 1’s cultural signature is good intent plus inconsistent follow-through—it works until the day deviates.

##### Sarah’s read.

On the floor, Sarah sees a neat roster and engaged supervisors—and the gaps that make days brittle: no common interval view behind the schedule, no shared definitions of “good,” and no pre-agreed small moves that anyone can trigger without a meeting. The operation survives variance but does not *harvest* it into learning.

*Operational profile (summary)*

- **Tech:** ACD + spreadsheets; no single interval source of truth; manual exports and reconciliation; no real-time automation.

- **Roles:** Activities spread across supervisors and a spreadsheet owner; no dedicated forecaster/scheduler/RTA; learning loop informal.

- **Process:** Weekly roster publication; intraday changes via overtime and ad hoc asks; development time frequently canceled to defend SL.

- **Metrics:** SL/ASA/AHT present but inconsistently defined; interval visibility patchy; occupancy unmanaged as a band; shrinkage approximated.

- **Risk:** Narrow daily wins that hide interval misses, fairness concerns, fatigue from constant trade-downs, and fragile performance under variance.

This is Level 1—*manual*, not broken. By naming the work and aligning on shared definitions and visibility, we create the footing for Chapter 7’s goals and guardrails ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)) and the role clarity that follows ([“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions)). The “how” begins there; this section’s job is simply to define the baseline with precision.

## Key Challenges at Level 1

Level 1 struggles not from negligence but from missing intraday mechanisms that turn variance into action. Spikes, callouts, and AHT drift recur; SL swings; manual workarounds multiply; engagement erodes. These are the problems we must name and fix.

##### Service-level instability.

Because interval targets were never defined and no forecast was translated into staffing, the morning spike becomes a bottleneck. Without shrinkage segmented and protected, breaks cluster and development is the first thing to go. Waits lengthen; the afternoon overcorrects into idle time. The day averages out on paper, but customers lived peaks and troughs.

##### Operational inefficiency.

Manual rosters are slowest to change precisely when speed matters. Back-of-envelope staffing (volume × AHT) correctly totals workload, but when occupancy bands and shrinkage are omitted there’s no headroom for natural variability—so preventable overtime becomes routine. By late day, you’ve paid twice: first in delays, then in labor.

##### Engagement and retention.

Agents feel the instability first. Shifts slide, lunches move, PTO feels arbitrary, and coaching evaporates. Supervisors multi-hat all day and coach at night—or not at all. Burnout accelerates turnover; turnover increases nesting load; nesting steals more capacity; the loop tightens.

##### Cultural barriers.

From the conference room, the spreadsheet looks “good enough.” Tools read as overhead, not instrumentation. Without shared vocabulary—occupancy bands, shrinkage components, interval targets—improvement arguments sound like opinion, not math. Investment waits until the pain is undeniable.

None of these problems require a moonshot to fix. The path out depends on context:

*If you are a Startup*, you need speed with just enough structure: a weekly interval forecast, a declared SL target, a simple shrinkage policy, and a roster that respects both. Keep the process light, the data visible, and iterate.

*If you are in Turnaround*, stabilize hard and fast: publish interval targets, protect breaks and training, run a daily interval review, and implement a lightweight WFM tool to replace ad hoc edits. You are buying back trust as much as minutes.

*If you are in Realignment*, reconnect operations to strategy: make the service promise explicit, align quality and SL, and use shared enterprise tools to accelerate capability without new spend.

*If you are Sustaining*, invest from strength: formalize forecasting, scheduling, and intraday guardrails before growth multiplies today’s rough edges. *What this means in practice (summary)*

- **Instability → math gap:** No interval forecast, no SL translation, no occupancy band, no segmented shrinkage.

- **Inefficiency → speed gap:** Manual exceptions and no intraday rules create slow, expensive recoveries.

- **Engagement → design gap:** Schedules lack preference inputs and guardrails that protect development time.

- **Culture → language gap:** Decisions lack a common vocabulary and a shared source of truth.

##### Lay the groundwork with GRPIT (minimum viable foundation).

You do not need a full program to leave Level 1—you need a baseline you can run tomorrow:

- **Goals (G):** Declare SL (e.g., 80/20) and a planning occupancy band (e.g., 78–88%); publish shrinkage components (breaks, meetings, training, PTO).

- **Roles (R):** Name a WFM owner (even part-time); separate scheduling from QA/training where possible.

- **Processes (P):** Produce a weekly 15–30 minute forecast; translate SL to interval staffing; build a shrinkage-aware roster; run a short daily interval review.

- **Interpersonal (I):** Make adherence a support mechanism; use transparent PTO/shift-bid rules; protect coaching/training with simple guardrails.

- **Technology (T):** Stand up a shared source-of-truth workbook or entry-level WFM tool; link ACD data; enable same-day roster adjustments.

With the problem stated and the minimum viable foundation defined, we turn next to the metrics and misconceptions that commonly derail early progress ([“Service Level: Common Misconceptions”](/adaptive/chapter-07-level-1-initial/#service-level-common-misconceptions)) and introduce a simple, shrinkage-aware baseline the team can adopt immediately.

## Goals (G) — Building Core Metrics

A plan is only a picture until the team agrees on a handful of goals that turn intent into behavior. *Clarity beats complexity*: choose a few metrics, define them precisely, and let those definitions drive staffing, scheduling, and intraday decisions. As the organization matures, the set can evolve—but the muscle you need now is agreeing on goals, using them daily, and refining them together.

### Why goals matter first

Without clear goals, debates collapse into anecdotes. With clear goals, the conversation becomes math. If the service promise is 80/30 and we see 76% at 10:00, we don’t argue about feelings; we ask what changed in volume, handling time, or staffing. If occupancy runs at 93% for hours, we don’t celebrate “efficiency”; we recognize risk to quality and burnout. Goals translate intent into interventions.

### The AQEE lens (story before numbers)

A practical Level-1 foundation fits on one page and in one meeting. Use four lenses—**Availability**, **Quality**, **Efficiency**, and **Expense** (AQEE)—to keep the conversation complete without being complicated.

##### Availability: can customers reach us when they try?

A **service level (SL)** such as *80% answered within 30 seconds* anchors responsiveness, with **average speed of answer (ASA)** and **abandon rate** providing context. The goal is not a pretty daily average—it is *stable intervals*. Interval targets (15–30 minutes) give supervisors something to steer toward in real time.

##### Quality: did we solve the right problem well?

At Level 1, Quality is often measured by **CSAT** and a simple **first-contact resolution (FCR)** read. WFM influences Quality more than it seems: a smoother day (stable SL) increases the chance of patient, thorough conversations. Over time, **forecast accuracy** becomes part of the quality story—better forecasts reduce avoidable stress on customers and agents.

##### Efficiency: are we using capacity wisely without burning people out?

Two numbers matter most early: **occupancy** (share of time agents are engaged on work) and **average handle time (AHT)**. Set an *occupancy band* (e.g., 78–88%) and treat excursions outside it as signals, not sins. High, sustained occupancy predicts quality drift and attrition; very low occupancy flags waste or misaligned staffing.

##### Expense: what does it cost to deliver today and keep delivering tomorrow?

Track a basic **cost per contact** and watch **turnover rate**. At Level 1, turnover is often the hidden tax on the other metrics; every replacement cycle increases nesting load and steals capacity from the plan.

### Make definitions explicit (and write them down)

Numbers without definitions create arguments. Decide *now* how you will calculate service level, how often you’ll measure it, and how you will treat abandons. Three common choices exist:

**Exclude abandons entirely.**  
Simple and agent-centric, but can mask long waits.

**Include all calls.**  
Customer-centric, but can punish the operation for “micro-abandons” (e.g., 1–5 seconds).

**Exclude short abandons.**  
A practical middle ground: ignore abandons under a small threshold (e.g., 5–10 seconds), include the rest. *Document the threshold.*

Apply the same discipline to occupancy (what counts as “engaged” time), AHT (components included), and cost per contact (labor-only vs. fully loaded).

### Intervals beat averages

Two days can both end “green” and feel completely different. On Day 1 the operation holds near the target most of the day; on Day 2 it swings—overstaffed in the morning, underwater after lunch. Customers remember swings, not averages. Measure and manage SL at 15–30 minute intervals; use the daily roll-up for storytelling, not steering. This is variance management made practical.

<figure class="book-figure" id="fig-slcomparison">
<img src="/img/adaptive/sl_comparison.svg" alt="Two “green” days: one stable, one volatile. Stability wins for customers, agents, and cost." loading="lazy">
<figcaption><strong>Figure 7.1.</strong> Two “green” days: one stable, one volatile. Stability wins for customers, agents, and cost.</figcaption>
</figure>

### From goals to behavior (tomorrow morning at 9:00)

Here is how goals change the day:

- **Before the day:** Review a simple interval forecast, the SL goal (e.g., 80/30), and the occupancy band (e.g., 78–88%). Place breaks and training with shrinkage assumptions, not “where they fit.”

- **During the day:** Watch interval SL and occupancy. If SL dips and occupancy rises, trigger a predefined move (pull one non-phone task, nudge breaks). Training is protected unless a defined threshold is crossed.

- **After the day:** Spend ten minutes on two or three outlier intervals. Ask “volume, AHT, or staffing?” and log the answer. Tomorrow’s roster improves by one inch.

### A minimal starter set (so you can start now)

Keep it small and real:

- **Availability:** SL target (e.g., 80/30) measured in 15–30 minute intervals; ASA and abandon rate as context.

- **Efficiency:** Occupancy planning band (e.g., 78–88%); AHT tracked daily by queue/skill.

- **Quality:** CSAT (or a proxy) and a simple FCR signal.

- **Expense:** Cost per contact (labor view) and turnover rate.

These goals do not require a new platform; they require agreement and consistency. In [“Service Level: Common Misconceptions”](/adaptive/chapter-07-level-1-initial/#service-level-common-misconceptions) we clarify what *service level is not*—the common misconceptions that derail good intent—and show how clean definitions prevent later rework.

## Service Level: Common Misconceptions

Service level (SL) is essential as a promise of speed, but misleading when treated as a proxy for quality, utilization, or satisfaction. Use SL for staffing; pair it with ASA and abandon rate to understand experience and behavior, and read it alongside an occupancy band to avoid burnout disguised as efficiency.

### What SL is not (so we use it wisely)

SL is not average wait time, not customer satisfaction, not a productivity target, and not a guarantee that *every* customer experienced the promised wait. It is the share of interactions answered within a chosen threshold. Powerful for staffing; dangerous when stretched beyond its job.

##### Not average wait (that’s ASA).

Two intervals can both report 80% at 30 seconds while producing very different experiences. In one, most callers are answered near the threshold; in the other, many are answered instantly *and* a minority wait minutes. SL hides the tail by design. **Average speed of answer (ASA)** exposes the magnitude of waits and belongs next to SL whenever you narrate the day.

##### Not quality or resolution.

Good SL creates the *opportunity* for a good conversation; it does not guarantee correctness or empathy. First-contact resolution (FCR) and CSAT live here. Treating SL as a quality proxy produces brittle behaviors (rush the answer, defer the fix) that degrade outcomes.

##### Not a utilization goal.

Overstaffing can lift SL while occupancy sinks and cost per contact rises. Squeezing staff until occupancy runs at 93% may hold SL briefly and then collapse under variance. Read SL alongside an *occupancy band* to balance service, people, and cost ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)).

##### Not channel-agnostic or universal.

An 80/30 voice target says little about asynchronous channels. Chat, email, and messaging require channel-specific timeliness promises and instruments. For voice, the 30-second threshold is a policy choice, not a law of nature; revisit it as your market and mix change.

### How ASA and abandon rate complete the picture

In [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics) we argued for intervals over averages. Here is how to *read* those intervals.

##### ASA: the depth of the red.

When SL dips, ASA tells you whether callers waited 45 seconds or four minutes. That difference drives sentiment, second-order volume (repeats, escalations), and agent stress. Use ASA to prioritize which intervals need structural change (break placement, training blocks, micro-moves), not just heroics.

##### Abandon rate: patience under pressure.

Abandonment is behavior—shaped by urgency, alternatives, and expectations. A high abandon rate in a sales or retention queue often equals lost revenue; in an info line it can signal that customers are finding answers elsewhere *or* giving up unsatisfied. Build a simple “patience curve” periodically: plot individual waits vs. whether callers stayed. Expect it to shift with seasonality, policy, and brand promises.

### Why small staffing errors hit SL so hard (Power of One)

Queues are non-linear. Arrivals are random and handle times vary, so performance falls off a cliff once the system is tight. In one case, with 200 forecasted calls and 415 seconds AHT aiming at 80/30, *52 agents* met the target, *51* dropped to ~73%, and *50* to ~65%. One agent sounds trivial; in the math, it is decisive. As Penny Reynolds describes in *The Power of One* (Reynolds 2005), small staffing changes produce outsized SL swings because the queue amplifies variance.

<figure class="book-figure" id="fig-powerofone">
<img src="/img/adaptive/power_of_one.svg" alt="Power of One: non-linear SL response to small staffing changes (voice, 80/30 target)." loading="lazy">
<figcaption><strong>Figure 7.2.</strong> Power of One: non-linear SL response to small staffing changes (voice, 80/30 target).</figcaption>
</figure>

*Bottom line.* Don’t autopsy the miss—diagnose the lever. Read SL as a staffing instrument alongside ASA and abandon to see depth and behavior, then check occupancy to choose the next move. If occupancy is high, free capacity (pull non-phone work, nudge breaks, protect training); if it’s low with poor SL, suspect routing or interval-mix issues. The goal isn’t to rescue a daily average—it’s to steer the *next* interval.

## Erlang: The Mathematical Foundation

Every day, someone asks the most expensive question in the building: *How many is enough?* Erlang is the math behind that answer. It translates *workload* (arrivals and handle time) into *staffing* under explicit queueing assumptions. At Level 1, you do not need to perfect the formula—you need to use it consistently as a baseline and then correct it in the day.

### What Erlang-C gives you (and what it assumes)

Erlang‑C estimates the probability of waiting and, from that, the staffing needed to meet a timeliness promise (e.g., 80/30). It works when the interval is reasonably stable and when its assumptions are close enough to reality:

- Poisson arrivals (random), exponential service (memoryless), FIFO queue.

- No abandonment within the interval, single skill, stationary conditions.

These are strong assumptions. They are why we pair the baseline with interval rules and intraday moves ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms)), and why we treat SL as a *guardrail*, not a proxy for quality.

### From workload to staffing (the minimal recipe)

Let λ be the arrival rate (calls per second) and s the average handle time (seconds). Offered load in erlangs is

\[R = \lambda \cdot s.\]

Given R and a trial number of agents N, the Erlang‑C waiting probability \(P(\text{wait})\) is

\[P(\text{wait}) = \frac{\dfrac{R^N}{N!}\,\dfrac{N}{N-R}}{\displaystyle \sum_{k=0}^{N-1}\frac{R^k}{k!} + \dfrac{R^N}{N!}\,\dfrac{N}{N-R}},\]

and the probability of answering within a target T seconds is

\[P(\text{answer} \le T) = 1 - P(\text{wait})\, e^{-(N-R)\,T/s}.\]

Increase or decrease N until the interval target (e.g., 80/30) is achieved, then adjust for shrinkage to convert to scheduled heads.

### A concrete example (matches our “Power of One” case)

- Interval: 30 minutes; volume: 200 calls; AHT: 415 seconds.

- Workload: \(R = \dfrac{200 \times 415}{30 \times 60} \approx 46.1\) erlangs.

Solving for an 80/30 goal:

- N = 52 agents ⇒ meets target,

- N = 51 agents ⇒ ~73%,

- N = 50 agents ⇒ ~65% (illustrating the “Power of One”).

After you find N, divide by \((1-\text{shrinkage})\) to get *scheduled* heads. With 30% shrinkage, 52/(1-0.30) ≈ 74.3 ⇒ 75 scheduled.

### How to use Erlang well at Level 1

- **Keep intervals consistent:** use the same interval length in the forecast, ACD data, and staffing math.

- **Publish the assumptions:** what counts as AHT, the abandon treatment, the SL threshold, and shrinkage segments.

- **Pair with guardrails:** set an occupancy band (e.g., 78–88%) so “hitting SL” does not mask burnout ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)).

- **Correct in real time:** use a small Rule→Trigger→Action log to adjust breaks, pull non-phone work, and protect training ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms)).

### When Erlang-C misleads (and what to do)

- **Abandonments present:** Erlang‑C overstates staffing. Either treat short abandons explicitly (definition in [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)) or use an abandonment-aware model (Erlang‑A/Erlang‑X) as you mature.

- **Multi-skill routing:** Interactions and skills interact non-linearly. Start with single-skill baselines per queue and validate with splits or simple simulation before adding complexity.

- **Choppy intervals:** If marketing spikes or outages make the interval non-stationary, shorten the interval or apply intraday rules; do not chase exactness in the formula.

##### Bottom line.

Erlang‑C is a useful baseline to translate service goals into initial staffing; it is not a full description of the day. Keep the plan honest with interval visibility and intraday rules: steer by explicit guardrails and pre-agreed micro-moves—hold occupancy within band, defend protected coaching, and trigger the smallest action ladder when intervals drift ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms), [“Goals (G) — KPI Integrity and Relevance”](/adaptive/chapter-08-level-2-foundational/#goals-g--kpi-integrity-and-relevance)). As you progress toward Level 2, standardizing inputs and shrinkage strengthens the baseline; higher levels introduce richer models where warranted.

## Roles (R) — Defining Essential Functions

Most Level 1 operations run on people wearing multiple hats. Supervisors and operations managers keep the day together: the numbers-savvy lead pulls reports, sketches a quick forecast, and tweaks the roster; the long-tenured supervisor shepherds onboarding and training; another watches queues between one-on-ones. A dedicated “WFM role” may not exist—and that’s okay. *Roles exist as work, not titles.* The work is forecasting, scheduling, and real-time management; the question is who owns each part today, and whether the handoffs are intentional or improvised.

### How the work actually flows (a morning in three moves)

##### 1) Forecasting — the silent first move.

Someone, often unofficially, decides what “busy” means today. They glance at last Tuesday, note the email campaign landing at noon, and adjust by feel. That quick call becomes the plan’s center of gravity. Even at Level 1, naming this responsibility matters. A lightweight interval view (15–30 minutes) and two posted notes—“campaign at 12:00,” “AHT up 0:30 since policy change”—turn a hunch into a shared starting point.

##### 2) Scheduling — turning intent into seats and time.

The roster looks tidy until the first absence hits. Breaks cluster by habit rather than design; coaching finds leftover spaces. When scheduling is just “who works when,” the day is one surprise away from a scramble. When scheduling is “who works when *to serve this forecast, with shrinkage protected*,” the same spreadsheet becomes an operating instrument. The difference is not software; it is ownership of rules: where breaks land, what protects training, and how swaps happen without unraveling the interval plan.

##### 3) Real-time — steering the next interval, not judging the last.

Reality edits the plan. Without a named real-time role, the floor reacts via group chat: “Anyone extend lunch?” “Can you jump on phones?” With a named role—even if it is the same person wearing a second hat—the conversation shifts to *pre-agreed levers*: pull one back-office task, nudge two breaks by five minutes, keep training unless SL drops below the threshold for two intervals. These micro-moves are small by design; their power is consistency.

### Why naming the roles matters (even when one person does all three)

Level 1 rarely affords three specialists. That’s fine. What matters is clarity of *which hat is on* and *how the handoff works*. When the same person forecasts and schedules, they still document the assumptions that real-time will inherit (expected volume, AHT, protected coaching). When a supervisor owns real-time for the morning, they need a one-page playbook that converts “SL dipping” into an agreed sequence of actions before canceling development. Clarity reduces firefighting and gives coaching time back to leaders otherwise stuck moving blocks.

### A Level-1 role charter (lightweight, real-world)

Two pages are enough to turn tacit habits into shared practice:

Forecasting (owner: *Name/Role*).  
Weekly 15–30 minute view; note known events; publish AHT assumption and service promise; record two uncertainties for the day. Hand off by 3:00 p.m. the prior day.

Scheduling (owner: *Name/Role*).  
Build to the forecast and shrinkage policy; place breaks to protect peaks; lock coaching windows with a save/skip rule. Hand off roster and “what changed” note by 5:00 p.m.

Real-time (owner: *Name/Role*).  
Monitor SL and occupancy bands; apply micro-moves before canceling development; log two intervals where reality diverged and why. Hand back the log at day’s end to improve tomorrow’s forecast.

### Skills that matter now (and scale later)

You do not need unicorns; you need three muscles that compound: *pattern sense* (seeing interval shapes), *math humility* (pairing every number with its assumption), and *clean communication* (explaining a staffing constraint in one sentence to a busy supervisor). Prior WFM software experience helps, but the habit of documenting assumptions and protecting shrinkage will pay off more than any tool at Level 1—and makes the Level 2 transition faster when the tool arrives.

### What changes tomorrow

Give the hats names. Publish a one-page role charter. Start a tiny “interval variance” log. Those three steps reclaim supervisor time for coaching, make scheduling more than calendar art, and give forecasting a feedback loop. The team will still improvise—only now, they’ll improvise on purpose.

*Bottom line.* Roles at Level 1 are not about headcount; they are about *ownership of decisions* that already exist. Name the work, agree the handoffs, and your operation stops reliving the same bad morning. In [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms) we turn these roles into repeatable processes so the play looks the same on Thursday as it did on Tuesday.

## Processes (P) — Creating Manual Rhythms

Level 1 runs on people, not platforms—but people need a rhythm. Processes give the day a beat: *what we do before the day, during the day, and after the day*, and how those moments roll up into the week and month. The goal is simple: make recurring work happen the same way twice so decisions arrive sooner and with less drama.

### The minimum viable rhythm (week  day  interval)

**Weekly.** Publish a one-page *Week Brief*: a 15–30 minute forecast for core hours, the key assumptions (AHT, drivers), the shrinkage policy, a calendar of known events, and two risks with planned responses. This is the working reference for the week.

**Daily.** Build the roster to the Week Brief: place breaks against peaks, lock coaching on purpose, and mark which shrinkage is protected versus flexible. Ship a short “what changed” note (absences, AHT, event timing).

**Intraday.** Every interval, read SL/ASA/occupancy against bands, then apply small, pre-agreed moves (pull one back-office task, nudge two breaks) before canceling development. Log the variance and action so tomorrow’s forecast learns.

This rhythm isn’t software; it’s sequence and handoff. Forecasting hands *assumptions* to scheduling; scheduling hands *constraints and protections* to real-time; real-time hands *variance notes* back to forecasting. When those handoffs are written, the same three people stop re-having the same Monday.

### The backbone artifacts (four pages you can run tomorrow)

##### 1) Source-of-truth workbook.

One shared file, one tab per week, interval rows, and columns for forecast arrivals, AHT, required staff (Erlang‑C), shrinkage, and scheduled staff. Lock definitions; change inputs, not formulas.

##### 2) Shrinkage policy (one page).

Name components (breaks, meetings, training, PTO, unplanned) and target rates; say how you apply them (to *required* staff to get *scheduled* staff) and when you protect training (e.g., only after two consecutive red intervals). This turns "we’ll try" into "we decided."

##### 3) Intraday playbook (one page).

Three micro-moves in order: (i) reclaim one task, (ii) shift two breaks by five minutes, (iii) unlock a flex pool. Include the guardrail that *keeps coaching unless* SL is below target for two intervals and occupancy is above band. Small, consistent moves beat heroic improvisation.

##### 4) Interval variance log (one page).

At day’s end, record two intervals where reality deviated: "10:30 SL 74%, occ 91% — volume +7%; noon SL 86% — AHT +0:40." This is the fuel that makes next week’s forecast smarter.

### Turn tacit habits into SOPs (lightweight, lived, and local)

Level 1 doesn’t need a binder; it needs clarity. Each core process gets a one-page SOP that answers five questions: *why, who, when, how, handoff*. Boxes are *breakable* so long SOPs paginate cleanly.

<aside class="callout">

**SOP — Weekly Forecast**

**Why** — Give Scheduling a believable 15–30 minute picture they can build around.  
**Owner** — Forecast lead (name/role)  
**Cadence** — Publish Thu 15:00 for next week  
**Inputs** — Last 4 comparable weeks by day/skill/channel; known events (campaigns, outages, holidays); current AHT trend.  
**Steps**

1.  Pull interval arrivals and AHT; smooth obvious anomalies.

2.  Annotate known events (e.g., "Tue 12:00 email drop").

3.  Set AHT assumption and note change vs. last week ( ± mm:ss).

4.  Compute *required staff* via Erlang‑C for the service promise (e.g., 80/30) ([“Erlang: The Mathematical Foundation”](/adaptive/chapter-07-level-1-initial/#erlang-the-mathematical-foundation)).

5.  Write two uncertainties (e.g., "Mon AHT may +0:20; Fri volume may -5%").

**Outputs** — One shared source-of-truth tab: Arrivals, AHT, Required Staff; plus a one-paragraph forecast note (events, assumptions, uncertainties).  
**QC** — Spot-check two peak intervals; confirm metric definitions; verify no missing intervals.  
**Handoff** — Tag Scheduling owner; attach note; archive as `/Forecasts/Weekly/v#.date`.

</aside>

<aside class="callout">

**SOP — Build the Roster**

**Why** — Turn the forecast into seats and time *with protections* (breaks, coaching, training).  
**Owner** — Scheduling lead (name/role)  
**Cadence** — Post Fri 17:00  
**Inputs** — Shrinkage policy (components + rates); coaching/training priorities; agent availability/preferences.  
**Steps**

1.  Apply shrinkage to *required* staff to get *scheduled* staff by interval ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)).

2.  Place breaks away from forecast peaks; stagger lunches across the crest.

3.  Block coaching/training windows; guardrail: keep unless two red intervals *and* occupancy above band.

4.  Resolve conflicts; document any overrides and rationale.

5.  Publish roster + "what changed vs. forecast" summary.

**Outputs** — Final roster (shared drive) + 7-day glance heatmap (coverage vs. required).  
**QC** — Two peak intervals hit SL with occupancy inside band; breaks don’t stack; protected windows visible.  
**Handoff** — Tag Real-time owner with protected windows and flex options.

</aside>

<aside class="callout">

**SOP — Intraday Control**

**Why** — Steer the *next* interval, not judge the last.  
**Owner** — Real-time lead (name/role)  
**Cadence** — Every 15–30 minutes  
**Inputs** — Live SL and occupancy; roster/protections; micro-moves playbook; thresholds (e.g., SL < target two intervals; occupancy > band).  
**Steps**

1.  Read interval SL + occupancy.

2.  If SL low *and* occupancy high, apply micro-moves in order:

    1.  Reclaim one back-office task (pre-named agents).

    2.  Nudge two breaks by five minutes.

    3.  Unlock a small flex pool (pre-approved).

3.  Keep coaching/training unless both thresholds trip; if canceled, re-book within 48h.

4.  Log two variance intervals (what moved: arrivals, AHT, staffing) for the end-of-day review.

**Outputs** — Quick action log in the shared variance sheet (time, move, reason, result).  
**QC** — No "break cliffs"; micro-moves precede cancellations; occupancy remains within band over the hour.  
**Handoff** — Post end-of-day variance notes for the forecaster; tag Scheduling if protections were used.

</aside>

### Quality without bureaucracy

A process exists when two things happen the same way in a row. Level 1 quality is simply *visible checkpoints* at the points of highest leverage: (i) *before* the week (are the assumptions written?), (ii) *before* the day (are breaks placed to protect peaks?), and (iii) *after* the day (did we learn anything we will use tomorrow?). Keep reviews to ten minutes; look for drift from *definitions*, not sinners to blame.

### What changes tomorrow

When the board turns amber, you will still improvise—but now on purpose. The forecaster left a reason for AHT; the scheduler left guardrails; real-time has three small moves that preserve coaching before sacrificing it. At day’s end, two intervals go into the variance log, and the loop closes. That is what "process" means at Level 1: *the same people, making better decisions, sooner.*

*Bottom line.* Processes do not make the work rigid; they make it repeatable. Start with the rhythm (week  day  interval), the four backbone artifacts, and three one-page SOPs. When the tool arrives in Level 2, you will already be operating like a team that knows what it wants the tool to do.

## Sample SOPs for Level 1

This packet turns the rhythm from [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms) into three one-page SOPs you can run on Monday. They are *instruments*, not paperwork: light, repeatable, and written in the language of the floor. Map them directly to the cadence—*week* → *day* → *interval*—so the same work happens the same way twice.

<aside class="callout">

**SOP 1 — Weekly Forecast**

**Purpose** — Give Scheduling a believable 15–30 minute picture they can build around.  
**Owner** — Forecast lead (name/role)  
**Cadence** — Publish Thu 15:00 for next week  
**Inputs** — Last 4 comparable weeks by day/skill/channel; known events (campaigns, outages, holidays); current AHT trend.  
**Steps**

1.  Pull interval arrivals and AHT; smooth obvious anomalies.

2.  Annotate known events (e.g., "Tue 12:00 email drop").

3.  Set AHT assumption and note change vs. last week ( ± mm:ss).

4.  Compute *required staff* via Erlang‑C for the service promise (e.g., 80/30) ([“Erlang: The Mathematical Foundation”](/adaptive/chapter-07-level-1-initial/#erlang-the-mathematical-foundation)).

5.  Write two uncertainties (e.g., "Mon AHT may +0:20; Fri volume may -5%").

**Outputs** — One shared source-of-truth tab: Arrivals, AHT, Required Staff; plus a one-paragraph forecast note (events, assumptions, uncertainties).  
**QC** — Spot-check two peak intervals; confirm metric definitions; verify no missing intervals.  
**Handoff** — Tag Scheduling owner; attach note; archive as `/Forecasts/Weekly/`

</aside>

<aside class="callout">

**SOP 2 — Build the Roster**

**Purpose** — Turn the forecast into seats and time *with protections* (breaks, coaching, training).  
**Owner** — Scheduling lead (name/role)  
**Cadence** — Post Fri 17:00  
**Inputs** — Forecast tab (required staff); shrinkage policy (components + rates); coaching/training priorities; agent availability/preferences.  
**Steps**

1.  Apply shrinkage to *required* staff to produce *scheduled* staff by interval ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)).

2.  Place breaks away from forecast peaks; stagger lunches across the crest.

3.  Block coaching/training windows; guardrail: keep unless two red intervals *and* occupancy above band.

4.  Resolve conflicts and coverage gaps; document any manual overrides.

5.  Publish the roster and a "what changed vs. forecast" summary.

**Outputs** — Final roster (shared drive) + 7-day glance heatmap (coverage vs. required).  
**QC** — Two peak intervals meet SL with occupancy inside band; breaks do not stack; protected windows visible.  
**Handoff** — Tag Real-time owner with protected windows and flex options.

</aside>

<aside class="callout">

**SOP 3 — Intraday Control**

**Purpose** — Steer the *next* interval, not judge the last.  
**Owner** — Real-time lead (name/role)  
**Cadence** — Every 15–30 minutes  
**Inputs** — Live SL and occupancy; roster/protections; micro-moves playbook; thresholds (e.g., SL < target two intervals; occupancy > band).  
**Steps**

1.  Read interval SL + occupancy.

2.  If SL low *and* occupancy high, apply micro-moves in order:

    1.  Reclaim one back-office task (pre-named agents).

    2.  Nudge two breaks by 5 minutes.

    3.  Unlock a small flex pool (pre-approved).

3.  Keep coaching/training unless both thresholds trip; if canceled, re-book within 48h.

4.  Log two variance intervals (what moved: arrivals, AHT, staffing) for the end-of-day review.

**Outputs** — Quick action log in the shared variance sheet (time, move, reason, result).  
**QC** — No "break cliffs"; micro-moves precede cancellations; occupancy remains within band over the hour.  
**Handoff** — Post end-of-day variance notes for the forecaster; tag Scheduling if protections were used.

</aside>

*How to adopt (one hour, no new tools).* You can copy these templates from the WFM Labs wiki at <https://wiki.wfmlabs.org/wiki/Level_1_Process_Templates>, or build your own with the steps below. For context and updates, see the WFM Labs Companion in Appendix [WFM Labs Companion — Living Resources](/adaptive/wfm-labs-companion/) and the landing page <https://wfmlabs.org>. Resources evolve; the wiki is the authoritative source.

- Create (or copy) the three one-page SOPs; assign owners and cadences.

- Add a single “variance log” sheet with columns: interval; lever moved (arrivals/AHT/staffing); action taken; outcome.

- Agree guardrails once (SL threshold, occupancy band, abandon treatment) and reference them in each SOP.

- Version and archive: if it changed, increment the version; if it repeats, keep it in the SOP.

*Governance in one line.* If it changed the plan, it goes in the variance log; if it keeps happening, it becomes an SOP; if an SOP is ignored twice, fix the SOP or the goal.

## Interpersonal (I) — People as Process

When the queue tightens, the floor changes in subtle ways: side conversations pause, eyes move to the wallboard, a supervisor hovers between pods. Agents adjust without being asked—one shortens wrap, another delays a coffee. None of that shows on a dashboard, yet it often decides whether a wobble becomes a slide. In a contact center, *people* absorb variance first. The task of Workforce Management (WFM) at Level 1 is not to squeeze harder; it is to design the day so people do not pay for instability with their energy.

The Service–Profit Chain ([“The Service-Profit Chain”](/adaptive/chapter-04-frameworks/#the-service-profit-chain)) frames this simply: engaged employees create better customer outcomes, which sustain the business. WFM often enters as “coverage and cost,” but the moment you protect coaching, place breaks on purpose, and give agents a say in their schedules, you are engineering the employee experience. The numbers follow.

### From control to partnership

Level 1 organizations often inherit assembly-line habits: rigid rosters, adherence as policing, occupancy celebrated without context. These keep the lights on, but they also teach agents to brace for the day rather than shape it. A small stance shift—*from controlling to partnering*—changes the conversation:

> *Control says:* “Be in the right place at the right time.”  
> *Partnership adds:* “Here is why this interval matters, here is your voice in how we get there, and here is the time we protect so you stay great at the job.”

Partnership does not lower goals; it clarifies and co-owns them. It ties the **Goals** in [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics) to the **Roles** in [“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions) and the **Processes** in [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms) so the day feels designed, not improvised.

### Four promises that turn intent into trust

In Level 1, technology is light and time is tight. Trust grows from four interpersonal promises you can deliver immediately:

##### 1) Predictability.

Post schedules on time. Place breaks to protect peaks *and* keep them stable. If something must move, use a small, pre-agreed nudge (five minutes, not fifty) and explain why. Predictability lowers cognitive load and makes adherence feel fair.

##### 2) Fairness.

Publish simple rules for PTO, shift bids, swaps, and overtime. When exceptions happen, record them once and apply them the same way next time. Fairness beats generosity—it lets agents plan their lives.

##### 3) Voice.

Capture preferences (start times, days off, training interest) and show where they shaped the roster. Even at Level 1, a basic preference form and a monthly review create visible influence without promising what you cannot deliver.

##### 4) Development.

Protect coaching and training with guardrails. If variance forces a cancellation, re-book within 48 hours. Nothing signals priorities more loudly than whether development survives a busy day.

### What this looks like on the floor (a short vignette)

The forecast note and AHT assumption are pinned in the team channel before opening. Two agents swapped lunches using the posted rules; the roster already reflects it. When SL dips and occupancy runs hot, the real-time owner applies the first micro-move from the playbook (pull one back-office task) and posts a one-line update: “Pulled Casey from email for a short window; training stays.” Agents see the *why*, not just the ask. Later, a supervisor thanks the team for holding the peak and calls out a clean save from a new hire. The variance log captures two red intervals to inform tomorrow’s forecast note. No heroics—just a designed day.

### A lightweight working agreement (fits on half a page)

<aside class="callout">

**Team Working Agreement — Level 1**

**Our promise to customers:** We will meet our interval service goal (e.g., 80/30) with stable performance.

**Our promise to each other:**

1.  **Predictability:** Schedules posted by Fri 17:00; breaks move in five-minute nudges only, with reason.

2.  **Fairness:** PTO, swaps, and OT follow posted rules; exceptions are logged and reused.

3.  **Voice:** Preference capture quarterly; where used is shown in the roster note.

4.  **Development:** Coaching blocks protected; if canceled, re-book within 48h.

**How we’ll talk:** One-line updates for intraday changes (time, move, why). End-of-day: two-interval variance note; no blame, just inputs for tomorrow.

</aside>

### Making adherence humane

Adherence matters most when it is least comfortable. Treat it as a *support mechanism*: a way to keep promises to customers and protect time for development, not a surveillance tool. Share the occupancy band openly (e.g., 78–88%) and the reason behind it—high, sustained occupancy predicts fatigue and quality drift; very low occupancy signals waste. When someone misses a window, start with context (“what blocked you?”) before consequence. Coaching first, policy second.

### A short huddle exercise: Power of One for people

Numbers land when they become personal. Once per month, run a ten-minute huddle:

1.  Show last Tuesday’s tightest interval and the effect of “+1 / –1 agent” on SL (see [Figure 7.2](/adaptive/chapter-07-level-1-initial/#fig-powerofone)).

2.  Ask two agents to narrate how a five-minute break nudge or a quick channel swap felt in the moment.

3.  Close with one concrete commitment (e.g., “we’ll pre-name two flexes for Wednesdays”).

This connects staffing math to lived experience and turns compliance into shared craft.

### Why this belongs in Level 1

You do not need new software to keep these promises. You need steady goals ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics)), named roles ([“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions)), and simple processes that honor people when the plan bends ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms)). As technology arrives in Level 2, these interpersonal foundations multiply its value: preference capture becomes automated bidding, humane adherence becomes real-time nudges, and protected coaching becomes scheduled capacity, not an afterthought.

*Bottom line.* Interpersonal design is not a “soft add-on” to WFM; it is how the plan becomes a day people can sustain. Build predictability, fairness, voice, and development into Level 1, and the system will carry you when the queue does what queues do.

## Technology (T) — Foundational Tools

Before the first call connects, the systems are already shaping the day: routing rules decide who will see which demand, messages set expectations, and wallboards translate traffic into signals. A scheduler compares today’s forecast to yesterday’s reality and wonders if there is a cleaner way to keep those views in sync. Level 1 runs on people and improvisation; technology becomes the lever when we want the day to feel *designed* instead of lucky.

This section is not a shopping list. It is a map. We name the core technology categories, show how they support the work you already do, and define a lightweight Level-1 “starter stack” that respects manual realities while preparing you for Level 2.

### Why technology matters at Level 1 (and what it does not do)

Tools will not replace judgment in a volatile queue; they make judgment faster, more consistent, and more shareable. The point at Level 1 is *minimal instrumentation*: one place to see the plan, one way to speak about performance in intervals, and one path to turn variance into a small, timely move. As maturity grows, these same categories add automation and prediction, but they pay off only if the goals, roles, and processes from [“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics), [“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions), and [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms) already exist.

### Eight core categories (what they are and how they help)

##### 1) Telephony & Channel Management (ACD/IVR/digital).

Routes demand to capacity and shapes the first seconds of customer experience. At Level 1, ensure queues/skills reflect reality and IVR messages match today’s truth; avoid orphaned skills and stale prompts.

##### 2) WFM/WFO Platforms.

Purpose-built for forecasting, scheduling, adherence, and (in WFO) quality/coaching. Level 1 can live without it briefly, but this is the anchor investment for Level 2; until then, mirror its logic in a single source-of-truth workbook.

##### 3) Real-Time Monitoring & displays.

Surface interval SL/ASA/abandon and occupancy so the next move is obvious. A “Resource Optimization Center” can be one screen and a ritual before it is a room with video walls.

##### 4) WFM automation.

From consistent micro-moves (break nudges, channel flex) to automated intraday re-optimization. Once you’ve reached Level 2, automation is a natural progression. Design the playbooks first ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms)), then automate its execution.

##### 5) Advanced Forecasting & Decision Support.

Erlang, time-series methods, and simple simulations make plans resilient; advanced algorithms arrive later to detect patterns and anomalies. Level 1 needs *clarity of inputs* first.

##### 6) Reporting & Analytics.

Turn raw exports into interval-level narratives your team can act on. Start with a daily “three intervals to learn from” view; grow toward dashboards when definitions are stable.

##### 7) Employee Engagement & Development.

Scheduling preferences, coaching delivery, feedback loops. At Level 1, a form and a rule beat an app and confusion; by Level 3, off-phone development can be placed dynamically.

##### 8) Data Plumbing & Integration (ETL/warehouse/connectors).

The quiet enabler: consistent definitions and repeatable loads from ACD/WFM to your workbook or BI tool. Even a small, well-labeled folder structure with scripted exports is a Level-1 win.

### A compact view (purpose Level-1 minimum)

| **Category**    | **Primary purpose**                                          | **Level-1 minimum that works**                                                       |
|:----------------|:-------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| ACD/IVR/digital | Route demand; set expectations.                              | Clean queue/skill map; current IVR; weekly check that skills match roster.           |
| WFM/WFO         | Forecast/schedule/adherence; in WFO, quality/coaching.       | Single shared workbook mirroring WFM logic; interval plan + shrinkage; posted rules. |
| Real-time       | See & steer intervals.                                       | One live wallboard + 10-min cadence; three pre-agreed micro-moves.                   |
| Automation      | Execute small changes fast.                                  | None required yet; document triggers so automation can be added later.               |
| Forecasting/DS  | Predict and test scenarios (Erlang, smoothing, simple sims). | Erlang‑C sheet; simple smoothing; written assumptions and two uncertainties.         |
| Reporting/BI    | Explain what happened; reveal patterns.                      | End-of-day “two intervals that moved” note; weekly trend snapshot.                   |
| Engagement/dev  | Voice, coaching, growth.                                     | Preference capture; protected coaching blocks; re-book within 48h if canceled.       |
| Data plumbing   | Reliable definitions/flows.                                  | Named exports; versioned folders; one “read me” with field definitions.              |

### Level-1 starter stack (so you can start tomorrow)

<aside class="callout">

**Minimal, manual, and real**

**One workbook as the system:** tabs for Forecast (arrivals, AHT, required staff via Erlang‑C), Roster (scheduled staff with shrinkage), Live Read (copy/paste from wallboard), and Variance Log (two intervals/day, what moved and why).

**One Real-Time screen:** SL/ASA/abandon and occupancy by interval; a 10-minute huddle cadence; three micro-moves in order before canceling development ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms)).

**One rule file as governance:** SL definition (incl. abandons), occupancy band, shrinkage components, PTO/shift-swap rules, and how intraday changes are communicated.

</aside>

### How this scales into Level 2

When the workbook starts to creak—too many skills, channels, or sites—use that pain to specify your first WFM platform. Your readiness signals:

- **Stable definitions** (SL/ASA/abandon, occupancy band, shrinkage policy) already in use.

- **Cadence discipline** (weekly forecast, daily roster, intraday huddles, variance log) observed for at least 6–8 weeks.

- **Volume/complexity** (multi-skill, multi-site, blended channels) now outgrows manual edits.

At Level 1, focus on understanding the tech you already run. Your routing/telephony platform—and its data—is the anchor: map channels → IVR/skills → queues → reports/exports, and lock metric definitions in one workbook/BI view. Then expand by need: tighten scheduling if coverage hurts, stabilize wallboards/BI if visibility lags, and formalize micro-moves before any automation.

### A note on adjacent systems

Recording, speech analytics, knowledge, and CRM are outside WFM’s direct remit but shape workload and quality. Treat them as signal sources: if knowledge gaps drive AHT up, that belongs in the forecast note; if CRM latency spikes, the team should see it next to SL/ASA so the day can be defended, not endured.

*Bottom line.* Technology at Level 1 is less about features and more about *fit*: one place for the plan, one view of reality, one path for action. Get those three right and the move to Level 2 is an upgrade, not a reboot.

## Advancing from Level 1 to Level 2

Two views shape tomorrow’s operation: what *actually* happened (yesterday’s intervals) and what we *intend* to happen (today’s roster and rules). Moving up a level is not a tool purchase—it is a set of agreements the team can keep. The GRPIT frame from this chapter gives those agreements a place to live: **Goals**, **Roles**, **Processes**, **Interpersonal**, and **Technology**. We use it to turn manual reality into a durable foundation.

### What “moving up” actually means

Level 2 does not mean perfect forecasting or zero volatility. It means your service promise is explicit and measured in intervals; roles are named with clean handoffs; processes run the same way two days in a row; people see fairness and development in the plan; and technology makes those habits faster instead of fragile.

### A map you can put on the wall by tomorrow

| **GRPIT Area**        | **What Level 2 expects**                                                                                    | **What to start at Level 1 (this week)**                                                                                                                                                                                                                                                                      |
|:----------------------|:------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Goals (G)**         | Interval SL defined (incl. abandons), occupancy band, shrinkage policy; daily read at interval granularity. | Publish SL (e.g., 80/30), how you treat short abandons, an occupancy band (e.g., 78–88%), and shrinkage components; pin to the roster note ([“Goals (G) — Building Core Metrics”](/adaptive/chapter-07-level-1-initial/#goals-g--building-core-metrics) and [“Service Level: Common Misconceptions”](/adaptive/chapter-07-level-1-initial/#service-level-common-misconceptions)). |
| **Roles (R)**         | Named owners for forecast, scheduling, and real-time with written handoffs.                                 | Name the hats; write a half-page role charter and a handoff time (Thu 15:00 forecast; Fri 17:00 roster) ([“Roles (R) — Defining Essential Functions”](/adaptive/chapter-07-level-1-initial/#roles-r--defining-essential-functions)).                                                                                                                      |
| **Processes (P)**     | Weekly forecast roster intraday control variance loop.                                                      | Stand up the workbook tabs; run the three one-page SOPs; log two variance intervals per day ([“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms) and [“Sample SOPs for Level 1”](/adaptive/chapter-07-level-1-initial/#sample-sops-for-level-1)).                                                |
| **Interpersonal (I)** | Predictability, fairness, voice, development visible in the plan.                                           | Post schedules on time; apply swap/PTO rules consistently; protect coaching or re-book within 48h; run a 10-min “Power of One” huddle monthly ([“Interpersonal (I) — People as Process”](/adaptive/chapter-07-level-1-initial/#interpersonal-i--people-as-process)).                                                                             |
| **Technology (T)**    | Core ACD platform + stable definitions into reporting.                                                      | Map technology layout; understand call routing and data flows; lock definitions in one workbook/BI; keep one rules file; defer automation ([“Technology (T) — Foundational Tools”](/adaptive/chapter-07-level-1-initial/#technology-t--foundational-tools)).                                                                                 |

### Your first 90 days: small, durable wins

<aside class="callout">

**A 30–60–90 that survives busy days**

**Days 1–30 (Make the promises visible).** Publish SL definition (incl. short-abandon policy), occupancy band, and shrinkage components. Name owners for Forecast, Scheduling, Real-Time. Launch the three SOPs from [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms). End each day with two variance intervals and a one-paragraph note.

**Days 31–60 (Tighten the handoffs).** Move break placement off habit and onto the forecast. Protect coaching with a guardrail (only cancel after two red intervals *and* high occupancy). Start a weekly 15-minute review that checks definitions before numbers.

**Days 61–90 (Instrument and specify).** Stabilize a simple real-time data cadence (one screen, 10-minute rhythm). Replace one high-pain manual step with a scripted export/import. Write a one-page WFM platform spec focused on *one* pain (e.g., schedule generation or real-time adherence), not ten features.

</aside>

### The three levers that move everything else

##### 1) Make the math trustworthy.

Erlang‑C turns your promise into seats; use it at the interval level and write the assumptions you changed (arrivals, AHT, target). The goal is not perfect precision—it is *repeatable translation* from goal to staffing and back ([“Erlang: The Mathematical Foundation”](/adaptive/chapter-07-level-1-initial/#erlang-the-mathematical-foundation)).

##### 2) Protect development as capacity, not charity.

If coaching always loses to variance, variance will always win. Use the intraday guardrail from [“Processes (P) — Creating Manual Rhythms”](/adaptive/chapter-07-level-1-initial/#processes-p--creating-manual-rhythms): micro-moves first; cancel only after thresholds; re-book inside 48 hours. Quality follows the time you actually protect.

##### 3) Read intervals, not averages.

A green daily SL can hide red intervals that customers actually lived. Pair SL with ASA and occupancy; decide the next interval’s move, then log what you learned for tomorrow ([“Service Level: Common Misconceptions”](/adaptive/chapter-07-level-1-initial/#service-level-common-misconceptions)).

### Readiness signals that you’re crossing into Level 2

You will feel the shift before you sign a software contract:

- Definitions (SL/ASA/abandon, shrinkage, occupancy) are posted and used in daily talk.

- The weekly forecast, roster, intraday cadence, and variance log run for 6–8 weeks without collapsing during peaks.

- Pain concentrates: manual schedule edits, real-time adherence visibility, or multi-skill coordination is now the bottleneck, not confusion.

### Building the case for your first WFM platform (one page, not a novel)

Keep it concrete: *today’s failure mode, tomorrow’s capability, measurable effect*.

**Problem.**  
“Manual edits consume 6 hours/week; late changes create two red intervals most days.”

**Capability.**  
“Auto-generated schedules from interval forecast + real-time adherence visibility.”

**Effect.**  
“Reduce manual edits by 75%; cut red intervals by 40%; reallocate 4 hours/week to coaching.”

Vendors can help model ROI; your job is to anchor the math to *your* intervals, shrinkage policy, and occupancy band so the savings aren’t imaginary.

*Bottom line.* Advancing from Level 1 to Level 2 is less a leap than a cadence. Make the promises visible, name the hats, run the rhythm, and let technology scale the habits you can already keep. When the board goes amber tomorrow, the plan will bend—and the team will not break.

### What to read while you build

Use references to sharpen the practices you are already running, not to delay them. Two books operationalize the foundations this chapter introduces.

##### Koole’s *Call Center Optimization*

translates queueing theory into accessible Excel tools and online calculators at gerkoole.com/CCO. His treatment deepens the Erlang–C foundations from [“Erlang: The Mathematical Foundation”](/adaptive/chapter-07-level-1-initial/#erlang-the-mathematical-foundation) and addresses interval staffing with the occupancy-service level tradeoff that prevents the fantasy of simultaneously high service and high efficiency. Test the calculators before investing in WFM software—theory becomes immediate capability.(Koole 2013)

##### Cleveland’s *Contact Center Management on Fast Forward*

is the definitive foundation for running contact centers—broader than WFM and the handbook to keep at your side as you climb the maturity curve. It frames the whole system (strategy, customer experience, operations) and then delivers the practical mechanics: the 9-step planning process, clear base-staff calculations, and guardrails such as avoiding extended levels of high occupancy. Start here; return often.(Cleveland 2019)

Both books balance mathematical rigor with operational humanity. Together, they ground the GRPIT components—goal articulation, role clarity, process standardization, interpersonal effectiveness, and technology evaluation—in proven practice.

## References

<div id="refs" class="references csl-bib-body">

<div id="ref-cleveland2019" class="csl-entry">

Cleveland, Brad. 2019. *Contact Center Management on Fast Forward: Succeeding in the New Era of Customer Experience*. 4th ed. Annapolis, MD: ICMI Press.

</div>

<div id="ref-koole2013" class="csl-entry">

Koole, Ger. 2013. *Call Center Optimization*. Amsterdam: MG Books.

</div>

<div id="ref-reynolds2005" class="csl-entry">

Reynolds, Penny. 2005. *The Power of One*. 3rd ed. Nashville, TN: The Call Center School Press.

</div>

</div>
