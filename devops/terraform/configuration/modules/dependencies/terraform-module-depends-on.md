---
noteId: 1785850810667
---

# How do you use `depends_on` for explicit module-level dependencies?

---

Use the `depends_on` meta-argument in a module block to declare an explicit dependency when Terraform cannot infer it from variable references. This ensures the dependent module is applied only after the referenced module completes, which is useful when modules interact through side effects rather than data.

```hcl
module "database" {
  source = "./modules/rds"
}

module "app" {
  source     = "./modules/ecs"
  depends_on = [module.database]
}
```
