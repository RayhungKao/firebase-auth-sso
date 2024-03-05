import Link from "next/link";
import { UserAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.scss";

function Navbar({ children }) {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  async function handleSignOut() {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function checkUser() {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(false);
    }
    checkUser();
  }, [user]);

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/profile">
              Profile
            </Link>
          </li>
        </ul>
        {loading ? null : !user ? (
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/login">
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <div className={styles.userSection}>
            <p className={styles.userGreeting}>Welcome, {user.displayName}</p>
            <p className={styles.signOut} onClick={handleSignOut}>
              Sign out
            </p>
          </div>
        )}
      </nav>
      {children}
    </>
  );
}

export default Navbar;
