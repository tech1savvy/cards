---
noteId: 1785850813967
---

# Scenario: A Terraform state file became corrupted due to a system failure. How do you recover?

---

- If using remote state with versioning (e.g., S3): retrieve the last working state version from remote storage
- If local state is lost: manually reconstruct using `terraform import` for each resource
- If no state exists: recreate or re-import infrastructure with proper `.tf` file descriptions

**Best practice**: use remote state storage with versioning enabled to prevent state loss.
