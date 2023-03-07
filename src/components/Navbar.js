// React
import React from 'react';
// Chakra
import {
  Avatar,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
} from '@chakra-ui/react';

const boxStyles = {
  my: '0.75rem',
  p: '10px',
  bg: '#3C6255',
  color: 'white',
  textAlign: 'center',
  ':hover': {
    bg: '#61876E',
  },
  cursor: 'pointer',
};

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">My Task Manager</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar bg="#3C6255" />
        <Text>mucodevde@deric.dev</Text>
        <Button sx={boxStyles}>Logout</Button>
      </HStack>
    </Flex>
  );
}
