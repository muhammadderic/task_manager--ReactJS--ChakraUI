import { Box, SimpleGrid } from '@chakra-ui/react';

// React
import React from 'react';

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

export default function Dashboard() {
  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
