---
---

# How do Terraform providers and resources differ?

---

- **Providers** are plugins that translate Terraform configuration into API calls for a specific service (AWS, Azure, GCP, etc.). They own the logic for authentication, API interactions, and resource type definitions.
- **Resources** are the objects declared in your configuration that a provider manages — the actual infrastructure items like instances, subnets, or DNS records. You write resource blocks; providers do the heavy lifting behind them.

