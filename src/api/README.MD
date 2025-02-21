# **API Functions - IMDB Clone App**

### 📚 **Pengertian Code**:

Code ini berisi fungsi-fungsi yang digunakan untuk berinteraksi dengan API OMDB (Open Movie Database). Fungsi-fungsi ini memungkinkan aplikasi untuk mencari film berdasarkan judul dan mendapatkan detail film berdasarkan ID.

### 🛠️ **Penjelasan Code**:

1. **API_KEY dan BASE_URL**:

   - `API_KEY` adalah kunci API yang digunakan untuk mengakses data dari OMDB API.
   - `BASE_URL` adalah endpoint dasar dari OMDB API, yang digunakan untuk membentuk URL untuk setiap request yang dilakukan.

   ```javascript
   const API_KEY = "66bfcd5";
   const BASE_URL = "http://www.omdbapi.com/";
   ```

2. **searchMovies**:

   - Fungsi ini digunakan untuk mencari film berdasarkan judul.
   - Parameter `query` berisi nama film yang ingin dicari.
   - Fungsi ini membentuk URL untuk request ke OMDB API dengan query film dan `API_KEY`. Setelah itu, response dari API diambil dalam format JSON dan dikembalikan nilai `Search` yang berisi daftar film yang cocok dengan pencarian.

   ```javascript
   export const searchMovies = async (query: string) => {
     const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
     const data = await response.json();
     return data.Search;
   };
   ```

3. **getMovieDetails**:

   - Fungsi ini digunakan untuk mendapatkan detail film berdasarkan `id` film (misalnya `imdbID`).
   - Parameter `id` berisi ID film yang ingin dicari detailnya.
   - Fungsi ini membentuk URL untuk request ke OMDB API dengan `i` (ID film) dan `API_KEY`. Setelah itu, response dari API diambil dalam format JSON dan dikembalikan seluruh data detail film.

   ```javascript
   export const getMovieDetails = async (id: string) => {
     const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
     const data = await response.json();
     return data;
   };
   ```

### 📜 **Penjelasan Fungsi TypeScript**:

1. **Fungsi searchMovies**:

   - `query`: Parameter tipe `string` yang berisi nama film yang ingin dicari.
   - `response`: Menggunakan `fetch()` untuk melakukan request ke OMDB API dan mengambil response.
   - `data`: Response dari OMDB API yang di-convert ke format JSON. Fungsi ini mengembalikan `data.Search`, yang berisi array film yang ditemukan berdasarkan judul yang dicari.

2. **Fungsi getMovieDetails**:
   - `id`: Parameter tipe `string` yang berisi ID film (misalnya `imdbID`).
   - `response`: Sama seperti fungsi pertama, menggunakan `fetch()` untuk mengirim request ke OMDB API.
   - `data`: Response yang di-convert ke format JSON dan langsung dikembalikan, berisi seluruh detail film yang diminta.

### 🥳 **Kesimpulan**:

Code ini memanfaatkan OMDB API untuk mencari film dan mendapatkan detail film menggunakan dua fungsi utama, `searchMovies` dan `getMovieDetails`. Kedua fungsi ini membuat aplikasi IMDB Clone menjadi dinamis dan responsif terhadap pencarian dan permintaan detail film. 🎥✨
