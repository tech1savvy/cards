---
---

# What rollback strategies can you implement in Terraform for failed deployments?

---

- **VCS tagging** — tag successful commits to mark known-good deployable states
- **State backups** — regularly back up Terraform state files for recovery
- **Manual reversion** — recommit the previous known-good configuration version
- **Pipeline notifications** — implement alerts in CI/CD pipelines to catch failures early
- **Terraform Enterprise State Rollback** — use built-in state rollback to revert to the last good state (every state change is versioned)
