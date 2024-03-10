import * as handpose from '@tensorflow-models/handpose'
import '@tensorflow/tfjs-backend-webgl'
import Webcam from 'react-webcam'
import Loading from './Loading'
import { useRef, useEffect, useState } from 'react'
import { predictGesture } from '../utils/predictGesture'
import { useAppContext } from '../hooks/useAppContext'
import { TIME_ALLOWED } from '../utils/constants'

const CamComponent = () => {
  const webcamRef = useRef<Webcam>(null)
  const { setContext, timeSinceLastGesture } = useAppContext()
  const [loading, setLoading] = useState(true)

  const detect = async (model: handpose.HandPose) => {
    if (webcamRef.current !== null && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video

      const result = await predictGesture(model, video, 6)
      if (result === '') {
        setContext({ video, gesture: result, timeSinceLastGesture: undefined })
      } else if (!timeSinceLastGesture || new Date().getTime() - timeSinceLastGesture.getTime() > TIME_ALLOWED) {
        if (result === 'scrollUp' || result === 'scrollDown') {
          setContext({ video, gesture: result, timeSinceLastGesture: new Date() })
        }
      }
    }
  }

  useEffect(() => {
    const runHandpose = async () => {
      const model = await handpose.load()
      setLoading(false)

      setInterval(() => {
        detect(model)
      }, 1000)
    }
    runHandpose()
  })

  if (loading) {
    return <Loading />
  }
  return <Webcam ref={webcamRef} className="sticky bottom-0 right-0 border-2 border-gray-200 w-[200px]" />
}

export default CamComponent
