// class UnsplashAPI {
//   #query = "";
//   #page = 1;
//   #per_page = 10;

//   constructor({ per_page } = {}) {
//     this.#per_page = per_page;
//   }

//   getPhotos() {
//     console.log(
//       `Create request ${this.#query} ${this.#page} ${this.#per_page}`
//     );
//   }

//   get query() {
//     return this.#query;
//   }

//   set query(newQuery) {
//     this.#query = newQuery;
//   }
// }

// const unsplashAPI = new UnsplashAPI({ per_page: 21 });
// console.log(unsplashAPI);
