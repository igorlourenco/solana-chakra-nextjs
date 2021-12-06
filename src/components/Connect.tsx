import {
  WalletMultiButton,
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui'

export const Connect = () => (
  <WalletModalProvider>
    <WalletMultiButton
      style={{
        borderRadius: '25px',
      }}
    />
  </WalletModalProvider>
)
