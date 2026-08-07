# Block Storage

- Block Storage splits files into ==fixed-size chunks (blocks)==. Each block has a unique address but no metadata. Extremely fast and efficient for small updates - changing one character only rewrites the specific block containing that character. Best for high-performance workloads, operating systems, system files, and databases.

- Block storage scalability is ==limited by fixed volume size==, requiring users to ==provision a new volume or resize== to expand capacity.

- Block storage organizes data into ==fixed-size chunks called blocks==, which are managed by the ==OS==.

- Block storage is highly efficient for small updates because changing a single character requires only rewriting the ==specific block== containing that data, with ==no need to rewrite the entire volume==.

# Amazon EBS

- Amazon EBS provides block storage with ==provisioned billing==, replicated within a ==single Availability Zone==. Best for boot volumes and databases.

- Amazon EBS uses ==provisioned billing==: you pay for the ==size you allocate== (e.g., a 100GB volume), regardless of how much data is actually stored inside.

# EC2 Instance Store

- Instance Store is block storage ==included in the EC2 instance cost==, with ==no replication (physically attached)==. Best for temporary or scratch data.

# Scenarios

- For a MySQL database on EC2 requiring fast, durable, persistent storage, use ==Amazon EBS==. Databases require low-latency random I/O that EBS (SSD-backed) provides, and data survives instance restarts or failures.

- For temporary high-speed calculations where durability is not a priority, use ==Amazon EC2 Instance Store==. Directly attached storage is the fastest option for scratch space and is included in the EC2 instance cost.
