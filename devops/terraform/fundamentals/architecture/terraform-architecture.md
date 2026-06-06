---
---

# What are the components of Terraform's architecture?

---

- **CLI** — primary user interface for managing infrastructure
- **Core Engine** — interprets HCL/JSON configurations and plans/executes actions
- **Providers** — plugins communicating with infrastructure platform APIs (AWS, Azure, etc.)
- **State Management** — state file tracking current infrastructure status for accurate change detection
