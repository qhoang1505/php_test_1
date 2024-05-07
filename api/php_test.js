const { createRequestHandler } = require('vercel-community/php');

module.exports = {
  handler: createRequestHandler({
    runtime: 'php-8.1',
    entrypoint: '/index.php',
  }),
};
