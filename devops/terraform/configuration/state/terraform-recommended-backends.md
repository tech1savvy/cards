---
noteId: 1785850811667
---

# Which Terraform backends are recommended for beginners vs experts?

---

- **Beginners** — use the default `local` backend. Requires no configuration and is ideal while learning.
- **Expert/Teams** — use a `remote` backend with **Terraform Cloud** or **Terraform Enterprise** when managing meaningful infrastructure. Provides state locking, versioning, encryption, and team collaboration features.
