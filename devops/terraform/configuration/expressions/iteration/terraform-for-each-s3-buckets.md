---
---

# How do you use `for_each` to create multiple S3 buckets from a list?

---

```hcl
variable "bucket_names" {
  type = list(string)
}

resource "aws_s3_bucket" "buckets" {
  for_each = toset(var.bucket_names)
  bucket   = each.value
}
```

Pass names via `.tfvars`:

```hcl
bucket_names = ["app-logs", "app-uploads", "app-backups"]
```

Reference individual buckets as `aws_s3_bucket.buckets["app-logs"]`.
