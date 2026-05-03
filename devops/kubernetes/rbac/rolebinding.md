---
noteId: 1777803544018
---

### What is a RoleBinding in Kubernetes?

---

Grants the permissions of a `Role` or `ClusterRole` to a user, group, or ServiceAccount **within a namespace**.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: deploy-binding
  namespace: staging
subjects:
- kind: ServiceAccount
  name: deployer
  namespace: staging
roleRef:
  kind: Role
  name: deploy-role
  apiGroup: rbac.authorization.k8s.io
```

```bash
kubectl get rolebindings -n staging
kubectl describe rolebinding deploy-binding -n staging
```

---

RoleBinding always lives in a namespace. Use `ClusterRoleBinding` for cluster-wide grants.
