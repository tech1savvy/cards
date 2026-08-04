---
noteId: 1785850810592
---

# How can you prevent resource deletion in Terraform?

---

By setting the `prevent_destroy` lifecycle meta-argument to `true`:

```hcl
resource "aws_s3_bucket" "critical" {
  lifecycle {
    prevent_destroy = true
  }
}
```
