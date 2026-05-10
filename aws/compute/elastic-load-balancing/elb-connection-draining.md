---
noteId: 1778454566323
---

# What is ELB Connection Draining?

---

Connection draining (also called deregistration delay) prevents an instance from being terminated while it still has active, in-flight requests. ELB stops sending new traffic to the instance and waits for existing requests to complete before fully removing it.
