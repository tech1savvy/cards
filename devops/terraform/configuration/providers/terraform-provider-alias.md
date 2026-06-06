---
---

# What is the significance of the Terraform provider alias?

---

A provider alias lets you use multiple configurations of the same provider within a single Terraform configuration. This is useful when managing resources in the same provider with different settings (e.g., different AWS regions or accounts).

```hcl
provider "aws" {
  alias  = "us_east"
  region = "us-east-1"
}

provider "aws" {
  alias  = "us_west"
  region = "us-west-2"
}

resource "aws_s3_bucket" "east" {
  provider = aws.us_east
  bucket   = "my-bucket-east"
}

resource "aws_s3_bucket" "west" {
  provider = aws.us_west
  bucket   = "my-bucket-west"
}
```
