import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import BestColl from './BestCollections/BestColl'
import NewArr from './newArrivals/NewArr'
import Services from './Services/Services'

const Hero = () => {

  const [ datas, setDatas ] = useState([]);

  useEffect(() => {
    const getData = async() => {
      getDocs(collection(db, 'watches'))
        .then(storeData => {
          setDatas(storeData.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          })))
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    getData()
  },[])

  console.log(datas)

  return (
    <>
      <div>Hero</div>
      <NewArr/>
      <BestColl/>
      <Services/>
    </>
  )
}

export default Hero