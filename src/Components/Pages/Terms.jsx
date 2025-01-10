import React from "react";

const Terms = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Our Policies</h1>

      {/* Terms of Use Section */}
      <div className="bg-white p-4 w-[65%] mx-auto rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Terms of Use</h2>
        <p className="text-gray-700">
          Welcome to LearningLoop! By using our platform, you agree to abide by
          our terms of use:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Users must register with valid information.</li>
          <li>
            Services provided on the platform are subject to acceptance and
            availability.
          </li>
          <li>
            Misuse of services or violating guidelines may result in account
            suspension.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          Thank you for complying with our terms to keep the platform secure
          for everyone.
        </p>
      </div>

      {/* Cookie Policy Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-[65%] mx-auto">
        <h2 className="text-xl font-semibold mb-2">Cookie Policy</h2>
        <p className="text-gray-700">
          Our website uses cookies to enhance user experience and provide
          personalized services:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>We collect data such as browsing behavior and preferences.</li>
          <li>
            Cookies are used to improve functionality and offer targeted
            content.
          </li>
          <li>
            Users can manage or disable cookies in their browser settings.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          By continuing to use LearningLoop, you consent to our cookie usage.
        </p>
      </div>

      {/* Privacy Policy Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-[65%] mx-auto">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p className="text-gray-700">
          At LearningLoop, your privacy is important to us:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>
            We collect personal information such as email and name during
            registration.
          </li>
          <li>Your data is securely stored and will never be shared without consent.</li>
          <li>
            You have full control over your data, including updating or deleting
            your account.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          For detailed information on how we handle your data, please refer to
          this policy.
        </p>
      </div>
    </div>
  );
};

export default Terms;
