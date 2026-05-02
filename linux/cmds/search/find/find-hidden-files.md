---
id: find-hidden-files
noteId: 1765210330921
---

Which options to use with `find` to search for hidden files?

---

Use the `-name` option with a pattern like `.*`.

```sh
find /path/to/search -type f -name ".*"
```

---

Hidden files in Linux start with a dot (`.`).
