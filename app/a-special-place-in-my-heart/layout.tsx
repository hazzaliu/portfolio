import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Caitlin, I have a question 🥺👉👈',
  description: 'A special message for someone special',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ValentineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
