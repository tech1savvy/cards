# What happens when an AWS Lambda function is invoked?

---

- **Cold start** (first execution or after idle): AWS provisions a container, loads code, and starts the runtime, adding latency (e.g., a few hundred ms for `Python`, longer for `Java` or `.NET`)
- **Warm execution** (subsequent requests): AWS reuses the container if a new request arrives quickly (single-digit ms latency)
- **Scaling**: AWS automatically provisions more containers if incoming requests exceed current container capacity, scaling up to thousands of concurrent executions
