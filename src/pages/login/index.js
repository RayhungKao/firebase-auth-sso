import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/AuthContext";
import styles from "@/styles/Login.module.scss";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
import { auth } from "@/firebase";

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
}

function signInWithFacebook() {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Login() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(false);
    }
    checkUser();
  }, [user]);

  return (
    <>
      <div className={styles.loginContainer}>
        {loading ? (
          <p className={styles.loadingText}>Loading...</p>
        ) : user ? (
          <div>
            <h1>You already logged in</h1>
          </div>
        ) : (
          <div className={styles.loginOptions}>
            <h1>Login page</h1>
            <button className={`${styles.loginButton} ${styles.googleButton}`} onClick={signInWithGoogle}>Sign in with Google</button>
            <button className={`${styles.loginButton} ${styles.facebookButton}`} onClick={signInWithFacebook}>Sign in with Facebook</button>
            <button className={`${styles.loginButton} ${styles.appleButton}`}>Sign in with Apple</button>
          </div>
        )}
      </div>
    </>
  );
}
