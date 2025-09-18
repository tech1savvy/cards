---
id: tool-organisation
aliases: []
tags: []
---

> The key concepts on organizing agent tools from tags to registries are:

### Tool Organization Layers

- **Tool Decorators:** Used to tag and document individual tools based on purpose or functionality (e.g., file operations, database access).
- **Tool Registry:** A centralized global dictionary that holds all registered tools indexed by name and organized by their tags.
- **Action Registry:** A curated subset of tools selected for each specific agent based on tags to tailor the agent’s capabilities.

### Tagging for Easy Discovery

- Each tool is tagged in the decorator with relevant categories, enabling fast lookup of related tools by tag (e.g., "file_operations", "read", "database").
- The registry maintains a mapping from tags to tool names, providing a structured, searchable catalog of all available tools.

### Focused Action Registries

- When building an agent, an **ActionRegistry** is created by querying the tool registry for tools matching specific tags.
- This allows assembling customized agents with just the tools relevant to their goals and domain, improving efficiency and modularity.

### Agent Creation Examples

- Agents can be specialized easily, such as a read-only agent, a file handling agent, or a database agent, by selecting the appropriate tags during ActionRegistry creation.
- This structure enables clear separation of concerns and reuse of tools across different agents.

### Benefits

- Improved organization and discoverability of tools.
- Easier maintenance by grouping related tools based on function.
- Modular agent composition by picking subsets of tools relevant to each agent’s objectives.
- Scalable architecture for larger projects with many tools and agents.

This approach mimics real-world tool organization (like drawers for specific tool types), leading to cleaner codebases, improved developer productivity, and more robust agent designs.

---

- > Tagging helps in grouping similar tools together in sub-categories for easy indexed search.
- > then tags can help in making a Action Registries, grouping based on the action to be done.
