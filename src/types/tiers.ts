export type TierType = 'solo' | 'small-firm' | 'large-firm';

export interface Tier {
  id: TierType;
  name: string;
  maxUsers: number;
  maxCases: number;
  features: string[];
  aiFeatures: string[];
  price: number;
}

export const tiers: Tier[] = [
  {
    id: 'solo',
    name: 'Solo Practitioner',
    maxUsers: 1,
    maxCases: 50,
    price: 49,
    features: [
      'Case Management',
      'Document Storage',
      'Client Portal',
      'Calendar',
      'Basic Analytics'
    ],
    aiFeatures: [
      'Basic Document Analysis',
      'Simple Case Predictions'
    ]
  },
  {
    id: 'small-firm',
    name: 'Small Firm',
    maxUsers: 10,
    maxCases: 200,
    price: 99,
    features: [
      'All Solo Features',
      'Team Collaboration',
      'Advanced Analytics',
      'Custom Workflows',
      'Billing Integration',
      'Multi-user Access Control'
    ],
    aiFeatures: [
      'Advanced Document Analysis',
      'Detailed Case Predictions',
      'Legal Research Assistant'
    ]
  },
  {
    id: 'large-firm',
    name: 'Large Firm',
    maxUsers: 50,
    maxCases: 1000,
    price: 249,
    features: [
      'All Small Firm Features',
      'Enterprise Integration',
      'Custom Reporting',
      'API Access',
      'Priority Support',
      'Audit Logs'
    ],
    aiFeatures: [
      'Enterprise AI Features',
      'Custom AI Model Training',
      'Bulk Document Processing',
      'Predictive Analytics'
    ]
  }
];