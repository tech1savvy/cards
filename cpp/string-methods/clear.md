---
id: clear
backward:
  - "[erase](erase.md)"
forward:
  - "[resize](resize.md)"
---

How do you remove all characters from a `std::string`?

---

Use the `clear()` method.

```cpp
#include <string>

std::string s = "some content";
s.clear(); // s is now ""
```
