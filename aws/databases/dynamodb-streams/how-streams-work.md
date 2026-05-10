---
noteId: 1778392160048
---

# How do DynamoDB Streams capture table changes?

---

**Change Data Capture (CDC)**  
Records table events:

- Insert
- Update
- Delete

Key properties:

- Stored for **24 hours**
- Asynchronous (no impact on table performance)
- Events are **time-ordered**
