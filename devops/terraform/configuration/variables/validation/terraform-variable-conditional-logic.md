---
---

# How do you use conditional logic with Terraform variables?

---

Use ternary expressions (`condition ? true_value : false_value`) to make resource behavior conditional on variable values. This enables dynamic configurations like switching instance counts, sizing, or feature flags per environment:

```hcl
resource "aws_instance" "app" {
  count         = var.enable_monitoring ? 1 : 0
  instance_type = var.environment == "prod" ? "t3.large" : "t3.micro"
}
```
