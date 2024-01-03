let BASE_URL
if (import.meta.env.VITE_DEPLOYED === true) {
    BASE_URL = 'http://bloggedapi.cudia.dk:7070/api'
} else {
    BASE_URL = 'http://localhost:7070/api'
}
// export const BASE_URL = !import.meta.env.VITE_DEPLOYED ? 'http://localhost:7070/api' : 'http://bloggedapi.cudia.dk:7070/api';

export { BASE_URL }