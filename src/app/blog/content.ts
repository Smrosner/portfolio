export interface BlogPost {
  slug: string;
  title: string;
  metric?: string;
  status?: string;
  publishDate: string;
  readTime: string;
  summary: string;
  templateFocus: string;
  topics: string[];
  content: string[];
}

export const featuredBlogPosts: BlogPost[] = [
  {
    slug: "frontend-performance-turnaround",
    title: "From 10.1s to 4.5s: A Frontend Performance Turnaround",
    metric: "10.1s -> 4.5s speed index",
    publishDate: "March 2026",
    readTime: "8 min read",
    summary:
      "A practical playbook for profiling bottlenecks, removing fetch waterfalls, and improving perceived speed without backend changes.",
    templateFocus:
      "Template focus: problem framing, profiling workflow, optimization sequence, and before/after metrics.",
    topics: ["Performance", "React", "Next.js", "Web Vitals"],
    content: [
      "When I joined the project, the core user flow felt slow at every step. The measured speed index was 10.1 seconds, and that delay was visible to users immediately.",
      "I started by profiling render paths and network waterfalls to isolate what was expensive on first load. Most gains came from removing redundant fetches and reducing unnecessary work before the first meaningful paint.",
      "After that pass, speed index dropped to 4.5 seconds. It was not perfect, but it dramatically improved perceived performance and gave the team room to prioritize deeper backend optimizations.",
    ],
  },
  {
    slug: "reliable-ai-document-ingest-pipeline",
    title: "Designing a Reliable AI Document Ingest Pipeline",
    metric: "50k+ docs, <200ms retrieval",
    publishDate: "March 2026",
    readTime: "10 min read",
    summary:
      "How to structure ingestion, chunking, vector storage, and operational safeguards for large mixed-format document sets.",
    templateFocus:
      "Template focus: architecture boundaries, reliability patterns, and scaling checkpoints.",
    topics: ["AI", "RAG", "Supabase", "pgvector", "TypeScript"],
    content: [
      "The challenge was building one system that could ingest mixed document formats and still support low-latency semantic retrieval.",
      "I split responsibilities into ingestion, indexing, and query-serving boundaries. That made it easier to reason about failures, retry behavior, and operational observability at each stage.",
      "The end result was a maintainable platform that scaled beyond 50k documents while preserving practical query speed and relevance for real user workflows.",
    ],
  },
  {
    slug: "money-safe-logic-javascript-systems",
    title: "Money-Safe Logic in JavaScript Systems",
    metric: "Launch-ready for 10k+ users",
    publishDate: "April 2026",
    readTime: "7 min read",
    summary:
      "Lessons from fixing financial correctness under deadline pressure: data representation, rounding safety, and regression guards.",
    templateFocus:
      "Template focus: correctness risks, implementation safeguards, and release readiness criteria.",
    topics: ["Backend", "Node.js", "Testing", "Financial Systems"],
    content: [
      "Money systems fail in small ways that become expensive at scale. The first step is always auditing representation and rounding behavior end to end.",
      "I standardized value handling, introduced safer calculation paths, and added regression tests around high-risk financial operations.",
      "That shifted the system from fragile to predictable and gave product and operations teams confidence ahead of launch.",
    ],
  },
  {
    slug: "secure-third-party-session-integrations",
    title: "Building Secure Third-Party Session Integrations",
    metric: "No secret leakage in logs",
    publishDate: "April 2026",
    readTime: "6 min read",
    summary:
      "A step-by-step approach for token safety, request validation, and actionable error handling in external API workflows.",
    templateFocus:
      "Template focus: threat model, guardrails, observability, and failure-mode handling.",
    topics: ["Security", "APIs", "Next.js", "Reliability"],
    content: [
      "Third-party session flows often treat identifiers like bearer credentials, so security boundaries must be explicit from day one.",
      "I focused on protecting secrets in logs, validating inputs early, and returning actionable error messages for upstream failures.",
      "The outcome was a safer and more operable integration where failures were debuggable and token exposure risk was significantly reduced.",
    ],
  },
];

