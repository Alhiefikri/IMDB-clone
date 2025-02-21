# **MovieContext - IMDB Clone App**

### 📚 **Pengertian Code**:

Code ini adalah bagian dari aplikasi IMDB Clone yang mengelola konteks (state) terkait film. Dalam aplikasi ini, kita menggunakan React Context API untuk mengelola data tentang film dan detail film yang dipilih, serta memberikan kemampuan untuk mencari film dan melihat detailnya.

### 🛠️ **Penjelasan Code**:

1. **MovieContext**:
   - Digunakan untuk membuat konteks global dalam aplikasi yang memungkinkan kita untuk berbagi state (seperti daftar film dan detail film yang dipilih) di seluruh komponen tanpa perlu meneruskan prop secara manual.
2. **MovieProvider**:
   - Merupakan komponen pembungkus (wrapper) yang menyediakan data konteks kepada seluruh komponen anaknya. Di dalamnya terdapat beberapa state untuk menyimpan data film dan film yang dipilih, serta fungsi untuk melakukan pencarian dan memilih film.
3. **useMovieContext**:
   - Hook custom yang digunakan untuk memudahkan akses ke MovieContext. Hook ini akan memberikan akses langsung ke nilai yang disediakan oleh `MovieContext.Provider`, seperti daftar film, film yang dipilih, dan fungsi-fungsi terkait.

### 📜 **Penjelasan TypeScript Code**:

1. **Interface Movie**:

   - Merupakan tipe data untuk film yang mencakup `Title`, `Year`, `Poster`, dan `imdbID`.

   ```typescript
   interface Movie {
     Title: string;
     Year: string;
     Poster: string;
     imdbID: string;
   }
   ```

2. **Interface MovieDetail**:

   - Merupakan tipe data untuk detail film, yang merupakan pengembangan dari `Movie`, dengan menambahkan atribut tambahan seperti `Plot`, `Genre`, `Director`, `Released`, `Actors`, dan `imdbRating`.

   ```typescript
   interface MovieDetail extends Movie {
     Plot: string;
     Genre: string;
     Director: string;
     Released: string;
     Actors: string;
     imdbRating: string;
   }
   ```

3. **Interface MovieContextType**:

   - Ini adalah tipe data untuk context yang mencakup state film, film yang dipilih, serta fungsi untuk melakukan pencarian film (`searchMovies`), memilih film (`selectMovie`), dan menutup detail film (`closeMovie`).

   ```typescript
   interface MovieContextType {
     movies: Movie[];
     selectedMovie: MovieDetail | null;
     searchMovies: (query: string) => Promise<void>;
     selectMovie: (id: string) => Promise<void>;
     closeMovie: () => void;
   }
   ```

4. **MovieContext**:

   - Digunakan untuk membuat konteks global yang akan menyimpan informasi film dan detail film yang dipilih, serta menyediakan akses ke fungsi-fungsi terkait.

   ```typescript
   const MovieContext = createContext<MovieContextType | undefined>(undefined);
   ```

5. **MovieProvider**:

   - Komponen ini menggunakan `useState` untuk menyimpan daftar film (`movies`) dan film yang dipilih (`selectedMovie`), dan menyediakan fungsi untuk mencari film, memilih film, dan menutup detail film.

   ```typescript
   export const MovieProvider = ({ children }: MovieProviderProps) => {
     const [movies, setMovies] = useState<Movie[]>([]);
     const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(
       null
     );

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

6. **useMovieContext**:

   - Hook custom untuk mempermudah penggunaan context dalam komponen. Hook ini memberikan akses ke context, dan akan melemparkan error jika digunakan di luar `MovieProvider`.

   ```typescript
   export const useMovieContext = () => {
     const context = useContext(MovieContext);
     if (context === undefined) {
       throw new Error("useMovieContext must be used within a MovieProvider");
     }
     return context;
   };
   ```

### 🥳 **Kesimpulan**:

Code ini menggunakan React Context API untuk mengelola state global dalam aplikasi IMDB Clone. Dengan menggunakan context, kita bisa mengakses dan memperbarui data film serta detail film terpilih di seluruh komponen dengan cara yang efisien dan terorganisir. 😎🎬
