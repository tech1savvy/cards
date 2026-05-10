---
noteId: 1778456392522
---

# What is Kinesis Data Firehose and what destinations does it support?

---

Kinesis Data Firehose is a fully managed delivery service for streaming data. It automatically scales, buffers, and batches data with optional Lambda transformation. Destinations include S3, Redshift, OpenSearch, and third-party tools (Splunk, Datadog, etc.). Latency is ~60 seconds to several minutes. Typical flow: Producer → Firehose → Destination (e.g., S3).
