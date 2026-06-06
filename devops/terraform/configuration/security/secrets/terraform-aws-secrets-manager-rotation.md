---
---

# How do you integrate AWS Secrets Manager for secret rotation in Terraform?

---

Use the `aws_secretsmanager_secret_version` data source to fetch the current secret value. AWS Secrets Manager handles rotation on a schedule; Terraform reads the latest version at apply time:

```hcl
data "aws_secretsmanager_secret_version" "db" {
  secret_id = "prod/database/password"
}

resource "aws_db_instance" "main" {
  password = jsondecode(data.aws_secretsmanager_secret_version.db.secret_string)["password"]
}
```
