---
noteId: 1785850810867
---

# How do outputs and variables enable parameterization?

---

Variables allow callers to inject environment-specific values (region, instance size, CIDR ranges) into a module. Outputs expose computed values (resource IDs, endpoints) back to the caller. Together they make modules reusable across environments without hardcoding values:

```hcl
variable "instance_type" {
  type    = string
  default = "t3.micro"
}

output "instance_id" {
  value = aws_instance.main.id
}
```
