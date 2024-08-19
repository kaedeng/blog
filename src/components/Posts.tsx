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
    <div className="pb-5 mx-auto">
      <Link to={path}>
        <h1
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
          className="text-3xl font-codo font-bold"
          style={{
            color: hoverState ? "#89dceb" : "#b4befe",
            transition: "color .25s ease",
          }}
        >
          {title}
        </h1>
      </Link>
      <p className="text-[#bac2de] font-sans font-semibold text-sm">{date}</p>
      <p className="text-[#cdd6f4] font-mono text-lg font-medium mx-a">
        {description}
      </p>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="justify-center mx-auto py-5 px-5">
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
      <Post
        title="i love bocchi"
        description="bocchi bocchi, me when bocchi bocchi'd the rock and the bocchi was the friends we made along the way"
        date="August 18, 2024"
        path="test"
      />
    </div>
  );
};

export default Posts;