export const backendLearningNotes: BlogPost[] = [
  {
    slug: "backend-transition-post-01",
    title:
      "Why I Built a Backend Learning Repo Instead of Taking Another Course",
    metric: "Total hours invested in backend transition",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Practical contribution readiness beats passive learning.",
    templateFocus:
      "Template focus: transition motivation, 6-week structure, and contribution-readiness outcomes.",
    topics: ["Backend Transition", ".NET", "Learning Systems"],
    content: [
      "I started this transition because I wanted real backend contribution confidence, not just course completion.",
      "This post will walk through why I chose a repo-based plan and how it keeps learning tied to production realities.",
      "Practical takeaway: define your learning goal as contribution readiness, then design your plan around trace-change-test-explain cycles.",
    ],
  },
  {
    slug: "backend-transition-post-02",
    title: "My Real Objective Is Not to Learn .NET",
    metric: "Weekly plan completion rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "The target is safe execution in real codebases.",
    templateFocus:
      "Template focus: objective framing, practical metrics, and behavior-based progress checks.",
    topics: ["Backend Transition", ".NET", "Execution Mindset"],
    content: [
      "This post explains why language familiarity is not the same as production contribution readiness.",
      "I will break down the skills that actually matter: tracing, safe additive changes, testing, and communicating risk.",
      "Practical takeaway: define progress by behavior under constraints, not by syntax memorization.",
    ],
  },
  {
    slug: "backend-transition-post-03",
    title: "The 5-Step Loop I Use to Learn Backend Fast",
    metric: "5-step learning loop completion rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Repeatable loops beat random content consumption.",
    templateFocus:
      "Template focus: learning loop mechanics, session structure, and compounding outcomes.",
    topics: ["Learning Systems", "Backend", "Career Growth"],
    content: [
      "I use a repeatable loop: learn concept briefly, trace implementation, make a tiny change, test, then reflect.",
      "This post shows how a loop removes decision fatigue and keeps momentum steady across weeks.",
      "Practical takeaway: turn your learning process into a reusable system before scaling scope.",
    ],
  },
  {
    slug: "backend-transition-post-04",
    title: "The Rule That Prevents Most Beginner Backend Mistakes",
    metric: "Bugs caught during tracing before coding (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Flow tracing reduces regressions and confusion.",
    templateFocus:
      "Template focus: trace-first workflow, debugging speed, and change safety.",
    topics: ["Architecture", "Debugging", "Backend"],
    content: [
      "My core rule is trace first, change later. It prevents blind edits and improves confidence quickly.",
      "I’ll share how request flow tracing uncovered hidden dependencies before any implementation work started.",
      "Practical takeaway: map the full request path before touching code when stakes are non-trivial.",
    ],
  },
  {
    slug: "backend-transition-post-05",
    title: "The Hidden Complexity Behind One API Response",
    metric: "Average layers touched per endpoint trace (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "API responses hide architectural decisions.",
    templateFocus:
      "Template focus: middleware, controller, service, repository, and contract shaping.",
    topics: ["API Design", "Architecture", "Backend"],
    content: [
      "A simple endpoint often crosses multiple layers with important design and reliability implications.",
      "This post unpacks each stage so hidden complexity becomes visible and manageable.",
      "Practical takeaway: treat each response as an architectural pipeline, not a single function output.",
    ],
  },
  {
    slug: "backend-transition-post-06",
    title: "Frontend-to-Backend Translation Guide That Helped Me",
    metric: "Frontend->backend concept mappings documented (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Familiar analogies accelerate backend learning.",
    templateFocus:
      "Template focus: concept mapping from frontend patterns to backend architecture.",
    topics: ["Full-Stack", "Backend Transition", "Learning Systems"],
    content: [
      "I translated familiar frontend concepts into backend equivalents to reduce ramp-up friction.",
      "This post will cover useful mappings like props to DTO contracts and waterfalls to query-shape risks.",
      "Practical takeaway: reuse mental models you already trust to learn unfamiliar stacks faster.",
    ],
  },
  {
    slug: "backend-transition-post-07",
    title: "Controller, Service, Repository: What Goes Where",
    metric: "Layer-boundary violations identified/fixed (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Clear boundaries improve testability and change safety.",
    templateFocus:
      "Template focus: responsibility boundaries, anti-patterns, and review heuristics.",
    topics: ["Architecture", "Backend", "Testing"],
    content: [
      "Layer boundaries are one of the fastest ways to improve backend maintainability.",
      "I’ll share examples of where logic should live, where it should not, and why that matters for testing.",
      "Practical takeaway: use boundary checks before merge to reduce long-term maintenance cost.",
    ],
  },
  {
    slug: "backend-transition-post-08",
    title: "DI Finally Clicked Once I Traced Registrations",
    metric: "DI registrations successfully traced to runtime usage (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Dependency injection gets easier when mapped to request flow.",
    templateFocus:
      "Template focus: service registration, resolution path, and runtime debugging.",
    topics: [".NET", "Dependency Injection", "Backend"],
    content: [
      "DI can feel abstract until you follow registrations into actual runtime behavior.",
      "This post documents the exact tracing approach that made DI practical for me.",
      "Practical takeaway: diagnose DI issues by stepping through registration-to-resolution flow, not just container config.",
    ],
  },
  {
    slug: "backend-transition-post-09",
    title: "The DTO Mindset Shift That Changed My API Design",
    metric: "DTO changes shipped with zero client breakage (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "DTOs are public contracts, not internal implementation details.",
    templateFocus:
      "Template focus: contract safety, additive changes, and migration checklists.",
    topics: ["API Contracts", "DTOs", "Backend"],
    content: [
      "I now treat DTO changes as client-impacting product decisions, not casual refactors.",
      "This post covers safe additive changes and high-risk changes to avoid.",
      "Practical takeaway: before DTO edits, check mapping, tests, docs, and backward compatibility impact.",
    ],
  },
  {
    slug: "backend-transition-post-10",
    title: "How I Think About Backward Compatibility Now",
    metric: "Backward-compatible API releases in a row (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Contract stability is product reliability.",
    templateFocus:
      "Template focus: breaking-change detection, additive design, and release communication.",
    topics: ["API Evolution", "Contracts", "Reliability"],
    content: [
      "Backward compatibility became concrete once I saw how tiny contract changes can break real clients.",
      "This post outlines a practical compatibility decision framework for iterative API evolution.",
      "Practical takeaway: default to additive changes and communicate deprecations early with clear timelines.",
    ],
  },
  {
    slug: "backend-transition-post-11",
    title: "C# Lessons I Wish I Knew on Day 1",
    metric: "New C# concepts applied in code (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Transferable engineering habits matter more than syntax fear.",
    templateFocus:
      "Template focus: async/await discipline, nullability, typing, and conventions.",
    topics: ["C#", ".NET", "Backend Transition"],
    content: [
      "I’ll share the early C# lessons that unlocked practical confidence faster than syntax drills.",
      "The focus is on transferable engineering habits: nullability awareness, async discipline, and consistency.",
      "Practical takeaway: adopt conventions early to reduce avoidable review and maintenance churn.",
    ],
  },
  {
    slug: "backend-transition-post-12",
    title: "ASP.NET Core Pipeline Explained Like a Frontend Engineer",
    metric: "Middleware components mapped in request flow (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Middleware order and routing explain many bugs.",
    templateFocus:
      "Template focus: pipeline stages, auth checkpoints, and response shaping.",
    topics: ["ASP.NET Core", "Middleware", "Debugging"],
    content: [
      "Understanding middleware order clarified many issues that looked random at first.",
      "This post explains pipeline stages in practical terms and where to inspect when behavior diverges.",
      "Practical takeaway: debug pipeline bugs by isolating stage boundaries, not by guessing downstream logic.",
    ],
  },
  {
    slug: "backend-transition-post-13",
    title: "The Simplest Way I Remember 401 and 403",
    metric: "401/403 issues resolved on first diagnosis (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary:
      "Authentication failure and authorization failure are different problems.",
    templateFocus:
      "Template focus: definitions, root-cause checklist, and logging strategy.",
    topics: ["Auth", "Authorization", "API Security"],
    content: [
      "401 and 403 became easier once I mapped each status to a specific class of failure.",
      "This post provides a practical debugging checklist to identify where failures occur.",
      "Practical takeaway: split auth debugging into identity checks first, then permission checks.",
    ],
  },
  {
    slug: "backend-transition-post-14",
    title: "Why I Stopped Treating Tests as a Checkbox",
    metric: "Test confidence score (tests added per change)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Tests convert assumptions into confidence.",
    templateFocus:
      "Template focus: what to test first, boundary choice, and confidence-building loops.",
    topics: ["Testing", "Backend", "Quality"],
    content: [
      "Testing shifted from a compliance task to core confidence infrastructure in my backend work.",
      "I’ll show how to choose high-signal tests that protect risky contract and behavior changes.",
      "Practical takeaway: prioritize tests that prove behavior under realistic production-like conditions.",
    ],
  },
  {
    slug: "backend-transition-post-15",
    title: "How to Avoid Brittle Unit Tests in Backend Services",
    metric: "Flaky unit tests reduced (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Mock behavior, not implementation details.",
    templateFocus:
      "Template focus: resilient assertions, service-layer boundaries, and refactor tolerance.",
    topics: ["Unit Testing", "Backend", "Refactoring"],
    content: [
      "Brittle tests slow teams down by breaking on internal refactors rather than behavioral changes.",
      "This post explains test patterns that survive architectural cleanup.",
      "Practical takeaway: assert outcomes and contracts, not incidental implementation details.",
    ],
  },
  {
    slug: "backend-transition-post-16",
    title: "The Integration Tests That Catch What Unit Tests Miss",
    metric: "Integration scenarios automated (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Contract and wiring issues require integration coverage.",
    templateFocus:
      "Template focus: high-value integration scenarios and CI confidence gains.",
    topics: ["Integration Testing", "API Contracts", "Backend"],
    content: [
      "Integration tests catch the seams: routing, serialization, data access, and auth interactions.",
      "I’ll share a minimal set of scenarios that provides strong confidence without over-testing.",
      "Practical takeaway: use integration coverage for interfaces and boundaries unit tests cannot fully represent.",
    ],
  },
  {
    slug: "backend-transition-post-17",
    title: "EF Core Mistakes I’m Actively Avoiding",
    metric: "EF Core query inefficiencies fixed (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Query shape and tracking choices impact performance and bugs.",
    templateFocus:
      "Template focus: common mistakes, query decisions, and data access discipline.",
    topics: ["EF Core", "Data Access", "Performance"],
    content: [
      "Early EF Core mistakes usually come from not thinking about query shape and tracking cost.",
      "This post covers common pitfalls and practical alternatives.",
      "Practical takeaway: reason about generated SQL and data shape before optimizing application code.",
    ],
  },
  {
    slug: "backend-transition-post-18",
    title: "The Query Shape Habit That Improved My Backend Thinking",
    metric: "Query payload reduction via projections (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Database efficiency starts at query design.",
    templateFocus:
      "Template focus: projection-first thinking, AsNoTracking use, and maintainable query patterns.",
    topics: ["EF Core", "Query Design", "Performance"],
    content: [
      "Thinking in output shape first improved both performance and clarity of my data access code.",
      "I’ll walk through projection-first habits and when tracking is unnecessary.",
      "Practical takeaway: optimize query intent early to avoid downstream performance firefighting.",
    ],
  },
  {
    slug: "backend-transition-post-19",
    title: "I Now Ask: Can 2am Me Debug This?",
    metric: "Mean time to diagnose backend issue (minutes)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Observability should be part of feature design.",
    templateFocus:
      "Template focus: log quality, request context, and actionable diagnostics.",
    topics: ["Observability", "Logging", "Backend"],
    content: [
      "This post covers the logging and context practices that make incident debugging faster.",
      "I’ll focus on what to log, what to avoid, and how to preserve signal quality under pressure.",
      "Practical takeaway: design observability alongside features, not after issues appear.",
    ],
  },
  {
    slug: "backend-transition-post-20",
    title: "Backend Anti-Patterns I’m Tracking in My Learning Repo",
    metric: "Anti-pattern occurrences prevented per week (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Knowing what to avoid accelerates skill growth.",
    templateFocus:
      "Template focus: anti-pattern list, symptom detection, and correction strategy.",
    topics: ["Architecture", "Code Quality", "Backend"],
    content: [
      "This draft catalogs anti-patterns that repeatedly create maintenance and reliability issues.",
      "I’ll document how to detect them early during review and tracing.",
      "Practical takeaway: treat anti-pattern awareness as a first-class learning tool.",
    ],
  },
  {
    slug: "backend-transition-post-21",
    title: "My Weekly Backend Reflection Format",
    metric: "Weekly reflection streak (weeks)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Reflection closes the loop between effort and improvement.",
    templateFocus:
      "Template focus: trace-change-test-reflect cadence and weekly review structure.",
    topics: ["Learning Systems", "Career Growth", "Backend Transition"],
    content: [
      "This post shares the weekly reflection template that keeps my learning honest and measurable.",
      "I’ll cover what I track, how I identify gaps, and how I plan the next week.",
      "Practical takeaway: use structured retrospectives to turn effort into directional improvement.",
    ],
  },
  {
    slug: "backend-transition-post-22",
    title: "How I Share Learning Publicly Without Posting Fluff",
    metric: "Build-in-public posting consistency (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Public accountability should be concrete and useful.",
    templateFocus:
      "Template focus: signal vs noise, audience value, and consistency.",
    topics: ["Build in Public", "Career Growth", "Learning Systems"],
    content: [
      "Public updates are useful when they communicate real progress and practical insights.",
      "This post outlines how I keep learning posts specific, evidence-based, and reusable by others.",
      "Practical takeaway: publish with a teaching intent, not just an activity log.",
    ],
  },
  {
    slug: "backend-transition-post-23",
    title: "My Personal Rubric for Backend Contribution Readiness",
    metric: "Contribution readiness rubric score (/100)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Readiness can be measured with practical criteria.",
    templateFocus:
      "Template focus: readiness rubric, self-assessment, and contribution signals.",
    topics: ["Backend Transition", "Career Growth", "Engineering Process"],
    content: [
      "I define readiness by practical behaviors: tracing speed, safe changes, test confidence, and clear tradeoff communication.",
      "This post turns those behaviors into a reusable self-assessment rubric.",
      "Practical takeaway: use objective criteria to evaluate readiness instead of relying on vague confidence.",
    ],
  },
  {
    slug: "backend-transition-post-24",
    title: "Backend Skills Made Me Better at Frontend Decisions",
    metric: "Cross-team debug turnaround improvement (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Backend understanding reduces cross-team friction.",
    templateFocus:
      "Template focus: full-stack decision quality, contract collaboration, and debugging speed.",
    topics: ["Full-Stack", "API Design", "Collaboration"],
    content: [
      "Better backend understanding changed how I design frontend data flows and API boundaries.",
      "This post explains concrete ways backend context improves planning, estimation, and issue triage.",
      "Practical takeaway: backend literacy compounds full-stack effectiveness across teams.",
    ],
  },
  {
    slug: "backend-transition-post-25",
    title: "Why I’m Not Chasing Every Framework Right Now",
    metric: "Focus ratio: planned topics completed vs distractions (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Focused depth compounds faster than broad skimming.",
    templateFocus:
      "Template focus: scope control, intentional postponement, and depth strategy.",
    topics: ["Learning Strategy", "Career Growth", "Backend Transition"],
    content: [
      "This post is about deliberate scope: what I’m learning now and what I’m deferring on purpose.",
      "Depth-first sequencing improved retention and reduced context-switch overhead.",
      "Practical takeaway: enforce boundaries in your learning plan to maximize quality and momentum.",
    ],
  },
  {
    slug: "backend-transition-post-26",
    title: "A Better Definition of Done for Backend Work",
    metric: "Post-change regression rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Production-ready means resilient, testable, observable behavior.",
    templateFocus:
      "Template focus: done criteria, failure scenarios, and release confidence.",
    topics: ["Reliability", "Testing", "Engineering Process"],
    content: [
      "Works locally is not enough for backend changes that affect contracts and system reliability.",
      "This post frames a practical definition of done that includes observability and failure behavior.",
      "Practical takeaway: treat resilience and diagnosability as completion criteria, not polish tasks.",
    ],
  },
  {
    slug: "backend-transition-post-27",
    title: "How I Plan API Changes So Clients Don’t Break",
    metric: "API change safety checklist pass rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Contract evolution needs deliberate process.",
    templateFocus:
      "Template focus: additive-first evolution, deprecation steps, and release checks.",
    topics: ["API Evolution", "Contracts", "Backend"],
    content: [
      "API changes are coordination work, not just implementation work.",
      "This draft outlines a practical process for additive updates, deprecation messaging, and validation.",
      "Practical takeaway: plan contract evolution as a product change with explicit communication and safeguards.",
    ],
  },
  {
    slug: "backend-transition-post-28",
    title: "PR Habits Helping Me Grow Faster in Backend",
    metric: "PR review cycle time (hours)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Clear PRs improve feedback quality and learning speed.",
    templateFocus:
      "Template focus: PR structure, risk notes, and targeted review asks.",
    topics: ["Code Review", "Collaboration", "Backend"],
    content: [
      "Strong PR communication creates better feedback loops and faster skill growth.",
      "This post covers the PR habits that improved review quality and reduced misunderstanding.",
      "Practical takeaway: make intent, risk, and verification explicit in every PR description.",
    ],
  },
  {
    slug: "backend-transition-post-29",
    title: "Questions That Upgraded My Backend Design Thinking",
    metric: "Architecture decision questions answered per PR (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Better questions produce better architecture decisions.",
    templateFocus:
      "Template focus: architecture questioning framework and tradeoff awareness.",
    topics: ["Architecture", "Design Thinking", "Backend"],
    content: [
      "The quality of architecture decisions often tracks with the quality of questions asked early.",
      "I’ll share the recurring questions that improved my design choices and review discussions.",
      "Practical takeaway: codify your architecture questions and apply them consistently before implementation.",
    ],
  },
  {
    slug: "backend-transition-post-30",
    title: "5 Mental Models That Made Backend Click for Me",
    metric: "Mental models documented and reused (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Mental models reduce overwhelm in unfamiliar stacks.",
    templateFocus:
      "Template focus: pipeline, contracts, boundaries, tests, and logs mental models.",
    topics: ["Mental Models", "Backend Transition", "Learning Systems"],
    content: [
      "This post packages five mental models that simplified backend complexity for me.",
      "The goal is to provide a reusable way to reason about unfamiliar systems faster.",
      "Practical takeaway: build a small mental model toolkit and reuse it across stacks.",
    ],
  },
  {
    slug: "backend-transition-post-31",
    title: "60-90 Minutes a Day Is More Than Enough",
    metric: "Daily study consistency (days/week)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Consistent reps outperform occasional intensity spikes.",
    templateFocus:
      "Template focus: pacing strategy, session constraints, and compounding outcomes.",
    topics: ["Learning Systems", "Consistency", "Career Growth"],
    content: [
      "Sustainable daily reps gave me steadier progress than occasional long sessions.",
      "This post explains how focused short sessions compound over weeks.",
      "Practical takeaway: choose a pace you can sustain and optimize for consistency over intensity.",
    ],
  },
  {
    slug: "backend-transition-post-32",
    title: "My Current Backend Debugging Playbook",
    metric: "Bug resolution time after using playbook (minutes)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Structured debugging beats random trial-and-error.",
    templateFocus:
      "Template focus: reproduce, trace, validate, isolate, verify workflow.",
    topics: ["Debugging", "Backend", "Reliability"],
    content: [
      "This draft documents the debugging sequence I use for backend issues under uncertainty.",
      "It focuses on repeatability, evidence gathering, and layer isolation.",
      "Practical takeaway: use a fixed debugging sequence to improve speed and reduce thrash.",
    ],
  },
  {
    slug: "backend-transition-post-33",
    title: "Backend Reliability Starts with Failure Thinking",
    metric: "Failure-mode test cases added (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Anticipating failures improves architecture quality.",
    templateFocus:
      "Template focus: timeouts, retries, idempotency, and fallback behavior.",
    topics: ["Reliability", "Idempotency", "Architecture"],
    content: [
      "I now plan features by asking how they fail before asking how they succeed.",
      "This post covers practical failure modes and the safeguards that reduce incident impact.",
      "Practical takeaway: design for partial failure explicitly, especially across service boundaries.",
    ],
  },
  {
    slug: "backend-transition-post-34",
    title: "Why I’m Excited and Cautious About GraphQL Next",
    metric: "N+1 risks identified before implementation (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "GraphQL flexibility needs performance discipline.",
    templateFocus:
      "Template focus: GraphQL value, N+1 risks, DataLoader mindset, and nullability.",
    topics: ["GraphQL", "Performance", "Backend"],
    content: [
      "GraphQL offers flexibility, but it also shifts performance responsibility to query and resolver design.",
      "This post explores why I’m interested in GraphQL and what guardrails I’ll prioritize first.",
      "Practical takeaway: evaluate GraphQL with a performance and reliability lens, not just DX appeal.",
    ],
  },
  {
    slug: "backend-transition-post-35",
    title: "Event-Driven Systems Are My Next Learning Stretch",
    metric: "Idempotency checks implemented (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Messaging introduces reliability and consistency tradeoffs.",
    templateFocus:
      "Template focus: delivery semantics, idempotency, eventual consistency, and debugging.",
    topics: ["Event-Driven", "Reliability", "Architecture"],
    content: [
      "Event-driven architectures solve useful problems while introducing new operational complexity.",
      "This draft sets a practical learning roadmap focused on reliability and consistency tradeoffs.",
      "Practical takeaway: start event-driven learning with delivery semantics and idempotency fundamentals.",
    ],
  },
  {
    slug: "backend-transition-post-36",
    title: "How I’m Turning Learning Artifacts Into Career Signal",
    metric: "Public technical artifacts published (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Public technical writing can demonstrate growth and seriousness.",
    templateFocus:
      "Template focus: artifact quality, progression narrative, and hiring relevance.",
    topics: ["Career Growth", "Build in Public", "Technical Writing"],
    content: [
      "Artifacts help hiring teams evaluate growth trajectory and technical communication quality.",
      "This post explains how I frame learning outputs as useful engineering signals.",
      "Practical takeaway: publish artifacts that show progression, rigor, and practical outcomes.",
    ],
  },
  {
    slug: "backend-transition-post-37",
    title: "Advice I’d Give Myself Before Starting Backend",
    metric: "Repeated mistakes reduced over time (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Avoid common learning traps and focus on execution habits.",
    templateFocus:
      "Template focus: early mistakes, corrected approach, and beginner guidance.",
    topics: ["Backend Transition", "Learning Systems", "Career Growth"],
    content: [
      "This post distills what I would change if I restarted my backend transition from scratch.",
      "It focuses on practical habits that compound and common traps that waste time.",
      "Practical takeaway: move from tutorial consumption to request tracing and safe implementation early.",
    ],
  },
  {
    slug: "backend-transition-post-38",
    title: "My Notes Became a Technical Asset, Not Homework",
    metric: "Notes-to-published-content conversion rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Structured notes become debugging and onboarding leverage.",
    templateFocus:
      "Template focus: note structure, retention impact, and reusable documentation.",
    topics: ["Documentation", "Learning Systems", "Backend"],
    content: [
      "Good notes turned into a practical system for retention, debugging, and content production.",
      "I’ll share the note structure that helped me reduce repeated confusion.",
      "Practical takeaway: capture decisions and patterns in a reusable format, not fragmented snippets.",
    ],
  },
  {
    slug: "backend-transition-post-39",
    title: "Ambiguous Layer Boundaries Create Expensive Bugs",
    metric: "Boundary-related defects reduced (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Separation of concerns is a maintenance strategy.",
    templateFocus:
      "Template focus: boundary ambiguity symptoms, refactoring direction, and review checks.",
    topics: ["Architecture", "Maintenance", "Backend"],
    content: [
      "Ambiguous boundaries push complexity into unpredictable places and increase long-term defect cost.",
      "This draft covers signals that boundaries are weakening and how to respond.",
      "Practical takeaway: treat clear boundaries as preventive reliability work, not stylistic preference.",
    ],
  },
  {
    slug: "backend-transition-post-40",
    title: "Skill Stack I’m Building, in Order",
    metric: "Skill roadmap completion (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Sequencing skills intentionally speeds up progress.",
    templateFocus:
      "Template focus: sequencing logic, dependency order, and phase milestones.",
    topics: ["Learning Roadmap", "Backend Transition", "Career Growth"],
    content: [
      "This post explains why sequence matters more than total topic count in backend learning.",
      "I’ll detail what I’m learning now, what comes next, and why.",
      "Practical takeaway: build skills in dependency order to reduce rework and confusion.",
    ],
  },
  {
    slug: "backend-transition-post-41",
    title: "Backend Confidence Is Predicting Impact, Not Typing Speed",
    metric: "Impact prediction accuracy before merge (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Reasoning quality matters more than coding speed.",
    templateFocus:
      "Template focus: impact forecasting, risk planning, and communication quality.",
    topics: ["Engineering Mindset", "Backend", "Risk Management"],
    content: [
      "Confidence in backend work comes from understanding impact before implementation, not from writing code quickly.",
      "This post focuses on pre-change reasoning and risk-aware execution.",
      "Practical takeaway: prioritize impact prediction and verification planning before touching code.",
    ],
  },
  {
    slug: "backend-transition-post-42",
    title: "The Session Template I Reuse Every Day",
    metric: "Session template adherence rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Reusable structure reduces decision fatigue.",
    templateFocus:
      "Template focus: session time-boxing, objective clarity, and repeatability.",
    topics: ["Learning Systems", "Productivity", "Backend Transition"],
    content: [
      "A repeatable session template keeps my daily backend learning focused and sustainable.",
      "I’ll break down how each segment contributes to retention and practical skill transfer.",
      "Practical takeaway: use a fixed session structure to preserve focus and reduce planning overhead.",
    ],
  },
  {
    slug: "backend-transition-post-43",
    title: "I Track Every Question and It Changed My Learning Speed",
    metric: "Recurring question frequency drop (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Repeated questions reveal true knowledge gaps.",
    templateFocus:
      "Template focus: question taxonomy, frequency tracking, and reinforcement strategy.",
    topics: ["Learning Systems", "Knowledge Management", "Backend Transition"],
    content: [
      "Question tracking helped me identify recurring weak spots faster than intuition alone.",
      "This post explains how I classify and use questions to drive targeted learning.",
      "Practical takeaway: treat repeated questions as high-value signals, not random friction.",
    ],
  },
  {
    slug: "backend-transition-post-44",
    title: "API Contracts Are Product UX for Developers",
    metric: "API docs completeness score (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Contract quality affects all downstream teams.",
    templateFocus:
      "Template focus: predictability, docs, errors, and evolution strategy.",
    topics: ["API Contracts", "Developer Experience", "Backend"],
    content: [
      "API design decisions directly shape developer trust and integration speed.",
      "This draft covers the contract qualities that make APIs easier to adopt and maintain.",
      "Practical takeaway: treat contract design as product UX for engineers.",
    ],
  },
  {
    slug: "backend-transition-post-45",
    title: "The Engineering Discipline I’m Practicing Most",
    metric: "Average change size per PR (lines/files)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Small, safe changes compound into reliable progress.",
    templateFocus:
      "Template focus: change size, review speed, rollback ease, and trust building.",
    topics: ["Engineering Process", "Risk Management", "Backend"],
    content: [
      "Small safe changes consistently outperform large risky batches in backend systems.",
      "This post explains how controlled scope improves review quality and recovery speed.",
      "Practical takeaway: optimize for low blast radius and frequent validated progress.",
    ],
  },
  {
    slug: "backend-transition-post-46",
    title: "Habit: Explain the Request Path Out Loud Before Coding",
    metric: "Pre-coding request-path explainability score (self-rated 1-10)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Verbal explanation reveals missing understanding quickly.",
    templateFocus:
      "Template focus: request-path articulation, gap detection, and team alignment.",
    topics: ["Architecture", "Debugging", "Collaboration"],
    content: [
      "Explaining the request path out loud reveals hidden assumptions before implementation.",
      "This post documents how that habit improved my change quality and collaboration.",
      "Practical takeaway: verbalize the flow before coding to surface uncertainty early.",
    ],
  },
  {
    slug: "backend-transition-post-47",
    title: "The Product Outcomes I Want From This Backend Journey",
    metric: "Feature delivery reliability (on-time + no rollback %)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Learning should map to tangible product impact.",
    templateFocus:
      "Template focus: outcomes mapping, skill-to-impact linkage, and execution plan.",
    topics: ["Career Growth", "Product Impact", "Backend Transition"],
    content: [
      "This draft connects backend learning goals to concrete product outcomes and team value.",
      "It outlines what improved backend fluency should change in day-to-day execution.",
      "Practical takeaway: map each learning milestone to a measurable product or delivery outcome.",
    ],
  },
  {
    slug: "backend-transition-post-48",
    title: "Backend Myths I Believed Before Doing the Work",
    metric: "Myths replaced with validated practices (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Real code exposure corrected oversimplified assumptions.",
    templateFocus:
      "Template focus: myth vs reality breakdown and corrected mental models.",
    topics: ["Backend Transition", "Mental Models", "Learning Systems"],
    content: [
      "Working in real codebases corrected several backend assumptions I had from high-level content.",
      "This post contrasts myths with operational reality and practical implications.",
      "Practical takeaway: validate assumptions against real request flows as early as possible.",
    ],
  },
  {
    slug: "backend-transition-post-49",
    title: "What Makes a Learning Repo Actually Effective",
    metric: "Learning project milestone completion rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Good learning projects mimic production constraints.",
    templateFocus:
      "Template focus: project design criteria, milestones, and realism checks.",
    topics: ["Learning Systems", "Project Design", "Backend"],
    content: [
      "An effective learning repo should simulate real constraints, not just demonstrate syntax.",
      "I’ll describe the design choices that made my learning project actually useful.",
      "Practical takeaway: define realistic constraints and validation criteria before writing code.",
    ],
  },
  {
    slug: "backend-transition-post-50",
    title: "Midpoint Backend Journey Recap Template",
    metric: "Midpoint goal attainment (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Structured recaps make progress visible and actionable.",
    templateFocus:
      "Template focus: baseline vs current state, unresolved gaps, and next-phase plan.",
    topics: ["Retrospectives", "Learning Systems", "Backend Transition"],
    content: [
      "This template helps turn a midpoint review into a practical decision tool.",
      "It focuses on what changed, what remains unclear, and what to prioritize next.",
      "Practical takeaway: recap with evidence and concrete next actions, not generic confidence statements.",
    ],
  },
  {
    slug: "backend-transition-post-51",
    title: "Weekly Engineering Recap You Can Reuse",
    metric: "Weekly goals achieved (count or %)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Recaps create accountability and narrative continuity.",
    templateFocus:
      "Template focus: 3 learned, 2 practiced, 1 improved format with blockers.",
    topics: ["Retrospectives", "Learning Systems", "Career Growth"],
    content: [
      "Weekly recaps are effective when they’re short, structured, and tied to practical work.",
      "This post shares a reusable recap format built for engineers.",
      "Practical takeaway: make recaps concise, evidence-based, and action-oriented.",
    ],
  },
  {
    slug: "backend-transition-post-52",
    title: "Case Study: Tracing One Endpoint End-to-End",
    metric: "Endpoint trace depth (hops documented per case)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Concrete walkthroughs teach better than generic advice.",
    templateFocus:
      "Template focus: endpoint walkthrough, risk points, improvement, and validation.",
    topics: ["Case Study", "Architecture", "Backend"],
    content: [
      "This template post is a practical endpoint walkthrough from ingress to response.",
      "It highlights where complexity hides, where bugs emerge, and how to validate improvements.",
      "Practical takeaway: use one concrete flow to teach architectural reasoning and debugging discipline.",
    ],
  },
  {
    slug: "backend-transition-post-53",
    title: "Individual Backend Growth, Team-Level Impact",
    metric: "Handoff clarification requests reduced (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Strong backend fundamentals reduce organizational friction.",
    templateFocus:
      "Template focus: handoffs, API discussions, incident response, and delivery predictability.",
    topics: ["Team Impact", "Backend", "Collaboration"],
    content: [
      "Backend growth improves more than individual output; it improves team coordination and reliability.",
      "This post connects individual technical growth to cross-functional execution outcomes.",
      "Practical takeaway: frame learning outcomes in terms of team-level reliability and speed.",
    ],
  },
  {
    slug: "backend-transition-post-54",
    title: "My Prioritization Method for Technical Learning",
    metric: "High-priority topic completion rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Prioritize by production relevance and transfer value.",
    templateFocus:
      "Template focus: topic selection criteria, deferral logic, and review cadence.",
    topics: ["Learning Strategy", "Backend Transition", "Career Growth"],
    content: [
      "This draft outlines how I decide what to learn now versus later.",
      "The framework balances relevance, transferability, and execution timing.",
      "Practical takeaway: prioritize learning by near-term production utility and long-term leverage.",
    ],
  },
  {
    slug: "backend-transition-post-55",
    title: "Why Guided Feedback Accelerated My Backend Learning",
    metric: "Feedback-to-improvement turnaround time (days)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Fast feedback reduces wasted effort.",
    templateFocus:
      "Template focus: mentorship loops, misconception correction, and confidence development.",
    topics: ["Mentorship", "Learning Systems", "Backend Transition"],
    content: [
      "Guided feedback helped me correct misconceptions before they became entrenched habits.",
      "This post explains how targeted feedback changed my learning sequence and outcomes.",
      "Practical takeaway: seek feedback loops that challenge assumptions early and concretely.",
    ],
  },
  {
    slug: "backend-transition-post-56",
    title: "The Metrics I Use to Measure Real Technical Growth",
    metric: "Composite growth index (trace + tests + PR clarity)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Progress is observable in behavior and outcomes.",
    templateFocus:
      "Template focus: practical growth metrics and evidence-based tracking.",
    topics: ["Growth Metrics", "Engineering Process", "Backend Transition"],
    content: [
      "This post defines the metrics I track to measure backend growth beyond hype or feeling.",
      "The focus is on behavior signals like trace speed, change safety, and test reliability.",
      "Practical takeaway: measure growth with repeatable operational metrics, not vague confidence.",
    ],
  },
  {
    slug: "backend-transition-post-57",
    title: "Post-Program Plan: From Learning to Shipping",
    metric: "Real contributions shipped post-program (count)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Keep momentum by applying skills immediately.",
    templateFocus:
      "Template focus: transition plan, contribution targets, and next-stage execution.",
    topics: ["Career Growth", "Execution", "Backend Transition"],
    content: [
      "This draft translates learning momentum into concrete post-program contribution goals.",
      "It outlines immediate execution targets so gains are applied quickly in real work.",
      "Practical takeaway: lock in momentum with specific contribution milestones and timelines.",
    ],
  },
  {
    slug: "backend-transition-post-58",
    title: "If You’re Starting Backend Today, Start Here",
    metric: "Time-to-first-safe-backend-change (hours/days)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "A practical starter path avoids overwhelm.",
    templateFocus:
      "Template focus: first-week path, scope control, and early wins.",
    topics: ["Backend Transition", "Starter Guide", "Learning Systems"],
    content: [
      "This is a starter guide for engineers beginning backend work without getting buried in tool sprawl.",
      "The sequence focuses on one codebase, one request flow, one safe change, and one test.",
      "Practical takeaway: start narrow and practical to build confidence quickly.",
    ],
  },
  {
    slug: "backend-transition-post-59",
    title: "How Junior Contributors Build Trust Quickly",
    metric: "First-pass PR approval rate (%)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Trust grows from reliability, clarity, and safety.",
    templateFocus:
      "Template focus: communication habits, scoped changes, test evidence, and risk notes.",
    topics: ["Career Growth", "Collaboration", "Engineering Process"],
    content: [
      "Backend trust is earned through predictable execution and transparent communication.",
      "This post outlines practical behaviors that help early-career engineers build trust fast.",
      "Practical takeaway: pair conservative scope with strong communication and evidence-backed validation.",
    ],
  },
  {
    slug: "backend-transition-post-60",
    title: "6-Week Backend Transition: Final Retrospective",
    metric: "End-of-journey capability score (/100)",
    status: "Draft",
    publishDate: "TBD",
    readTime: "6 min read",
    summary: "Reflecting with evidence turns learning into momentum.",
    templateFocus:
      "Template focus: baseline, milestones, mindset shifts, skills gained, and next roadmap.",
    topics: ["Retrospective", "Backend Transition", "Career Growth"],
    content: [
      "This final retrospective template captures baseline, milestones, and key shifts from the transition period.",
      "It is structured to produce a forward-looking plan rather than a static summary.",
      "Practical takeaway: end transitions with evidence and a concrete next execution roadmap.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  ...featuredBlogPosts,
  ...backendLearningNotes,
];

export function getBlogPostMetric(post: BlogPost): string {
  if (post.metric) {
    return post.metric;
  }

  return post.readTime;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
