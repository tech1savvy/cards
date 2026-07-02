# When does AWS Lambda NOT make sense to use?

---

- **Long-running processes**: Functions time out after a maximum of `15 minutes`
- **Stateful applications**: Each invocation is isolated; state cannot be kept in memory between requests
- **Large dependencies**: Files must fit within the `250 MB` unzipped deployment package limit
- **Consistent high traffic**: `EC2` or `ECS` might be cheaper if the function runs constantly
- **Specific OS customization**: Only standard AWS runtime environments are available
