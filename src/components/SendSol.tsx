import { useWallet } from '@solana/wallet-adapter-react'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import React, { useCallback } from 'react'
import { Text, Button, useToast } from '@chakra-ui/react'
import { appConnection } from '../utils/connection'

interface TransferProps {
  destination: string
  amount: number
}

export const SendSol = ({ amount, destination }: TransferProps) => {
  const { publicKey, sendTransaction, connected } = useWallet()
  const toast = useToast()

  const onClick = useCallback(async () => {
    try {
      const receiver = new PublicKey(destination)

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: receiver,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      )

      const tx = await sendTransaction(transaction, appConnection)

      console.log({ tx })

      toast({
        title: 'Success!',
        description: `Donation sent.`,
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error!',
        description: error.message,
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
    }
  }, [publicKey, sendTransaction, amount, destination, toast])

  if (connected)
    return (
      <Button onClick={onClick} disabled={!publicKey}>
        Send 1 lamport to a random address!
      </Button>
    )

  return <Text>Connect to a wallet to send 1 lamport to a random address!</Text>
}
