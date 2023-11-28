const protocol = import.meta.env.VITE_API_PROTOCOL;
const host = import.meta.env.VITE_API_HOSTNAME;
const port = import.meta.env.VITE_API_PORT;

export const URL = `${protocol}://${host}${port}`;