---
level: 1
---

# AWS Fargate

AWS Fargate is a ==serverless compute engine for containers== (both ECS and EKS). It ==eliminates infrastructure management== — no provisioning, patching, or cluster capacity management.

- AWS handles the ==underlying OS and environment==. You define ==CPU and memory== at the Task (ECS) or Pod (EKS) level.
- ==Scaling and fault tolerance are built-in==.

How does EC2 launch type compare to Fargate?
***
| Launch Type | What Runs the Containers                     | Who Manages Servers      |
| ----------- | -------------------------------------------- | ------------------------ |
| EC2         | Containers run on EC2 instances              | You manage the instances |
| Fargate     | Containers run on AWS-managed infrastructure | AWS manages everything   |

What is the Fargate deployment workflow?
***
1. ==Build==: Create your container image
2. ==Push==: Store the image in Amazon ECR
3. ==Define==: Specify memory and CPU requirements
4. ==Run==: Launch the container
5. ==Pay==: Only pay for the vCPU, memory, and storage consumed

Use cases: ==microservices, batch processing, machine learning, migrating on-premises apps==

How do you choose between container compute platforms?
***
- **ECS with EC2:** You control instances and capacity. More control, more operational chores.
- **ECS with Fargate:** No server management. Define CPU/memory and run.
- **EKS with Fargate:** Kubernetes orchestration on serverless compute. No node management.
