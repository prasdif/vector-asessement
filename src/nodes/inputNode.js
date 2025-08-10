// src/nodes/InputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode id={id} title="Input" icon="🔵" outputs={[`${id}-value`]} backgroundColor="#e0f7fa">
      <label>
        Name:
        <input type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
      </label> 
      <label>
        Type:
        <select value={inputType} onChange={e => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>  
          <option value="File">File</option>   
        </select>      
        </label>
    </BaseNode>
  );
}; 