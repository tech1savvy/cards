---
id: interaction-and-memory-patterns
aliases: []
tags: []
forward:
  - "[removing-noise](cards/agentic-ai-dev/architecture/multi-agent-systems/removing-noise.md)"
---

# **Interaction Patterns**: Communication and Coordination Patterns in Multi-Agent Systems

> illustrated using a human-intern analogy.

---

### Message Passing (Task Delegation)

- One agent _(boss) sends a **task description message** to another agent (intern/expert)_.
- The intern performs the task based on the description and sends a **result message** back.
- The success depends highly on the **completeness and clarity of the task description**. Inadequate details cause poor outcomes.

### Shared Memory (Context-Sharing)

> memory is curated and then passed to intern

- Instead of message passing discrete tasks, the _boss agent shares a **stream of work or conversational memory** with the intern_.
- The intern sees the entire history or context, decides relevant parts on its own, and adds its results to the shared memory.
- This reduces the burden on the boss to specify every task detail explicitly and lets the intern contextualize work better.

### Full Shared Memory with Iterative Updates

> intern already has full access to the memory

- A more advanced approach where _**both agents share** a full memory state_ that maintains the entire conversation, inputs, and intermediate results.
- The intern can iteratively update, append, or refine work within the shared memory before passing it back.
- This model supports richer collaboration but can increase complexity and cognitive load due to irrelevant or excessive context.

### Tradeoffs and Challenges

- **Message passing** is simple and _clean but requires precise task descriptions_.
- **Shared memory** models provide _richer context but may overwhelm agents_ with irrelevant data, adding complexity.
- Managing what context is shared, how much history is passed, and what results are reported back is crucial for effective coordination.

---

# Memory Patterns

### 1. Message Passing (Basic Pattern)

- One agent sends a **single message** describing the task to another agent and receives back a final result.
- This is simple and efficient but only shares the end output, no intermediate reasoning or context is transferred.
- Suitable when the coordinator agent only needs the final answer from the specialist agent.

### 2. Memory Reflection (Learning from Process)

- The receiving agent completes its task and then **shares its full memory or thought process** back to the calling agent.
- This enables the caller to see the reasoning steps, intermediate conclusions, and rationale behind the result.
- Useful when understanding or auditing the task process is important.

### 3. Memory Handoff (Continuing the Conversation)

- The calling agent **passes its entire memory or context state** to the recipient agent, allowing it to pick up where the prior agent left off.
- The recipient agent integrates the full context into its reasoning and updates the shared memory with its outputs.
- Effective for complex, multi-step collaborations where shared state, context, and iterative updates matter.

### Tradeoffs

- **Message passing** is low complexity and good for isolated sub-tasks but can lose valuable context.
- **Reflection** adds richer insight but increases communication overhead and memory usage.
- **Handoff** provides full continuity but raises complexity in managing irrelevant context and requires robust memory management strategies.
