import InlineCode from "../components/InlineCode";
import BasePage from "./BasePage";

// <img src="https://preview.redd.it/bocchi-the-rock-character-appreciation-analysis-vol-i-gotou-v0-sjsf2znv6z8a1.png?width=1920&format=png&auto=webp&s=a2444cd749c63f4c25e715ffab3e73d9074bd56e"></img>

const TestPage = () => {
  return (
    <div className="pb-5 text-xl font-serif font-normal">
      <p className="pb-3">
        I made this blog to have a place to document my coding progress and to
        widen my skills before my school's upcoming career fair.
      </p>
      <p className="pb-6">
        This post will be a run-through of my process through setting up this
        blog, both so I can remember how to work with these tools and
        frameworks, and so maybe it can help someone else in creating a blog.
      </p>
      <p className="pb-3">To start a project with Vite,</p>
      <InlineCode
        text=<>
          <span>{"> "}</span>
          <span className="text-[#a6e3a1]">npm</span>
          <span> create vite@latest </span>
          <span className="text-[#f9e2af]">{"{yourprojectname}"}</span>
        </>
      />
      <p className="py-3">
        Running this command brings up a prompt where I chose the React library
        for my framework and the TypeScript as my language.
      </p>
      <p className="pb-3">
        After this, you have to install tailwind, postcss, autoprefixer, and
        also create config files.
      </p>
      <InlineCode
        text=<>
          <p>
            <span>{"> "}</span>
            <span className="text-[#a6e3a1]">npm</span>
            <span> i -D tailwindcss postcss autoprefixer</span>
          </p>
          <p>
            <span>{"> "}</span>
            <span className="text-[#a6e3a1]">npx</span>
            <span> tailwindcss init -p</span>
          </p>
        </>
      />
      <p className="pt-3">In</p>
      <InlineCode text="{projectname}/tailwind.config.js" />
      <p>Replace the existing content section with</p>
      <InlineCode
        text={
          <>content: ["./index.html", "./src/**/*.{"{(js, ts, jsx, tsx)}"}"],</>
        }
      />
      <p className="py-3">
        This should be all for setting up the project; now decide on what type
        of website you want to make.
      </p>
      <p className="pb-3">
        For my blog, I wanted to have separate pages, one to display posts, and
        then these posts will link to their respective page. To do this, I used
        the react-router-dom V6 package to help me route pages to eachother - so
        I downloaded it with
      </p>
      <InlineCode
        text=<>
          <span className="text-[#a6e3a1]">npm</span> i -D react-router-dom
        </>
      />
      <p className="py-3">
        To set up the routing, go into the main.tsx file and add a function like
        this
      </p>
      <InlineCode
        text=<>
          <p>
            <span className="text-[#cba6f7]">const</span>{" "}
            <span className="text-[#b4befe]">router</span> ={" "}
            <span className="text-[#89b4fa]">createBrowserRouter(</span>
            <span className="text-[#b4befe]">[</span>
          </p>
          <p className="text-[#cba6f7]">{"  {"}</p>
          <p className="text-[#a6e3a1]">{"   "} path:"/",</p>
          <p className="text-[#a6e3a1]">
            {"   "} element:{"<App />,"}
          </p>
          <p className="text-[#a6e3a1]">
            {"   "} errorElement:{"<ErrorPage />,"}
          </p>
          <p className="text-[#a6e3a1]">{"   "} children:[...],</p>
          <p className="text-[#cba6f7]">{"  },"}</p>
          <span className="text-[#b4befe]">]</span>
          <span className="text-[#89b4fa]">);</span>
        </>
      />
      <p className="py-3">
        Make sure you make a errorPage element before adding it in to the above
        code though, after making this function, call it within the createRoot
        function in the same file, within the StrictMode element - in other
        words, at this in
      </p>
      <InlineCode
        text=<>
          <span className="text-[#f38ba8]">{"<RouterProvider"}</span>{" "}
          <span className="text-[#cba6f7]">{"router"}</span>
          <span className="text-[#b4befe]">{"={"}</span>router
          <span className="text-[#b4befe]">{"}"}</span>{" "}
          <span className="text-[#f38ba8]">{"/>"}</span>
        </>
      />
      <p className="py-3">
        This should be all for the setup of the page with react-router-dom, you
        can start working on whatever you want for a website. Do remember to
        frequently abstract your code for React functions, it saved me a lot of
        time in coding this website up
      </p>
      <p className="pb-3">
        Good luck on whatever you want to make, here are some useful websites I
        used when creating this website
      </p>
      <p>
        <a
          className="text-[#b4befe]"
          href="https://nerdcave.com/tailwind-cheat-sheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS Cheat Sheet
        </a>
      </p>
      <p>
        <a
          className="text-[#b4befe]"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>
      </p>
      <p>
        <a
          className="text-[#b4befe]"
          href="https://reactrouter.com/en/main/start/tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router Docs
        </a>
      </p>
      <p>
        <a
          className="text-[#b4befe]"
          href="https://github.com/catppuccin/catppuccin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catppuccin Theme Guide (I love this color scheme so much)
        </a>
      </p>
    </div>
  );
};

const Start = () => {
  return (
    <BasePage
      title="Learning ReactJS and Tailwind CSS"
      date="August 22, 2024"
      PageContent={TestPage}
    />
  );
};

export default Start;
