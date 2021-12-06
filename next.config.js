// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@solana/wallet-adapter-base',
  '@solana/wallet-adapter-react',
  '@solana/wallet-adapter-react-ui',
  '@solana/wallet-adapter-bitpie',
  '@solana/wallet-adapter-blocto',
  '@solana/wallet-adapter-wallets',
  '@blocto/sdk',
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
})
