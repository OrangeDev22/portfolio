import SkillCard from "../../../SkillCard";

const SkillList = ({ skills, name }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={`${name}-${index}`} skill={skill} />
      ))}
    </div>
  );
};

export default SkillList;
