---
noteId: 1785850790181
---

# AWS Flashcards — Agent Guide

This file documents the deck structure, card conventions, and known issues so agents can navigate and modify cards safely.

## Deck Structure

```
aws/                          # Root deck
├── index.mdx                 # Human study path & sub-deck links
├── ai-ml/                    # AI/ML services
│   ├── index.mdx
│   ├── bedrock/
│   └── q-developer/
├── analytics/                # Data analytics & visualization
│   ├── index.mdx
│   ├── landscape/
│   ├── quicksight/
│   └── services/
├── case-studies/             # Architecture case studies
│   ├── index.mdx
│   ├── any-company-ecommerce/
│   └── any-company-insurance/
├── cloud-fundamentals/       # Cloud basics
│   ├── index.mdx
│   ├── cloud-computing/
│   ├── global-infrastructure/
│   ├── interaction-methods/
│   ├── shared-responsibility/
│   └── well-architected-framework/
├── cloudfront/               # CDN service (top-level, currently unlinked from root index)
│   ├── distribution/
│   ├── presigned-url/
│   └── purpose.md
├── compute/                  # Compute services
│   ├── index.mdx
│   ├── api-gateway/
│   ├── auto-scaling/
│   ├── containers/
│   ├── ec2/
│   ├── elastic-load-balancing/
│   └── lambda/
├── data-lakes/               # Data lake architecture
│   ├── index.mdx
│   ├── architectures/
│   ├── cataloging/
│   ├── formation/
│   ├── ingestion/
│   ├── introduction/
│   ├── processing/
│   ├── querying/
│   ├── storage/
│   └── visualization/
├── databases/                # Database services
│   ├── index.mdx
│   ├── database-selection/
│   ├── dms/
│   ├── dynamodb/
│   ├── dynamodb-streams/
│   ├── rds/
│   └── relational/
├── design-patterns/          # Architecture patterns
│   ├── index.mdx
│   ├── async-patterns/
│   ├── decoupling-monoliths/
│   └── eda/
├── messaging/                # Messaging & event services
│   ├── index.mdx
│   ├── eventbridge/
│   ├── sns/
│   └── sqs/
├── monitoring-observability/ # Monitoring & HA
│   ├── index.mdx
│   ├── cloudwatch/
│   └── scalability-availability/
├── networking/               # Networking & hybrid (contains misplaced content)
│   ├── index.mdx
│   ├── dns-cdn/
│   ├── hybrid-connectivity/
│   ├── nat-gateway/
│   ├── storage-gateway/      # NOTE: belongs under storage/
│   ├── systems-manager/      # NOTE: contains 59 cards; most belong elsewhere
│   ├── transit-gateway/
│   ├── vpc-fundamentals/
│   └── vpc-security/
├── recap/                    # Weekly review summaries
│   ├── index.mdx
│   └── *.md
├── security-identity/        # IAM, governance, security
│   ├── index.mdx
│   ├── cloudformation/
│   ├── control-tower/
│   ├── federation/
│   ├── governance-multi-account/
│   ├── iam/
│   ├── identity-center/
│   ├── landing-zone/
│   ├── logging-governance/
│   └── organizations-scps/
└── storage/                  # Storage: model-based grouping (no index.mdx; see AGENTS.md)
    ├── storage-models.md
    ├── block/                  # Block storage model
    │   ├── block-storage.md
    │   ├── block-scalability.md
    │   ├── block-structure.md
    │   ├── block-update.md
    │   ├── scenarios/
    │   ├── instance-store/     # Instance Store service
    │   └── ebs/                # EBS service
    ├── file/                   # File storage model
    │   ├── file-storage.md
    │   ├── file-scalability.md
    │   ├── file-structure.md
    │   ├── file-update.md
    │   ├── scenarios/
    │   ├── efs/                # EFS service
    │   └── fsx/                # FSx service (Lustre / Windows)
    ├── object/                 # Object storage model
    │   ├── object-storage.md
    │   ├── object-scalability.md
    │   ├── object-structure.md
    │   ├── object-update.md
    │   ├── scenarios/
    │   └── s3/                 # S3 service (fundamentals + features; data-lake cards live in /data-lakes/storage/)
    │       ├── fundamentals/
    │       ├── versioning/
    │       ├── encryption/
    │       ├── storage-classes/
    │       ├── lifecycle/
    │       └── replication/
    ├── comparisons/            # Cross-model tables
    └── decisions/              # Cross-model selection
        └── criteria/
```

