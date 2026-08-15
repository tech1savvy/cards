# Type sizes

What does the size (8, 16, 32, 64, 128) represent in Go types?

***

The size represents how many **bits in memory** will be used to store the variable.

Standard sizes to use:
- `int` / `uint` / `float64` / `complex128`

Type categories:
- **Signed integers** (no decimal): `int`, `int8`, `int16`, `int32`, `int64`
- **Unsigned integers** (non-negative): `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `uintptr`
- **Signed decimals**: `float32`, `float64`
- **Complex numbers** (real + imaginary): `complex64`, `complex128`

# Prefer default types

When should you use specific types vs default types in Go?

***

Default types to use unless you have a specific performance reason not to:
- `bool`, `string`, `int`, `uint`, `byte`, `rune`, `float64`, `complex128`

Use specific types (e.g., `uint16`, `int8`) only when:
- You need to reduce memory usage in resource-constrained applications
- You need a specific range of values (e.g., `uint64` for large unsigned integers)

Excessive type conversions make code slow and hard to read.

# Type conversions

How do you convert between types in Go?

***

Use type conversion syntax:
```go
temperatureFloat := 88.26
temperatureInt := int64(temperatureFloat)
```

Casting a float to an integer truncates the decimal portion.

Note: Only convert when needed - prefer default types (`int`, `uint`, `float64`) to avoid excessive conversions.

# Runes

What is a rune in Go?

***

A `rune` is an alias for `int32` — a 32-bit integer that can hold any Unicode character such as emojis and Chinese characters.

```go
s := "🐻"
fmt.Println(len(s))                    // 4 bytes
fmt.Println(utf8.RuneCountInString(s)) // 1 rune
```

Go uses **UTF-8**, a **variable-length** encoding (1-4 bytes per character).
This means a single `rune` can represent any Unicode code point, but the string's raw byte length differs from its rune count.

How to use runes to iterate over a string?

***

- When using `range` keyword on a string, it auto-decodes to UTF-8 runes.
- Though, the index is byte offset (not ideal for random/sequential access).

```go
const s = "A🐻B"
for i, r := range s {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
// Output:
// Index: 0, Rune: A
// Index: 1, Rune: 🐻  (emoji is 4 bytes)
// Index: 5, Rune: B
```

- For correct sequential index, convert to rune slice first.
```go
for i, r := range []rune(s) {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
// Output:
// Index: 0, Rune: A
// Index: 1, Rune: 🐻
// Index: 2, Rune: B
```
