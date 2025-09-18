---
id: custom-instructions
aliases: []
tags: []
forward:
  - "[gpt-tools](cards/agentic-ai-dev/openai-gpts/gpt-tools.md)"
---

### What Are Custom Instructions?

- Custom instructions enable users to define persistent preferences and background for ChatGPT.
- They _provide context about who the user is or the desired style/tone_ so ChatGPT tailors responses accordingly, without needing to restate in every conversation.

### How Custom Instructions Work

- Include information like user identity, roles, interests, goals, and desired output style.
- ChatGPT integrates these automatically during conversation, _maintaining consistent behavior_ and _personalization across sessions_.
- Prevents forgetting important info even in extended dialogues.

### Implementation

- Available in ChatGPT settings via "_Customize ChatGPT_" or similar menus.
- Consist of two main components: what the user wants ChatGPT to know and how it should respond.
- Persist across interactions and are programmatically inserted into every prompt.

### Best Practices

- Be _concise, clear, and focused_ in instructions to optimize token usage and rule clarity.
- _Use examples_ to demonstrate expected behavior.
