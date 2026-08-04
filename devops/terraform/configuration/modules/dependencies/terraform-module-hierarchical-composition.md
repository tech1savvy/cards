---
noteId: 1785850810692
---

# What is hierarchical module composition in Terraform?

---

Organize modules in layers (foundation → platform → application) that mirror real infrastructure dependencies. Each layer consumes outputs from the layer below and exposes its own outputs upward, creating a clear, testable, and maintainable composition hierarchy.

```
application/
platform/
foundation/
```
