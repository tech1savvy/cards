---
id: datetime
aliases: []
tags: []
noteId: 1755921390346
---

What are the datatypes supported for date and time values in SQL?

---

| Data Type | Usage in Queries | Description                                                                                 |
| --------- | ---------------- | ------------------------------------------------------------------------------------------- |
| DATE      | `DATE`           | Stores calendar date values (==year, month, day==) only.                                    |
| TIME      | `TIME`           | Stores time of day values (==hours, minutes, seconds, fractional seconds optional)==.       |
| DATETIME  | `DATETIME`       | Stores date and time values combined (==year, month, day, hours, minutes, seconds==).       |
| TIMESTAMP | `TIMESTAMP`      | Stores date and time ==with timezone== awareness or Unix epoch-based time (varies by DBMS). |
| YEAR      | `YEAR`           | Stores a ==year== value typically as 2 or 4 digits (specific to some databases like MySQL). |
