# Declaration syntax

Why does Go use "x int" instead of "int x"?

***

Go reads left to right (English style), unlike C:

```go
x int       // Go: read as "x is an int"
p *int     // p is a pointer to int
a [3]int   // a is an array of 3 ints
f func(func(int,int) int, int) int  // f is a function
```

C-style is harder to read:
```c
int (*fp)(int (*ff)(int x, int y), int b)
```

# Function signature

How do I define a function in Go?

***

Type comes after the variable name:

```go
func sub(x int, y int) int {
    return x - y
}
```

`func sub(x int, y int) int` is the function signature.

# Parameters

Can I omit the type for multiple parameters of the same type?

***

Yes, group them - type only needs to be declared after the last argument:

```go
func addToDatabase(hp, damage int) {}

func addToDatabase(hp, damage int, name string) {}

func addToDatabase(hp, damage int, name string, level int) {}
```

# Pass by value

How do variables get passed to functions in Go?

***

Go passes variables **by value** — the function receives a copy, so it cannot mutate the original.

```go
func main() {
    x := 5
    increment(x)
    fmt.Println(x) // prints 5
}

func increment(x int) {
    x++ // only modifies the copy
}
```

# Blank identifier

How do you ignore a return value in Go?

***

Use the blank identifier `_`:

```go
func getPoint() (x, y int) { return 3, 4 }

x, _ := getPoint() // ignore y
```

Go errors on unused variables; use `_` to discard return values.

# Named returns

What is a naked return in Go?

***

Named return values enable naked returns — a bare `return` automatically returns them:

```go
func getCoords() (x, y int) {
    // x and y initialized to zero values
    return // automatically returns x, y
}
```

Only use in short functions; they harm readability in longer ones.

Named returns document purpose. Use naked returns sparingly.

Can you explicitly return values with named returns in Go?

***

Yes — even with named returns, you can explicitly return values, which overrides the named variables:

```go
func getCoords() (x, y int) {
    return 5, 6 // explicit; ignores x, y defaults
}
```

Explicit returns override named return values; naked returns use them as-is.

# Functions as values

Are functions as values supported in Go?

***

Go supports first-class and higher-order functions, meaning functions are just another type like ints, strings, and bools. They can be assigned to variables, passed as arguments, and returned from functions.

Example with function as parameter:
```go
func add(x, y int) int { return x + y }
func mul(x, y int) int { return x * y }

func aggregate(a, b, c int, arithmetic func(int, int) int) int {
  firstResult := arithmetic(a, b)
  secondResult := arithmetic(firstResult, c)
  return secondResult
}

func main() {
	sum := aggregate(2, 3, 4, add)      // 9
	product := aggregate(2, 3, 4, mul)   // 24
}
```

The `arithmetic func(int, int) int` parameter accepts any function matching that signature.

# Anonymous functions

How and where to use anonymous functions in Go?

***

Anonymous functions are unnamed functions ideal for one-time use or quick closures. Pass them inline to higher-order functions instead of defining separate named functions.

Syntax: `func(parameters) returnType { body }` (no function name).

Example higher-order function:
```go
func conversions(converter func(int) int, x, y, z int) (int, int, int) {
    return converter(x), converter(y), converter(z)
}
```

Using a named function (less concise for one-time use):
```go
func double(a int) int { return a + a }
// Pass by name: conversions(double, 1, 2, 3) → (2,4,6)
```

Using an anonymous function (inline, more concise):
```go
// Define and pass directly:
conversions(func(a int) int { return a + a }, 1, 2, 3) // → (2,4,6)
```

# Guard clauses

What are guard clauses?

***

Guard clauses use early returns when a given condition is met to flatten nested conditionals into a linear flow:

Nested (hard to follow):
```go
func getInsuranceAmount(status insuranceStatus) int {
  amount := 0
  if !status.hasInsurance(){
    amount = 1
  } else {
    if status.isTotaled(){
      amount = 10000
    } else {
      if status.isDented(){
        amount = 160
        if status.isBigDent(){
          amount = 270
        }
      } else {
        amount = 0
      }
    }
  }
  return amount
}
```

Flattened with guard clauses (cleaner):
```go
func getInsuranceAmount(s insuranceStatus) int {
    if !s.hasInsurance() {
        return 1
    }
    if s.isTotaled() {
        return 10000
    }
    if !s.isDented() {
        return 0
    }
    if s.isBigDent() {
        return 270
    }
    return 160
}
```

- Early returns reduce cognitive load by eliminating nested branches.
- Error handling in Go naturally encourages this pattern.
