---
id: retrieval-augmented-generation
aliases: []
tags: []
forward:
  - "[capital](cards/agentic-ai-dev/openai-gpts/capital.md)"
---

# Retrieval-Augmented Generation (RAG)

### What is RAG?

- RAG is a technique that enhances large language models by _connecting them with external, up-to-date knowledge bases_ or data sources.
- Instead of relying solely on pre-trained knowledge (which can be outdated), RAG dynamically retrieves relevant documents or facts at query time.

### How RAG Works

- **Ingestion:** External data (e.g., documents, databases) is _embedded into vector representations_ and stored in a _searchable index_.
- **Retrieval:** When a user submits a query, _similar documents are retrieved_ via _nearest neighbor or semantic search_ in the vector index.
- **Augmentation:** _Retrieved info is added to the prompt_ given to the language model. The prompt includes task/query + retrieved knowledge.
- **Generation:** The language model _generates a response_ grounded in the provided recent data, improving accuracy and reducing hallucination.

> Basically Perplexity ;)
