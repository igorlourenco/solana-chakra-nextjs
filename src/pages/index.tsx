import { Stack } from '@chakra-ui/layout'
import { Header } from '../components/Header'
import { SendSol } from '../components/SendSol'

const Index = () => {
  return (
    <Stack>
      <Header />
      <SendSol
        amount={1}
        destination="C8sfEjQBHSim6ZmCxY8cx12B4wMyKhXWnECKSv9RS3A8"
      />
    </Stack>
  )
}

export default Index
