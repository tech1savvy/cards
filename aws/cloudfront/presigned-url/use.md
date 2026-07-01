# Why use presigned URLs?

---

Without them, you're stuck with a tradeoff: either content is public (no access control) or fully locked down (no easy sharing).

Presigned URLs give you both. Your bucket stays private. Only users who go through your app get a time-limited URL. Once it expires, they need a new one — meaning only people you authorize can access your content.

---

Perfect for:
- **Static course platforms** — students download materials they've purchased
- **Document sharing** — share sensitive documents with clients temporarily
- **Media libraries** — let users download their purchased music/videos
- **Backup downloads** — allow users to download their data exports securely
- **Software distribution** — distribute licensed software to paying customers
- **Client file sharing** — send presigned URLs so clients can't use your infrastructure as their free CDN; they must download and host files themselves
