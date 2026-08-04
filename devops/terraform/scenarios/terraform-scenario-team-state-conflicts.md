---
noteId: 1785850814017
---

# Scenario: Multiple engineers are applying Terraform changes and state conflicts occur. How do you prevent this?

---

Use remote backend storage with state locking (S3 + DynamoDB):

```hcl
backend "s3" {
  bucket         = "terraform-state-bucket"
  key            = "state/terraform.tfstate"
  region         = "us-east-1"
  dynamodb_table = "terraform-lock"
}
```

The DynamoDB table locks the state, ensuring only one engineer can apply changes at a time. Also: always run `terraform plan` before `apply` and communicate with team members.