## Card Conventions

- **One card per file** — `.md` for cards, `.mdx` for indexes.
- **Format:**
  ```md
  ---
  noteId: <optional-timestamp>
  forward:
    - "[[next-card]]"
  ---

  # Question (front face)

  ---

  Answer (back face)

  ---

  Extra context (optional)
  ```
- **`noteId`** — Preserve if already present. Do not add one if absent.
- **`forward`** — Optional frontmatter array linking to next cards for review sequencing.
- **Filename uniqueness** — Card filenames should be unique across the entire deck tree. Use topic prefixes when needed (e.g., `s3-lifecycle-transition.md`, `rds-vertical-scaling.md`).
- **No numeric prefixes** in directory names. Avoid course-module prefixes in filenames when possible.

## Known Structural Issues

1. **`quizzes/`** directory is referenced in the root index but **does not exist**.
2. **`cloudfront/`** is a top-level deck but is **not listed in the root study path**.
3. **`networking/systems-manager/`** contains **59 cards** that belong in other domains (DR, migration, containers, databases, compute). This is the largest structural misplacement.
4. **`networking/storage-gateway/`** should be under **`storage/`** (it is a storage hybrid service, not a networking concept).
5. **`networking/dns-cdn/cloudfront.md`** is referenced in `networking/index.mdx` but **does not exist**; CloudFront cards live in the separate top-level `cloudfront/` deck.
6. **Duplicate filenames** exist across the tree. Agents should use topic prefixes when moving/renaming to guarantee uniqueness.
7. **`security-identity/`** has ~82 cards with numeric course-module prefixes (e.g., `45-1-`, `56-1-`). These should be renamed to descriptive names.
8. **`cloudfront/purpose.md`** uses cloze-deletion format (`~~answer~~`) instead of the standard `# Question --- Answer` structure.

## Storage Deck

The `/storage` deck has **no `index.mdx`** — this section of `AGENTS.md` is the canonical reference. Structure: each storage model (`block/`, `file/`, `object/`) is a self-contained unit holding theory cards, scenarios, and per-service sub-dirs. Cross-model content lives in `comparisons/` and `decisions/`.

**Card count:** 71 cards total across all sub-dirs.

### `block/` (9 cards)

Block storage model — theory + scenarios + per-service.

- `block-storage.md` — What is Block Storage?
- `block-scalability.md` — How does Block storage scale?
- `block-structure.md` — How is Block storage structured?
- `block-update.md` — How does Block storage handle updates?
- `block/scenarios/temporary-high-speed.md` — Which service for temp high-speed scratch?
- `block/scenarios/high-performance-db.md` — Which service for high-performance DB?
- `block/instance-store/instance-store.md` — What is Instance Store?
- `block/ebs/ebs.md` — What is Amazon EBS?
- `block/ebs/provisioned-billing.md` — How does EBS provisioned billing work?

### `file/` (11 cards)

File storage model — theory + scenarios + per-service.

- `file-storage.md` — What is File Storage?
- `file-scalability.md` — How does File storage scale?
- `file-structure.md` — How is File storage structured?
- `file-update.md` — How does File storage handle updates?
- `file/scenarios/shared-file-system.md` — Which service for shared file system?
- `file/efs/efs.md` — What is Amazon EFS?
- `file/efs/amazon-efs.md` — What is Amazon EFS? (duplicate of `efs.md`; kept for later dedupe)
- `file/fsx/fsx.md` — What is Amazon FSx?
- `file/fsx/amazon-fsx-for-lustre.md` — What is FSx for Lustre?
- `file/fsx/amazon-fsx-for-windows.md` — What is FSx for Windows?
- `file/fsx/file-system-options.md` — What are the managed file system options?

### `object/` (5 cards + 25 in `s3/`)

Object storage model — theory + scenarios + S3.

- `object-storage.md` — What is Object Storage?
- `object-scalability.md` — How does Object storage scale?
- `object-structure.md` — How is Object storage structured?
- `object-update.md` — How does Object storage handle updates?
- `object/scenarios/standalone-multi-compute.md` — Which service for standalone / multi-compute?

#### `object/s3/` (25 cards across 6 sub-dirs)

