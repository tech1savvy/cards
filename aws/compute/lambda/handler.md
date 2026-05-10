---
noteId: 1778456397904
---

# What is a Lambda handler?

---

The handler is the entry point method in your Lambda function code. It receives two parameters: `event` (the trigger payload) and `context` (runtime metadata such as the function name, memory limit, and request ID). The handler signature is `def handler(event, context):`.
