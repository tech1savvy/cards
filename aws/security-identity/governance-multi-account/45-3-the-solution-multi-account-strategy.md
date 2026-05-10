---
noteId: 1778392163373
---

# How does a multi-account strategy solve the problems of single-account setups?

---

Separate workloads into different AWS accounts.

Common structure:

Organization
├ Management Account
├ Security Account
├ Logging Account
├ Dev Account
├ Test Account
└ Production Account

Benefits:

- strong isolation
- better access control
- clearer billing
- reduced blast radius.
