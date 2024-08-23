import { Link } from "react-router-dom";
import { useState } from "react";

interface PostProps {
  title: string;
  description: string;
  date: string;
  path: string;
}

const Post: React.FC<PostProps> = ({ title, description, date, path }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className="pb-5 mx-auto"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Link to={path}>
        <h1
          className="text-3xl font-codo font-bold font-Montserrat"
          style={{
            color: hoverState ? "#89dceb" : "#eba0ac",
            transition: "color .25s ease",
          }}
        >
          {title}
        </h1>
        <p className="text-[#bac2de] font-sans font-semibold text-sm">{date}</p>
        <p className="text-[#cdd6f4] font-Merriweather text-lg mx-a">
          {description}
        </p>
      </Link>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="justify-center mx-auto py-5 px-5">
      <p className="text-[#cdd6f4] font-Merriweather text-lg mx-a pb-5">
        Hello, welcome to my blog - this blog was created mainly to document the
        progress I make on my projects so it will be very informally written; I
        hope this blog can help other amateur programmers that may have the same
        projects I do :).
      </p>
      <Post
        title="Learning ReactJS and Tailwind CSS"
        description="What I learned from coding this blog with little prior experience to Front End development"
        date="August 22, 2024"
        path="reacttailwind"
      />
    </div>
  );
};

export default Posts;
