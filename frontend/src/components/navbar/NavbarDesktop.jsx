import React, { useState, useContext, useEffect } from "react";
import { Button, HStack, Link as LinkChakra } from "@chakra-ui/react";
import { dataNavbar } from "../../utils";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiExit } from 'react-icons/bi';
import { userContext } from '../../context';

const NavbarDesktop = (props) => {
  const { user, login, logout } = useContext(userContext);
  const { landingPage, dashboardPage, btn } = dataNavbar;
  const [dashboard, setDashboard] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    pathname === "dashboard" && setDashboard(true);
    console.log(pathname);

  }, []);

  return (
    <>
      <HStack
        justify="space-between"
        as="nav"
        p={4}
        bg="green.500"
        color="#fff"
        fontWeight="bold"
        w="100%"
        position="sticky"
        top="0"
        zIndex={9999}
      >
        <HStack bg="green.500" spacing={4}>
          {dashboard ? dashboardPage.map((item, index) => (
            <LinkChakra href={`/dashboard${item.href}`} key={index} px={6}>
              {item.name}
            </LinkChakra>)) : landingPage.map((item, index) => (
            <LinkChakra href={`/${item.href}`} key={index} px={6}>
              {item.name}
            </LinkChakra>
          ))}
        </HStack>
        <HStack>
          {user && <Button as={Link} to="/dashboard" leftIcon={<BsFillPersonFill />} color="green.500">
            {user}
          </Button>}
          {!user ? 
            (<Button
              as={Link}
              to="/login"
              leftIcon={<BsFillPersonFill />}
              color="green.500">
                {btn.name}
              </Button>) : 
            (<Button
              as={Link}
              leftIcon={<BiExit />}
              color="green.500"
              onClick={logout}
              to="/"
              >
                Sair
              </Button>)}
          </HStack>
      </HStack>
    </>
  );
};

export default NavbarDesktop;
