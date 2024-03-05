import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/AuthContext";
import styles from '@/styles/Profile.module.scss';

export default function Profile() {
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
    <div className={styles.profileContainer}>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : user ? (
        <div>
          <h1>Profile page</h1>
          <p className={styles.detailText}>Name: {user.displayName}</p>
          <p className={styles.detailText}>Email: {user.email}</p>
        </div>
      ) : (
        <p className={styles.detailText}>Login to view this page - a protedted route.</p>
      )}
    </div>
  );
}
