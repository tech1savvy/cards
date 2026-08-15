# Printf / Sprintf

How do I print a formatted string to stdout in Go?

***

Use `fmt.Printf()`.

```go
fmt.Printf("I am %d years old\n", 10)
// I am 10 years old
```

How do I return a formatted string in Go?

***

Use `fmt.Sprintf()`.

```go
s := fmt.Sprintf("I am %d years old", 10)
// s == "I am 10 years old"
```

# Verbs

How do I format any value in its default representation?

***

Use `%v` - a catchall for any type.

```go
fmt.Printf("I am %v years old\n", 10)
// I am 10 years old

fmt.Printf("I am %v years old\n", "way too many")
// I am way too many years old
```

How do I format a string in Go?

***

Use `%s`.

```go
fmt.Printf("I am %s years old\n", "way too many")
// I am way too many years old
```

How do I format an integer in Go?

***

Use `%d`.

```go
fmt.Printf("I am %d years old\n", 10)
// I am 10 years old
```

How do I format a float with specific decimal places in Go?

***

Use `%.nf` where `n` is the number of decimal places.

- `%.1f` rounds to the tenths place
- `%.2f` rounds to the hundredths place

```go
fmt.Printf("%.1f\n", 10.523)
// 10.5

fmt.Printf("%.2f\n", 10.523)
// 10.53

fmt.Printf("%.3f\n", 10.523524)
// 10.524
```

How do I format a boolean in Go?

***

Use `%t` (true/false).

```go
fmt.Printf("Active: %t\n", true)
// Active: true

fmt.Printf("Active: %t\n", false)
// Active: false
```
