---
noteId: 1785850813493
---

# How do Terraform providers integrate with Terraform core?

---

Providers integrate via these mechanisms:

- **Resource handling** — providers define and manage resources for a target platform (CRUD operations)
- **Data sources** — providers offer read-only data sources for importing external information
- **Authentication** — handle credentials and API communication with the target platform
- **State management** — interact with Terraform state to track each resource's current state
- **RPC communication** — Terraform core communicates with providers via gRPC (Remote Procedure Call)

The compiled Terraform binary uses the Plugin SDK to discover and communicate with provider binaries at runtime.
