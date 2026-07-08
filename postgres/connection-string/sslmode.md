# What does `sslmode` control in a Postgres connection string?

---

- `sslmode=disable` tells the Postgres driver to connect without SSL encryption
- Default is `prefer` (try TLS, fall back to plaintext)
- Use `disable` for local dev — traffic never leaves your machine, so TLS is unnecessary overhead

---

- Postgres docs say "SSL" but the wire protocol is actually TLS (SSL is deprecated). `sslmode` is historical naming — even `sslmode=require` negotiates TLS, not SSL.
- Other modes: `require`, `verify-ca`, `verify-full` (increasing strictness)
