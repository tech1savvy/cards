---
noteId: 1778456402637
---

# How does Infrastructure as Code handle dependency management?

---

CloudFormation automatically creates resources in the correct order based on dependencies. For example, a VPC is created before a Subnet, which is created before an EC2 instance.
