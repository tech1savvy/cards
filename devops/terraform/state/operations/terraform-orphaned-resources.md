---
---

# How does Terraform handle resources deleted outside of Terraform (orphaned resources)?

---

If a resource is deleted outside Terraform (e.g., via cloud console), it becomes **orphaned** — the state file still references it but the real resource is gone.

To reconcile:

1. Use `terraform plan` to detect the missing resource
2. Use `terraform import` to re-associate the existing resource with the Terraform state, or
3. Remove the resource from the configuration and run `terraform apply` to update state

The `terraform import` command allows Terraform to manage the resource going forward after reconciliation.
