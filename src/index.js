export function fetchMovies() {
  let prom = () => movies;
  return fetchWithTimeout(10).then(prom);
}

// export function fetchMovies() {
//   const resolveFunction = () => movies;
//   return fetchWithTimeout(1000).then(resolveFunction);
// }