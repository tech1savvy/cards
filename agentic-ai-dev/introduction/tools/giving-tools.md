---
id: giving-tools
aliases: []
tags: []
forward:
  - "[tools-naming](cards/agentic-ai-dev/tools/tools-naming.md)"
---

# How agentic systems interact with the world using tools or actions:

- **Agentic systems interact with the world through tools or actions**: They don't act arbitrarily but are given specific permitted methods or means for accomplishing tasks.

- **Tools define the allowed resources or methods**: The system is provided a fixed set of tools it can use to solve problems (e.g., in a cooking example, a pan, fire, skillet, etc.). It must work within these constraints.

- **Actions are specific operations the agent can perform with those tools**: Especially when interacting with computer systems, where actions are explicitly defined (e.g., "put pan on fire").

- **Bounded capability is essential**: Agents need to be constrained in what they can do, reflecting actual limitations of real-world systems, rather than accessing unlimited or unrealistic resources.

- **Different framing for humans vs. computer systems**:
  - With humans, tools are flexible and open-ended; the agent requests use of a tool and the human executes.
  - With computers, actions must be precise and explicit because computer systems have finite, rigid capabilities.

- **Stepwise interaction**: Agents proceed step-by-step, requesting user feedback or confirmation to continue, reflecting the sequential nature of many tasks.

- **Expressing constraints in prompts or programmatic ways**: The tools or actions allowed are described explicitly to the agent so it understands the boundaries within which it must operate.

- **Choosing between 'tool' or 'action' terminology depends on context**: For open-ended, human-mediated tasks, "tool" fits better; for rigid, digital interfaces, "action" is clearer.

- **Importance of aligning agent behavior with real-world system limits**: Prevents unrealistic or impossible instructions and keeps agent responses feasible and relevant.

These concepts guide how agentic AI systems interact meaningfully and safely within complex environments by defining and constraining their methods of achieving tasks.
