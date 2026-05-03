---
noteId: 1777803544024
---

### How do I list all contexts in kubeconfig?

---

```bash
kubectl config get-contexts
```

```bash
CURRENT   NAME           CLUSTER    AUTHINFO     NAMESPACE
          admin-context   minikube   admin-user   default
*         dev-context     minikube   dev-user     dev
```

---

The `*` marks the active context. The `AUTHINFO` column shows which user credentials are used.
