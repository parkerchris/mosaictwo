import { ApolloProvider } from "@apollo/client"
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { client } from "../graphql/apollo-client"


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
    </ApolloProvider>
  )
}
