# React Force Update

監聽狀態重新渲染子組件

# 安裝
```
$ npm i react-rerender-component
```

# 引入
```js
import Rerender from 'react-rerender-component'
```

# 範例
```jsx
function ReactiveCount ({ count }) {
  return <div>{count}</div>
}

function UnreactiveCount ({ count: initCount }) {
  const count = useState(initCount)[0]
  return <ReactiveCount count={count} />
}
```

在一般情況下，若傳入外部的資料(State)給 `ReactiveCount` 應該會及時更新，但在 `UnreactiveCount` 已經多過一層狀態，即使外部狀態更新也不會重新渲染。

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

`Rerender` 組件可用的屬性：
屬性           | 描述  |
--------------|:-----:|
listener    | 一個陣列，當狀態有改變就會重新渲染子組件 |