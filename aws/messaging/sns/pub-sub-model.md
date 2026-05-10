---
noteId: 1778392166473
---

# How does the SNS pub/sub model work?

---

Components:

- **Topic** – communication channel
- **Publisher** – sends message to topic
- **Subscriber** – receives message

Fan-out pattern:

Publisher → SNS Topic → Multiple Subscribers

One message can trigger multiple consumers.
