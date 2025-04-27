"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

const routes = [
  { path: '/', label: 'Current Weather' },
  { path: '/forecast', label: 'Forecast' },
  { path: '/favorites', label: 'Favorites' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {routes.map((route) => (
          <li key={route.path} className={styles.navItem}>
            <Link
              href={route.path}
              className={`${styles.navLink} ${pathname === route.path ? styles.active : ''}`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 