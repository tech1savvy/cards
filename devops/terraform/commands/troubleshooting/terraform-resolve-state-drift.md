---
---

# How does `terraform refresh` help resolve state drift?

---

`terraform refresh` syncs the state file with the actual infrastructure by querying the provider for each resource's current attributes. This detects and corrects drift — where real-world resources have diverged from what the state file records — without making any changes to infrastructure.
