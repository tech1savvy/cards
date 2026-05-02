---
id: insert
backward:
  - "[append](append.md)"
forward:
  - "[replace](replace.md)"
---

How do you insert a substring into a `std::string` at a specific position?

---

Use the `insert(pos, str)` method.

```cpp
#include <string>

std::string s = "world";
s.insert(0, "hello "); // s is now "hello world"
```
