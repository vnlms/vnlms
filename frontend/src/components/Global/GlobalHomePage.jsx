import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GlobalHomePage = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const servicesData = [
    {
      title: 'College Branding and Promotion Offline & Online',
      description: 'Our College Branding and Promotion services at Ntechzy Pvt Ltd are designed to elevate the ...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/mn',
    },
    {
      title: 'Influencer Marketing',
      description: 'Influencer Marketing with Ntechzy Pvt Ltd harnesses the power of trusted voices in your industry to promote your brand...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/college-branding/influencer-marketing',
    },
    {
      title: 'Digital Campaigning Support',
      description: 'Digital campaigns are crucial in the digital age, and Ntechzy Pvt Ltd specializes in providing...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/college-branding/digital-campaigning',
    },
    {
      title: 'Professional Admission Cell Assistance',
      description: 'Ntechzy Pvt Ltd offers Professional Admission Cell Assistance to colleges...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/college-branding/admission-cell',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Search Engine Optimization (SEO) is fundamental to increasing your online visibility...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/digital-marketing/search-engine-optimization',
    },
    {
      title: 'Social Media Management',
      description: 'Our Social Media Management service helps you establish a strong social media presence...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/digital-marketing/social-media-management',
    },
    {
      title: 'Search Engine Marketing (SEM)',
      description: 'Search Engine Marketing (SEM) with Ntechzy Pvt Ltd is designed to boost your online...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/digital-marketing/search-engine-marketing',
    },
    {
      title: 'Website SEO',
      description: 'Ntechzy Pvt Ltd provides Website SEO services focused on optimizing your website...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/college-branding/website-seo',
    },
    {
      title: 'Website Design and Development',
      description: 'Our Website Design and Development service is aimed at creating visually appealing...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/web-design-and-development',
    },
    {
      title: 'Mobile App Development',
      description: 'In today’s mobile-first world, Mobile App Development is crucial, and Ntechzy Pvt Ltd...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/mobile-app-development',
    },
    {
      title: 'Video Services',
      description: 'Our Video Services at Ntechzy Pvt Ltd cover all aspects of video production, from ideation to...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/media/video-services',
    },
    {
      title: 'Corporate shoot',
      description: 'For businesses looking to capture their corporate environment, Ntechzy Pvt Ltd offers...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/media/corporate-shoot',
    },
    {
      title: 'Podcast Setup (From Shoot to Editing)',
      description: 'Ntechzy Pvt Ltd provides comprehensive Podcast Setup services, covering everything from...',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '/services/media/podcast-setup',
    },
    // {
    //   title: 'Campus Tour',
    //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
    //   imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
    //   link: '#service5',  // No route specified for this one, leaving as a placeholder
    // },
    // {
    //   title: 'Motion Graphic Animated Video',
    //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
    //   imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
    //   link: '#service5',  // No route specified for this one, leaving as a placeholder
    // },
    // {
    //   title: 'Documentary',
    //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
    //   imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
    //   link: '#service5',  // No route specified for this one, leaving as a placeholder
    // },
    // {
    //   title: 'PodCast SetUp (From Shoot to Editing)',
    //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
    //   imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
    //   link: '#service5',  // No route specified for this one, leaving as a placeholder
    // },
  ];
  

  return (
    <div className="py-8 px-4 text-white" >
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="slide-left">Services</h1>
      <div className="text-center mb-8 font-bold" data-aos="slide-right" >What We Have To Offer</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index} 
            className="relative p-4 border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300" data-aos="flip-right"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <Link to={service.link} target="_blank"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              Know More
            </Link>
            <div className={`transition-all duration-300 ${hoverIndex === index ? 'max-h-32' : 'max-h-0'} overflow-hidden mt-4`}>
              {/* <img
                // src={service.imageUrl}
                alt={service.title}
                className="w-full object-cover"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalHomePage;
