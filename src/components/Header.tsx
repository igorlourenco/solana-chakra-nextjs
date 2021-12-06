import { Flex, Text } from '@chakra-ui/react'
import { Connect } from './Connect'

export const Header = () => (
  <Flex alignItems="center" justifyContent="space-between" padding={3}>
    <Text>Template</Text>
    <Connect />
  </Flex>
)
