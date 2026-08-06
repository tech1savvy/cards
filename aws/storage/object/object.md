# Object Storage

- Object Storage treats each file as a ==single unit (an object)==. Best for static assets (photos, videos), unstructured data sets, and backups. Highly durable.

- How does Object storage scale?::*Unlimited*. Objects are stored in a flat namespace and can scale to exabytes without reconfiguration.

- How is Object storage structured?::Flat structure where each object has a unique ID and metadata. No hierarchical folders.

- How does Object storage handle updates?::Must update the entire object. Objects are immutable; any change requires replacing the full object.

# Scenarios

Which storage service for standalone or multi-compute access (e.g., transcoding media with Lambda)?
***
**Amazon S3**. Lambda cannot attach EBS, S3 handles unlimited growth cost-effectively, and provides 11 nines of durability.

See [[aws/storage/object/s3]] for S3-specific cards.
