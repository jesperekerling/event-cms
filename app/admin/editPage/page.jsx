'use client';

import { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import toast from 'react-hot-toast';
import { api } from '@/convex/_generated/api';
//import { useMutation, useQuery } from 'convex/react';
import EditFrontPageForm from '../_components/edit-front-page-form';


function ControllAdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

 /* const { data, isLoading } = useQuery(api.moduleName.getLandingPageContent);
  const setLandingPageContent = useMutation(api.moduleName.setLandingPageContent);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setLandingPageContent({ title, description });
      toast.success('Landing page updated successfully');
    } catch (err) {
      toast.error('Failed to update landing page');
    }
  };

  return (
    <div className="p-4">
      <Toaster />
      <h2 className="flex justify-center text-5xl font-bold mb-6">Change Landing Page</h2>
      <EditFrontPageForm />
    </div>
  );
}

export default ControllAdminPage;