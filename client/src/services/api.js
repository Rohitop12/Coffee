import axios from 'axios';
import { staticCoffees } from '../data/coffee.js';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 4000, // Quick timeout to fallback seamlessly if backend is offline
});

export const fetchCoffees = async () => {
  try {
    const response = await api.get('/coffee');
    if (response.data && response.data.success && Array.isArray(response.data.data)) {
      return {
        coffees: response.data.data,
        source: response.data.source || 'database',
        error: null,
      };
    }
    return { coffees: staticCoffees, source: 'fallback', error: null };
  } catch (err) {
    console.warn('[API Warning] Backend endpoint unreachable, using local specialty dataset:', err.message);
    return {
      coffees: staticCoffees,
      source: 'fallback',
      error: 'Backend offline — showing static collection.',
    };
  }
};

export const fetchCoffeeById = async (id) => {
  try {
    const response = await api.get(`/coffee/${id}`);
    if (response.data && response.data.success) {
      return { coffee: response.data.data, error: null };
    }
    const localMatch = staticCoffees.find((c) => c._id === id);
    return { coffee: localMatch || staticCoffees[0], error: null };
  } catch (err) {
    const localMatch = staticCoffees.find((c) => c._id === id);
    return { coffee: localMatch || staticCoffees[0], error: null };
  }
};
