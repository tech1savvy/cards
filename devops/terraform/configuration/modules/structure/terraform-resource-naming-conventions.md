---
---

# What naming conventions should Terraform resources follow?

---

Use lowercase, underscore-separated names (`snake_case`) that describe the resource's purpose. Follow the pattern `<provider>_<resource_type>.<logical_name>`:

- Resource names: `aws_instance.web_server`, `azurerm_resource_group.main`
- Variable names: `instance_type`, `environment`
- Output names: `vpc_id`, `load_balancer_dns`
- Module names: `network`, `database`, `application`

Be consistent across the codebase and avoid abbreviations unless widely understood.
