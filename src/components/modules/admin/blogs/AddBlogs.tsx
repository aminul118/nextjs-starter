'use client';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { useState } from 'react';

const AddBlogs = () => {
  const [content, setContent] = useState('');
  console.log(content);
  return (
    <div>
      <ReactQuil value={content} onChange={setContent} />
    </div>
  );
};

export default AddBlogs;
