---
id: self-prompting
aliases: []
tags: []
forward:
  - "[real-world-data-gap-agent](cards/agentic-ai-dev/architecture/real-world-data-gap-agent.md)"
---

# Self-Prompting Agents using Large Language Models:

---

### Versatility and Computational Flexibility

- LLMs serve as powerful computational tools capable of diverse tasks: NLP, sentiment analysis, data transformation, expert domain reasoning, and interactive simulations.
- Their strengths lie in understanding complex instructions, maintaining multi-turn context, and adapting outputs to specific formats.

### Clean Architecture Challenge

- Directly making the agent responsible for both strategic coordination and domain-specific reasoning risks _muddled_ decision-making.
- Analogous to a CEO, the agent should coordinate expert tools rather than embody every specialized skill itself.

### Solution: Specialized Tools via Prompting

- > Isolate domain/expert reasoning as separate prompt-based tools the agent can call on for specific tasks.
- This separation keeps the agent’s core logic clean, focused on orchestration, while leveraging LLMs’ power for specialized computations through well-defined interfaces.

### **Self-Dialog** in LLMs

- The agent can engage in "self-dialog" by prompting itself with specialized instructions internally, dynamically adopting expert personas.
- This enables complex analytical reasoning, data transformation, content generation, and validation within modular tool abstractions.

### Tool Types for Modularity

- Transformation, Analysis, Generation, Validation, and Extraction tools encapsulate different self-dialog patterns.
- Each tool acts like a department in an organization with clear responsibilities and interfaces.

### Benefits

- Maintains architectural clarity with reusability and modularity.
- Leverages LLM’s full analytical and reasoning capabilities without complicating the agent’s primary decision logic.
- Facilitates combining and chaining tools to tackle complex problems effectively.

---

- Use self-prompting LLMs to perform specialized tasks while the agent orchestrates overall workflow.
