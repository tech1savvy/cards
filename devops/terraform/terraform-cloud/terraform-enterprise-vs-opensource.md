---
noteId: 1785850814691
---

# What is the difference between Terraform Enterprise and open-source Terraform?

---

| Aspect                    | Open-Source Terraform                          | Terraform Enterprise                                                                                |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Collaboration**         | Limited — single user or shared state file     | Full team collaboration with concurrent development                                                 |
| **State management**      | Local or self-managed remote backend           | Centralized, secure remote state with UI                                                            |
| **Access control**        | None built-in                                  | Fine-grained access controls and permissions                                                        |
| **Module registry**       | Public Terraform Registry only                 | Private module registry for sharing within the organization                                         |
| **Audit logging**         | None                                           | Comprehensive audit logging of all changes                                                          |
| **Policy enforcement**    | None                                           | Sentinel policy-as-code for governance                                                              |
| **Best for**              | Individuals and small teams                    | Large organizations with advanced governance and collaboration needs                                |
