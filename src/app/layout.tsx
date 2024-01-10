import type { Metadata } from 'next'
import { Saira_Condensed } from 'next/font/google'
import './globals.css'

const saira = Saira_Condensed({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Spartanos Barbearia',
  description: 'O corte ideal para você!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>{children}</body>
    </html>
  )
}
