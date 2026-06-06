---
---

# How do you use `count` and `for_each` with modules?

---

Both can be used on module blocks to create multiple instances:

**count:**
```hcl
module "example" {
  source = "./modules/example"
  count  = 3
  name   = "instance-${count.index}"
}
```
Creates 3 identical module instances with index-based names.

**for_each:**
```hcl
module "example" {
  source   = "./modules/example"
  for_each = toset(["dev", "staging", "prod"])
  name     = "instance-${each.key}"
}
```
Creates one module instance per environment with stable key-based references — removing an item doesn't affect other instances.
