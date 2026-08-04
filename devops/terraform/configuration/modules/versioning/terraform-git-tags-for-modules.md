---
noteId: 1785850810992
---

# How do you use Git tags for module release versioning?

---

Tag each release with a semantic version tag (e.g., `v1.2.3`) in Git. Consumers reference the tag in the module source URL to pin to an exact version:

```hcl
module "vpc" {
  source = "git::https://github.com/org/terraform-vpc.git?ref=v1.2.3"
}
```

This provides traceable, immutable releases tied to specific commits.
