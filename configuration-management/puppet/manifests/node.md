---
id: node
---

Which option to use to define configurations for specific hosts in Puppet?

---

Use the `node` statement.

```puppet
node 'webserver1' {
  include mywebserver
}
```

---

The `node` statement allows you to assign specific configurations (classes, resources) to a particular host based on its hostname.
