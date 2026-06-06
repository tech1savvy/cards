---
---

# When should you choose `for_each` over `count`?

---

Use `for_each` when resources are not identical or the collection may change over time. With `for_each`, removing an item only destroys the specific resource associated with that key. With `count`, removing from the middle of a list causes all subsequent resources to be destroyed and recreated due to re-indexing — highly disruptive in production.
