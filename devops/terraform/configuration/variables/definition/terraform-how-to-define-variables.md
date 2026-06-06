---
---

# How do you define variables in Terraform?

---

Using the `variable` block:

```hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}
```
