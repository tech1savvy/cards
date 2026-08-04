---
noteId: 1785850811643
---

# What are the different types of Terraform backends?

---

- **Local** — stores state on the local machine. Not suitable for collaboration.
- **Remote** — stores state remotely for team access. Examples: Amazon S3, Azure Storage, HashiCorp Consul.
- **Enhanced Remote** — remote backends with additional features like remote execution and policy enforcement (e.g., Terraform Cloud, Terraform Enterprise).
- **Artifacts** — backends that store and retrieve artifacts, suitable for large-scale deployments.
