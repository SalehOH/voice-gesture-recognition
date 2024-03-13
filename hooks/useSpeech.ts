"use client";
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useEffect } from 'react'

export const useSpeech = (commands: any, notHnadsFree: boolean) => {
    const { transcript } = useSpeechRecognition({ commands })

    useEffect(() => {
        if (notHnadsFree) {
            return
        }
        SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
    }, [notHnadsFree])

    return { transcript }
};