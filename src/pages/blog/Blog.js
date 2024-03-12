// src/pages/blog/Blog.js
import React from 'react';
import Layout from '../../components/_App/layout';
import Seo from '../../components/_App/seo';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import FetchMediumArticles from '../../components/MediumArticlesData/fetchMediumArticles';

const BlogPage = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner 
        pageTitle="Blog"
        homePageText="Home" 
        homePageUrl="/" 
        activePageText="Blog" />

      {/* Include the MediumArticles component */}
      <FetchMediumArticles />

      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Details" />;

export default BlogPage;
