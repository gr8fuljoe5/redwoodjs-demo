import { useState } from 'react';
import { Form, TextField, Submit } from '@redwoodjs/web';
import MainLayout from '../../layouts/MainLayout';
import AllStateCell from '../../components/AllStateCell';

const AllStatesPage = () => {
  return (
    <MainLayout>
      <h1>All States</h1>
      <AllStateCell />
    </MainLayout>
  );
};

export default AllStatesPage;
