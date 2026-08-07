---
level: 1
---

# S3 Storage Classes

| Storage Class                 | Access Pattern        | Key Idea                                          | Retrieval Time   | Min Storage Duration | Retrieval Fee |
| ----------------------------- | --------------------- | ------------------------------------------------- | ---------------- | -------------------- | ------------- |
| ==1;;S3 Standard==                   | ==2;;Frequent access==       | ==3;;General-purpose storage, high throughput==          | ==4;;Milliseconds==     | ==5;;None==                 | ==6;;No==            |
| ==1;;S3 Intelligent-Tiering==        | ==2;;Unpredictable access==  | ==3;;Auto moves between tiers based on access patterns== | ==4;;Milliseconds==     | ==5;;None==                 | ==6;;No==            |
| ==1;;S3 Standard-IA==                | ==2;;Infrequent access==     | ==3;;Lower storage cost than Standard==                  | ==4;;Milliseconds==     | ==5;;30 days==              | ==6;;Yes==           |
| ==1;;S3 One Zone-IA==                | ==2;;Infrequent<br>access==  | ==3;;Stored in single AZ, lower cost==                   | ==4;;Milliseconds==     | ==5;;30 days==              | ==6;;Yes==           |
| ==1;;S3 Glacier Instant Retrieval==  | ==2;;Archival but Instant==  | ==3;;Archive accessed once per quarter==                 | ==4;;Milliseconds==     | ==5;;90 days==              | ==6;;Yes==           |
| ==1;;S3 Glacier Flexible Retrieval== | ==2;;Archival but flexible== | ==3;;Disaster recovery, media processing==               | ==4;;Minutes to Hours== | ==5;;90 days==              | ==6;;Yes==           |
| ==1;;S3 Glacier Deep Archive==       | ==2;;Long-term archive==     | ==3;;Lowest storage cost, compliance records==           | ==4;;≤12 hours==        | ==5;;180 days==             | ==6;;Yes==           |

- All S3 Storage Classes maintain ==11== nines durability.
