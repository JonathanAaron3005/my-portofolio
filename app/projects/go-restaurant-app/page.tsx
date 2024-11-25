import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const GoRestaurantApp = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
        GoRestaurantApp – Scalable Backend for Restaurant Management Built with
        Go
      </h1>

      <div className="text-lg text-primary space-y-4 leading-relaxed">
        <p>
          As part of my journey to deepen my back-end development skills, I
          embarked on building GoRestaurantApp as a project within the
          Kelas.work course. This app is a scalable restaurant management
          backend designed to handle the complexities of modern restaurant
          operations. The challenge was to create a robust and efficient system
          that could scale seamlessly while maintaining security and
          performance.
        </p>

        <p>
          Throughout the development of GoRestaurantApp, I focused on utilizing
          Go as the core language to handle the server-side logic. By building
          RESTful APIs, I ensured smooth communication between services,
          enabling easy integration with front-end applications and external
          systems.
        </p>

        <p>
          One of the key aspects of this project was learning how to implement
          unit testing with GoMock. This was crucial for ensuring code
          reliability and detecting issues early in the development cycle. The
          testing not only validated the functionality of the APIs but also
          provided insights into improving the overall quality of the codebase.
        </p>

        <p>
          For distributed tracing, I integrated OpenTelemetry and Jaeger, which
          allowed me to monitor and trace requests across various microservices,
          ensuring that performance issues could be identified and resolved
          quickly. This was especially helpful in maintaining a smooth user
          experience as the app scaled.
        </p>

        <p>
          Security was another top priority for me. I implemented JWT
          authentication, Argon2 hashing for securely storing passwords, and
          AES-GCM encryption for encrypting sensitive data. These measures
          helped ensure that user data remained protected at all times, adhering
          to the best security practices.
        </p>

        <p>
          Throughout the project, I learned the importance of concurrency and
          how Go’s goroutines and channels allow for efficient handling of
          multiple tasks simultaneously, especially in a high-load environment
          like a restaurant management system. By ensuring that the system could
          efficiently handle multiple user requests without performance
          degradation, I was able to deliver a seamless experience.
        </p>

        <p>
          Error handling and structured logging were also fundamental aspects
          that I focused on. This helped me build an application that not only
          functioned well but also provided valuable insights through logs,
          making it easier to diagnose and resolve issues quickly.
        </p>

        <p>
          The GoRestaurantApp project was an invaluable learning experience that
          helped me solidify my understanding of back-end development with Go.
          The course at Kelas.work provided the structure and guidance I needed,
          but the real value came from tackling real-world problems and
          continuously improving my skills.
        </p>
      </div>

      <div className="mt-8 mb-16 flex justify-center">
        <Link href="https://github.com/JonathanAaron3005/Yelp-Camp" passHref>
          <button className="bg-gray-800 text-white py-3 px-6 rounded-full flex items-center hover:bg-gray-700 transition-all duration-200">
            <FaGithub className="mr-2" size={24} /> View on GitHub
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GoRestaurantApp;
