---
noteId: 1785850812817
---

# What is a `provider` block in HCL?

---

A `provider` block tells Terraform which plugin to use for managing a given cloud or SaaS platform. It configures authentication, region, and other top-level settings that apply to all resources of that provider type in the working directory.

```hcl
provider "aws" {
  region  = "us-east-1"
  profile = "prod"
}
```

