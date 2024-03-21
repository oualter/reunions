
'use client'
import { useContext } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
import Pin from './Pin'

const PinsList = (props) => {
  const { pins, clickPinFunction } = useContext(microfictionsContext)
  return (
    <>
      {pins.map((elt) =>{
        // console.log('elt => ', elt)
        const {
          id,
          pingenerator,
        } = elt
        const posX = pingenerator ? pingenerator.split(',')[0] : ''
        const posY = pingenerator ? pingenerator.split(',')[1] : ''
        return (
          <Pin
            key={id}
            coordX={posX}
            coordY={posY}
            {...elt}
          />
        )
      })}
    </>
  )
}
export default PinsList
