

import React from 'react'
import { toast } from "react-hot-toast";
import { useState } from 'react';
import { useMutation } from 'convex/react';




function EditFrontPageForm() {

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
    <div>

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
  )
}

export default EditFrontPageForm