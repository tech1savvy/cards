---
noteId: 1778392164398
---

# What is the backup and restore DR strategy?

---

Strategy:

- store backups in another region (S3, snapshots, backups).

During disaster:

1. deploy infrastructure
2. restore data
3. restart services

Characteristics:

- highest RTO
- low operational cost.

Example services:

- S3 backups
- RDS snapshots
- AWS Backup.
