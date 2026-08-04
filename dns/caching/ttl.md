---
noteId: 1785850815592
---

# What is DNS TTL (Time to Live)?

---

A value in seconds that tells DNS resolvers and clients how long to cache a record before requesting a fresh copy.

- Lower TTL (e.g. 60s) — changes propagate faster, but more queries hit the authoritative nameserver
- Higher TTL (e.g. 86400s / 24h) — less load on the nameserver, but updates take longer to propagate
- Set TTL low before making record changes, then raise it after propagation
