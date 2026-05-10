---
noteId: 1778456399904
---

# Why was SQS selected as a buffer?

---

Amazon SQS was selected as a buffer because it provides a queue for asynchronous processing. Business logic must run before final storage, and SQS decouples the producer from downstream processing.
