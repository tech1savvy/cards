---
noteId: 1785850809042
---

# How do you direct Terraform logs to a file?

---

Set `TF_LOG_PATH` to write Terraform logs to a specific file instead of stderr:

```
export TF_LOG=DEBUG
export TF_LOG_PATH=./terraform.log
```

This requires `TF_LOG` to also be set. Log output goes to the file rather than the terminal, making it easier to search and archive.
