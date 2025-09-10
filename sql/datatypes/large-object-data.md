---
id: large-object-data
aliases: []
tags: []
noteId: 1755921390397
---

What are the datatypes supported for storing large objects like images and videos in SQL?

---

| Data Type | Usage in Queries | Description                                                  |
| --------- | ---------------- | ------------------------------------------------------------ |
| BLOB      | BLOB             | Stores binary large objects such as images, audio, or videos |

---

- For large objects (LOBs like images or videos):
  - Data is stored in binary format, preserving the exact bytes of the file.
  - Unlike text types, there is no padding; the entire binary content is saved as-is.
  - Depending on the database and datatype, the storage can be inline with the table or externally with a reference pointer if very large.
  - The pointer/reference is the location of the item which stored in the table row as a small metadata item while the large data is managed independently.
