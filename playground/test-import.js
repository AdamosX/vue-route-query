try {
  const { z } = require('../node_modules/zod');
  console.log('✓ Zod found from parent');
  process.exit(0);
} catch (e) {
  console.log('✗ Zod not found from parent:', e.message);
  process.exit(1);
}
