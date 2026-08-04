---
noteId: 1785850811692
---

# How do you manage remote state in Terraform?

---

By configuring a backend in your Terraform configuration to store the state file in a remote location:

```hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}
```
