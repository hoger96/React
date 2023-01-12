import React from 'react'
import { useSearchParams } from "react-router-dom"

const Productpage = () => {
    //파라미터 가져오기
    let [query, setQuery] = useSearchParams()
    console.log("ddd", query.get("page"));
  return (
    <div>
        <h1>Show All Products!!!</h1>
    </div>
  )
}

export default Productpage