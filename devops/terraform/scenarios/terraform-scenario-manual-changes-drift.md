---
---

# Scenario: A team member manually changed an EC2 instance type in the AWS console. How do you detect and reconcile this?

---

1. Run `terraform plan` to identify the drift
2. To reconcile:
   - If the manual change should stay: update the Terraform config (`main.tf`) to match
   - If it should be reverted: run `terraform apply` to enforce original state
3. Prevent future issues: use IAM policies to restrict console access
