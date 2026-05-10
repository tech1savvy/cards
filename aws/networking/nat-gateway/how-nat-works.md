---
noteId: 1778392164898
---

# How does NAT work in AWS?

---

Traffic flow:

Private Instance
↓
NAT Device (Public Subnet)
↓
Internet Gateway
↓
Internet

Key rule:

- outbound requests allowed
- unsolicited inbound traffic blocked
