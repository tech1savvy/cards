---
---

# What is the difference between Terraform outputs and data sources?

---

- **Outputs** — expose computed values *after* a successful `terraform apply`. Used to display or share information about the managed infrastructure (e.g., public IP, resource IDs).
- **Data Sources** — fetch information from external sources *during* the plan/apply phase. Used to import existing data not managed by Terraform (e.g., existing AMI IDs, external API data).

Outputs provide information *about* your infrastructure; data sources pull external information *into* your configuration.
