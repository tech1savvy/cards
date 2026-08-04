---
noteId: 1785850814866
---

# What is Terragrunt and what are its use cases?

---

Terragrunt is a thin wrapper around Terraform that adds tools for:

- **Keeping Terraform code DRY** — reduce duplication across configurations
- **Maintaining DRY remote state config** — manage backend configs centrally
- **Keeping CLI flags DRY** — avoid repeating common flags
- **Running commands on multiple modules** — execute `terraform` across many modules at once
- **Working with multiple AWS accounts** — manage multi-account setups easily
