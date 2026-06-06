---
---

# What is a `resource` block in HCL?

---

A `resource` block declares an infrastructure object that Terraform will manage. It specifies the resource type (e.g., `aws_instance`) and a local name, along with all configuration arguments the provider requires. Terraform creates, reads, updates, and deletes these objects over their lifecycle.

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type
}
```

