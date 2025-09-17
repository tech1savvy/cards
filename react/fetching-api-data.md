---
id: fetching-api-data
---

How to fetch data from an API only once after the initial render in a React functional component?

---

Use the `useEffect` hook with an empty dependency array `[]`. Store the data in the component's state using `useState`.

```jsx
const [data, setData] = useState(null);

useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((apiData) => setData(apiData));
}, []);
```

---

- The empty dependency array `[]` ensures the effect runs only on the component's initial mount.
- It is best practice to handle loading and error states.
- This data fetching pattern occurs on the client side after the component has mounted.
