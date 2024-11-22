const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchCases() {
  const response = await fetch(`${API_BASE_URL}/cases`);
  if (!response.ok) throw new Error('Failed to fetch cases');
  return response.json();
}

export async function fetchCase(id: number) {
  const response = await fetch(`${API_BASE_URL}/cases/${id}`);
  if (!response.ok) throw new Error('Failed to fetch case');
  return response.json();
}

export async function fetchDocuments(caseId?: number) {
  const url = caseId 
    ? `${API_BASE_URL}/documents?caseId=${caseId}`
    : `${API_BASE_URL}/documents`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch documents');
  return response.json();
}

export async function fetchClients() {
  const response = await fetch(`${API_BASE_URL}/clients`);
  if (!response.ok) throw new Error('Failed to fetch clients');
  return response.json();
}