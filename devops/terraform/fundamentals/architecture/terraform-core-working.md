---
noteId: 1785850812392
---

# How does Terraform core work?

---

Terraform core takes two inputs:
- **Terraform Configuration** — keeps track of the infrastructure detail
- **Terraform State** — keeps track of the infrastructure status

It examines configuration monitoring, generates configuration-based analysis, and compares versions (current and previous) before displaying results via the terminal.
