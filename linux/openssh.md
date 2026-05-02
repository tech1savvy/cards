---
id: openssh
aliases: []
tags: []
noteId: 1765210332245
---

```bash
sudo apt update
sudo apt upgrade -y
```

```bash
sudo apt install openssh-server
```

```bash
sudo systemctl enable openssh-server
sudo systemctl start openssh-server
sudo systemctl status ssh
```

```bash
sudo ufw allow ssh
```
