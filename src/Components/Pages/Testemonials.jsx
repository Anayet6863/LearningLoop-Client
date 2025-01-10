import React from 'react';

const testimonials = [
  {
    name: 'Ahmed Hasan',
    course: 'B.Sc in Computer Science, 2018-2022',
    image: 'https://i.ibb.co.com/ygrgN1x/1721750929911.jpg',
    rating: 5,
    text: 'The supportive instructors and others member helped me excel in my studies. The experience has been invaluable!'
  },
  {
    name: 'Fatima Rahman',
    course: 'BBA, 2017-2021',
    image: 'https://i.ibb.co.com/SsgrRX2/1672799160119.jpg',
    rating: 5,
    text: 'My time here was life-changing. The practical exposure and industry connections made a huge difference in my career.'
  },
  {
    name: 'Shahidul Islam',
    course: 'MBA, 2019-2021',
    image: 'https://i.ibb.co.com/3cg22tY/1727146202034.jpg',
    rating: 5,
    text: 'The professors were incredibly knowledgeable and always ready to help. I gained a lot of confidence during my time here.'
  },
  {
    name: 'Nurjahan Akter',
    course: 'B.Sc in Civil Engineering, 2016-2020',
    image: 'https://i.ibb.co.com/j5nmDW2/1602341048103.jpg',
    rating: 5,
    text: 'I loved the hands-on approach to learning. It prepared me well for the challenges of the professional world.'
  },
  {
    name: 'Rashed Karim',
    course: 'B.Sc in Electrical Engineering, 2015-2019',
    image: 'https://i.ibb.co.com/nPhQSzz/1589488491396.jpg',
    rating: 5,
    text: 'The collaborative environment and innovative projects pushed me to achieve my best. I highly recommend this institution!'
  },
  {
    name: 'Mariam Chowdhury',
    course: 'B.Sc in Mechanical Engineering, 2014-2018',
    image: 'https://i.ibb.co.com/g3bGG09/images.jpg',
    rating: 4,
    text: 'The diverse learning opportunities and mentorship I received here were unparalleled. It set the foundation for my career success.'
  }
];

const Testimonials = () => {
  return (
    <div className='container mx-auto'>
      <h2 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{testimonial.course}</p>
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="flex justify-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
