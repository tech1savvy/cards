---
noteId: 1785850811718
---

# How do you manage Terraform state in a CI/CD pipeline?

---

**Challenges**: state consistency, concurrent modifications across pipeline runs.

**Best practices**:
- Use **remote backends** for centralized state storage
- Enable **state locking** to prevent concurrent modifications
- Use **separate workspaces** for different environments (dev, staging, prod)
- Automate pipeline workflows to apply changes after review
- Treat CI/CD pipeline configurations as code (version them alongside Terraform configs)
