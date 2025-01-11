import React from "react";

const PdfDownload = () => {
  const pdfFiles = [
    {
      name: "Cambridge Book 18",
      description: "A comprehensive guide for IELTS preparation.",
      path: "/docs/C18.pdf",
      image: "https://i.ibb.co.com/5cR8wKN/1176b5ea3920745acdd6069e183d4132.jpg",
    },
    {
      name: "Cambridge Book 19",
      description: "The latest practice tests for IELTS.",
      path: "/docs/C19.pdf",
      image: "https://i.ibb.co.com/bzCs14X/mid-Cambridge-IELTS-19-With-answer-academic-1723262222.webp",
    },
    {
      name: "Cambridge Final Book",
      description: "Final book to boost your IELTS preparation.",
      path: "/docs/CAFINAL.pdf",
      image: "https://i.ibb.co.com/X5KPhbD/images-1.jpg",
    },
    {
      name: "Cambridge Listening",
      description: "Improve your listening skills for IELTS.",
      path: "/docs/Lisening.pdf",
      image: "https://i.ibb.co.com/wsbnN5D/images-2.jpg",
    },
    {
      name: "Makkar Speaking",
      description: "Essential tips for IELTS speaking.",
      path: "/docs/Speaking.pdf",
      image: "https://i.ibb.co.com/WHvdQH8/book-36102024-09-05-1725520430.jpg",
    },
    {
      name: "IELTS Vocabulary",
      description: "Expand your vocabulary for IELTS.",
      path: "/docs/Vocab.pdf",
      image: "https://i.ibb.co.com/VLbHMKq/4ce49d63b-202233.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 mb-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">IELTS section</h1>
      <p className="text-xl mb-8 mt-3 text-gray-500">Chase your dream with us.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={file.image}
              alt={file.name}
              className="w-96 h-80  rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{file.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{file.description}</p>
            <a
              href={file.path}
              download
              className="bg-purple-600 text-white px-4 py-2 rounded transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfDownload;
