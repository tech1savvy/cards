---
---

# What does `terraform state show` do?

---

Displays detailed attributes of a single resource from the state file:

```
terraform state show aws_instance.example
```

Shows the full computed state — including IDs, IPs, and other provider-returned values — for inspection or debugging.
