import "./globals.css";

export const metadata = {
  title: 'dandan&dunteng',
  description: 'dandan&dunteng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
