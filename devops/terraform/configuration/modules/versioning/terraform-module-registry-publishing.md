---
---

# How do you publish modules to the Terraform Registry?

---

1. Host the module in a public GitHub repository named `terraform-<PROVIDER>-<NAME>`
2. Tag a release with a semantic version (e.g., `v1.0.0`)
3. Log into the Terraform Registry and publish the module via the web UI
4. For private registries (Terraform Cloud/Enterprise), use the provider's API or UI to add the module

The registry automatically discovers the module and displays its README, inputs, and outputs.
