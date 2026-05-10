---
noteId: 1778392163697
---

# How does quota distribution work across multiple AWS accounts?

---

Each AWS account has its own:

- service quotas
- API rate limits.

Benefit:

- heavy testing or automation in one account
  cannot throttle production workloads.
