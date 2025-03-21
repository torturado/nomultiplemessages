import type React from "react"
import { Clock, BellOff, Brain, Heart } from "lucide-react"

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-[#3B82F6]" />,
      title: "Save time",
      description: "Reduce the response time and avoid constant interruptions.",
    },
    {
      icon: <BellOff className="w-10 h-10 text-[#3B82F6]" />,
      title: "Less notifications",
      description: "Avoid bombarding with multiple alerts and notifications.",
    },
    {
      icon: <Brain className="w-10 h-10 text-[#3B82F6]" />,
      title: "Better organization",
      description: "Complete messages are easier to understand and respond to.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#3B82F6]" />,
      title: "Reduce stress",
      description: "More clear and respectful communication for both parties.",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Benefits of sending complete messages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection

