---
id: find-empty-files
noteId: 1765210330870
---

Which option to use with `find` to search for empty files?

---

Use the `-empty` option.

```sh
find /path/to/search -empty -type f
```

---

Can also be used to find empty directories with `-empty -type d`.
