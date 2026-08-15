# If

How do I write an if statement in Go?

***

No parentheses around the condition, and the opening brace must be on the same line:

```go
if height > 4 {
    fmt.Println("You are tall enough!")
} else if height > 2 {
    fmt.Println("You are tall enough!")
} else {
    fmt.Println("You are not tall enough!")
}
```

How do I use an initial statement in an if block?

***

Variables in the initial statement are scoped to the if block only:

```go
if length := getLength(email); length < 10 {
    fmt.Printf("Email must be at least 10 characters, is %d\n", length)
}
```

`length` is not available outside the if block.

# Switch

How do I write a switch statement in Go?

***

Compare a value against multiple options:

```go
switch os {
case "linux":
    creator = "Linus Torvalds"
case "windows":
    creator = "Bill Gates"
case "mac":
    creator = "A Steve"
default:
    creator = "Unknown"
}
```

No `break` needed - it's implicit in Go.

How do I make a switch case fall through to the next case?

***

Use `fallthrough` to continue to the next case:

```go
switch os {
case "linux":
    creator = "Linus Torvalds"
case "macOS":
    fallthrough
case "Mac OS X":
    fallthrough
case "mac":
    creator = "A Steve"
default:
    creator = "Unknown"
}
```

All three Mac cases will set `creator` to "A Steve".

# Comparison operators

What are the comparison operators in Go?

***

```go
== equal to
!= not equal to
< less than
> greater than
<= less than or equal to
>= greater than or equal to
```
