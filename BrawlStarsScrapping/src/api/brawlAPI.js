const BASE_URL = 'https://api.brawlapi.com/v1';

export const fetchBrawlers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/brawlers`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching brawlers:', error);
        throw error;
    }
};

export const fetchEvents = async () => {
    try {
        const response = await fetch(`${BASE_URL}/events`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};