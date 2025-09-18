---
id: capability-pattern
aliases: []
tags: []
forward:
  - "[in-loop-planning](cards/agentic-ai-dev/architecture/improving-agent-reasoning/in-loop-planning.md)"
---

# Capability Pattern

> extending the agent loop with modular behaviors:

---

> _Similar to middleware in web frameworks_, where distinct components modify request/response cycles without core application awareness.

### Capability Pattern Overview

- Capabilities are modular classes that **intercept and modify multiple phases** of the agent's execution loop without changing core loop code.
- They provide a clean way to extend or customize agent behavior dynamically by plugging in capabilities during agent composition.

### Lifecycle and Interaction Points

Capabilities interact with the agent loop through methods corresponding to phases like:

- Initialization (`init`), loop start (`start_agent_loop`), prompt construction (`process_prompt`), LLM response processing (`process_response`), action handling (`process_action`), result processing (`process_result`), memory updates (`process_new_memories`), loop termination checks (`should_terminate`), and cleanup (`terminate`).

### Benefits of Using Capabilities

- Clean separation of concerns: core loop remains unchanged while capabilities handle specific extensions.
- Flexible composition: add or remove capabilities as needed to tailor agent behavior.
- Reusability: capabilities can be shared between agents.
- Maintainability: simplifies complex agent loops by modularizing functionality.

### Example: Time Awareness Capability

- Tracks and injects current time into agent memory and prompts, enabling agents to be time-aware for scheduling and time-sensitive tasks.
- Shows how a capability can add context (e.g., timezone-aware timestamps) transparently.

### Practical Agent Construction

- Agents are instantiated with core components (goals, language, tools, environment) plus a list of capabilities to extend their loop.
- Each capability runs in sequence on each loop iteration, modifying inputs/outputs as needed.

### Extensibility

- Capabilities can be enhanced (e.g., adding action execution timing and duration tracking to Time-Aware Capability) for richer agent insights.
