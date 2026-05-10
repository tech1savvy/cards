---
noteId: 1778392166924
---

# How does a serverless data analytics pipeline collect and analyze clickstream data?

---

Goal: Collect and analyze clickstream data.

Architecture:

```
API Gateway
↓
Kinesis Data Firehose
↓
Lambda (data transform)
↓
S3 (data lake)
↓
Athena (SQL queries)
↓
QuickSight (dashboards)
```

Key Concepts:

- Data lake architecture
- Serverless analytics
- Storage and compute decoupling
- Pay-per-query analytics
- Lifecycle and cost optimization
