---
noteId: 1785850813167
---

# What is the difference between a root module and a child module?

---

- **Root module** — the main set of configuration files in your working directory from which you run `terraform` commands. The entry point for execution.
- **Child module** — a separate module called from another configuration using a `module` block. Orchestrated by the root module via inputs and outputs.
