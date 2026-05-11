import './style.css'

// 1. THE CONTRACT (Interface)
// This ensures every movie has exactly what it needs.
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: 'G' | 'PG' | 'PG-13' | 'R'; // This is a "Union Type"
}

// 2. THE DATA
// If you forget a property or misspell 'PG-13', TS will alert you.
const myLibrary: Movie[] = [
  { id: 1, title: "The Matrix", year: 1999, rating: 'R' },
  { id: 2, title: "Inception", year: 2010, rating: 'PG-13' },
  { id: 3, title: "Toy Story", year: 1995, rating: 'G' }
];

// 3. THE UI LOGIC
const app = document.querySelector<HTMLDivElement>('#app')!;

function renderMovies(movies: Movie[]) {
  app.innerHTML = `
    <h1>🎬 My Movie Catalog</h1>
    <div class="grid">
      ${movies.map(movie => `
        <div class="card">
          <h2>${movie.title}</h2>
          <p>Year: ${movie.year}</p>
          <span class="badge">${movie.rating}</span>
        </div>
      `).join('')}
    </div>
  `;
}

renderMovies(myLibrary);