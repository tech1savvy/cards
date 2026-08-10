---
noteId: 1778392168123
level: 1
---

"**Serverless**" means the servers are ==abstracted from the user==. 

Q: What are the four key aspects of serverless computing?
=>
**Shared Responsibility Shift:** With serverless, AWS handles OS patching, scaling, and HA. The customer still handles data encryption and access control.

1. **No Servers to Provision or Manage:** No manual setup or maintenance of instances
2. **Scales with Usage:** Automatically adjusts resources based on real-time demand
3. **Pay-for-Value:** You *never pay for idle resources*; costs are tied directly to consumption
4. **Inherent Availability:** High availability and fault tolerance are built-in by design

**Shared Responsibility Shift:** With serverless, AWS handles OS patching, scaling, and HA. The customer still handles data encryption and access control.

**Spectrum: Control vs. Convenience**
- **EC2 (Control):** You manage the OS, scaling, and patches. High flexibility.
- **Lambda (Convenience):** AWS manages the environment. High convenience, reduced operational overhead.

What are the AWS serverless compute options?
***
- **AWS Lambda:** ==Run code without provisioning or managing servers==. Supports multiple languages. Pay per request + compute time.
- **AWS Fargate:** ==Serverless compute engine for containers== (ECS/EKS). No EC2 instance management. Pay per vCPU/memory.
- **AWS App Runner:** ==Fully managed service for containerized web apps== and APIs. Auto-scales, load balances, handles TLS.
