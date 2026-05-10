---
noteId: 1778392164299
---

# What orchestrator was chosen for the hybrid architecture?

---

| Service    | Approach                 | Decision   |
| ---------- | ------------------------ | ---------- |
| Amazon EKS | Managed Kubernetes       | Not chosen |
| Amazon ECS | AWS-native orchestration | Selected   |

Reason for ECS:

- simpler operations
- deep AWS integration
- easier for smaller teams
