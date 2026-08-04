---
noteId: 1785850810442
---

# How do you perform a rolling update in Terraform?

---

By using `create_before_destroy` and `depends_on` to control the order of resource updates:

```hcl
lifecycle {
  create_before_destroy = true
}
```
