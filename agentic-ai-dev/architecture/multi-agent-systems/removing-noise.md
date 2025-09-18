---
id: removing-noise
aliases: []
tags: []
forward:
  - "[context-limitations](cards/agentic-ai-dev/architecture/multi-agent-systems/context-limitations.md)"
---

# Removing noise and focusing agent attention in multi-agent systems

> particularly regarding memory sharing and token limits, are:

### Token Limits and Message Size Constraints

- Language models have strict **limits on token input and output sizes**; input tokens often exceed output tokens in volume and cost.
- When passing messages (task descriptions) between agents, these limits constrain how much memory/context can be included meaningfully.
- A large memory requires intelligent selection of relevant information to fit within token constraints.

### Challenges of Full Memory Passage

- Directly handing off entire memory streams might expose irrelevant or excessive data, slowing processing and confusing recipient agents.
- Outputting all relevant memory content as task descriptions can exceed output token limits.

### Intelligent Memory Selection (Filter)

- A key solution is **having the calling agent produce a list of** _identifiers_ **(IDs/indices) of the relevant memory items** rather than the full content.
- This list of IDs is concise, output-efficient, and serves as a pointer to the actual valuable context needed.
- The receiving agent’s system then programmatically **“inflates”** those IDs back into full memory content for rich contextual input.

### Benefits of ID-Based Memory Inflation

- Reduces token usage and output size during task handoff.
- Prevents content corruption because the model outputs only references, not rewritten content.
- Enables a clean, non-fabricated transmission of facts, reducing hallucination risk.
- Allows more extensive contextual input to the receiving agent than direct message passing of content.

### Delegating Memory Selection to Expert Agents

- > You can delegate the task of selecting relevant memories to a specialized agent whose sole responsibility is memory filtering.
- This decouples concern over context relevance from the main coordinator agent, improving modularity and modular reasoning.

### Summary

- Managing agent attention to memory is critical to overcoming token limits while preserving critical context for decision-making.
- Using identifiers for memory relevance and programmatic inflation balances efficiency, factual integrity, and reasoning capability.
