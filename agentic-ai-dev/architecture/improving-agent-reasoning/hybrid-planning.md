---
id: hybrid-planning
aliases: []
tags: []
---

# Different styles of AI agent execution and when to use them are:

---

### 1. Step-by-Step Execution (Adaptive Loop)

- The agent decides and acts at every step during the execution loop.
- **Highly adaptive and flexible**, _allowing on-the-fly adjustments and reasoning_.
- Less predictable, can vary run-to-run due to inherent randomness in LLM outputs.
- Tend to be slower and more expensive due to frequent LLM calls.
- **high cost**

### 2. Ahead-of-Time Planning (Static Workflow)

- The agent generates a _complete plan or workflow before execution_.
- The plan is then executed deterministically, often as code or a fixed description.
- **Faster, cheaper, and predictable** because no LLM calls required during execution.
- _Less flexible_; cannot adapt to unexpected changes or errors during execution.

### 3. Hybrid Execution

- > _Generate_ an _upfront plan_, attempt to _run it_ end-to-end,
- > _If errors_ or unexpected results occur,_ switch to step-by-step_ adaptive execution to recover or adapt.
- Combines the speed and predictability of a plan with flexibility of incremental reasoning.

### 4. Fixed Process with Adaptive Data Flow (**The Shim**)

- _Predefine a fixed sequence of actions_ or steps that must be followed in order.
- The agent controls the flow of data between steps, adapting outputs into inputs for the next step.
- Balances predictability of fixed workflows with adaptability in responding to partial steps or changing data.
