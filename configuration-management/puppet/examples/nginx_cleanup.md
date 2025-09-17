---
id: nginx_cleanup
---

What is the purpose of the `nginx_cleanup` class in Puppet?

---

```puppet
class nginx_cleanup {
  package { 'nginx':
    ensure => absent,
  }
  service { 'nginx':
    ensure => stopped,
    enable => false,
  }
  file { '/var/www/html/index.html':
    ensure => absent,
  }
}
```