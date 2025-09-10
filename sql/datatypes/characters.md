---
id: characters
aliases: []
tags: []
noteId: 1755921390322
---

What are the datatypes supported for characters in SQL?

---

| Data Type | Usage in Queries | Description                                                  |
| --------- | ---------------- | ------------------------------------------------------------ |
| CHAR      | `CHAR(n)`        | Stores fixed-length non-Unicode characters of length n       |
| VARCHAR   | `VARCHAR(n)`     | Stores variable-length non-Unicode characters up to length n |
| TEXT      | `TEXT`           | Stores large blocks of variable-length non-Unicode text      |

---

- If less than `n` characters are added then in case of
  - CHAR: they are right-padded with spaces to fill the defined length.
    - For example,
      - inserting 'abc' into a CHAR(5) column stores 'abc ' (with two spaces),
      - but when querying, you might only see 'abc'
      - as the padded spaces are typically trimmed automatically.
  - VARCHAR: nothing happens the shorter length is saved as it is.
