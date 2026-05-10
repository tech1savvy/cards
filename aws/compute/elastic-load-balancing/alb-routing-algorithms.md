---
noteId: 1778454566273
---

# What routing algorithms does ALB use?

---

- **Round-Robin** (default): Sends requests to each target in sequential order.
- **Least Outstanding Requests**: Sends requests to the target with the fewest pending requests, balancing load based on current demand.
