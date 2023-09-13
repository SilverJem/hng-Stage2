import React, { useState, useEffect } from 'react'
import Header from './Header'
import Featured from './Featured'
import Loader from './Loader'
const HomePage = () => {
  const search = true
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000);
  }, []);
  return (
  <>

    <Header/>
    <Featured/>
   

    </>
  )
}

export default HomePage