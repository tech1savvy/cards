---
noteId: 1785850810917
---

# How do workspaces help with multi-deployment management?

---

Workspaces allow a single configuration to manage multiple deployments (e.g., dev, staging, prod) with separate state files. Use `terraform workspace new` / `select` to switch between them, and reference the current workspace name with `${terraform.workspace}` for environment-specific values:

```hcl
resource "aws_instance" "app" {
  count = terraform.workspace == "prod" ? 3 : 1
  instance_type = terraform.workspace == "prod" ? "t3.large" : "t3.micro"
}
```

Workspaces keep configurations DRY while isolating state per environment.
