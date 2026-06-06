---
---

# How do you manage security groups and firewall rules in Terraform?

---

- Use **variables** for flexible security group configurations across environments
- Define rules based on protocols, ports, and CIDR sources
- Use **dynamic blocks** for creating rules dynamically from variable lists
- Adapt configurations to each cloud provider's specific rule structure
- Implement **network policies** for fine-grained control beyond basic firewall rules

```hcl
dynamic "ingress" {
  for_each = var.ingress_rules
  content {
    from_port   = ingress.value.from_port
    to_port     = ingress.value.to_port
    protocol    = ingress.value.protocol
    cidr_blocks = ingress.value.cidr_blocks
  }
}
```
