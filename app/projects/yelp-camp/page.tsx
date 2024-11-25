import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const YelpCamp = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
        YelpCamp: A Web Application for Finding and Reviewing Campgrounds
      </h1>

      <div className="text-lg text-primary space-y-4 leading-relaxed">
        <p>
          I worked on this project as a part of my course on Udemy, namely The
          Web Developer Bootcamp 2023. Finding information regarding camping
          locations may be challenging, and the information that is accessible
          may be dispersed across several websites, making it challenging to
          obtain all you want. This project is my first time using NodeJS to
          create a website. Therefore, I did a lot of research related to NodeJS
          such as reading documentation and researching related frameworks.
          Then, I started developing the website by listing the features that
          would be applied.
        </p>

        <p>
          For the User Interface, I use HTML, CSS, JavaScript, EJS (Embedded
          JavaScript), and Bootstrap. For server-side, I use Express.js. Then, I
          modeled the database using MongoDB and integrated it with Express.js
          using Mongoose. I also implement basic security such as sanitizing by
          using Mongo Sanitize to prevent injection of database syntax.
        </p>

        <p>
          As an architectural style, I use REST. In making this project I also
          use NPM packages and utilizing various dependencies such as Passport
          for user authentication and authorization, Mapbox for maps and
          geocoding, Cloudinary for images storage, etc. I applied a strict
          verification system, which consists of client-side verification and
          server-side verification using JOI to avoid accessing certain pages
          using platforms such as Postman (without going through the User
          Interface). From this project, I learned to understand the big picture
          of the stages in real application development.
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

export default YelpCamp;
