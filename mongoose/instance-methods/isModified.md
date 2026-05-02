---
id: isModified
noteId: 1765210332521
---

How to check if a document field has been modified in Mongoose?

---

Use the `isModified()` instance method.

```javascript
doc.isModified('path');
```

---

- Returns `true` if the given path was modified, `false` otherwise.
- If no path is given, it checks if *any* path in the document was modified.
