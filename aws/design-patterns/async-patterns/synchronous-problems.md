---
noteId: 1778456399938
---

# What problems does the synchronous approach have?

---

In a synchronous flow (Client → API → Compute → Database → Downstream APIs → Response), the user waits for all steps, slow downstream services delay the entire response, and any failure crashes the request.
