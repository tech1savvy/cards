---
noteId: 1785850811291
---

# How do you deploy the same module across multiple AWS accounts?

---

Define the module once and call it multiple times with different provider aliases. Each alias uses a different account's credentials:

```hcl
provider "aws" {
  alias  = "dev"
  region = "us-east-1"
}

provider "aws" {
  alias  = "prod"
  region = "us-east-1"
}

module "vpc_dev" {
  source    = "./modules/vpc"
  providers = { aws = aws.dev }
}

module "vpc_prod" {
  source    = "./modules/vpc"
  providers = { aws = aws.prod }
}
```

This keeps the configuration DRY and consistent across accounts.
