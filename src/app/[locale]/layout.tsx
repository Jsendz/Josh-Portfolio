import React, { ReactNode } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import '../globals.css'
import { Expletus_Sans } from 'next/font/google'
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
};
 

const expletus = Expletus_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Joshua Sendzul | Frontend Developer',
  description: 'Portfolio of Joshua Sendzul, a frontend developer specializing in React, Next.js, and Web3 technologies.'
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale} className={expletus.className}>
      <body className="m-h-screen font-sans overflow-x-hidden bg-slate-50">
        <AuroraBackground>
          <NextIntlClientProvider >
            {children}
            </NextIntlClientProvider>
        </AuroraBackground>
      </body>
    </html>
  )
}