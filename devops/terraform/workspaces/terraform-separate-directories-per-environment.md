---
---

# How do you manage environments using separate directories?

---

Create a directory per environment (e.g., `envs/dev/`, `envs/prod/`) each containing its own `main.tf` with environment-specific variable values. This keeps configurations fully isolated — a mistake in one directory cannot affect another. The tradeoff is potential duplication; use shared modules to keep infrastructure definitions DRY.

