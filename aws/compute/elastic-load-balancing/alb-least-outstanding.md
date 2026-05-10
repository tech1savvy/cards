---
noteId: 1778456397273
---

# How does ALB least outstanding requests routing work?

---

The least outstanding requests algorithm sends requests to the target with the fewest pending requests. This balances load based on current demand rather than sequential order, accounting for varying request processing times.
