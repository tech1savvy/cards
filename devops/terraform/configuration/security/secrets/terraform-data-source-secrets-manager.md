---
noteId: 1785850811517
---

# How do you use a data source to fetch a secret from AWS Secrets Manager?

---

Use the `aws_secretsmanager_secret_version` data source:

```hcl
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "my-db-password"
}

resource "aws_db_instance" "example" {
  password = data.aws_secretsmanager_secret_version.db_password.secret_string
}
```

Terraform queries the AWS API during the plan phase, and the value is referenced in other resources without hardcoding secrets.
