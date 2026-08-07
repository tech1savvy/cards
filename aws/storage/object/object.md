---
level: 1
---
# Object Storage

- Object Storage treats each file as a *single unit* (an object).
- Best for static assets (photos, videos), unstructured data sets, and backups.
- *Highly durable*.

- Object storage scales ==unlimited==. Objects are stored in a flat namespace and can scale to exabytes without reconfiguration.

- Object storage is structured ==1;;flat (no folders)== where each object has a ==1;;unique ID== and ==1;;metadata==. 

- Objects are ==1;;immutable== thus we must update the entire object because ==1;;any change requires replacing the full object==.

# Scenarios

Which storage service for standalone or multi-compute access (e.g., transcoding media with Lambda)?
***
**Amazon S3**. Lambda cannot attach EBS, S3 handles unlimited growth cost-effectively, and provides 11 nines of durability.