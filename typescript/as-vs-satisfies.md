---
id: as-vs-satisfies
aliases:
  - `as` vs `satisfies` keyword in TypeScript
tags: []
---

# `as` vs `satisfies` keyword in TypeScript

---

| Feature      | `as` (Assertion)                           | `satisfies` (Validation)                     |
| :----------- | :----------------------------------------- | :------------------------------------------- |
| **Trust**    | You tell TS: "Trust me."                   | You ask TS: "Check me."                      |
| **Safety**   | **Dangerous.** Can hide bugs.              | **Very Safe.** Catches errors.               |
| **Identity** | Changes the type to the target.            | Keeps the specific original type.            |
| **Best For** | Fixing edge cases (like `req as Request`). | Checking API shapes, configs, and responses. |

---

> [!NOTE]
> Rule of Thumb: Use satisfies whenever possible.
> Only use as when you are absolutely forced to (like when working with external libraries where TypeScript can't see the full picture).
