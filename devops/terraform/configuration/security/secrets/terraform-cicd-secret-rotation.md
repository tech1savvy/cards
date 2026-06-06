---
---

# How does CI/CD enable secret rotation with Terraform?

---

A CI/CD pipeline automates secret rotation by:
1. Triggering rotation in the secret store (Vault, AWS Secrets Manager)
2. Running `terraform apply` to pick up the new secret value
3. Optionally restarting affected services to use new credentials

This eliminates manual variable updates and ensures rotation is consistent and auditable across environments.
