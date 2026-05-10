---
noteId: 1778456397504
---

# How does Lambda billing and performance work?

---

Lambda uses sub-second metering with duration rounded up to the nearest 1ms and no minimum execution time. The service scales continuously and automatically, maintaining consistent performance whether handling 1 request or 10,000 concurrent requests.
