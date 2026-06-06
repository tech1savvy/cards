---
---

# How should modules declare their provider dependencies?

---

Declare provider requirements using the `terraform { required_providers {} }` block inside the module. This ensures consumers know which providers are needed and at what versions:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
  required_version = ">= 1.0"
}
```

List these dependencies in the module README as well for clarity.
