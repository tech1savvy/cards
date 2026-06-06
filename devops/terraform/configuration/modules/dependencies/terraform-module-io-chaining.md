---
---

# How do you chain modules via input/output variables?

---

Pass output values from one module as input variables to another using reference syntax like `module.vpc.vpc_id`. This creates implicit dependency ordering, so Terraform builds resources in the correct sequence without needing explicit `depends_on`.

```hcl
module "vpc" {
  source = "./modules/vpc"
}

module "app" {
  source      = "./modules/app"
  vpc_id      = module.vpc.vpc_id
  subnet_ids  = module.vpc.public_subnet_ids
}
```
