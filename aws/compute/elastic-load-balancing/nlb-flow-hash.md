---
noteId: 1778454566423
---

# How does NLB flow hash routing work?

---

NLB uses a **flow hash algorithm** that computes a hash from the 5-tuple: protocol, source IP, destination IP, source port, and destination port (plus TCP sequence number). All packets in the same flow are sent to the same target, preserving connection affinity.
