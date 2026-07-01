# What is a DNS A (address) record?

---

Maps a domain name to an IPv4 address. Consists of two parts:

- **Name** — the subdomain or domain (e.g. `www`, `blog`, `api`), or `@` to point to the root/apex domain
- **Value** — an IPv4 address (e.g. `10.0.10.50` or `192.168.1.100`)

---

- A records can only contain IPv4 addresses
- A domain can have multiple A records for round-robin load balancing
- Example: `@` pointing `boot.dev` → `104.26.0.86`
- To point a domain to an IPv6 address, use an `AAAA` record instead
