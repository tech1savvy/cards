---
noteId: 1778392161047
---

# How do synchronous and asynchronous approaches compare?

---

## Synchronous (Current System)

Flow:

Client → API → Compute → Database → Downstream APIs → Response

Problems:
User waits for all steps
Slow downstream services delay response
Failures crash the request
