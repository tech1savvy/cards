---
id: os-release
---

What is the most universally compatible command to check the Linux distribution and version?

---

```sh
cat /etc/os-release
```

---

- Works for almost every modern Linux distribution (e.g., Ubuntu, Fedora, CentOS, Arch, SUSE, Alpine).
- Requires no additional packages or special privileges.
- Outputs key-value pairs like `NAME`, `VERSION`, and `ID` for easy parsing and reliable detection in scripts.
