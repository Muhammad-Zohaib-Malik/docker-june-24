import { useEffect } from 'react'

const App = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  useEffect(() => {
    fetch(`${baseUrl}/users`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
      })
  }, [])
  return (
    <div>App</div>
  )
}

export default App