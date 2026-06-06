---
---

# What are the different types of Terraform variables?

---

- **Input Variables** — defined in configurations and initialized by users when running Terraform commands. Serve as module parameters.
- **Output Variables** — represent computed values that can be queried and used by other configurations after an apply.
- **Local Variables** (`locals` block) — defined within a module for intermediate computations, reducing repetition and improving readability.
