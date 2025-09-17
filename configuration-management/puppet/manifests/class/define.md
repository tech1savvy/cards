---
id: define-class
forward:
  - "[include-class](manifests/class/include.md)"
---

How to define a class in Puppet to group resources?

---

```puppet
class mywebserver {
  package { 'nginx': ensure => installed }
  service { 'nginx': ensure => running, enable => true }
}
```

- Defines a class `mywebserver` that manages the `nginx` package and service.
