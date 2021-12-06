import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../theme'
import dynamic from 'next/dynamic'

require('@solana/wallet-adapter-react-ui/styles.css')

const WalletConnectionProvider = dynamic(
  () => import('../providers/WalletConnectionProvider'),
  {
    ssr: false,
  }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WalletConnectionProvider>
        <Component {...pageProps} />
      </WalletConnectionProvider>
    </ChakraProvider>
  )
}

export default MyApp
