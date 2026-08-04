---
noteId: 1785850815067
---

# How does Terraform manage immutable infrastructure?

---

Rather than mutating running servers in place, Terraform treats infrastructure as immutable — configuration changes produce a plan that may destroy and recreate resources to reach the new desired state. This approach reduces configuration drift and makes deployments predictable and repeatable.

