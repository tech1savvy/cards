---
noteId: 1778392163872
---

# What is a tiered governance model in AWS Organizations?

---

```
Root OU > Production OU >> Development OU
```

Root OU

- global security controls
- protect CloudTrail and logging.

Production OU

- strict rules
- restricted instance types
- no public S3 buckets.

Development OU

- more freedom
- cost guardrails
- smaller instance limits.
