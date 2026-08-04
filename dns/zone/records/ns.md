---
noteId: 1785850815892
---

# What is a DNS NS (nameserver) record?

---

Indicates which DNS server is authoritative for a domain — tells the internet where to find a domain's actual DNS records.

- A domain typically has multiple NS records for redundancy (primary + secondary nameservers)
- NS records can never point to a CNAME record
- Changing NS records tells the world to use different nameservers for the domain
- Updates can take hours to propagate throughout DNS
