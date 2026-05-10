---
noteId: 1778392158023
---

# What strategies can be used for data cleaning in the analytics pipeline?

---

Real-world data may be messy.

Two common approaches:

**Firehose Transformation**

- Trigger **Lambda** during ingestion
- Clean or modify records before storing

**S3 Processing**

- Trigger Lambda on `PutObject`
- Process file after upload
