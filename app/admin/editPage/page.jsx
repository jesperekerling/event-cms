'use client'

import { useState } from 'react';
import toast from 'react-toastify';
import { useMutation } from 'convex/react';



function ControllAdminPage() {
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

  return (
    <div className="p-4">
      <h2 className="text-6xl font-bold flex justify-center py-14 font-mono">Change Landingpage</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
      </form>
    </div>
  );
}

export default ControllAdminPage;
