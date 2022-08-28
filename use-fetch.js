import { useState, useEffect } from "react"

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    setError(null)

    try {

      const pendingData = await fetch(url)
      const data = await pendingData.json()
      setData(data);
      setLoading(false)

    } catch (error) {

      setError(error)
      setLoading(false)

    }
    
  }

  useEffect(() => {
    getData()
  }
  , [url])

  return { data, loading, error }
}