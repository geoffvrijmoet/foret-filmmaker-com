import { Atkinson_Hyperlegible, Exo_2 } from 'next/font/google'
import localFont from 'next/font/local';

export const atkinsonWorse = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-atkinson',
}) 

export const atkinson = localFont({
  src: './fonts/AtkinsonHyperlegibleNext-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-atkinson',
  weight: '200',
})

export const exo = Exo_2({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-exo',
})