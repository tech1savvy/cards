---
noteId: 1778392161973
---

# What are the components of AWS Service Catalog?

---

Product

- a deployable AWS resource or stack.
- usually defined with **CloudFormation templates**.

Example:
Dev environment with EC2, S3, and RDS.

Portfolio

- collection of products.
- access granted to users or groups.

Constraint

- rules limiting how a product can be deployed.

Example constraints:

- allowed EC2 instance types
- mandatory tagging.
