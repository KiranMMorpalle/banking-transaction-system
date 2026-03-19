import type { IconType } from "react-icons";

interface ISubSectionTitle {
  Icon?: IconType;
  name?: string;
  title: string;
  description: string;
  className?: string;
}
const SubSectionTitle = ({
  description,
  Icon,
  name,
  title,
  className = "text-center py-5",
}: ISubSectionTitle) => {
  return (
    <div className={className}>
      {name && (
        <h5 className="primary-blue fw-bold ">
          {Icon && <Icon />} {name}
        </h5>
      )}
      <h1 className="py-2 fw-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SubSectionTitle;
