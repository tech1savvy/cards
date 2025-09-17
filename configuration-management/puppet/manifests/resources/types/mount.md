---
id: mount
---

What is the purpose of the `mount` resource in Puppet?

---

- Manage mounted filesystems.

### Example

```puppet
mount { '/mnt/data':
  device => '/dev/sdb1',
  ensure => mounted,
}
```
