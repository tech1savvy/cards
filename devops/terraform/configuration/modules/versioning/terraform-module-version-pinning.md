---
noteId: 1785850811092
---

# How does module version pinning help manage dependencies?

---

Pin module source references to specific versions (e.g., `version = "~> 1.2"`) to prevent unexpected changes when upstream modules release breaking updates. This ensures reproducibility and stability across environments and deployments.

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
}
```
