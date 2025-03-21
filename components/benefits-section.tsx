import type React from "react"
import { Clock, BellOff, Brain, Heart } from "lucide-react"

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-[#3B82F6]" />,
      title: "Ahorra tiempo",
      description: "Reduce el tiempo de respuesta y evita interrupciones constantes.",
    },
    {
      icon: <BellOff className="w-10 h-10 text-[#3B82F6]" />,
      title: "Menos notificaciones",
      description: "Evita bombardear con múltiples alertas y notificaciones.",
    },
    {
      icon: <Brain className="w-10 h-10 text-[#3B82F6]" />,
      title: "Mejor organización",
      description: "Mensajes completos son más fáciles de entender y responder.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#3B82F6]" />,
      title: "Reduce el estrés",
      description: "Comunicación más clara y respetuosa para ambas partes.",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Beneficios de enviar mensajes completos</h2>

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

