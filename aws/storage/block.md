# Block Storage

- Block Storage splits files into ==fixed-size chunks (blocks)==. Each block has a unique address but no metadata. Extremely fast and efficient for small updates - changing one character only rewrites the specific block containing that character. Best for high-performance workloads, operating systems, system files, and databases.

- How does Block storage scale?::Limited by fixed volume size. Must provision a new volume or resize to scale up.

- How is Block storage structured?::Fixed-size chunks called blocks. The OS manages how data is split into blocks.

- How does Block storage handle updates?::Update specific blocks only. No need to rewrite the entire volume.

# Amazon EBS

- Amazon EBS provides block storage with ==provisioned billing==, replicated within a ==single Availability Zone==. Best for boot volumes and databases.

- How does EBS provisioned billing work?::You pay for the size you allocate (e.g., a 100GB volume), regardless of how much data is actually stored inside.

# EC2 Instance Store

- Instance Store is block storage ==included in the EC2 instance cost==, with ==no replication (physically attached)==. Best for temporary or scratch data.

# Scenarios

Which storage service for a MySQL database on EC2 requiring fast, durable, persistent storage?
***
**Amazon EBS**. Databases require low-latency random I/O that EBS (SSD-backed) provides. EBS acts as the local hard drive for the EC2 instance and data survives instance restarts or failures.

Which storage service for temporary high-speed calculations where durability is not a priority?
***
**Amazon EC2 Instance Store**. Directly attached storage is the fastest option for scratch space and is included in the price of the EC2 instance. Data is lost if the instance stops, but this is acceptable for temporary calculations.
