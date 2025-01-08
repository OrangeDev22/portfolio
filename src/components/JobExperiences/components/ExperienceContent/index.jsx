import { Fragment } from "react";

const ExperienceContent = ({ description, skills }) => {
  return (
    <Fragment>
      <div className="mt-1 text-gray-400">{description}</div>
      <div className="mt-2  text-gray-400 text-lg">
        <strong>Made with:</strong>{" "}
        <span className="text-violet-200">{skills.join(", ")}.</span>
      </div>
    </Fragment>
  );
};

export default ExperienceContent;
