# What is a DNS zone?

---

An administrative boundary — a distinct part of the DNS namespace under the control of a specific entity (person, org, nameserver).

- A zone contains a domain and can also contain its subdomains
- The **zone file** is the file on the authoritative nameserver that holds all DNS records for that zone
- Every zone must have exactly one SOA record, which marks the start of authority
- A secondary server keeps a copy of the zone and updates it via zone transfers (triggered by serial number changes)

**Zone vs domain**: Not always the same. A single zone can manage multiple domains, or a single domain can be split into multiple zones (delegation). For example, `example.com` and `sub.example.com` can be in different zones with different authoritative nameservers.
