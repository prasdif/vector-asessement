// src/submit.js
import axios from 'axios';

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post('/pipelines/parse', { nodes, edges });
    const { num_nodes, num_edges, is_dag } = response.data;
    alert(`Pipeline has ${num_nodes} nodes, ${num_edges} edges, and is ${is_dag ? '' : 'not '}a DAG.`);
  } catch (error) {
    console.error(error);
    alert('Failed to submit pipeline.');
  }
};
