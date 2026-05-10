---
noteId: 1778456397438
---

# What security and optimization features does ELB offer?

---

- **TLS/SSL Offloading:** ALB handles encryption/decryption, reducing CPU load on backend servers. Certificates managed via ACM.
- **User Authentication:** Authenticates users (SAML, LDAP, OIDC) before they reach the application.
- **Sticky Sessions (ALB):** Uses HTTP cookies to ensure a client remains connected to the same backend server for stateful apps.
