# React Rerender Component

English｜[繁體中文](https://github.com/LaiJunBin/react-rerender-component/blob/main/README-zh-tw.md#react-rerender-component)

Listen to state to rerender children components.

# Install
```
$ npm i react-rerender-component
```

# Import
```js
import Rerender from 'react-rerender-component'
```

# Example
```jsx
function ReactiveCount ({ count }) {
  return <div>{count}</div>
}

function UnreactiveCount ({ count: initCount }) {
  const count = useState(initCount)[0]
  return <ReactiveCount count={count} />
}
```

In general, when the external state is passed to the `ReactiveCount`, it will be updated in time, but in `UnreactiveCount` exists a new state from the parent state, it can't rerender even if the external state is updated.

```jsx
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Add</button>
      <ReactiveCount count={count} />
      <Rerender listener={[count]}>
        <UnreactiveCount count={count} />
      </Rerender>
    </div>
  )
}
```

`Rerender` component available properties:
property           | description  |
--------------|:-----:|
listener    | An array, when the state changes will rerender children component. |