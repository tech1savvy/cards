---
noteId: 1785850809892
---

# How does Terraform differ from CloudFormation?

---

| Aspect               | Terraform                                  | CloudFormation                                                       |
| -------------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| **Providers**        | Multi-cloud (AWS, Azure, GCP, etc.)        | AWS-only                                                             |
| **Language**         | HCL (also JSON-compatible)                 | JSON and YAML                                                        |
| **Template size**    | No 51MB limit                              | 51MB limit (requires nested stacks)                                  |
| **State management** | Stored on provisioning machine or remotely | Managed automatically by AWS                                         |
| **Cost**             | Open-source (paid Enterprise version)      | Free (pay only for AWS resources)                                    |
| **Best for**         | Multi-cloud provisioning                   | AWS-native environments                                              |
