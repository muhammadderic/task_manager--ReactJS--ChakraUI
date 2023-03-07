// React
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
// Pages
import Create from './pages/Create.js';
import Dashboard from './pages/Dashboard.js';
import Profile from './pages/Profile.js';
import Layout from './layouts/Layout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
