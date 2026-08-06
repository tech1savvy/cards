| Service            | Storage Type             | Billing Model          | Replication                | Typical Use Case               |
| ------------------ | ------------------------ | ---------------------- | -------------------------- | ------------------------------ |
| **Instance Store** | ==1;;Block==             | ==2;;Included in EC2== | ==3;;None (Physical)==     | ==4;;Temporary / Scratch==     |
| **Amazon EBS**     | ==1;;Block==             | ==2;;Provisioned==     | ==3;;Within 1 AZ==         | ==4;;Boot volumes / DBs==      |
| **Amazon S3**      | ==1;;Object==            | ==2;;Usage-based==     | ==3;;Across Multiple AZs== | ==4;;Static assets / Backups== |
| **Amazon EFS**     | ==1;;File (NFS)==        | ==2;;Usage-based==     | ==3;;Across Multiple AZs== | ==4;;Shared Linux storage==    |
| **Amazon FSx**     | ==1;;File (SMB/Lustre)== | ==2;;Mixed==           | ==3;;Varies by type==      | ==4;;Windows / High-Perf HPC== |

- Q: How does physical attachment differ between AWS storage services?
***
- **Attached to Compute**: Instance Store and EBS (Block storage) must be mounted to an instance to be used. **Standalone**: S3 (Object storage) is accessed via API/URL and does not require an EC2 instance.

- The difference between provisioned and usage-based billing is that ==EBS (Provisioned)== means you pay for the size you **allocate** (e.g., a 100GB volume), regardless of how much data is inside, while ==S3 & EFS (Usage-based)== means you pay only for the **actual data stored**, with no need to provision size in advance.

- S3 and EFS usage-based billing means ==you pay only for the actual data stored==, with no need to provision size in advance.
