---
id: structure-agent-output
aliases: []
tags: []
---

# Structuring prompts to get actionable outputs from generative AI models include:

---

- **Extractable Actions**: Since the model only outputs text, we must design prompts so that the model's response contains actions in a predictable, parsable format. This allows traditional software to parse the output and execute corresponding actions programmatically.

- **Consistency over Randomness**: Generative models output varying responses on each call, so prompt engineering aims to create a consistent output format with minimal fluff or chatty content, making parsing reliable.

- **Prompt Templates and Constraints**: Using _templates with placeholders_ such as "_Action:Object_," the model is instructed to produce output strictly following the template. This helps limit the range of responses for easier parsing.

- **Feedback Loop**: The interaction runs in a loop where the model outputs an action, receives feedback from the execution environment about the result, and uses this feedback to decide the next action. The growing conversation history helps the model maintain state since it lacks memory.

- **Action Language**: The prompt can define a small set of permissible actions (e.g., "pickup," "discard," "fetch web page," "base64_encode") to standardize what the model can request, sometimes resembling function calls with parameters.

- **Parsing and Execution**: The environment interface has code to parse the model output and translate it into API or function calls for automation. Accuracy and strict formatting are required for the parser.

- **Two Approaches**:
  1. **Prompt engineering and parsing**: Works with any LLM by rigidly defining output format in the prompt and parsing responses accordingly.
  2. **Function calling-enabled LLMs**: Newer models can _return structured JSON_ indicating functions to call and arguments, simplifying parsing. However, this requires the LLM to support function calling explicitly.

- **Tradeoffs**: The first approach provides full control and works universally but requires engineering robust prompts and parsers. The second approach reduces parsing complexity but depends on supported LLM capabilities and may not cover all use cases.

In summary, effective prompting for AI agents involves designing outputs that are narrowly constrained and easily parsed to extract clear actions, often enforced via templates and iterative feedback. This enables autonomous loops where an AI agent decides what to do, and traditional code executes those decisions safely and reliably.
