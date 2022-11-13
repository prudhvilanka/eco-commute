'use client';
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Payscreen from './pay'
import { useEffect, useState } from 'react'
const Card = ({rates,details}) =>{

    const [show,setShow] = useState()
    useEffect(()=>{
        setShow()
    },[rates])
    return(
        <>
        {
            rates && Object.keys(rates).map((val,ind)=>{

                return (
                    <div key={ind} className={styles.grid}>
                        <a onClick={(e)=>{
                            e.preventDefault()
                            setShow(ind)
                        }} className={styles.card}>
                        {val === "car" && <Image 
                            src="/logo.jpg"       
                            alt="Picture of the author"
                            width={200}
                            height={200}/>}
                        {val === "bus" && <Image 
                            src="/bus.webp"       
                            alt="Picture of the author"
                            width={200}
                            height={200}/>}
                        {val === "train" && <Image 
                            src="/train.jpg"       
                            alt="Picture of the author"
                            width={200}
                            height={200}/>} 
                        {val === "flight" && <Image 
                            src="/flight.jpg"       
                            alt="Picture of the author"
                            width={200}
                            height={200}/>}   
                        <div>
                            <h2>Time to make new memories</h2>
                            <p>Don’t leave adventure in your dreams. Make it a reality with affordable <b>{val}</b> fare deals from Eco-Commute.</p>
                        </div>
                        <h2>${rates[val]}</h2>
                        <button className={styles.submitcard} onClick = {((event)=>{
                            event.preventDefault()
                            setShow(ind)
                        })} >Book</button>
                        </a>
                        {
                            show === ind && <Payscreen rate={rates[val]}/>
                        }
                    </div>
                )
            })
        }
        </>
    )
}

export default Card