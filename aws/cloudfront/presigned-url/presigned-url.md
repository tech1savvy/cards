---
noteId: 1785850790568
---

# What is a presigned URL?

---

A temporary, time-limited URL that grants access to private S3 objects or CloudFront content.

- **Time-limited** — expires after a set duration (e.g. 1 hour)
- **Secure** — content stays private; only those with the URL can access it
- **Controlled** — you decide who gets the URL and when it expires

---

The long query string contains the cryptographic signature and expiration time. Without it, CloudFront rejects the request.

```
https://YOUR_BUCKET_NAME.s3.amazonaws.com/favicon.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=...&X-Amz-Date=20240101T120000Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=...
```
