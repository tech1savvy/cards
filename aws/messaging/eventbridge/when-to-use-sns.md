---
noteId: 1778392166673
---

# When should you use SNS instead of EventBridge?

---

Use **SNS** when you need:

- High throughput
- Very low latency
- Simple fan-out messaging
- Microservice notifications
- Lower-cost messaging

Typical pattern:

Producer → SNS Topic → Multiple Consumers
