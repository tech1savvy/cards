---
noteId: 1778392166348
---

# What reliability features does SQS provide?

---

**Visibility Timeout**

- Prevents multiple consumers from processing the same message simultaneously

**Dead-Letter Queue (DLQ)**

- Stores messages that fail processing repeatedly

**Redrive Policy**

- Moves failed messages to DLQ
