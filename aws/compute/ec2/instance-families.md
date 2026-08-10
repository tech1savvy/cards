---
noteId: 1778392168649
level: 1
---

| **Instance Family**       | **Common Codes**  | **Description**                    |
| ------------------------- | ----------------- | ---------------------------------- |
| General Purpose           | T, M, A, Mac      | Balanced CPU, RAM, network         |
| Compute Optimized         | C                 | Best CPU per vCPU                  |
| Memory Optimized          | R, X, Z           | High RAM for in-memory workloads   |
| Accelerated Computing     | P, G, F, Inf      | GPUs and FPGAs                     |
| Storage Optimized         | I, D, H           | High IOPS, low latency storage     |

## General Purpose sub-types

- ==1;;T==
	- name: ==2;;Burstable==
	- purpose: baseline CPU with burst capability via credits
	- trade-off: cheap for spiky workloads but can throttle if credits run out

- ==1;;M==
	- name: ==2;;Balanced==
	- purpose: consistent, predictable CPU
	- trade-off: workhorse for steady workloads, no bursting

- ==1;;A==
	- name: ==2;;ARM/Graviton==
	- purpose: ARM-based AWS Graviton processors
	- trade-off: best price-performance, requires ARM64 Linux

- ==1;;Mac==
	- name: ==2;;Apple Mac mini==
	- purpose: macOS in the cloud
	- trade-off: for iOS/macOS build and test workloads

## Compute Optimized sub-types

- ==1;;C==
	- name: ==2;;Compute Optimized==
	- purpose: high-performance CPUs with the best price per vCPU
	- trade-off: ideal for compute-bound apps like batch processing, gaming servers, and HPC

## Memory Optimized sub-types

- ==1;;R==
	- name: ==2;;Memory Optimized==
	- purpose: large RAM for in-memory databases and analytics
	- trade-off: balanced memory-to-vCPU for most memory-heavy workloads

- ==1;;X==
	- name: ==2;;High Memory==
	- purpose: highest memory-to-vCPU ratio with Intel Xeon
	- trade-off: purpose-built for SAP HANA and very large in-memory databases

- ==1;;Z==
	- name: ==2;;High Memory (sustained)==
	- purpose: high memory with sustained all-core frequency
	- trade-off: electronic design automation, relational databases that need both memory and steady CPU

## Accelerated Computing sub-types

- ==1;;P==
	- name: ==2;;GPU (Training)==
	- purpose: NVIDIA Tesla GPUs for ML training and HPC
	- trade-off: highest GPU compute power, higher cost

- ==1;;G==
	- name: ==2;;Graphics==
	- purpose: NVIDIA GPUs for graphics rendering and game streaming
	- trade-off: optimized for GPU-based visualization, not ML training

- ==1;;F==
	- name: ==2;;FPGA==
	- purpose: customizable hardware acceleration via field-programmable gate arrays
	- trade-off: reprogrammable at hardware level, niche use cases

- ==1;;Inf==
	- name: ==2;;Inferentia==
	- purpose: AWS-designed chips for ML inference
	- trade-off: lowest cost-per-inference, only for inference (not training)

## Storage Optimized sub-types

- ==1;;I==
	- name: ==2;;High IOPS==
	- purpose: NVMe SSD with high random read/write IOPS
	- trade-off: NoSQL databases and transactional workloads needing fast disk

- ==1;;D==
	- name: ==2;;Dense HDD==
	- purpose: high-capacity HDD storage per instance
	- trade-off: data warehousing and Hadoop clusters

- ==1;;H==
	- name: ==2;;HDD Throughput==
	- purpose: HDD storage with high sequential throughput
	- trade-off: data warehousing and log processing, lower IOPS than SSD
