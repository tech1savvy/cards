# When does AWS Lambda make sense to use?

---

- **Event-driven workloads**: Processing `S3` uploads, responding to `SNS` messages, or reacting to `DynamoDB` changes
- **APIs with variable traffic**: Handling thousands of requests per second or just a handful per day
- **Scheduled tasks**: Running a job every hour without maintaining a server
- **Background processing**: Resizing images, generating PDFs, or sending emails
- **Prototypes and MVPs**: Getting something running fast without infrastructure setup
