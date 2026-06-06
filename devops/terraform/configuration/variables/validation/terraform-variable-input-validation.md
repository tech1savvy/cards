---
---

# How do you validate Terraform variable inputs?

---

Add a `validation` block inside a `variable` declaration to enforce rules on input values. Terraform checks validation conditions during `terraform plan` and `apply`, rejecting invalid values before any changes are made:

```hcl
variable "instance_type" {
  type    = string
  default = "t3.micro"

  validation {
    condition     = can(regex("^t[23]\\.", var.instance_type))
    error_message = "Must be a t2 or t3 instance type."
  }
}
```
