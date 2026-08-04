---
noteId: 1785850810568
---

# How do you manage dependencies between resources in Terraform?

---

Terraform automatically manages dependencies by analyzing resource references. Explicit dependencies can be set using `depends_on`:

```hcl
resource "aws_instance" "example" {
  depends_on = [aws_security_group.sg]
}
```
