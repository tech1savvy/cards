---
id: alphabets
aliases: []
tags: []
---

    re_path(r"^profile/(?P<username>[a-zA-Z]+)$", views.get_username_by_regex_view),
