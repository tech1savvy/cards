---
---

# How does Terraform support immutable infrastructure?

---

Immutable infrastructure means not modifying running components — instead replacing them with new instances. Terraform supports this by:

- Defining infrastructure declaratively (desired state, not steps)
- Generating a new plan when changes are needed
- Recreating resources with updated configurations instead of patching live instances
- Ensuring consistency, reproducibility, and easier rollbacks

This aligns with Terraform's declarative nature: you define *what* you want, and Terraform determines the actions to get there.
