// src/nodes/TextNode.js
import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [renderedText, setRenderedText] = useState(currText);


  useEffect(() => {
    const regex = /\{\{\s*([\w\d_]+)\s*\}\}/g;
    const found = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      found.push(match[1]);
    }
    setVariables(found);
  }, [currText]);

  
  useEffect(() => {
    let updated = currText;
    if (data?.inputs) {
      Object.entries(data.inputs).forEach(([key, value]) => {
        const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
        updated = updated.replace(regex, value ?? '');
      });
    }
    setRenderedText(updated);
  }, [currText, data?.inputs]);

  return (
    <BaseNode
      id={id}
      title="Text"
      icon="📝"
      inputs={variables}
      outputs={[`${id}-output`]}
      backgroundColor="#fff3e0"
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          style={{ width: '100%', minHeight: '40px' }}
        />
      </label>

      <div style={{ marginTop: '10px', padding: '8px', background: '#f0f0f0' }}>
        <strong>Preview:</strong> {renderedText}
      </div>
    </BaseNode>
  );
};
