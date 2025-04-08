import React, { useState } from 'react';

export default function ServerInputForm({ onTest }) {
  const [url, setUrl] = useState('');
  const [type, setType] = useState('auto');

  return (
    <div className="form">
      <label>
        MCP Server URL or Installation Code:
        <input
          type="text"
          placeholder="https://example.com/mcp"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </label>
      <label>
        Connection Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="auto">Auto Detect</option>
          <option value="sse">SSE</option>
          <option value="stdio">STDIO</option>
        </select>
      </label>
      <button onClick={() => onTest({ url, type })}>Test Server</button>
    </div>
  );
}
