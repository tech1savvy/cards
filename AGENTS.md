# Flashcard Vault — Agent Guide

This is an Obsidian vault using the `obsidian-spaced-repetition` plugin. Every `.md` file contains flashcards parsed by the plugin.

## Filename Conventions

- Prefer hyphens in filenames (not underscores).
- Filenames must be globally unique across the entire vault.

## Card Syntax

The plugin recognizes three card formats (configured in `data.json:18-22`):

- `Q::A` — single-line Q/A
- `Q:::A` — single-line reverse Q/A
- Front paragraph + line with only `***` + back paragraph — multi-line Q/A
- Front paragraph + line with only `****` + back paragraph — multi-line reverse Q/A
- `==text==` — cloze deletion (each `==c==` line becomes a sibling card)
- `==1;;cloze1== some text ==2;;cloze2==` — different cloze deletion groups (each `==1;;==` same number cloze hides/makes a card together)

**Prefer cloze first** for single facts or list items. Use `?` for multi-line processes or tables. Use `::` for one-line Q/A.

## Frontmatter & Tags

Do not add `noteId`, `forward`, `#flashcards`, or other tags. The plugin recognizes cards by syntax alone. Section headings (`# Section`) are surfaced as card context.

## Wikilinks

Use full vault-relative paths in wikilinks: `[[aws/storage/object/s3]]`. Always leave a blank line before Markdown tables.

## Math

Use `$...$` for inline math and `$$...$$` for display math (Obsidian Flavored Markdown).

## Deck Structure

Each topic is a subdirectory under the vault root containing `.md` files with flashcards.

## Agent Checklist
- [ ] Verify the target file exists and read its content before editing.
- [ ] Use the correct card syntax for the content type.
- [ ] Ensure filenames are globally unique.
- [ ] Use hyphens in filenames.
- [ ] Use full vault-relative wikilink paths.
- [ ] Add a blank line before Markdown tables.
- [ ] Do not add frontmatter or tags to card files.
