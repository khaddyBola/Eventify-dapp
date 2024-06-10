// 'use client'

// import * as React from 'react'
// import {
//   GetSiweMessageOptions,
//   RainbowKitSiweNextAuthProvider,
// } from '@rainbow-me/rainbowkit-siwe-next-auth'
// import { WagmiConfig, configureChains, createConfig } from 'wagmi'
// import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
// import {
//   metaMaskWallet,
//   trustWallet,
//   coinbaseWallet,
//   rainbowWallet,
// } from '@rainbow-me/rainbowkit/wallets'
// import { mainnet, hardhat } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { Session } from 'next-auth'
// import { SessionProvider } from 'next-auth/react'

// const celo: Chain = {
//   id: 42220,
//   name: 'alfajores',
//   network: 'alfajores',
//   iconUrl: 'data:image/png;base64,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',
//   iconBackground: '#35D07F',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'alfajores',
//     symbol: 'alfajores',
//   },
//   rpcUrls: {
//     public: { http: ['https://alfajores-forno.celo-testnet.org'] },
//     default: { http: ['https://alfajores-forno.celo-testnet.org'] },
//   },
//   blockExplorers: {
//     default: { name: 'Celo Explorer', url: 'https://explorer.celo.org/alfajores' },
//     etherscan: { name: 'Celo Explorer', url: 'https://explorer.celo.org/alfajores' },
//   },
//   testnet: true,
// }

// const { chains, publicClient } = configureChains(
//   [mainnet, celo, hardhat],
//   [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
// )

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       metaMaskWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       coinbaseWallet({ appName: 'Coinbase', chains }),
//       rainbowWallet({ projectId, chains }),
//     ],
//   },
// ])

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// })

// const demoAppInfo = {
//   appName: 'Dapp Funds dApp',
// }

// const getSiweMessageOptions: GetSiweMessageOptions = () => ({
//   statement: `
//   Once you're signed in, you'll be able to access all of our dApp's features.
//   Thank you for partnering with CrowdFunding!`,
// })

// export function Providers({
//   children,
//   pageProps,
// }: {
//   children: React.ReactNode
//   pageProps: {
//     session: Session
//   }
// }) {
//   const [mounted, setMounted] = React.useState(false)
//   React.useEffect(() => setMounted(true), [])

//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <SessionProvider refetchInterval={0} session={pageProps.session}>
//         <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
//           <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
//             {mounted && children}
//           </RainbowKitProvider>
//         </RainbowKitSiweNextAuthProvider>
//       </SessionProvider>
//     </WagmiConfig>
//   )
// }
// 'use client'

// import * as React from 'react'
// import {
//   GetSiweMessageOptions,
//   RainbowKitSiweNextAuthProvider,
// } from '@rainbow-me/rainbowkit-siwe-next-auth'
// import { WagmiConfig, configureChains, createConfig } from 'wagmi'
// import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
// import {
//   metaMaskWallet,
//   trustWallet,
//   coinbaseWallet,
//   rainbowWallet,
// } from '@rainbow-me/rainbowkit/wallets'
// import { mainnet, hardhat } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { Session } from 'next-auth'
// import { SessionProvider } from 'next-auth/react'

// const bitfinity: Chain = {
//   id: 355113,
//   name: 'Bitfinity',
//   network: 'bitfinity',
//   iconUrl: 'https://bitfinity.network/logo.png',
//   iconBackground: '#000000',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Bitfinity',
//     symbol: 'BFT',
//   },
//   rpcUrls: {
//     public: { http: ['https://testnet.bitfinity.network'] },
//     default: { http: ['https://testnet.bitfinity.network'] },
//   },
//   blockExplorers: {
//     default: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
//     etherscan: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
//   },
//   testnet: true,
// }

// const { chains, publicClient } = configureChains(
//   [mainnet, bitfinity, hardhat],
//   [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
// )

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       metaMaskWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       coinbaseWallet({ appName: 'Coinbase', chains }),
//       rainbowWallet({ projectId, chains }),
//     ],
//   },
// ])

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// })

// const demoAppInfo = {
//   appName: 'Dapp Funds dApp',
// }

// const getSiweMessageOptions: GetSiweMessageOptions = () => ({
//   statement: `
//   Once you're signed in, you'll be able to access all of our dApp's features.
//   Thank you for partnering with CrowdFunding!`,
// })

// export function Providers({
//   children,
//   pageProps,
// }: {
//   children: React.ReactNode
//   pageProps: {
//     session: Session
//   }
// }) {
//   const [mounted, setMounted] = React.useState(false)
//   React.useEffect(() => setMounted(true), [])

//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <SessionProvider refetchInterval={0} session={pageProps.session}>
//         <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
//           <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
//             {mounted && children}
//           </RainbowKitProvider>
//         </RainbowKitSiweNextAuthProvider>
//       </SessionProvider>
//     </WagmiConfig>
//   )
// }

'use client'

import * as React from 'react'
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, hardhat } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

const celoAlfajores: Chain = {
  id: 44787,
  name: 'Celo Alfajores',
  network: 'alfajores',
  iconUrl: 'https://celo.org/developers/images/branding/celo-logo-color.77eb4e2b.svg',
  iconBackground: '#35D07F',
  nativeCurrency: {
    decimals: 18,
    name: 'Celo Alfajores',
    symbol: 'alfajores',
  },
  rpcUrls: {
    public: { http: ['https://alfajores-forno.celo-testnet.org'] },
    default: { http: ['https://alfajores-forno.celo-testnet.org'] },
  },
  blockExplorers: {
    default: { name: 'Celo Explorer', url: 'https://explorer.celo.org/alfajores' },
    etherscan: { name: 'Celo Explorer', url: 'https://explorer.celo.org/alfajores' },
  },
  testnet: true,
}

const { chains, publicClient } = configureChains(
  [mainnet, celoAlfajores, hardhat],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: 'Coinbase', chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const demoAppInfo = {
  appName: 'Dapp Funds dApp',
}

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `
  Once you're signed in, you'll be able to access all of our dApp's features.
  Thank you for partnering with CrowdFunding!`,
})

export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: {
    session: Session
  }
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
            {mounted && children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}
