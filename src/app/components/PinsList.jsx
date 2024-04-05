
'use client'
import { useContext, useRef } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
import Pin from './Pin'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const PinsList = (props) => {
  const { pins, clickPinFunction } = useContext(microfictionsContext)
  const zeroOneArray1 = Math.round(Math.random())
  const zeroOneArray2 = Math.round(Math.random())
  const rangeX = Math.random() * 15;
  const rangeY = Math.random() * 15;
  let randomX = zeroOneArray1 === 0 ? rangeX : -rangeX
  let randomY = zeroOneArray2 === 0 ? -rangeY : rangeY

  const animContainer = useRef();
  useGSAP(
    () => {
      gsap.from('.pin',{
        x: randomX,
        y: randomY,
        scale:3,
        opacity: 0,
        duration: 2.5,
        ease: 'expo',
        delay:0.5,
        stagger: {
          each: 0.08,
        },
      })
    },
    { scope: animContainer }
  )

  return (
    <div ref={animContainer}>
      {pins.map((elt) => {
        // console.log('elt => ', elt)
        const { id, pingenerator } = elt
        const posX = pingenerator ? pingenerator.split(',')[0] : ''
        const posY = pingenerator ? pingenerator.split(',')[1] : ''
        return <Pin key={id} coordX={posX} coordY={posY} {...elt} />
      })}
    </div>
  )
}
export default PinsList
