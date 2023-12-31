"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          
          <main>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  )
}
