---
level: 1
---

# Amazon ECS

## Overview

Amazon ECS is a ==fully managed, *AWS-native* container orchestration service==. It acts as the ==control plane== — scheduling and orchestrating containers across a cluster.

## Task Model

### Task Definition

A Task Definition is a ==JSON blueprint for containers==. It defines the ==container image, ports, environment variables, CPU/memory, IAM role, and logging== configuration. It tells ECS what to run and how.

### Task

A Task is a ==running instantiation of a Task Definition==. One or more containers that run together on the same host. Tasks are the ==operational unit of work== in ECS.

## Launch Types

### EC2

ECS (scheduler) runs containers on ==EC2 instances that you manage==. You control instance size, scaling groups, patching, and capacity. More control, more operational chores.

### Fargate

ECS (scheduler) runs containers on ==Fargate compute==. You do not manage servers — you just define CPU, memory, and the container image. AWS handles all infrastructure.
