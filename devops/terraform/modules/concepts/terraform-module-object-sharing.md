---
noteId: 1785850813142
---

# How do you make an object from one module available to another module?

---

1. Define an **output variable** in module A's resource configuration
2. Declare the output variable of module A so it can be used by other modules
3. In module B, create a `variables.tf` file with an **input variable** matching the key name from the output
4. Repeat the pattern to make module B's values available to other modules

This enables dynamic configuration across modules via input/output chaining.
