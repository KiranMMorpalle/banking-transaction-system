import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import Logo from "../Logo";

const navItems = [
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleMobileNav = () => setMobileNav((prevState) => !prevState);

  const navLinks = navItems.map((item, index) => (
    <NavItem className="me-4" key={index}>
      <NavLink to={item.url}>{item.label}</NavLink>
    </NavItem>
  ));

  return (
    <>
      <header className="container-fluid shadow py-2 position-sticky top-0 z-1 bg-white">
        <Navbar>
          <Logo />
          <Nav className="me-auto ms-5 d-none d-md-flex">{navLinks}</Nav>
          <Nav className="align-items-center gap-2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                caret={false}
                color="light"
                tag="span"
                className="cursor-pointer"
              >
                <img src="/images/avtar.png" width={40} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <FiAlignJustify
              size={30}
              className="cursor-pointer d-block d-md-none"
              onClick={toggleMobileNav}
            />
          </Nav>
        </Navbar>
      </header>
      <div>
        <Offcanvas toggle={toggleMobileNav} isOpen={mobileNav}>
          <OffcanvasHeader toggle={toggleMobileNav}>
            <Logo />
          </OffcanvasHeader>
          <OffcanvasBody className="border-top">
            <Navbar>
              <Nav className="flex-column gap-3">{navLinks}</Nav>
            </Navbar>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
