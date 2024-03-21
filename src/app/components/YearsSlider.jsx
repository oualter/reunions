'use client'
import { useContext, useRef, useState, useEffect } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
// import { useWindowSize } from '@uidotdev/usehooks'
import { Slider } from '@nextui-org/slider'

const YearsSlider = (props) => {
  // console.log('yearsliders props => ', props)
  const yearsContext = useContext(microfictionsContext)
  const { defaultpins, handleDisplayPins, selectedMicrofictions } = yearsContext

  const sliderWrapperRef = useRef(0)
  const eltSection = sliderWrapperRef.current.parentNode
  const eltSectionWith = eltSection ? eltSection.offsetWidth : 0
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  // const containerWidth = 1536
  const dynamicMargin = (windowWidth - eltSectionWith) / 2

  const yearsArr = []
  let yearsArrToSlider
  defaultpins.map((elt) => {
    const { Date } = elt
    // get the year value of the date
    const yearValue = Date.split('/')[2]
    // incrémente le tableau des années
    yearsArr.push(yearValue)
    // fonction qui enlève les années doublons
    function YearsArrFiltered(year) {
      return year.filter((value, index) => year.indexOf(value) === index)
    }
    // variable qui contient le bon tableau
    const yearsArray = YearsArrFiltered(yearsArr)
    yearsArrToSlider = yearsArray
  })
  const yearsDivisionCount = yearsArrToSlider ? yearsArrToSlider.length : 10

  if (!yearsArrToSlider) return false

  const yearsArrToSliderInt = Array.from(yearsArrToSlider, (x) => parseInt(x))
  const minYear = Math.min(...yearsArrToSliderInt)
  const maxYear = Math.max(...yearsArrToSliderInt)
  const era = maxYear - minYear
  const step = Math.round(era / (yearsDivisionCount + 1))
  const maxYearSlider = minYear + (yearsDivisionCount + 1) * step + 1

  return (
    <div
      className={`slider-wrapper fixed flex flex-row h-[75vh] gap-6 w-[80px] top-[140px] z-10000`}
      style={{ right: `${dynamicMargin}px` }}
      ref={sliderWrapperRef}
      suppressHydrationWarning={true}
    >
      <Slider
        size="sm"
        step={step}
        color="foreground"
        label="Années"
        showSteps={true}
        maxValue={maxYearSlider + 2}
        minValue={minYear}
        defaultValue={maxYearSlider + 2}
        // className="max-w-md"
        orientation="vertical"
        onChange={(event, value) => {
          handleDisplayPins(event, (value = { selectedMicrofictions }))
        }}
        onChangeCommitted={(event, value) => {
          handleDisplayPins(event, (value = { selectedMicrofictions }))
        }}
      />
    </div>
  )
}
export default YearsSlider
