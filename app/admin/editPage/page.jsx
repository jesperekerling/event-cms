'use client'

import { useState } from 'react';
import { Toaster } from "react-hot-toast";
import { useMutation } from 'convex/react';
import { mutation } from '@/convex/_generated/server';
import EditFrontPageForm from '../_components/edit-front-page-form';



function ControllAdminPage() {
  /*
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const updateLandingPage = useMutation('updateLandingPage');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateLandingPage({ title, description });
      toast.success('Landing page updated successfully');
    } catch (err) {
      toast.error('Failed to update landing page');
    }
  };
  */

  return (
    <div className="p-4">
      <Toaster />
      <h2 className="text-6xl font-bold flex justify-center py-14 font-mono">Change Landing Page</h2>
      <EditFrontPageForm />
    </div>
  );
}

export default ControllAdminPage;
