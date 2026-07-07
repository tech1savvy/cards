# How do I encode JSON directly to a file?

---

Use `json.NewEncoder` with `os.Create`:

```go
f, _ := os.Create(path)
json.NewEncoder(f).Encode(cfg)
```

This streams the encoded JSON straight to disk — no intermediate `[]byte` in memory.

Alternative (two-step):
```go
data, _ := json.Marshal(cfg)
os.WriteFile(path, data, 0o600)
```

`Marshal` builds the full JSON in memory first, then writes. `NewEncoder` skips that buffer — matters for large payloads but either is fine for small configs.

Same pattern on the read side with `NewDecoder` vs `json.Unmarshal`.
