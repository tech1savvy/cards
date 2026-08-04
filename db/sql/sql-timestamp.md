---
noteId: 1785850807867
---

# What is the `TIMESTAMP` data type in SQL?

---

Stores a date + time. Behavior varies by database:

- **PostgreSQL** — `TIMESTAMP` (without tz, stored as-is) and `TIMESTAMPTZ` (with tz, stored internally in UTC, displayed in session timezone)
- **MySQL** — converted from session timezone to UTC on insert, back on retrieval; range `1970-01-01` to `2038-01-19`
- **SQLite** — no native type; stored as `TEXT` (`'2024-01-15 10:30:00'`), `INTEGER` (Unix epoch), or `REAL` (Julian day)

---

- MySQL's TIMESTAMP range is limited (2038 problem); use `DATETIME` for wider range
- PostgreSQL's `TIMESTAMPTZ` is the recommended choice for timezone-aware apps
