'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="bg-green-900 text-white py-16 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.purlsoho.com/media/wysiwyg/CleanShot_2024-06-05_at_10.35.30.png')`, 
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Learn more about our mission, values, and the people behind our eco-friendly initiatives.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            At EcoStitch, our mission is to promote sustainable practices that benefit both the environment and the community. 
            We are dedicated to reducing carbon footprints through innovative solutions and creating a greener future for all.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Sustainability" 
              description="We believe in adopting sustainable practices to reduce the environmental impact of our activities." 
            />
            <ValueCard 
              title="Community" 
              description="We are committed to supporting the communities we serve, empowering individuals to make eco-conscious choices." 
            />
            <ValueCard 
              title="Innovation" 
              description="Our team is focused on finding new and effective solutions to environmental challenges." 
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Our dedicated team of professionals is passionate about making a positive impact on the environment. 
            Together, we work towards creating a sustainable future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="John Doe" 
              position="Founder & CEO" 
              imageUrl="https://i.pravatar.cc/150?img=8" // ضع مسار الصورة
            />
            <TeamMember 
              name="Jane Smith" 
              position="Chief Sustainability Officer" 
              imageUrl="https://e7.pngegg.com/pngimages/1/723/png-clipart-graphy-business-portrait-business-people-public-relations.png" // ضع مسار الصورة
            />
            <TeamMember 
              name="Michael Lee" 
              position="Head of Operations" 
              imageUrl="https://chirothin.com/wp-content/uploads/2014/08/consultexpert.jpg" // ضع مسار الصورة
            />
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="bg-green-100 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Ready to make a difference? Get involved in our eco-friendly initiatives and help us create a more sustainable world.
          </p>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
            Learn More
          </button>
        </section> */}
      </div>
    </div>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, position, imageUrl }) {
  return (
    <div className="text-center">
      <img 
        src={imageUrl} 
        alt={name} 
        className="h-32 w-32 mx-auto rounded-full object-cover mb-4"
      />
      <h4 className="text-lg font-medium text-gray-900">{name}</h4>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}
