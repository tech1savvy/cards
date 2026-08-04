---
noteId: 1785850811992
---

# What is the purpose of output variables?

---

They allow you to extract and display information from your Terraform configuration, often used to output resource attributes.

```hcl
output "instance_ip" {
  value       = aws_instance.example.public_ip
  description = "Public IP of the instance"
}
```
