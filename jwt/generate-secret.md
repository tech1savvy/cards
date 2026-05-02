---
id: generate-secret
aliases: []
tags: []
noteId: 1765210327745
---

```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

- Generates a cryptographically secure 32-byte (256-bit) hex.
