---
id: multi-agent-systems
aliases: []
tags: []
forward:
  - "[interaction-and-memory-patterns](cards/agentic-ai-dev/architecture/multi-agent-systems/interaction-and-memory-patterns.md)"
---

# Introduction

> designing multi-agent systems with a coordinator agent and specialized agents:

---

### **Specialized Agents** for Better Performance

- Agents work best when specialized with a narrow, clear set of tools and instructions tailored to a specific task.
- Specialized agents are more consistent, predictable, and efficient compared to a monolithic agent with broad capabilities.
- Each agent can have focused system instructions and domain knowledge, reducing complexity and confusion.

### **Coordinator Agent** as Project Manager

- The coordinator agent maintains overall thread of execution, manages state, and delegates tasks to specialized agents based on the current needs.
- It acts like a project manager, routing specific subtasks to agents dedicated to scheduling, agenda creation, etc.

### Modularization and Clean Abstraction

- Separating agents along clear functionality lines enforces abstraction boundaries.
- Actions and rules for scheduling meetings should live in the scheduling agent, while agenda formatting is handled by another agent.
- This reduces the risk of instruction pollution where rules applicable to one function might interfere with others.

### Advantages of Multi-Agent Design

- Easier to test, reason about, and maintain single-function agents than one large complex monolithic agent.
- Allows independent upgrades or changes to individual agents without breaking the entire system.
- More token and computation efficient as agents deal with narrowly scoped tasks.

### Communication and Coordination

- Multi-agent systems require mechanisms for agents to communicate, share results, and synchronize actions.
- This might be direct message passing or mediated through the coordinator agent.
- Effective coordination protocols are vital to ensure agents align on goals and avoid conflicts.

---

### Summary

- Use a coordinator to orchestrate specialized agents, each with focused instructions and tools.
- Keep system instructions modular and targeted to agent roles to improve clarity and predictability.
- Design communication and delegation patterns to maintain coherence and collaboration among agents.
