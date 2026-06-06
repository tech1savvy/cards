---
---

# How do you roll secret updates to minimize downtime?

---

Rotate secrets in a rolling fashion across instances or services:
1. Generate a new secret alongside the old one (dual-credential period)
2. Update instances one at a time (or in small batches) via `terraform apply` with targeted resource updates
3. Verify each instance before proceeding
4. Revoke the old secret once all instances use the new one

This avoids dropping all connections simultaneously and allows rollback if the new secret fails.
