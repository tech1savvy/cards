---
noteId: 1785850810392
---

# How do you tear down old environments after a blue-green deployment?

---

Once the new (green) environment is validated and serving traffic, remove the old (blue) module block from the configuration and run `terraform apply`. Terraform detects the removed resources and destroys them. Alternatively, use `terraform destroy -target=module.blue` for a targeted teardown while keeping other resources intact.

Always verify monitoring and logs confirm zero traffic to the old environment before destroying.
