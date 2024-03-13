'use client'
import { useContext } from "react"
import { modelContext } from '@/context/modelContext'

export const useModelContext = () => {
    return useContext(modelContext)
}