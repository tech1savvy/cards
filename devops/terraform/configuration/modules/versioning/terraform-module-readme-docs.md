---
---

# What documentation should a Terraform module include?

---

A module README should include:
- **Description** — what the module does
- **Usage examples** — minimal working HCL snippets
- **Inputs table** — variable names, types, defaults, descriptions
- **Outputs table** — output names and descriptions
- **Requirements** — provider and Terraform version constraints
- **License** — open-source license identifier

Use `terraform-docs` to auto-generate input/output tables from the module source.
