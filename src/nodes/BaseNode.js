import { Handle, Position } from 'reactflow';
import './BaseNode.css';

function BaseNode({ id, title, icon, children, inputs = [], outputs = [], backgroundColor = '#ffffff' }) {
  return (
    <div className="base-node" style={{ backgroundColor }}> 
      <div className="node-header">
        {icon && <span className="node-icon">{icon}</span>}
        <span className="node-title">{title}</span>
      </div>

      {inputs.map((input, idx) => (
        <Handle
          key={`input-${idx}`}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 30 + idx * 20 }}
        />
      ))}

      <div className="node-body">{children}</div>

      {outputs.map((output, idx) => (
        <Handle
          key={`output-${idx}`}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 30 + idx * 20 }}   
        />
      ))}
    </div>
  );
}

export default BaseNode;
