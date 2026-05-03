---
noteId: 1777803544016
---

### What is a Role in Kubernetes?

---

Defines a set of permissions (verbs on resources) **within a single namespace**. Uses `apiGroups`, `resources`, and `verbs`.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: deploy-role
  namespace: staging
rules:
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "create", "update", "patch", "delete"]
```

```bash
kubectl get roles -n staging
kubectl describe role deploy-role -n staging
```

---

For cluster-wide permissions, use `ClusterRole`.
