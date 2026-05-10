---
noteId: 1778392164248
---

# What was the final architecture choice for the hybrid solution?

---

Orchestrator:

- Amazon ECS

Compute:

- ECS using EC2 launch type

Network placement:

- EC2 instances in **private subnets**
- internal workloads only
