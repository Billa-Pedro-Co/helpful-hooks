# Helpful-Hooks

## Example of using useFetch:
```jsx
const { data, loading, error } = useFetch(url)
```

## Example of using useToggle:
```jsx
const [isToggled, toggle] = useToggle(false)
return <button onClick={() => toggle()}>{isToggled ? 'true': 'false'}</button>
```
