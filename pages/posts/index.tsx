import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { AllPosts } from '../../components/Posts';
import { Post } from '../../types';
import { getAllPosts } from '../../util/postsUtil';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
