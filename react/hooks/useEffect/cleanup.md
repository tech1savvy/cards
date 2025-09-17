---
id: useEffect-cleanup
backward:
  - "[useEffect](useEffect.md)"
---

How do you perform cleanup with `useEffect`?

---

Return a function from the `setup` function. React will execute this cleanup function automatically when it's time.

```jsx
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();

  // Return a cleanup function
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);
```

---

The cleanup function runs before the component is removed from the UI (unmounts) and before the effect logic runs again on a subsequent render. This is essential for stopping subscriptions, timers, or other connections to prevent memory leaks.
