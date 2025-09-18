---
id: game
aliases: []
tags: []
forward:
  - "[simulating-agents](cards/agentic-ai-dev/game/simulating-agents.md)"
---

# Abstracting the Agent Loop

---

### Core Loop

- An **agent loop** repeatedly runs until the task is solved.
- At each step:
  1. The agent decides the **next action** (based on goals/instructions).
  2. The action is **executed** in an environment.
  3. A **result/feedback** is obtained.
  4. The result is stored in **memory**.
  5. The loop continues with updated context.

### GAME: Fundamental Components of an Agent

- **Goals/Instructions**: Define what the agent is trying to achieve; can include processes, priorities, or constraints.
- **Actions**: The set of operations that the agent can perform (e.g., "check calendar," "send email").
- **Memory**: Keeps track of previous actions, results, and context to inform future decisions.
- **Environment**: The _system where actions are executed_ (APIs, applications, operating system, cloud services).

### Variability and Modularity

- **Goals can change**: Two agents with the same actions might behave differently depending on whether the goal is to auto-schedule a meeting or inform the user first
- **Environments can change**: The same agent actions (e.g., event creation, email drafting) can run in different systems (Google Workspace vs Microsoft 365).
- > **Reusability**: By abstracting goals, actions, memory, and environments, agents become modular and portable.

### Design and Prototyping Insight

- > Use these _four abstractions_: **goals, actions, memory, environment**—to design agents systematically.
- Rapid, conversational prototyping (e.g., testing prompt strategies in ChatGPT/Claude) is encouraged to explore naming, tool setups, and workflows.
