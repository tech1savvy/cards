---
---

# How do you create parallel environments for blue-green deployments?

---

Create two separate but identical environments by instantiating the same module twice with different names (e.g., `blue` and `green`). Use `create_before_destroy = true` in lifecycle blocks where resource replacement ordering matters:

```hcl
module "blue" {
  source       = "./modules/app"
  environment  = "blue"
}

module "green" {
  source       = "./modules/app"
  environment  = "green"
}
```

Deploy to the inactive environment first, validate it, then switch traffic.
