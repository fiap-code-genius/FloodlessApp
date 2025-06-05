export const shelters = [
  {
    id: '1',
    name: 'Abrigo Sé',
    location: 'Rua da Glória, 462 - Sé, São Paulo - SP, 01510-001',
    capacity: 120,
    currentOccupancy: 85,
    resources: ['Água', 'Comida', 'Cobertores', 'Higiene'],
  },
  {
    id: '2',
    name: 'Abrigo Santana',
    location: 'Rua Dr. César, 255 - Santana, São Paulo - SP, 02013-001',
    capacity: 90,
    currentOccupancy: 60,
    resources: ['Comida', 'Medicamentos', 'Água'],
  },
  {
    id: '3',
    name: 'Abrigo Itaquera',
    location: 'Avenida Itaquera, 8266 - Itaquera, São Paulo - SP, 08295-000',
    capacity: 100,
    currentOccupancy: 75,
    resources: ['Água', 'Comida', 'Cobertores'],
  },
  {
    id: '4',
    name: 'Abrigo Campo Limpo',
    location: 'Estrada do Campo Limpo, 5467 - Campo Limpo, São Paulo - SP, 05787-001',
    capacity: 80,
    currentOccupancy: 55,
    resources: ['Comida', 'Cobertores'],
  },
];

export const users = [
  {
    id: '1',
    name: 'João da Silva',
    isVolunteer: true,
    email: 'joao@joao.com',
    verified: true,
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    isVolunteer: true,
    email: 'maria@maria.com',
    verified: true,
  },
  {
    id: '3',
    name: 'Carlos Andrade',
    isVolunteer: true,
    email: 'carlos@carlos.com',
    verified: true,
  },
  {
    id: '4',
    name: 'Luciana Rocha',
    isVolunteer: false,
    email: 'luciana@luciana.com',
    verified: true,
  },
];
export const alerts = [
  {
    id: '1',
    location: 'Santana - Zona Norte de São Paulo',
    riskLevel: 'Alto',
    message: 'Alagamentos registrados em vias principais. Evite deslocamentos.',
  },
  {
    id: '2',
    location: 'Campo Limpo - Zona Sul de São Paulo',
    riskLevel: 'Médio',
    message: 'Previsão de chuvas intensas nas próximas 12 horas.',
  },
  {
    id: '3',
    location: 'Itaquera - Zona Leste de São Paulo',
    riskLevel: 'Alto',
    message: 'Risco de deslizamento em áreas de encosta. Atenção redobrada.',
  },
];
