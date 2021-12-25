import { useEffect, useState } from 'react'

function Rerender ({ listener = [], children }) {
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setUpdate(false)
  }, listener)

  useEffect(() => {
    if (!update) setUpdate(true)
  }, [update])

  return update && children
}

export default Rerender
