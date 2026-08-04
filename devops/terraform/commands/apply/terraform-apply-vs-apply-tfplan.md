---
noteId: 1785850808718
---

# What is the difference between `terraform apply` and `terraform apply tfplan`?

---

- `terraform apply` (no argument) — generates a new execution plan and prompts for interactive approval before executing. Suitable for manual workflows.
- `terraform apply tfplan` (pre-saved plan file from `terraform plan -out=tfplan`) — applies the exact changes in that plan file without generating a new one or prompting. Best practice for CI/CD pipelines to ensure only reviewed changes are executed.
