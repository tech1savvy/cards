---
noteId: 1778456396488
---

# What happens during an EC2 Stop/Start?

---

Stop/Start is equivalent to powering down the instance. It loses its public IP address (a new one is assigned on restart) but maintains the same private IP address. The instance may move to a new physical host.
