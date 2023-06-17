import { Inter } from "next/font/google"
import Dashboard from "../components/Dashboard"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashboard - ToDaily",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Dashboard children={children}/>
      </body>
    </html>
  )
}
