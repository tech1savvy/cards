---
---

# How do you manage environments using distinct state files?

---

Point each environment (dev, staging, prod) to a separate remote state file using different backend configurations or workspaces. Each state file tracks the real-world resources for that environment independently, so a `terraform apply` in dev never touches production infrastructure. This approach provides strong isolation and is the most common pattern for production setups.

