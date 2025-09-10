---
id: boolean
aliases: []
tags: []
noteId: 1755921390297
---

What are support is there for boolean values in SQL?

---

| Data Type | Usage               | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| BOOLEAN   | `BOOLEAN` or `BOOL` | Logical data type storing `TRUE` or `FALSE`. |

---

- Internal implementation maps to numeric (1/0) or text (`'t'/'f'`) . |

- Standardized in SQL, but actual support varies by database engine:
  - PostgreSQL: true boolean type (`TRUE`, `FALSE`, `NULL`).
  - MySQL: `BOOLEAN` is an alias for `TINYINT(1)`.
  - SQL Server: uses `BIT` instead of `BOOLEAN`.
  - Oracle (before 23c): no native `BOOLEAN` in SQL, though PL/SQL had it; emulated via `CHAR(1)` / `NUMBER(1)`.
