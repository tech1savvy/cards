---
level: 1
---
## Buckets

- A **bucket** is the fundamental ==container== for data in Amazon S3. You cannot upload an object without first creating a bucket.

- **Bucket name** be unique across ==AWS buckets globally== and DNS-compliant.

- After you create the bucket you **cannot change** the ==1;;name== or ==1;;region==.

- By default, you can **create up to** *10,000* buckets in each of your AWS accounts (increased from the previous 100 limit).
    - You can **request a quota increase** up to *1 million buckets*.
    - Creating up to ==2,000== buckets is **free**; a small monthly fee applies for each additional bucket beyond 2,000.
	
- Directory Buckets: A new type of bucket used specifically for **S3 Express One Zone** to achieve single-digit millisecond latency.

- You can host ==static== websites by configuring your bucket for website hosting.

- You **can’t delete** an S3 bucket using the Amazon S3 console if the bucket contains ==100,000 or more== objects. 

- You **can’t delete** an S3 bucket using the AWS CLI if ==versioning is enabled==.