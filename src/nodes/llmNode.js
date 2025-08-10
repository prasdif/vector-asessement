// src/nodes/LLMNode.js
import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
      backgroundColor="#e8f5e9"
    >
      <p>This is an LLM node.</p>
    </BaseNode>
  );
};
