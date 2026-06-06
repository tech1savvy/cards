---
---

# What is an `output` block in HCL?

---

An `output` block extracts and displays values from your Terraform configuration after a successful apply — such as an instance's public IP or a load balancer's DNS name. Outputs can be printed to the console, consumed by other modules, or shared via remote state.

```hcl
output "instance_public_ip" {
  value = aws_instance.web.public_ip
}
```

