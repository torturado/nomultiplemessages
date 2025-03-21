import type React from "react"

interface NoMultipleMessagesLogoProps {
  className?: string
}

const NoMultipleMessagesLogo: React.FC<NoMultipleMessagesLogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Chat bubbles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="absolute top-0 left-0 w-8 h-8 bg-gray-300 rounded-lg transform -rotate-6"></div>
        <div className="absolute top-2 left-2 w-8 h-8 bg-gray-400 rounded-lg transform rotate-3"></div>
        <div className="absolute top-4 left-4 w-8 h-8 bg-gray-500 rounded-lg transform -rotate-3"></div>
      </div>

      {/* Prohibition symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="w-full h-full rounded-full border-4 border-[#EF4444]"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#EF4444] transform -translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  )
}

export default NoMultipleMessagesLogo

