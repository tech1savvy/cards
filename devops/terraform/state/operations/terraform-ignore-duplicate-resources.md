---
---

# How can Terraform handle duplicate resource errors during `terraform apply`?

---

Using the `-ignore_duplicate` flag. With this setting, Terraform continues even when it encounters duplicate resources, ensuring continuous deployment. However, this should be used cautiously and only when you understand the implications.
