---
noteId: 1778392160922
---

# What does the Phase 2 architecture look like?

---

Components:

1. **API Gateway**
   - Validates request

2. **Amazon SQS**
   - Stores order message (buffer)

3. **Lambda**
   - Polls queue
   - Processes order

Flow:

Client
↓
API Gateway
↓
SQS Queue
↓
Lambda Processing
