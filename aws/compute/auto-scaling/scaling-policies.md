---
noteId: 1778456394972
---

# What scaling policies does Auto Scaling support?

---

- **Target Tracking (Recommended):** Set a target metric value (e.g., "Keep average CPU at 60%"). AWS handles the math and creates CloudWatch Alarms automatically.
- **Step Scaling:** Responds to additional alarms while a previous scaling activity is in progress. Supports steps (e.g., add 1 instance at 70%, add 3 more at 90%).
- **Simple Scaling:** Waits for a cooldown period after a scaling event before evaluating further alarms.
