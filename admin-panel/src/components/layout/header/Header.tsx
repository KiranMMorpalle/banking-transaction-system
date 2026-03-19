import { useContext, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logo from "../Logo";
import { SidebarContext } from "../../../context/SidebarContext";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { setShow } = useContext(SidebarContext);

  return (
    <>
      <header className="container-fluid shadow py-2 position-sticky top-0 z-1 bg-primary-blue">
        <Navbar>
          <div className="d-flex gap-3 align-items-center">
            <FiAlignJustify
              size={30}
              className="cursor-pointer d-block text-white-50"
              onClick={() => setShow((prev) => !prev)}
            />
            <Logo />
          </div>
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
          </Nav>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
