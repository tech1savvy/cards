---
---

# How do you interpret error messages during `terraform apply`?

---

Read the error output carefully — it includes the resource type, attribute, and the specific API error from the provider. Common patterns: authentication failures, duplicate resources, invalid arguments, resource limits, or dependency cycles. The error message usually points to the exact line in your configuration that caused the failure.
