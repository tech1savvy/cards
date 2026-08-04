---
noteId: 1785850810742
---

# How do you share state between configurations via `terraform_remote_state`?

---

Use the `terraform_remote_state` data source to read outputs from another configuration's state file stored in a remote backend (S3, Terraform Cloud, etc.). This allows separately managed Terraform projects to share data without tight coupling.

```hcl
data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "my-tfstate"
    key    = "network/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_instance" "app" {
  subnet_id = data.terraform_remote_state.network.outputs.subnet_id
}
```
