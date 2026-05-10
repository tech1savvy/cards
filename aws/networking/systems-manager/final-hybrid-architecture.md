---
noteId: 1778392164573
---

# What does the final hybrid architecture look like?

---

On-Prem Data Center
│
│ Direct Connect: physical link
│
AWS VPC
├─ ECS Anywhere Cluster (EC2)
│ └─ Containers
│
├─ ALB
│
├─ RDS PostgreSQL (Multi-AZ)
│
├─ S3
│ ↑
│ Storage Gateway (NFS bridge)
│
├─ NAT Gateway
│
└─ Management
├ Systems Manager
└ AWS Backup
