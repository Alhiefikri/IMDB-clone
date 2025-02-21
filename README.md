# **IMDB Clone Application**

## 📖 **Overview**

IMDB Clone is a web application built using React and TypeScript that mimics the functionality of the popular IMDB website. Users can search for movies, view detailed movie information, and explore various movies based on their preferences. The application fetches data from the OMDB API, allowing users to retrieve movie details such as the plot, actors, genre, director, release date, and IMDb rating.

[Preview](public/image.png)

### 💻 **Live Demo**

You can view the live version of the IMDB Clone application by visiting the following link:

**[IMDB Clone Demo](https://www.example.com)**

### 🎬 **Features**:

- **Search for Movies**: Users can search for movies by title and view a list of matching results.
- **Movie Details**: Users can click on any movie from the search results to view detailed information such as plot, genre, director, actors, release date, and IMDb rating.
- **Responsive UI**: The application has a user-friendly interface that is fully responsive and works on both desktop and mobile devices.
- **OMDB API Integration**: The app fetches real-time movie data using the OMDB API (Open Movie Database) with an API key.

## 🔧 **Technologies Used**:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that provides optional static typing, enhancing code quality and maintainability.
- **React Context API**: For managing and sharing global state across the application.
- **OMDB API**: A popular API used to get real-time movie data.
- **Tailwind Css**: For styling the app with a clean and modern look.

## 🚀 **Getting Started**:

To get started with the IMDB Clone application locally, follow these steps:

### 1. **Clone the repository**

```bash
git clone https://github.com/alhiefikri/IMDB-clone.git
```

### 2. **Install dependencies**

Navigate into the project directory and install the necessary dependencies:

```bash
cd IMDB-clone
npm install
```

### 3. **Start the application**

Run the following command to start the development server:

```bash
npm start
```

This will start the application at `http://localhost:5173`.

## 🛠️ **Functionality Breakdown**:

### **1. Search Movies:**

- Users can search for movies by typing the movie title in the search bar.
- The app fetches the search results from the OMDB API and displays a list of matching movies, each showing the title, year, and poster.

### **2. View Movie Details:**

- By clicking on any movie from the search results, users can view the detailed information of that movie.
- Details include the plot, genre, director, actors, release date, and IMDb rating.

### **3. Context Management:**

- The application uses React's Context API to manage the global state, which includes the list of movies and the currently selected movie.
- The `MovieProvider` component wraps the application and provides the context to all child components.

### **4. API Integration:**

- The application fetches movie data from the OMDB API using the `searchMovies` and `getMovieDetails` functions, handling both search requests and fetching detailed movie information based on the selected movie ID.

## 📁 **File Structure**:

```
src/
├── api/                # Contains API interaction functions (omdbApi.ts)
├── components/         # React components like MovieList, MovieDetails, etc.
├── context/            # Contains the MovieContext and MovieProvider
├── App.tsx             # The main application component
├── index.tsx           # Entry point for React application
├── styles/             # Contains CSS or styled-components for the app
```

## 🧑‍💻 **Code Snippets**:

### **Movie Context & Provider**:

```typescript
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);

  const searchMoviesHandler = async (query: string) => {
    const result = await searchMovies(query);
    setMovies(result || []);
  };

  const selectMovieHandler = async (id: string) => {
    const movieDetails = await getMovieDetails(id);
    setSelectedMovie(movieDetails);
  };

  const closeMovieHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        searchMovies: searchMoviesHandler,
        selectMovie: selectMovieHandler,
        closeMovie: closeMovieHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
```

### **Search Movies API Call**:

```typescript
export const searchMovies = async (query: string) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
};
```

## 💡 **Contributing**:

Contributions to the IMDB Clone application are always welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-xyz`).
5. Create a pull request.

## 📜 **License**:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 **Acknowledgements**:

- OMDB API for providing the movie data.
- React and TypeScript community for creating such awesome tools!
- Special thanks to the open-source contributors who made this project possible!

---

**Enjoy exploring the world of movies with the IMDB Clone app! 🎬**
