---
---

# What are common use cases for `null_resource` in Terraform?

---

- **Dependency creation** — establishing dependencies between resources where no direct reference exists
- **Local provisioning** — running local provisioners without creating a tangible cloud resource
- **Conditional logic** — implementing conditional behavior based on triggers or changes
- **Arbitrary actions** — executing scripts or commands that don't map to a real infrastructure resource

```hcl
resource "null_resource" "example" {
  triggers = {
    cluster_id = aws_eks_cluster.example.id
  }

  provisioner "local-exec" {
    command = "kubectl apply -f manifests/"
  }
}
```
