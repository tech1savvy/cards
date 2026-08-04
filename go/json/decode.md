---
noteId: 1785850816117
---

# How do I decode JSON directly from a file?

---

Use `json.NewDecoder` with `os.Open`:

```go
f, _ := os.Open(path)
defer f.Close()

json.NewDecoder(f).Decode(&cfg)
```

This streams the JSON from disk and decodes it — no intermediate `[]byte` in memory.

Alternative (two-step):
```go
data, _ := os.ReadFile(path)
json.Unmarshal(data, &cfg)
```

`ReadFile` loads the entire file into memory first, then `Unmarshal` parses it. `NewDecoder` skips that buffer — matters for large payloads but either is fine for small configs.
