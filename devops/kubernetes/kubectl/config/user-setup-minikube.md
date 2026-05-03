---
noteId: 1777803544027
---

### How do I set up a new user in a minikube cluster?

---

Simplest method: create a ServiceAccount and use its token for authentication.

```bash
# 1. Create a ServiceAccount
kubectl create serviceaccount dev-user -n dev

# 2. Get the token (Kubernetes 1.24+)
kubectl create token dev-user -n dev
# OR for older clusters:
# kubectl get secret $(kubectl get sa dev-user -n dev -o jsonpath='{.secrets[0].name}') -n dev -o jsonpath='{.data.token}' | base64 -d

# 3. Add credentials to kubeconfig
kubectl config set-credentials dev-user \
  --token=<token-from-step-2>

# 4. Create context
kubectl config set-context dev-context \
  --cluster=minikube \
  --user=dev-user \
  --namespace=dev
```

---

After setup, bind RBAC permissions (Role/ClusterRole + RoleBinding) to the ServiceAccount:
`kubectl create rolebinding dev-binding --serviceaccount=dev:dev-user --role=dev-role -n dev`

