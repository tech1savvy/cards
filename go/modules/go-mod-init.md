---
noteId: 1785850816243
---

How do I initialize a Go module?

---

Use `go mod init <module-path>` to create a `go.mod` file.

Example:

```shell
$ go mod init github.com/user/myapp
$ cat go.mod
module github.com/user/myapp

go 1.21
```

The module path typically matches the repo location. Subsequent `go` commands use this file for dependency tracking.
