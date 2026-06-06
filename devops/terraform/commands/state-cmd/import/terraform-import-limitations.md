---
---

# What are the limitations of `terraform import`?

---

- **No auto-generated config** — `terraform import` only adds resources to the state file. You must manually write the corresponding `.tf` configuration.
- **Not all resource types supported** — some resource types cannot be imported.
- **Drift risk** — if the manually written configuration doesn't match the actual infrastructure, Terraform may mark the resource for changes or destruction on the next apply.
