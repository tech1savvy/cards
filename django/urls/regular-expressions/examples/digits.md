---
id: digits
aliases: []
tags: []
---

    re_path(r"^blogs/(?P<id>[0-9]+)$", views.get_id_by_regex_view),
