---
noteId: 1785850809692
---

# How do you enable debug logging for Terraform troubleshooting?

---

Set `TF_LOG=DEBUG` (or `TRACE` for maximum verbosity) to enable detailed logging:

```
export TF_LOG=DEBUG
terraform apply
```

You can also direct logs to a file with `TF_LOG_PATH=./terraform.log` for later analysis.
