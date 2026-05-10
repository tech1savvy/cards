---
noteId: 1778392166898
---

# How does a serverless web backend use event-driven architecture for async processing?

---

Goal: Build a resilient async backend.

Architecture:

```
API Gateway
↓
SQS
↓
Lambda
↓
DynamoDB
↓
DynamoDB Streams
↓
Lambda
↓
SNS (fan-out to services)
```

Key Concepts:

- Event-driven architecture
- Async processing
- Storage-first pattern
- Decoupling services
- Eliminating single points of failure
