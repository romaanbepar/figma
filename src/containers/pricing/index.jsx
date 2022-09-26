import React,{useEffect,useState} from 'react'
import "./pricing.css"
import axios from "axios" 
const Pricing = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetchdata()
  },[])


  const fetchdata=async()=>{
    const response=await axios.get("https://test-api-fake-dummy.herokuapp.com/faqs")
    console.log(response)
    setData(response.data)
  }

  console.log("romaan")
  return (<>
    <div>Pricing</div>
{
  data.map((data)=>{
    return <><li>{data.title}</li>
    <p>{data.desc}</p>
    </>
  })
}
    </>

  )
}

export default Pricing