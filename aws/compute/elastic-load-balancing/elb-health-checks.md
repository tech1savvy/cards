---
noteId: 1778454566348
---

# How do ELB health checks work?

---

ELB monitors the health of registered targets and only routes traffic to those that pass the health check, such as a successful TCP connection or an HTTP `200 OK` response. Unhealthy targets are automatically removed from rotation.
