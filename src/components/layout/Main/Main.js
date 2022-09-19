import React, { useState } from 'react';
import './Main.css';
import { BlogCard } from '../../BlogCard/BlogCard';
import { useBlogs } from '../../../hooks/useBlogs';

export default function Main() {
  const { blogs } = useBlogs();
  console.log(blogs);
  return (<main>
    Main here!
  </main>);
}
