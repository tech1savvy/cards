---
noteId: 1778392164449
---

# What is the multi-site active/active DR strategy?

---

Strategy:

- full production environments in multiple regions
- traffic distributed across regions.

During disaster:

- remove failed region from routing.

Characteristics:

- near zero RTO
- near zero RPO
- highest cost and complexity.

Example tools:

- Route 53 health checks
- global load balancing.
