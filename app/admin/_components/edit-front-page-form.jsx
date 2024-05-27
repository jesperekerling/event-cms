

import React from 'react'
import { toast } from "react-hot-toast";
import { useState } from 'react';
import { useMutation } from 'convex/react';




function EditFrontPageForm() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const changingLandingpage = useMutation('changingLandingpage');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changingLandingpage({ title, description });
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

/*

export default EditFrontPageForm;
*/

/*'use client'
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { api } from '@/convex/_generated/api';



function EditFrontPageForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const {posts, status }= useQuery(api.posts.getLandingPageContent);
  const updateLandingPageContent = useMutation(api.posts.updateLandingPageContent);

  useEffect(() => {
    if (posts) {
      setTitle(posts.title || '');
      setDescription(posts.description || '');
    }
  }, [posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateLandingPageContent({ title, description });
      toast.success('Landing page updated successfully');
      router.push('/');
    } catch (err) {
      toast.error('Failed to update landing page');
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error loading page data</div>;

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
  );
}

export default EditFrontPageForm;*/

/*
import React from 'react'
import { toast } from "react-hot-toast";
import { useState } from 'react';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api';


 



function EditFrontPageForm() {
  const router = useRouter()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const updatePosts = useMutation(api.posts.updatePosts)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePosts({ title, description });
      toast.success('Landing page updated successfully');
    } catch (err) {
      toast.error('Failed to update landing page');
    }
    router.push('/')
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

export default EditFrontPageForm */