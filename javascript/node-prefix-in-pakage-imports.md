---
id: node-prefix-in-pakage-imports
aliases:
  - node:<package_name>
tags: []
---

# node:<package_name>

## Which import specifier format should be used to explicitly target built-in modules and prevent accidental resolution to npm packages?

---

- Use the `node:` prefix (e.g., `import { randomBytes } from "node:crypto"`).
