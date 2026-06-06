---
---

# What are Terraform provisioners and why are they a "last resort"?

---

Provisioners execute scripts or commands on a local or remote machine after resource creation or before destruction. They're a "last resort" because Terraform cannot model their actions in the execution plan, making outcomes less predictable.

Better alternatives: `user_data` (cloud-init), Packer for pre-configured images, or tools like Ansible.
