---
---

# How do Terraform locals enhance configuration readability?

---

`locals` blocks define named expressions that:

- **Name complex expressions** — give meaningful names to complicated values
- **Enable reuse** — compute once, reference many times across the configuration
- **Simplify complexity** — break down complex expressions into smaller, named pieces
- **Reduce redundancy** — avoid repeating the same calculation in multiple places
- **Improve maintainability** — encapsulate logic in one place

```hcl
locals {
  common_tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
  name_prefix = "${var.project}-${var.environment}"
}
```
