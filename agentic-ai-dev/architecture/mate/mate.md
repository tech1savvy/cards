---
id: mate
aliases: []
tags: []
forward:
  - "[multi-agent-systems](cards/agentic-ai-dev/architecture/multi-agent-systems/mult-agent-systems.md)"
---

# **Computational Software Design Principles** for building effective AI agents, summarized as the MATE acronym, are:

### 1. Model Efficiency (M)

- **Use** the _most efficient and suited_ AI _model_ for the task at hand, rather _than_ always running the _most capable_ (and expensive) one.
- Less capable models are often faster and cheaper and sufficient for simpler sub-tasks.

### 2. Action Specificity (A)

- Design actions to be concrete, specific, and narrowly focused (e.g., “create calendar invite”) rather than generic (e.g., “perform calendar operation”).
- Specific actions are easier to reason about and reduce input complexity, leading to fewer reasoning errors and less expensive prompts.
- Grouping complex workflows into single, reusable actions (e.g., “schedule meeting with Bob”) enables faster, more reliable execution.

### 3. Token Efficiency (T)

- **Optimize prompts** and data to be as _information-dense and concise_ as possible to reduce token usage.
- Fewer tokens lower costs, speed up responses, and improve model reasoning by avoiding extraneous information.

### 4. Environment Safety (E)

- Build agents to interact with **environments where actions** are _safe, idempotent, and reversible_.
- Prefer _read-only_ or _low-risk actions_; when writes/side effects happen, ensure they can be undone or safely managed to minimize harm.

---

- These principles help create agents that are faster, cheaper, more predictable, and less prone to errors or undesired side effects.
- They strike a balance between computational cost, reliability, and effectiveness much like efficient software engineering practices but in the AI agent context.
- Conceptually think of this like a “game” (e.g., chess) where the agent’s goal is to win by efficiently using models (M), acting precisely (A), using tokens wisely (T), and avoiding unsafe moves (E).
