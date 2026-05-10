---
noteId: 1778454566298
---

# How does ALB handle source IP addresses?

---

The backend instance sees the **load balancer's private IP** as the source IP. The client's original IP is forwarded via the `X-Forwarded-For` HTTP header, which the application must read to determine the true client address.
