---
---

# What is state locking and why is it critical for collaboration?

---

State locking prevents multiple users or processes from running Terraform operations on the same state file simultaneously. When an apply begins, Terraform locks the state; other users must wait. This prevents race conditions, corrupted state files, overwritten changes, or inconsistent infrastructure.
