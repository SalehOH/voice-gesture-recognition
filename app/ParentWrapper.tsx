"use client";
import React from "react";
import ModelProvider from '@/context/modelContext'

export default function ParentProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [model, setModel] = React.useState<any>();
    
    return (
        <ModelProvider value={{ model, setModel}}>
            {children}
        </ModelProvider>
    )
}