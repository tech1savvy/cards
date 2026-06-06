---
---

# How do you manage environments using Terraform workspaces?

---

Terraform workspaces let you use a single configuration directory with multiple named state files (e.g., `dev`, `prod`). Switch between them with `terraform workspace select <name>`. You can read the current workspace name via `${terraform.workspace}` and use conditionals or maps to vary resource counts and settings per environment.

```hcl
variable "environment" {
  default = "dev"
}

resource "aws_instance" "example" {
  count = var.environment == "prod" ? 2 : 1
}
```

