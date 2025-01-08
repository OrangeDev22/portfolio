import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceHeader = ({ title, companyUrl, date }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-2 mb-4 text-lg font-semibold">
      <div className="flex gap-2 items-center">
        <span className="text-2xl">{title}</span>
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
      <div className="md:ml-auto text-right text-gray-500 font-medium">
        {date}
      </div>
    </div>
  );
};

export default ExperienceHeader;
