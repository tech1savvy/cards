---
level: 1
---
# Block Storage

- Block storage splits data into ==fixed-size blocks==.

- Scalability is ==1;;limited by fixed volume size==; to expand, ==1;;resize the volume==.

- Block storage excels at small updates because ==changing one byte only rewrites the specific block==.

# Amazon EBS

- Amazon EBS stands for ==Elastic Block Storage==.

- Amazon EBS are replicated within a ==single== Availability Zone. 

- Amazon EBS is best used for ==persistant boot volumes and databases.==

* Q: How Amazon EBS uses **provisioned billing**?
***
=> You *pay for the size you allocate* (e.g., a 100GB volume), regardless of how much data is actually stored inside.


# EC2 Instance Store

- Instance Store is block storage included in the ==EC2 instance== cost, with no ==1;;replication== becuase ==1;; its is physically attached==. 

- Instance Store Storage is best for ==temporary or scratch data.==