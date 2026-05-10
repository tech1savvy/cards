---
noteId: 1778392164872
---

# What is the high availability best practice for NAT Gateways?

---

Deploy **one NAT Gateway per Availability Zone**.

Reason:

- avoids cross-AZ traffic
- prevents single-AZ failure from breaking outbound access.
