
'use client';

import { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import toast from 'react-hot-toast';
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';

import EditFrontPageForm from '../_components/edit-front-page-form';
import Edit from '../[id]/_component/edit-form';


function EditPage() {
  
  
  return (
    <div className="p-4">
      <Toaster />
      <h2 className="flex justify-center text-5xl font-bold mb-6">Change Landing Page</h2>
      <EditFrontPageForm/>
    </div>
  );
}

export default EditPage;