---
id: tools-naming
aliases: []
tags: []
forward:
  - "[tools-result-and-agent-feedback](cards/agentic-ai-dev/tools/tools-result-and-agent-feedback.md)"
---

### Tool Naming

- _Descriptive, intuitive tool names_ help AI infer purpose more effectively (e.g., `makeAlienPizza` vs. `x155`).
- Abbreviated or cryptic names (e.g., `mkpz`, `pbm`) often fail because the _AI lacks institutional knowledge_ that humans might have.
- Poor naming can completely change how the AI interprets and attempts to use tools.

### Tool Descriptions

- Clear **descriptions of functions** are essential when names alone are insufficient.  
  Example: "X155 – prepares alien pizza."
- Without descriptions, AI will misinterpret or invent purposes for tools.
- Names and descriptions together give AI both intuition and clarity.

### Contextual Information

- The _framing_ of tools affects AI behavior:
  - Whether tools are required or optional.
  - Whether the order of using tools matters.
  - How the environment or constraints are described.
- Misleading or incomplete context can make AI assume nonexistent details (“pliers loosen bolts” without bolts mentioned).

### Tool Mixtures and Dependencies

- When multiple tools are listed, AI assumes each was included for a reason.
- If tools overlap in capability or lack usage guidance, AI may make incorrect logical leaps.
- Clarifying dependencies (e.g., tool A must precede tool B) prevents misuse.

---

**Names matter:** Intuitive, descriptive names reduce ambiguity.
**Descriptions matter:** Explicit functionality prevents incorrect assumptions.
**Context matters:** Instructions about usage (mandatory vs optional, possible goals) shape decision-making.
**Presentation matters:** Ordering, grouping, and the language around tools influence interpretation.
