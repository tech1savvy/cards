---
noteId: 1777803544025
---

### How do I verify the active context?

---

```bash
kubectl config current-context
```

```bash
kubectl config view --minify -o jsonpath='{.current-context}'
```

---

Returns just the active context name. Combine with `kubectl config get-contexts` to see the full context list with the active one marked.
