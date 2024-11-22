import { useAuth } from '../context/AuthContext';

const API_BASE_URL = 'http://localhost:3000/api';

export const useApi = () => {
  const { token } = useAuth();

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };

  const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...headers,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  return {
    // Cases
    getCases: () => fetchWithAuth('/cases'),
    getCase: (id: string) => fetchWithAuth(`/cases/${id}`),
    createCase: (data: any) => fetchWithAuth('/cases', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
    updateCase: (id: string, data: any) => fetchWithAuth(`/cases/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
    deleteCase: (id: string) => fetchWithAuth(`/cases/${id}`, {
      method: 'DELETE'
    }),

    // Clients
    getClients: () => fetchWithAuth('/clients'),
    getClient: (id: string) => fetchWithAuth(`/clients/${id}`),
    createClient: (data: any) => fetchWithAuth('/clients', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
    updateClient: (id: string, data: any) => fetchWithAuth(`/clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
    deleteClient: (id: string) => fetchWithAuth(`/clients/${id}`, {
      method: 'DELETE'
    }),

    // Documents
    getDocuments: (caseId?: string) => fetchWithAuth(`/documents${caseId ? `?caseId=${caseId}` : ''}`),
    uploadDocument: async (file: File, caseId: string) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caseId', caseId);

      return fetchWithAuth('/documents', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
    },
    deleteDocument: (id: string) => fetchWithAuth(`/documents/${id}`, {
      method: 'DELETE'
    })
  };
};