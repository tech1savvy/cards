---
id: agent-loop
aliases: []
tags: []
forward:
  - "[structure-agent-output](cards/agentic-ai-dev/concepts/structure-agent-output.md)"
---

> prompt → response → parse → execute → feedback → loop

### The Agent Loop

- **Task kickoff**: A human (or human-driven process) provides a high-level natural language goal for the agent to achieve.
- **Autonomy vs. assistance**: Instead of asking the agent for instructions for a human to execute, we let the agent _perform actions itself_ by interacting with APIs, functions, or systems.
- **The loop structure**:
  1. **Construct a prompt** – Give the LLM context and the current state of the task.
  2. **Send to the model** – Query the LLM with the prompt.
  3. **Parse response** – Convert the model’s natural language plan into a structured, programmatic action (e.g., an API call).
  4. **Execute action** – Run the requested action against the system (API, file system, database, etc.).
  5. **Collect feedback** – Gather the result, error, or output from the system.
  6. **Update state & repeat** – Feed the feedback back into the prompt for the next iteration until the agent decides (or we decide) to stop.

### Key Architectural Principles

- **Translation of goals into computation**: The LLM’s strength lies in translating natural language goals into executable actions.
- **Adaptivity**: Unlike brittle, pre-written code paths, the agent loop allows adaptation when unexpected inputs or errors occur (e.g., missing ingredients, existing expense records).
- **Controlled autonomy**: The _loop controller_ ensures that humans or system safeguards decide when to continue or terminate, but the agent chooses the specific actions each step.
- **Prompt engineering as scaffolding**: A significant portion of development is in designing prompts and response formats so that outputs can be parsed reliably.
- **Feedback integration**: Each cycle builds context by embedding prior results into the prompt, giving the agent memory of the ongoing task.

### Why It Matters

- Shifts interaction from "conversational helper" → "autonomous operator."
- Provides a scalable pattern: almost all practical AI agents boil down to versions of this loop.
- Keeps the agent grounded in _deterministic execution_ (traditional software) while leveraging _probabilistic reasoning_ (LLMs) for flexibility.
