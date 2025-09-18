---
id: dependecy-injection
aliases: []
tags: []
forward:
  - "[in-context-learning](cards/agentic-ai-dev/architecture/improving-agent-reasoning/in-context-learning.md)"
---

# Reducing task complexity for AI agents by simplifying tool interfaces and leveraging dependency injection are:

---

### Complexity Layering in AI Tasks

- Agents must translate high-level user goals into precise API calls with arguments usually formatted as structured JSON.
- This adds complexity beyond pure reasoning: choosing tools, deciding arguments, translating output into required formats.
- Complexity increases further when agent input/output needs to handle ancillary details like session IDs, tokens, user credentials, or environment URLs.

### Dependency Injection for Tool Interfaces

- > Implement tools to _internally access_ required _context like user credentials, sessions, environment_ info without exposing those as formal parameters, like storing their values as environment variables.
- This allows the agent to focus purely on task-specific inputs, easing reasoning and reducing prompt complexity.
