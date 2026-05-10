---
noteId: 1778392164273
---

# What launch type options are available for ECS?

---

| Feature        | ECS on EC2           | AWS Fargate    |
| -------------- | -------------------- | -------------- |
| Infrastructure | You manage instances | Fully managed  |
| OS access      | Full SSH access      | No host access |
| Custom AMIs    | Supported            | Not supported  |

Decision: **ECS on EC2**

Reason:

- requires custom AMIs
- requires SSH troubleshooting
- supports lift-and-shift workloads
