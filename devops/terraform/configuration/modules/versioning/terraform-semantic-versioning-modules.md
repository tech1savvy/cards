---
noteId: 1785850811167
---

# How does Semantic Versioning apply to Terraform modules?

---

Follow SemVer (`MAJOR.MINOR.PATCH`) for module releases:
- **MAJOR** — breaking changes (removed outputs, renamed variables)
- **MINOR** — new backward-compatible features (new outputs, new variables with defaults)
- **PATCH** — backward-compatible bug fixes

Consumers can then pin with `~> 1.2` to accept patches or `>= 1.0, < 2.0` for broader constraints.
