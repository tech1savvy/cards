---
---

# Scenario: Modifying an RDS instance parameter in Terraform plans to delete and recreate instead of updating. Why, and how to avoid downtime?

---

Some Terraform changes force resource recreation (e.g., changing `allocated_storage` in RDS).

- Check provider documentation to confirm which properties trigger recreation
- Modify only parameters that support in-place updates
- If recreation is unavoidable: create a new resource, migrate data, then remove the old one
