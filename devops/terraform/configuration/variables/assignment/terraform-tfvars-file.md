---
noteId: 1785850811793
---

# What is a `.tfvars` file and how is it used?

---

A variable definitions file that assigns values to input variables declared in `.tf` files. Terraform auto-loads `terraform.tfvars` and `*.auto.tfvars`. Commonly used to separate environment-specific values (e.g., `dev.tfvars`, `prod.tfvars`) from core configuration logic.
