# What is eventual consistency?

---

A consistency model in distributed systems where changes propagate over time rather than instantly. If no new updates are made, all reads will eventually return the last updated value.

**DNS example**: When you update a DNS record, the change doesn't appear everywhere immediately. DNS is eventually consistent and heavily cached — it takes time for the new value to propagate across all nameservers and resolvers.

