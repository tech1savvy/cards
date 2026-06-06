---
---

# How and when do you use the `-target` flag in Terraform?

---

The `-target` flag limits `apply`, `destroy`, or `plan` to a specific resource (and its dependencies):

```
terraform apply -target=aws_instance.web
terraform destroy -target=aws_s3_bucket.logs
```

Common use cases:
- Selective operations on a subset of resources
- Isolated changes to limit risk and blast radius
- Faster runs by operating on fewer resources
- Parallel targeted operations (different resources, separate runs)

Use cautiously — bypassing the full dependency graph can lead to unintended state inconsistencies or missing dependent changes.
