'use clinet'
import * as handpose from '@tensorflow-models/handpose'
import '@tensorflow/tfjs-backend-webgl'
import Webcam from 'react-webcam'
import Loading from './Loading'
import { useRef, useEffect, useState, useCallback } from 'react'
import { predictGesture } from '@/utils/predictGesture'
import { TIME_ALLOWED } from '@/utils/constants'
import { scrollPage } from '@/utils/scrollElement'
import { useModelContext } from '@/hooks/useModelContext'


const CamComponent = () => {
  const webcamRef = useRef<Webcam>(null)
  const [loading, setLoading] = useState(true)
  const [timeSinceLastGesture, setTimeSinceLastGesture] = useState<Date>()
  const { model, setModel } = useModelContext()

  const detect = useCallback(async (model: handpose.HandPose) => {
    if (webcamRef.current !== null && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video
    
      const result = await predictGesture(model, video, 6)
      if (result === '') {
        setTimeSinceLastGesture(undefined)
      } else if (!timeSinceLastGesture || new Date().getTime() - timeSinceLastGesture.getTime() > TIME_ALLOWED) {
        if (result === 'scrollUp') {
          scrollPage('Up')
        }else if (result === 'scrollDown') {
          scrollPage('Down')
        }
        setTimeSinceLastGesture(new Date())
      }
    }
  }, [setTimeSinceLastGesture, timeSinceLastGesture])
  
  useEffect(() => {
    if (model) {
      setLoading(false)
      const interval = setInterval(() => {
        detect(model)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      const runHandpose = async () => {
        const loadedModel = await handpose.load()
        setModel(loadedModel)
        console.log('Handpose model loaded.')
        setLoading(false)
      }
      runHandpose()
    }
  }, [model, detect, setModel])

  if (loading) {
    return <Loading />
  }else{
    return <Webcam ref={webcamRef} className="sticky bottom-0 right-0 border-2 border-gray-200 w-[100px]" />
  }
}

export default CamComponent
