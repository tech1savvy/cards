---
id: tools-result-and-agent-feedback
aliases: []
tags: []
---

# Feedback in Agentic AI Systems

---

### Feedback Loop

- Agentic AI cannot directly observe the outcome of tool usage.
- The **result of each action** must be provided back as input for the next step.
- This creates a feedback loop: **AI proposes → action executes → system provides result → AI adapts.**

### Outcome Reporting

- Every prompt following an action must describe the **resulting state** (e.g., “time increased to 60 seconds,” “error door open”).
- This keeps the AI updated about the current environment/system state.
- Without outcome feedback, the AI cannot adapt correctly.

### Error Handling

- **Quality of error messages** is critical for agent performance.
- Rich, meaningful error descriptions allow the AI to decide corrective actions (e.g., “error door open” → “close the door”).
- Opaque or cryptic errors (e.g., “error 32”) prevent it from reasoning effectively unless translated into actionable context.

### Action Dependencies

- Some actions depend on others (e.g., _must set microwave time before using start_).
- Explicitly stating dependencies reduces missteps.

### Tool Naming and Structure

- Tool/action names should look like **system-level functions** (e.g., `microwave_start`, `insert_food_in_microwave`).
- Structured, descriptive names align with how real computer interfaces or APIs are organized.

### Adaptation Through Results

- Providing specific outcomes helps the AI learn constraints (e.g., “increase time adds 5 seconds”).
- From feedback, it infers how to chain actions until the goal is satisfied.

### System Design Principle

- _Feedback is as important as tool naming and descriptions._
- Failure loops often stem not from poor AI reasoning, but from **incomplete or low-quality feedback messages**.
