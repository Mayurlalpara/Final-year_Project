/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const Auth = ({children}) => {

  const location = useLocation();

  const [shownav, setShownav] = useState(false)

  useEffect(()=>{
    if(location.pathname === '/adminlogin' ){
        setShownav(false)
    }
    else{
        setShownav(true)
    }
  },[location])

  return (
    <div>{shownav && children}</div>
  )
}

export default Auth