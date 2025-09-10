---
id: table
aliases: []
tags: []
noteId: 1755921389747
---

Create a table

---

```sql
CREATE TABLE table-name(
  column_name1 datatype constraint,
  column_name2 datatype constraint,
  column_name3 datatype constraint,
);
```

---

- Ex:

  ```sql
  create table student(
    roll_no int primary key,
    name varchar(50)
  );
  ```

- make sure a database is selected first through [use](programming/databases/sql/commands/data-definition/create/use.md) command.
