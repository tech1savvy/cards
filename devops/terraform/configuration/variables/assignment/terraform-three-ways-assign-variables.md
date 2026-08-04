---
noteId: 1785850811817
---

# What are three common ways to assign values to Terraform variables?

---

- **Command-Line Flags** — `terraform apply -var="region=us-west-2"`
- **Variable Definition Files** — `terraform.tfvars` or `*.auto.tfvars` (auto-loaded)
- **Environment Variables** — prefix with `TF_VAR_` (e.g., `export TF_VAR_region="us-west-2"`)
