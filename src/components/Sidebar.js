// React
import React from 'react';
// Chakra
import { List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { CalenderIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const sidebarStyles = {
  m: '0',
  p: '10px',
  bg: '#EAE7B1',
  color: '#2C3639',
  fontSize: '1rem',
  textAlign: 'center',
  ':hover': {
    bg: '#61876E',
    color: 'white',
  },
  cursor: 'pointer',
};

const iconStyles = {
  ':hover': {
    color: 'white',
  },
};

export default function Sidebar() {
  return (
    <List spacing={4} p="0">
      <ListItem display="flex" alignItems="center" sx={sidebarStyles}>
        <ListIcon as={CalenderIcon} sx={iconStyles} />
        <NavLink to="/">
          <Text>Dashboard</Text>
        </NavLink>
      </ListItem>
      <ListItem display="flex" alignItems="center" sx={sidebarStyles}>
        <ListIcon as={EditIcon} sx={iconStyles} />
        <NavLink to="create">
          <Text>Add Task</Text>
        </NavLink>
      </ListItem>
      <ListItem display="flex" alignItems="center" sx={sidebarStyles}>
        <ListIcon as={AtSignIcon} sx={iconStyles} />
        <NavLink to="profile">
          <Text>My Profile</Text>
        </NavLink>
      </ListItem>
    </List>
  );
}
