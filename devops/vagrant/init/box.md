# How do I initialize a Vagrant environment with a specific box and version?

---

```bash
vagrant init bento/ubuntu-26.04 --box-version 202606.01.0
```

## When to use
- You need to pin a box version for reproducible environments
- Avoiding unexpected changes from the latest box release
