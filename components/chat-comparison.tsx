"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  timestamp: Date
  sender: "user" | "recipient"
}

const ChatComparison: React.FC = () => {
  const [badMessages, setBadMessages] = useState<Message[]>([])
  const [goodMessages, setGoodMessages] = useState<Message[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const badChatRef = useRef<HTMLDivElement>(null)
  const goodChatRef = useRef<HTMLDivElement>(null)

  const resetDemo = () => {
    setBadMessages([])
    setGoodMessages([])

    // Initial recipient message for both chats
    const initialMessage: Message = {
      id: 0,
      text: "Hola, ¿en qué puedo ayudarte?",
      timestamp: new Date(),
      sender: "recipient",
    }

    setBadMessages([initialMessage])
    setGoodMessages([initialMessage])
  }

  const playDemo = () => {
    resetDemo()
    setIsPlaying(true)

    // Bad example - multiple fragmented messages
    const badMessageTexts = [
      "Hola",
      "Tengo una pregunta",
      "sobre el proyecto",
      "que estamos haciendo",
      "¿puedes decirme",
      "cuándo es la fecha límite?",
      "y también",
      "necesito saber si tenemos que incluir gráficos",
    ]

    // Good example - one complete message
    const goodMessageText =
      "Hola! Tengo una pregunta sobre el proyecto que estamos haciendo. ¿Puedes decirme cuándo es la fecha límite? También necesito saber si tenemos que incluir gráficos. Gracias!"

    // Add fragmented messages with delays
    badMessageTexts.forEach((text, index) => {
      setTimeout(
        () => {
          setBadMessages((prev) => [
            ...prev,
            {
              id: index + 1,
              text,
              timestamp: new Date(),
              sender: "user",
            },
          ])
        },
        (index + 1) * 1500,
      )
    })

    // Add single complete message after a short delay
    setTimeout(() => {
      setGoodMessages((prev) => [
        ...prev,
        {
          id: 1,
          text: goodMessageText,
          timestamp: new Date(),
          sender: "user",
        },
      ])
    }, 1500)

    // Add recipient responses
    setTimeout(
      () => {
        setBadMessages((prev) => [
          ...prev,
          {
            id: badMessageTexts.length + 1,
            text: "Dame un momento para verificar toda esta información...",
            timestamp: new Date(),
            sender: "recipient",
          },
        ])
      },
      (badMessageTexts.length + 2) * 1500,
    )

    setTimeout(() => {
      setGoodMessages((prev) => [
        ...prev,
        {
          id: 2,
          text: "La fecha límite es el 15 de octubre y sí, necesitamos incluir gráficos. ¡Gracias por tu mensaje claro y completo!",
          timestamp: new Date(),
          sender: "recipient",
        },
      ])
    }, 3000)

    // End the demo
    setTimeout(
      () => {
        setIsPlaying(false)
      },
      (badMessageTexts.length + 3) * 1500,
    )
  }

  useEffect(() => {
    resetDemo()
  }, [])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (badChatRef.current) {
      badChatRef.current.scrollTop = badChatRef.current.scrollHeight
    }
    if (goodChatRef.current) {
      goodChatRef.current.scrollTop = goodChatRef.current.scrollHeight
    }
  }, [badMessages, goodMessages])

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Comparación</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bad example */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#EF4444]">
          <div className="bg-[#EF4444] text-white p-3 font-medium">Así NO ❌</div>
          <div ref={badChatRef} className="h-80 overflow-y-auto p-4 flex flex-col space-y-2">
            {badMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start",
                )}
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Good example */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#10B981]">
          <div className="bg-[#10B981] text-white p-3 font-medium">Así SÍ ✅</div>
          <div ref={goodChatRef} className="h-80 overflow-y-auto p-4 flex flex-col space-y-2">
            {goodMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start",
                )}
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={playDemo}
          disabled={isPlaying}
          className={cn(
            "px-4 py-2 rounded-md font-medium",
            isPlaying ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-[#3B82F6] text-white hover:bg-blue-600",
          )}
        >
          {isPlaying ? "Reproduciendo..." : "Reproducir demostración"}
        </button>
      </div>
    </div>
  )
}

export default ChatComparison

