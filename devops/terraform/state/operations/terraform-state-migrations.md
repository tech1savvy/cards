---
noteId: 1785850814567
---

# When are Terraform state migrations necessary?

---

State migrations are needed when:

- **Resources change** — resources are added, modified, or removed requiring state updates
- **Schema evolves** — Terraform configuration schema changes between versions
- **Module versions change** — updated module versions impact state structure
- **Infrastructure is refactored** — layout or dependencies are restructured
- **Terraform version is upgraded** — newer Terraform versions may require state format changes
- **Teams collaborate** — multiple developers or teams need state synchronization

Use `terraform state mv` or `terraform state push` for manual migration operations.
