# Modules

How do I initialize a Go module?

***

Use `go mod init <module-path>` to create a `go.mod` file.

Example:

```shell
$ go mod init github.com/user/myapp
$ cat go.mod
module github.com/user/myapp

go 1.21
```

The module path typically matches the repo location. Subsequent `go` commands use this file for dependency tracking.

What are internal packages in Go?

***

Internal packages restrict visibility - only code in the parent directory and its subdirectories can import them.

Use to reduce public API surface area. See: https://dave.cheney.net/2019/10/06/use-internal-packages-to-reduce-your-public-api-surface

# Paths

How do I safely join path segments in Go?

***

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

# JSON

How do I encode JSON directly to a file?

***

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

How do I decode JSON directly from a file?

***

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

How do you generate Go structs from JSON?

***

Use: https://mholt.github.io/json-to-go/
