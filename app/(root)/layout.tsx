import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col bg-slate-300">
      <div className="bg-[#0B2033]">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}