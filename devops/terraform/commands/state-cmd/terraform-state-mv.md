---
---

# What does `terraform state mv` do?

---

Moves a resource from one state address to another within the state file:

```
terraform state mv module.old module.new
```

Commonly used when refactoring configurations — renaming modules, moving resources between modules, or restructuring state without destroying and recreating infrastructure.
