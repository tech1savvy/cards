---
noteId: 1785850812867
---

# What is a `variable` block in HCL?

---

A `variable` block declares an input variable — a named parameter that lets users customize a Terraform configuration without editing the source. Variables can have types, defaults, descriptions, and validation rules. They are the primary way to make configurations reusable across environments.

```hcl
variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 instance type"
}
```

