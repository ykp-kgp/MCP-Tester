const express = require('express');
const router = express.Router();
const { testSSE, testSTDIO } = require('../utils/mcpTester');

router.post('/test', async (req, res) => {
  const { url, type } = req.body;
  try {
    let result;
    if (type === 'sse') result = await testSSE(url);
    else if (type === 'stdio') result = await testSTDIO(url);
    else {
      try {
        result = await testSSE(url);
      } catch {
        result = await testSTDIO(url);
      }
    }
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;