---
---

# Scenario: How do you integrate Terraform into a CI/CD pipeline?

---

Pipeline steps:

1. `terraform fmt` — format check
2. `terraform validate` — syntax check
3. `terraform plan` — generate and review execution plan
4. `terraform apply -auto-approve` — apply after approval

Use Terraform Cloud, Jenkins, GitHub Actions, or GitLab CI/CD. Store state remotely (S3 with state locking).
