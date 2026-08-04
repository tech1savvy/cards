---
noteId: 1785850813342
---

# Why use input and output variables in Terraform modules?

---

Input variables make modules configurable and reusable across different environments without modifying the module source. Output variables expose computed values (e.g., resource IDs, endpoints) so callers can reference them in other configurations. Together they define a clean, explicit contract between a module and its consumers.

