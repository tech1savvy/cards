---
---

# How do you use variables in a dynamic block?

---

Reference the variable using `var.` prefix inside the dynamic block:

```hcl
variable "ingress_rules" {
  type = map(object({
    type        = string
    from_port   = number
    to_port     = number
    protocol    = string
    cidr_blocks = list(string)
  }))
}

resource "aws_security_group" "example" {
  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      type        = ingress.value.type
      from_port   = ingress.value.from_port
      to_port     = ingress.value.to_port
      protocol    = ingress.value.protocol
      cidr_blocks = ingress.value.cidr_blocks
    }
  }
}
```

Each key in the map produces one `ingress` block with attributes from the variable's nested object.
