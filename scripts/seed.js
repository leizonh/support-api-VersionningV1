require('dotenv').config();
const mongoose = require('mongoose');
const RequestType = require('../src/models/RequestType');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/support_api';

async function run() {
  await mongoose.connect(URI);
  await RequestType.deleteMany({});
  await RequestType.insertMany([
    {
      code: 'TECH_ISSUE',
      name: 'Problème technique',
      description: 'Incident technique bloquant ou non',
      priority: 'high',
      category: 'support',
      estimatedResponseTime: 4
    },
    {
      code: 'BILLING_QUESTION',
      name: 'Question de facturation',
      description: 'Demande d’explication sur facture',
      priority: 'medium',
      category: 'billing',
      estimatedResponseTime: 24
    },
    {
      code: 'ACCOUNT_CHANGE',
      name: 'Modification de compte',
      description: 'Changement d’informations du compte',
      priority: 'low',
      category: 'account',
      estimatedResponseTime: 48
    },
    {
      code: 'FEATURE_REQUEST',
      name: 'Demande de fonctionnalité',
      description: 'Suggestion d’évolution produit',
      priority: 'medium',
      category: 'product',
      estimatedResponseTime: 72
    },
    {
      code: 'COMPLAINT',
      name: 'Réclamation',
      description: 'Plainte client sur service',
      priority: 'critical',
      category: 'support',
      estimatedResponseTime: 12
    }
  ]);
  console.log('Seed completed');
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
