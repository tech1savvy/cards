---
noteId: 1778454566473
---

# How does NLB handle source IP addresses?

---

NLB **preserves the client's source IP** — the backend instance sees the original client IP address directly, unlike ALB which requires the `X-Forwarded-For` header.
