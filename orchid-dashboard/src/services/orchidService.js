import axios from 'axios';

export const fetchOrchids = async () => {
  try {
    const response = await axios.get(
      'https://demo.ipconfigure.com/service/orchids', 
      {
        params: {
          fsid: 'test',
          exclude: 'isAvailable',
          include: 'name',
          offset: 0,
          limit: 10
        },
        headers: {
          'accept': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching orchids:', error);
    throw error;
  }
};