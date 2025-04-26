import { FavoriteCities } from '@/components/FavoriteCities/FavoriteCities';

export default function FavoritesPage() {
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Избранные города</h1>
      <FavoriteCities />
    </main>
  );
} 