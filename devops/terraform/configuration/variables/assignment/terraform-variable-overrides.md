---
---

# What are the methods to override variable values in Terraform?

---

Variable values can be overridden in several ways, in order of increasing precedence:
1. **Default value** in the variable declaration
2. **`terraform.tfvars`** or `*.auto.tfvars` files (automatically loaded)
3. **`-var-file`** flag with a custom `.tfvars` file
4. **`-var`** CLI flag (`-var="instance_type=t3.large"`)
5. **`TF_VAR_` environment variables** (`TF_VAR_instance_type=t3.large`)

CLI flags and env vars take highest precedence for one-off overrides in automation.
