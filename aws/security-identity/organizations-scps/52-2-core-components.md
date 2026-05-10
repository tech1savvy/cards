---
noteId: 1778392163998
---

# What are the core components of AWS Organizations?

---

Management Account

- primary account that creates the organization
- manages billing and policies.

Member Accounts

- individual AWS accounts inside the organization.

Organizational Units (OU)

- logical groups of accounts.

Example hierarchy:

Root
├ Client A OU
│ ├ Dev Account
│ ├ Test Account
│ └ Production Account
└ Client B OU

OUs can be nested.
