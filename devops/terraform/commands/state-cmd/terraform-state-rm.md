---
noteId: 1785850809342
---

# What does `terraform state rm` do?

---

Removes a resource from the state file without destroying the actual infrastructure:

```
terraform state rm aws_instance.example
```

Useful when you want Terraform to stop managing a resource while keeping it alive, or to clean up orphaned state entries.
