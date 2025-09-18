---
id: context-limitations
aliases: []
tags: []
forward:
  - "[dependecy-injection](cards/agentic-ai-dev/architecture/dependecy-injection.md)"
---

# Generative AI Knowledge Limitations and the Critical Importance of Providing Context

---

### Overestimation of AI Knowledge

- People often **overestimate how much generative AI actually knows** because it produces convincing outputs.
- It has broad general knowledge but lacks specific awareness of current context, personal preferences, workplace culture, or unique systems.

### Underestimation of Required Context

- Generative AI **requires a wealth of specific and detailed information** about the task, environment, and goals to function well.
- Just like a new intern on their first day who knows general concepts but nothing about the specifics of the workplace, AI needs detailed input.

### Importance of Rich, Specific Inputs

- For practical tasks (e.g., connecting a Nintendo Wii to a TV), generic terms like “TV” are insufficient; detailed descriptions or photos providing exact models and setups are crucial.
- Providing rich, specific context (images, exact device models, environment details) enables AI to plan and execute relevant instructions accurately.

### Continuous Context Updates

- AI agents need ongoing updates about the state of the world and task to adapt plans if conditions change.
- Without updated knowledge (e.g., a travel reservation made simultaneously by another party), the AI may make incorrect or redundant decisions.

### Implications for System Design

- Designing AI systems requires mechanisms to continuously provide detailed context and updates.
- AI workflows should incorporate feedback loops to keep the agent aware of changes and new information during task execution.

### Summary

- Generative AI models excel when grounded with sufficient domain-specific, contextual, and up-to-date data.
- Over-relying on AI’s intrinsic knowledge without feeding it rich external context leads to suboptimal or incorrect outcomes.
- Effective AI requires thoughtful engineering around data input, environment sensing, and continual knowledge updating.[1][2][5][7]
