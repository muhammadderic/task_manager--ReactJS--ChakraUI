// React
import React from 'react';
import { Outlet } from 'react-router-dom';
// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// Chakra
import { Grid, GridItem } from '@chakra-ui/react';

export default function Layout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" borderRight="2px solid black">
      <GridItem
        as="aside"
        colSpan="1"
        bg="#EAE7B1"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan="5" p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
