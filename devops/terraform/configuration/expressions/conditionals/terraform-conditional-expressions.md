---
noteId: 1785850810117
---

# How do you use conditional expressions in Terraform?

---

Using the ternary operator:

```hcl
condition ? true_val : false_val
```

Example:
```hcl
instance_type = var.env == "prod" ? "t2.large" : "t2.micro"
```
