import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  const theme = createTheme({
    typography: {
      fontFamily: inter,
    },
  })

  return getLayout(<>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>) 
}
