---
noteId: 1778456394905
---

# How does Auto Scaling manage instances?

---

- **Self-Healing:** Unhealthy instances are automatically terminated and replaced.
- **ELB Integration:** New instances are automatically registered with the load balancer's Target Group.
- **Connection Draining:** When scaling in, the ASG waits for active connections to complete before terminating an instance.
