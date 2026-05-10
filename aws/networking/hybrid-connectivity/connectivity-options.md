---
noteId: 1778392165098
---

# What connectivity options are available for hybrid networking in AWS?

---

| Method           | Transport        | Security  | Performance   | Decision    |
| ---------------- | ---------------- | --------- | ------------- | ----------- |
| Public Internet  | Internet         | Low       | Unpredictable | Rejected    |
| Site-to-Site VPN | Internet + IPsec | High      | Variable      | Backup only |
| Direct Connect   | Private circuit  | Very high | Consistent    | Selected    |

Reason:

- lowest latency
- predictable throughput
- private connectivity.
