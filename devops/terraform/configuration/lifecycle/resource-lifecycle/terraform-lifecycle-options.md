---
---

# What are the lifecycle configuration options in Terraform?

---

Lifecycle block options:

- **`create_before_destroy`** — create replacement before destroying the existing resource (reduces downtime)
- **`prevent_destroy`** — block accidental destruction of critical resources
- **`ignore_changes`** — ignore specific attribute changes detected outside Terraform
- **`replace_triggered_by`** — force recreation when a referenced resource/attribute changes
- **`precondition` / `postcondition`** — validate assumptions before/after resource operations

```hcl
lifecycle {
  create_before_destroy = true
  prevent_destroy       = true
  ignore_changes        = [tags, user_data]
}
```
