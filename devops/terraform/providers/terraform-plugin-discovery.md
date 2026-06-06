---
---

# How does Terraform discover plugins?

---

During `terraform init`, Terraform interprets configuration files in the working directory. It determines the necessary plugins, searches for installed plugins in various locations, and may download additional plugins. It then decides which plugin versions to use and creates a lock file (`.terraform.lock.hcl`) to ensure consistent plugin versions across runs.
