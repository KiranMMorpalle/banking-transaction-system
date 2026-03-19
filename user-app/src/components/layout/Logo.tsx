import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="d-flex gap-2 align-items-center">
        <img src="/images/spark.png" alt="" width={30} />
        <h3 className="primary-orange mb-0">SPARK</h3>
      </div>
    </Link>
  );
};

export default Logo;
