---
noteId: 1785850790267
---

# What is an ARN in AWS?

---

An **Amazon Resource Name (ARN)** uniquely identifies any AWS resource across accounts, regions, and partitions.

`arn:partition:service:region:account-id:resource`

| Segment | Example | Meaning |
|---------|---------|---------|
| `arn` | `arn` | Literal prefix |
| `partition` | `aws` | `aws` (standard), `aws-cn` (China), `aws-us-gov` (GovCloud) |
| `service` | `s3` | AWS service namespace |
| `region` | `us-east-1` | Region, or `""` for global services |
| `account-id` | `123456789012` | 12-digit AWS account ID, or `""` for some resources |
| `resource` | `my-bucket` | Resource identifier, may include `type/name` or `type:name` format |

Examples:

```text
arn:aws:iam::123456789012:user/Alice
arn:aws:s3:::my-bucket
arn:aws:dynamodb:us-east-1:123456789012:table/Orders
arn:aws:ec2:us-west-2:123456789012:instance/i-0abcd1234efgh5678
```

**Key insight**: ARNs are the address system of AWS — every IAM policy, resource-based policy, and cross-service reference resolves permissions using ARNs.
