import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface IInfoCard {
  Icon: IconType;
  title: string;
  info: ReactNode;
  linkText: string;
  linkUrl: string;
}
const InfoCard = ({ Icon, info, linkText, linkUrl, title }: IInfoCard) => {
  return (
    <div className="info-card">
      <div className="d-flex flex-column flex-lg-row gap-4 ">
        <div className="icon">
          <Icon />
        </div>
        <div className="content">
          <h4 className="fw-bold">{title}</h4>
          {info}
          <Link to={linkUrl}>{linkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
