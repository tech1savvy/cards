---
noteId: 1785850807893
---

# Does SQL have a native `UUID` data type?

---

Standard SQL does not define a native UUID type. Support varies by database:

- **PostgreSQL** — `UUID` (native, 128-bit)
- **SQLite** — no native type, store as `TEXT` (e.g., `'550e8400-...'`)
- **MySQL** — no native UUID type; use `BINARY(16)` or `CHAR(36)`

---

Auto-increment (`INTEGER PRIMARY KEY`) does not apply to UUIDs — the server must generate those (e.g., `gen_random_uuid()` in Postgres, `NEWID()` in SQL Server).
