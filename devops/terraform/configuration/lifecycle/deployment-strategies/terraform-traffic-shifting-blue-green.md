---
noteId: 1785850810468
---

# How do you shift traffic in a blue-green deployment with Terraform?

---

Update the load balancer's target group or listener rule to point to the new (green) environment. For AWS ALB, update the `aws_lb_listener` or `aws_lb_target_group_attachment` resources:

```hcl
resource "aws_lb_listener_rule" "app" {
  listener_arn = aws_lb_listener.main.arn
  action {
    type             = "forward"
    target_group_arn = module.green.target_group_arn
  }
  condition {
    path_pattern { values = ["/*"] }
  }
}
```

Terraform applies the change, shifting all new requests to the green environment.
