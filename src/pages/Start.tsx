import InlineCode from "../components/InlineCode";
import BasePage from "./BasePage";

// <img src="https://preview.redd.it/bocchi-the-rock-character-appreciation-analysis-vol-i-gotou-v0-sjsf2znv6z8a1.png?width=1920&format=png&auto=webp&s=a2444cd749c63f4c25e715ffab3e73d9074bd56e"></img>

const TestPage = () => {
  return (
    <div className="pb-5 text-xl font-serif font-normal">
      <p className="pb-3">
        As the description said, I had very little experience with anything on
        the Front End side of web development -- the most experience I had was
        tinkering with HTML elements in Firefox's inspect element tool, so this
        week long project proved to have a fair amount of difficulty.
      </p>
      <p className="pb-3">
        To preface, I wanted to create this website to document my process with
        creating a compiler for the C language using Rust.
      </p>
      <p className="pb-3">
        This post will be a run-through of my process through this project
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
        for my framework and the TypeScript variant
      </p>
      <p className="pb-3">
        After this, you have to install tailwind, postcss, autoprefixer, and
        also create the configuration files for them
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
          <>
            <span></span>
            content: ["./index.html", "./src/**/*.{"{(js, ts, jsx, tsx)}"}"],
          </>
        }
      />
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
