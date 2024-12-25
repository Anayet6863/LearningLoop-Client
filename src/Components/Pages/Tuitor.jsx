import React from "react";

const Tuitor = () => {
  const tutors = [
    {
        name: "Rashed Hossain",
        subject: "Language trainig Professor[IELTS]",
        lessons: "400+ Lessons Completed",
        rate: "$4040",
        experience: "6+ years experience",
        image: "https://i.ibb.co.com/cX0mH9D/rashed-bro.png",
      },
    {
      name: "Moniqa Romin",
      subject: "Maths & Physics Tutor",
      lessons: "100+ Lessons Completed",
      rate: "$1500",
      experience: "2+ years experience",
      image: "https://i.ibb.co.com/c3B4kh9/monica.jpg",
    },
    {
      name: "Marry Chain",
      subject: "Art and Music Professor",
      lessons: "633+ Lessons Completed",
      rate: "$1000",
      experience: "8+ years experience",
      image: "https://i.ibb.co.com/M59YpDz/mary-chayko-photo.jpg",
    },
    {
      name: "Alice Heard",
      subject: "Statistics Professor",
      lessons: "755+ Lessons Completed",
      rate: "$1999",
      experience: "7+ years experience",
      image: "https://i.ibb.co.com/RYz8z6t/alice.webp",
    },
    {
      name: "Jenny White",
      subject: "Art Professor",
      lessons: "336+ Lessons Completed",
      rate: "$2050",
      experience: "8+ years experience",
      image: "https://i.ibb.co.com/MNBnL9m/Jane.jpg",
    },
    
    {
      name: "Sophia Brown",
      subject: "Science Tutor",
      lessons: "120+ Lessons Completed",
      rate: "$7070",
      experience: "4+ years experience",
      image: "https://i.ibb.co.com/bFcw900/Professor-Brian-Cox-OBE-FRS-cropped.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 via-purple-50 to-indigo-100 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Qualified Online Tutors
        </h2>
        <p className="text-lg text-gray-500">Ideal Tutor for Everyone</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-center">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-lg font-bold text-gray-800 mt-4">
                {tutor.name}
              </h3>
              <p className="text-sm text-gray-500">{tutor.subject}</p>
            </div>
            <div className="bg-purple-100 text-purple-600 font-semibold text-center py-2 rounded mt-4">
              {tutor.lessons}
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-blue-600">
                {tutor.rate} <span className="text-sm">/ per hour</span>
              </p>
              <p className="text-sm text-gray-500">{tutor.experience}</p>
              <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tuitor;
