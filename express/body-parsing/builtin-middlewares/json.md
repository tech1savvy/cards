---
noteId: 1757759275419
---

# How to parse JSON data in express?

---

```js
app.use(express.json());
```

- This middleware parses incoming requests with JSON payloads and makes the data available on `req.body`.
