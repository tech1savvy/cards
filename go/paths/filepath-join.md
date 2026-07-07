# How do I safely join path segments in Go?

---

Use `filepath.Join()` instead of string concatenation (`dir + "/" + file`).

```go
home := "/Users/Alice"
config := filepath.Join(home, ".config", "myapp", "config.yaml")
// "/Users/Alice/.config/myapp/config.yaml"
```

`filepath.Join` uses the OS-specific path separator (`\` on Windows, `/` on Unix). String concatenation with `"/"` breaks on Windows.

**Don't:**
```go
path := homeDir + "/" + configFileName // fragile
```

**Do:**
```go
path := filepath.Join(homeDir, configFileName) // portable
```
