---
id: gail
aliases: []
tags: []
forward:
  - "[giving-tools](cards/agentic-ai-dev/tools/giving-tools.md)"
---

# GAIL Framework: for effective AI agent prompts

1. **Goals**/Instructions:
   - Define a clear _persona_ for the agent (e.g., a helpful AI assistant).
   - Set explicit goals the agent _must achieve_ (e.g., accomplish the user's task).
   - Describe the overall behavior and processes the agent should follow (e.g., check for duplicates before adding expenses).
   - Provide step-by-step instructions or a process that must be adhered to.

2. **Actions**:
   - Specify the _set of actions or tools_ the _agent can use_ to accomplish tasks (e.g., sending emails, querying databases).
   - Give constraints on what actions it can or cannot take to prevent undesirable outcomes.

3. **Information**:
   - Supply _task-specific information_ the agent needs _to make decisions_.
   - Include initial input data and continuously update with feedback from performed actions.
   - This information is transient and changes throughout the task execution.

4. **Language**:
   - Define _how_ the _agent should communicate results_ and intermediate steps.
   - Specify _output formats_ or reporting styles (e.g., always respond with a TPS report).
   - Include instructions on tone, style, and clarity of communication.
   - Use structured formats to help interpret agent responses reliably.

---

Additional prompt engineering best practices that complement the GAIL framework:

- Be as specific and descriptive as possible in instructions to reduce ambiguity.
- Place instructions at the beginning, clearly separated from context or data.
- Focus on positive instructions (what to do), avoid negative phrasing (what not to do).
- Provide examples and context to guide the agent toward desired outputs.
- Tailor prompts to the specific task and audience for better relevance.
- Use concise, clear language that the model can interpret effectively.
- Include process steps that prevent common failure modes (e.g., duplicate checking).
- Structure prompts into system messages (rules and goals) and user messages (task-specific information).

This framework ensures an agent is given well-structured, actionable, and clear instructions that greatly increase the chances of successful task completion rather than failure from vague or overwhelming prompts.
