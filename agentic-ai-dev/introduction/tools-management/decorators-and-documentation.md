---
id: decorators-and-documentation
aliases: []
tags: []
forward:
  - "[tool-organisation](cards/agentic-ai-dev/tools-management/tool-organisation.md)"
---

# Using Python decorators to keep code and documentation of AI agent tools in sync

---

### Challenge

- Manually maintaining tool descriptions, parameter schemas, and code leads to inconsistencies when functions change.
- Documentation and parameter info often get outdated, causing agent errors and hard-to-debug failures.

### Solution: Decorators for Tool Registration

- Use a **Python decorator** to _wrap tool functions_ and _automatically extract metadata_.
- The decorator **reads** the _function name_ (tool name), _docstring_ (description), and type hints (_parameters_).
- This metadata is used to generate and update the tool’s registration schema dynamically.
- Tools are _registered centrally_ in a dictionary or registry, allowing easy lookup by name or tags.

### How It Works

- The decorator accepts optional overrides but defaults to introspecting the function.
- Introspection leverages Python’s `inspect` and `typing` modules to:
  - Get function signature and parameter types
  - Identify required vs optional parameters
  - Build JSON schemas automatically from type hints
  - Skip special context parameters
- The extracted metadata is stored alongside the function for agent use without separate manual registration code.

### Benefits

- **Single source of truth:** Function code, docstring, and type hints are the definitive specs.
- **Automatic synchronization:** Changes in code immediately reflect in tool metadata without manual updates.
- **Improved code organization:** Tags enable categorizing and grouping related tools for efficient discovery.
- **Cleaner development:** Tool developers focus on normal functions, and decoration handles registration and metadata.
- Making small changes like adding new optional parameters updates schemas and docs automatically.

### Example

Adding a new optional parameter with a default value in the function signature automatically updates the agent’s parameter schema to reflect the change—no extra manual effort needed.

This decorator-based approach provides a robust, maintainable framework for evolving agent tools consistently and transparently while minimizing manual overhead and errors.

---

```py
# Global registry to store tools
tools = {}

# Simple decorator to register a function as a tool
def register_tool(func):
    # Extract the tool name from the function name
    tool_name = func.__name__
    # Use the function's docstring as the description
    description = func.__doc__ or "No description provided."
    # Register the tool in the global dictionary
    tools[tool_name] = {
        "function": func,
        "description": description
    }
    return func

# Example tool function with docstring and type hint
@register_tool
def read_file(file_path: str) -> str:
    """Reads content from the specified file."""
    with open(file_path, 'r') as f:
        return f.read()

# Usage: The tool is automatically registered and available in `tools`
print(tools["read_file"]["description"])
# Output: Reads content from the specified file.
```
