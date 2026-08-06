# File Storage

- File Storage uses a ==hierarchical tree-like structure of folders and subfolders==. Files are retrieved via a path (e.g., `/home/user/photo.png`). Ideal for centralized access where multiple host computers need to share and manage the same set of files simultaneously. Best for large content repositories, development environments, and user home directories.

- How does File storage scale?::Scalable hierarchy. Can grow incrementally by adding files to the directory tree.

- How is File storage structured?::Hierarchical structure with folders and files organized in a directory tree.

- How does File storage handle updates?::Update file content directly. Modify specific files without affecting others.

# Amazon EFS

- Amazon EFS is a ==fully managed NFS file system for Linux workloads==, with usage-based billing, replicated across multiple Availability Zones. Best for shared file storage across multiple EC2 instances.

# Amazon FSx (overview)

- Amazon FSx provides ==file storage (SMB or Lustre) with mixed billing==. Replication varies by type. Best for Windows workloads or high-performance HPC.

# FSx for Lustre

- FSx for Lustre is a ==high-performance parallel file system for compute-intensive workloads==, integrating natively with S3 for data processing.

# FSx for Windows

- FSx for Windows is a ==fully managed SMB file server built on Windows Server==, for Windows-based workloads requiring shared file storage.

# Managed File System Options

- The managed file system options in AWS are ==Amazon EFS== (NFS for Linux), ==Amazon FSx for Windows== (SMB), and ==Amazon FSx for Lustre== (high-performance HPC).

# Scenarios

Which storage service for a shared file system across multiple EC2 instances?
***
**Amazon EFS** (for Linux/NFS) or **Amazon FSx** (for Windows/SMB). Unlike EBS (1-to-1), these can be mounted by hundreds of instances simultaneously and scale automatically.
