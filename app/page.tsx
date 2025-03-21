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
              Please, don't send fragmented messages
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">A guide to more effective communication</p>
          </div>
          <div className="hidden md:block">
            <NoMultipleMessagesLogo className="w-20 h-20" />
          </div>
        </header>

        <main>
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Why send a complete message?</h2>
              <p className="mb-4">
                Sending multiple short messages in quick succession creates a stressful experience for the recipient.
                Each new message generates a notification, interrupts the workflow and makes it difficult to follow the
                conversation.
              </p>
              <p>
                Instead, take a moment to organize your thoughts into a single complete message. This
                respects the time of the recipient and makes communication more effective.
              </p>
            </div>

            <ChatComparison />
          </section>

          <BenefitsSection />

          <section className="bg-white rounded-lg shadow-md p-6 mb-16">
            <h2 className="text-2xl font-semibold mb-4">Share this message</h2>
            <p className="mb-6">
              Do you know someone who sends fragmented messages? Share this page with them in a friendly way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 bg-[#3B82F6]">
                <Copy size={18} />
                Copy link
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={18} />
                Share
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            Inspired in{" "}
            <a
              href="https://nohello.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
            >
              nohello.net
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} torturado.github.io/nomultiplemessages</p>
        </footer>
      </div>
    </div>
  )
}

