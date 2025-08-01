import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/app-provider';
import ClientLayout from '@/components/layout/client-layout';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Orlando Global Hub',
  description: 'Welcome to Orlando Global',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
