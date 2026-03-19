import { useContext, useEffect } from "react";
import { FiAward, FiBookOpen, FiMonitor, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { show, setShow } = useContext(SidebarContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setShow]);

  const navItems = [
    {
      url: "/courses",
      label: "Courses",
      Icon: FiBookOpen,
    },
    {
      url: "/instructors",
      label: "Instructors",
      Icon: FiAward,
    },
    {
      url: "/students",
      label: "Students",
      Icon: FiUsers,
    },
    {
      url: "/admins",
      label: "Admins",
      Icon: FiMonitor,
    },
  ];

  const navLinks = navItems.map((item, index) => (
    <NavItem className="" key={index}>
      <NavLink to={item.url}>
        <item.Icon className="me-3" />
        {item.label}
      </NavLink>
    </NavItem>
  ));
  return (
    <section className={`sidebar ${show && "show"}`}>
      <Nav className="d-block">{navLinks}</Nav>
    </section>
  );
};

export default Sidebar;
