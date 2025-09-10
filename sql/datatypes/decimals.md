---
id: decimals
aliases: []
tags: []
noteId: 1755921390371
---

What are the datatypes supported for floating-point numbers in SQL?

---

| Data Type | Usage in Queries | Range / Precision                                                                 | Storage Size |
| --------- | ---------------- | --------------------------------------------------------------------------------- | ------------ |
| FLOAT     | FLOAT            | Defualt 1 or 2 digits precision as per the dbms used.                             | 4 bytes      |
| DOUBLE    | DOUBLE(p, s)     | Approximately 15 digits precision, DOUBLE(p, s) specifies precision p and scale s | 8 bytes      |

---

- Both **FLOAT** and **DOUBLE PRECISION** store approximate floating-point numbers and may introduce rounding errors.

- **FLOAT(n)** syntax allows `n` to specify the number of bits used to store the mantissa (precision), commonly between 1 and 53.
  - For example, `FLOAT(24)` is roughly equivalent to a single precision float.
- **DOUBLE(p, s)** syntax allows specifying both total precision `p` (total number of digits) and scale `s` (number of digits after the decimal point).
  - For example, `DOUBLE(10,2)` allows numbers with up to 10 digits total, 2 of which are after the decimal point.

- These syntaxes can differ slightly across SQL implementations (MySQL, PostgreSQL, SQL Server), so always check specific DBMS documentation.
