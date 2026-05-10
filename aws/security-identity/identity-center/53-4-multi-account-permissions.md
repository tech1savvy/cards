---
noteId: 1778392162548
---

# How does IAM Identity Center handle multi-account permissions?

---

Works together with **AWS Organizations**.

Permission Sets

- predefined permission bundles.

Examples:

- AdministratorAccess
- ReadOnlyAccess
- custom permission sets.

Assignment model:

User / Group
↓
AWS Account
↓
Permission Set

Identity Center automatically creates the required IAM roles.
