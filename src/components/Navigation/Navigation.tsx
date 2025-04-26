"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            Current Weather
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/forecast"
            className={`${styles.navLink} ${pathname === '/forecast' ? styles.active : ''}`}
          >
            Forecast
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/favorites"
            className={`${styles.navLink} ${pathname === '/favorites' ? styles.active : ''}`}
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}; 