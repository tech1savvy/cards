---
noteId: 1778392158648
---

# What candidate services were considered for data ingestion?

---

| Service           | Typical Use                                 | Decision |
| ----------------- | ------------------------------------------- | -------- |
| Amazon EMR        | Large-scale batch processing (Spark/Hadoop) | Rejected |
| AWS DMS           | Database migration                          | Rejected |
| AWS Data Exchange | Third-party datasets                        | Rejected |
| Amazon Kinesis    | Real-time streaming data                    | Selected |

Reason:

- Designed for logs, clickstreams, event data.
