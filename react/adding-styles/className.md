---
id: className
---

Why is `className` used instead of `class` in React?

---

- **`class` is a reserved keyword in JavaScript.**
- JSX is an extension of JavaScript, and using `class` would cause conflicts.
- React converts the `className` attribute to a `class` attribute in the HTML DOM.
