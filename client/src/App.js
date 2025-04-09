import React, { useState } from 'react';
import ServerInputForm from './components/ServerInputForm';
import './App.css'; // ✅ Import the CSS file

function App() {
  const [result, setResult] = useState(null);

  const handleTest = async ({ url, type }) => {
    const res = await fetch('https://mcp-tester-44ey.onrender.com/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, type })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🧪 MCP Server Tester</h1>
        <ServerInputForm onTest={handleTest} />
        {result && (
          <div className={`result ${result.success ? 'success' : 'error'}`}>
            {result.success ? `✅ ${result.result}` : `❌ ${result.error}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
