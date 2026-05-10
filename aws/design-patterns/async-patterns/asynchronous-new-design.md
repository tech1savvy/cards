---
noteId: 1778392160948
---

# How does the new asynchronous design work?

---

Flow:

Client → API → Buffer (Storage) → Response
↓
Background Processing

Benefits:

- Fast client response
- Backend processing happens later
- More resilient to failures
