import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbartha",
};

interface LayoutProps {
  children?: ReactNode;
  loggedUser: ReactNode;
  guestUser: ReactNode;
}

const Layout = ({ children, loggedUser, guestUser }: LayoutProps) => {
  const checkUserLoginStatus = () => {
    return true; // testing purposes
  };

  const isUserLoggedIn = checkUserLoginStatus(); // Assume this function checks the user's login status
  return (
    <>
      {isUserLoggedIn ? loggedUser : guestUser}
      {children}
    </>
  );
};

export default Layout;
