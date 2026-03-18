const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/data/content.json');

try {
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

  const requiredFields = [
    'personalInfo',
    'metrics',
    'experience',
    'caseStudies',
    'skills',
    'achievements',
    'education',
    'contact'
  ];

  const missing = requiredFields.filter(field => !content[field]);

  if (missing.length > 0) {
    console.error(`Validation failed. Missing top-level fields: ${missing.join(', ')}`);
    process.exit(1);
  }

  // Deep check personalInfo
  const requiredPersonal = ['name', 'title', 'email', 'summary'];
  const missingPersonal = requiredPersonal.filter(f => !content.personalInfo[f]);
  if (missingPersonal.length > 0) {
    console.error(`Validation failed. Missing personalInfo fields: ${missingPersonal.join(', ')}`);
    process.exit(1);
  }

  console.log('✅ content.json validation passed!');
} catch (err) {
  console.error('Error validating content.json:', err.message);
  process.exit(1);
}
