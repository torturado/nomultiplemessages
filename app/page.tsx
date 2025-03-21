import { Button } from "@/components/ui/button"
import { Copy, Share2 } from "lucide-react"
import ChatComparison from "@/components/chat-comparison"
import BenefitsSection from "@/components/benefits-section"
import NoMultipleMessagesLogo from "@/components/no-multiple-messages-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B82F6] mb-2">
              Por favor, no envíes mensajes fragmentados
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">Una guía para comunicaciones más efectivas</p>
          </div>
          <div className="hidden md:block">
            <NoMultipleMessagesLogo className="w-20 h-20" />
          </div>
        </header>

        <main>
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">¿Por qué enviar un mensaje completo?</h2>
              <p className="mb-4">
                Enviar múltiples mensajes cortos en rápida sucesión crea una experiencia estresante para el receptor.
                Cada nuevo mensaje genera una notificación, interrumpe el flujo de trabajo y dificulta seguir la
                conversación.
              </p>
              <p>
                En lugar de eso, tómate un momento para organizar tus pensamientos en un solo mensaje completo. Esto
                respeta el tiempo del receptor y hace que la comunicación sea más efectiva.
              </p>
            </div>

            <ChatComparison />
          </section>

          <BenefitsSection />

          <section className="bg-white rounded-lg shadow-md p-6 mb-16">
            <h2 className="text-2xl font-semibold mb-4">Comparte este mensaje</h2>
            <p className="mb-6">
              ¿Conoces a alguien que envía mensajes fragmentados? Comparte esta página con ellos de forma amable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 bg-[#3B82F6]">
                <Copy size={18} />
                Copiar enlace
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={18} />
                Compartir
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            Inspirado por{" "}
            <a
              href="https://nohello.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
            >
              nohello.net
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} nomultiplemessages.com</p>
        </footer>
      </div>
    </div>
  )
}

