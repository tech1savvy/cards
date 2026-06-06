---
---

# What is the external data block in Terraform?

---

The `external` data source allows an external program to act as a data source by exposing arbitrary data for use elsewhere in the Terraform configuration. The external program must implement a specific protocol: it receives JSON on stdin and outputs JSON on stdout.
