const EventSource = require('eventsource');

async function testSSE(url) {
  return new Promise((resolve, reject) => {
    const es = new EventSource(url);  

    es.onopen = () => {
      es.close();
      resolve("SSE server connected successfully.");
    };

    es.onerror = () => {
      es.close();
      reject(new Error("Failed to connect to SSE server."));
    };
  });
}

async function testSTDIO(url) {
  return Promise.resolve("STDIO test not implemented yet.");
}

module.exports = { testSSE, testSTDIO };
