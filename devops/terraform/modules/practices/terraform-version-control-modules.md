---
noteId: 1785850813367
---

# How should you version control Terraform modules?

---

Store modules in a dedicated Git repository (or a monorepo with versioned subdirectories) and tag releases with semantic versioning (e.g., `v1.2.0`). Reference the tagged version in module source arguments to avoid unexpected breaking changes. Version control ensures traceability, rollback capability, and consistent deployments across teams.

