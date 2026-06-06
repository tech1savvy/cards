---
---

# What happens if you manually edit the `terraform.tfstate` file?

---

It is **strongly discouraged**. Manually editing can corrupt the file or cause mismatches with actual infrastructure, leading to unexpected destruction and recreation of resources. If state manipulation is required, use `terraform state rm` or `terraform import` instead.
