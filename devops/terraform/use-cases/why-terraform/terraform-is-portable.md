---
noteId: 1785850815042
---

# Why is Terraform portable across providers?

---

The same HCL syntax and workflow apply regardless of the underlying cloud provider. Switching from AWS to Azure, or adding GCP alongside existing infrastructure, mainly requires changing the provider and resource type — the core tooling, state management, and collaboration patterns remain identical.

