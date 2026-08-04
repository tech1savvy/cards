---
noteId: 1785850811243
---

# How do you write and use custom Terraform providers?

---

1. Use the **Terraform Plugin SDK** in Go
2. Define resource **schemas** (attributes, types)
3. Implement **CRUD operations** (Create, Read, Update, Delete)
4. Wire up **API calls** to the target system
5. Compile the provider binary
6. Install it locally (in `~/.terraform.d/plugins/`) or publish to the Terraform Registry

Custom providers are useful for managing internal systems, APIs, or services not supported by default providers.
