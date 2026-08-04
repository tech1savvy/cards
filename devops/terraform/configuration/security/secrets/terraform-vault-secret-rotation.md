---
noteId: 1785850811567
---

# How do you integrate HashiCorp Vault for secret rotation in Terraform?

---

Use the Vault provider's data sources to fetch the latest secret value at plan/apply time. Vault handles rotation externally; Terraform always reads the current value:

```hcl
data "vault_generic_secret" "db" {
  path = "secret/database"
}

resource "aws_db_instance" "main" {
  password = data.vault_generic_secret.db.data["password"]
}
```

Re-running `terraform apply` after a Vault rotation picks up the new secret automatically.
