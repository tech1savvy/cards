# Short declaration

What is the walrus operator (`:=`) in Go?

***

- Used for variable declaration with type inference
- Cannot be used outside a function (only in function scope)

# Zero values

What are zero values in Go variables?

***

Variables declared without a value are set to the zero value:
- `0` for numeric types
- `""` for strings
- `false` for booleans
- `nil` for pointers, interfaces, slices, maps, channels, and function types

# Multiple declarations

How do you declare multiple variables on the same line in Go?

***

```go
mileage, company := 234, "toyota"
```

# Constants

How do you declare constants in Go?

***

Use the `const` keyword:
```go
const pi = 3.14159
```

Note: Cannot use `:=` short declaration syntax.

What types can constants be in Go?

***

Primitive only:
- strings
- integers
- booleans
- floats

**Not allowed:**
- slices
- maps
- structs

These complex types cannot be constant values.

What are computed constants in Go?

***

Constants can be computed from other compile-time constants:

```go
const firstName = "Lane"
const fullName = firstName + " " + "Wagner"
```

But runtime values break the compiler:

```go
const currentTime = time.Now() // ERROR
```

**Key insight**: If it can't be evaluated at compile time, it can't be a constant.
