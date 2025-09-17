---
id: group
---

What is the purpose of the `group` resource in Puppet?

---

- Manage system groups.

### Example

```puppet
group { 'devs':
  ensure => present,
}
```
