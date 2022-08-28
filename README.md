# Helpful-Hooks

## Example of using useFetch:

const { data, loading, error } = useFetch(url)

## Example of using useToggle:
const [isToggled, toggle] = useToggle(false)
return <button onClick={() => toggle()}>{isToggled ? 'true': 'false'}</button>
