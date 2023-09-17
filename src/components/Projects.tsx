import Capsules from "./Capsules";

const Project = ({
  code,
  title,
  description,
  link
}: {
  code: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="col-12 col-sm-4 my-3">
      <div className="secondary-color">{ code }</div>
      <div className="fs-3 fw-semibold highlight accent-color pointer" onClick={() => window.open(link)}>{title}</div>
      <div>{description}</div>
      <div className="d-flex secondary-color">
        <Capsules label="React" />
        <Capsules label="HTML5" />
        <Capsules label="CSS3" />
      </div>
    </div>
  );
};

const Projects = (item: { id: string }) => {
  return (
    <div className="" id={item.id}>
      <div className="row primary-color">
        <Project
          code="FreeCodeCamp"
          title="Random Quote Generator"
          description="The Random Quote Generator is an engaging and interactive
          web application developed as part of the freeCodeCamp challenges. This project
          offers users a delightful experience by presenting them with thought-provoking
          and inspiring quotes in a random order every time they visit the website."
          link="https://codepen.io/Randolph-Mayson-Dy/full/gOQzJVb"
        />
        <Project
          code="FreeCodeCamp"
          title="Markdown Previewer"
          description="This project enables users to create, edit, and preview formatted
          content using Markdown, a lightweight markup language. By seamlessly translating
          Markdown syntax into beautifully formatted HTML output, this application empowers
          users to focus on content creation without the distractions of complex formatting."
          link="https://codepen.io/Randolph-Mayson-Dy/full/wvQxmVJ"
        />
        <Project
          code="FreeCodeCamp"
          title="Pomodoro Timer"
          description="Inspired by the Pomodoro Technique, this project provides users with a
          focused and structured approach to managing their time and tasks. By alternating between
          focused work sessions and short breaks, users can optimize their productivity and maintain
          a healthy work-life balance."
          link="https://codepen.io/Randolph-Mayson-Dy/full/OJaBJLd"
        />
      </div>
    </div>
  );
};

export default Projects;
