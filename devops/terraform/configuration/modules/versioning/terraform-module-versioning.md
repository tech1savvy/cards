---
noteId: 1785850811117
---

# How do you handle module versioning in Terraform?

---

By specifying the version in the module source:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = ">= 1.0.0"
}
```
