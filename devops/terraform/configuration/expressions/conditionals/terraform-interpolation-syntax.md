---
noteId: 1785850810142
---

# What is Terraform interpolation syntax?

---

Interpolation syntax (`${}`) embeds expressions within strings or configurations. Common uses:

- **Variable reference** — `${var.environment}`
- **Resource attributes** — `${aws_instance.example.public_ip}`
- **Calculations** — `"${count.index + 1}"`

```hcl
resource "aws_instance" "example" {
  tags = {
    Name = "Instance-${var.environment}-${count.index}"
  }
}
```

In Terraform 0.12+, `var.environment` is preferred over `${var.environment}` for simple references, but interpolation syntax is still valid.