Amazon S3 service cards, grouped by topic. Data-lake-related S3 cards live in `/data-lakes/storage/` (see "Cross-deck moves" below).

- `fundamentals/` (8) — s3.md, s3-container.md, s3-object-composition.md, s3-object-key.md, s3-object-limits.md, s3-bucket-naming.md, s3-regional-scope.md, s3-default-access.md
- `versioning/` (1) — s3-versioning.md
- `encryption/` (2) — s3-encryption-at-rest.md, s3-encryption-in-transit.md
- `storage-classes/` (8) — s3-storage-classes.md + 7 class cards (s3-standard, s3-standard-ia, s3-one-zone-ia, s3-intelligent-tiering, s3-glacier-instant-retrieval, s3-glacier-flexible-retrieval, s3-glacier-deep-archive)
- `lifecycle/` (5) — lifecycle-management.md, s3-lifecycle-transition.md, s3-lifecycle-expiration.md, lifecycle-transition-actions.md, lifecycle-expiration-actions.md
- `replication/` (1) — cross-region-replication-crr.md

### Cross-model (`comparisons/` + `decisions/`) — 7 cards

- `comparisons/storage-scalability-comparison.md`
- `comparisons/storage-structure-comparison.md`
- `comparisons/storage-update-comparison.md`
- `decisions/decision-matrix.md`
- `decisions/criteria/physical-attachment.md`
- `decisions/criteria/provisioned-vs-usage-based.md`
- `decisions/criteria/s3-efs-usage-based-billing.md`

Plus one cross-model intro card at the storage root: `storage-models.md` (was `storage-models-overview.md`).

### Known S3 sub-deck issues (deferred)

- `s3-lifecycle-transition.md` ≡ `lifecycle-transition-actions.md` (duplicate)
- `s3-lifecycle-expiration.md` ≡ `lifecycle-expiration-actions.md` (duplicate)
- `file/efs/efs.md` ≡ `file/efs/amazon-efs.md` (duplicate)
- `file/fsx/fsx.md` content partially overlaps `file/fsx/amazon-fsx-for-lustre.md` and `file/fsx/amazon-fsx-for-windows.md`

### Cross-deck moves

13 S3 cards have been moved from `storage/object/s3/` to `data-lakes/storage/`, where the data-lake context makes more sense:

- `s3-data-lake-storage.md` → `data-lakes/storage/s3-data-lake-storage.md`
- `why-s3-for-data-lakes.md` → `data-lakes/storage/why-s3-for-data-lakes.md`
- `why-s3-decoupled-architecture.md` → `data-lakes/storage/why-s3-decoupled-architecture.md`
- `why-s3-durability.md` → `data-lakes/storage/why-s3-durability.md`
- `why-s3-regional-resource.md` → `data-lakes/storage/why-s3-regional-resource.md`
- `why-s3-tier-optimization.md` → `data-lakes/storage/why-s3-tier-optimization.md`
- `why-s3-usage-based-pricing.md` → `data-lakes/storage/why-s3-usage-based-pricing.md`
- `case-study-choice.md` → `data-lakes/storage/case-study-choice.md`
- `role-in-restaurant-menu-solution.md` → `data-lakes/storage/role-in-restaurant-menu-solution.md`
- `storage-options-comparison.md` → `data-lakes/storage/storage-options-comparison.md`
- `ebs-block-storage-data-lake.md` → `data-lakes/storage/ebs-block-storage-data-lake.md`
- `efs-file-storage-data-lake.md` → `data-lakes/storage/efs-file-storage-data-lake.md`
- `s3-object-storage-data-lake.md` → `data-lakes/storage/s3-object-storage-data-lake.md`

`/data-lakes/storage/` now has 18 cards (5 pre-existing + 13 moved in). See `data-lakes/index.mdx` for the full study order.

## Agent Checklist Before Editing

- [ ] Verify the target card exists and read its current content.
- [ ] Check `storage/index.mdx` (or relevant sub-deck index) for the card's current placement.
- [ ] Preserve `noteId` if already present; do not add one if absent.
- [ ] Ensure the new filename is globally unique.
- [ ] Update the relevant `index.mdx` if moving, renaming, or adding cards. **Exception: `/storage` has no `index.mdx`** — update the `## Storage Deck` section of this `AGENTS.md` instead.
- [ ] Run `find . -name '<filename>' | wc -l` to confirm no duplicate basenames remain.
