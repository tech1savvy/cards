---
---

# Why should Terraform modules be kept small and focused?

---

Small, focused modules are easier to understand, test, and reuse. Each module should encapsulate a single logical piece of infrastructure (e.g., a VPC, an EKS cluster, a database) rather than trying to manage everything at once. This reduces coupling, simplifies debugging, and lets teams compose complex setups from simple building blocks.

