<script setup lang="ts">
import { useFlowStore } from '../stores/flow';

const flowStore = useFlowStore();
</script>

<template>
  <div class="debug-area">
    <div class="debug-content">
      <div class="debug-section">
        <h3>Nodes State:</h3>
        <pre>{{ JSON.stringify(flowStore.nodes, null, 2) }}</pre>
      </div>
      <div class="debug-section">
        <h3>Edges State:</h3>
        <pre>{{ JSON.stringify(flowStore.edges, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.debug-area {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: white;
  border-top: 1px solid #ccc;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow-y: auto;
}

.debug-content {
  padding: 16px;
  color: black;
  display: flex;
  gap: 32px;
}

.debug-section {
  flex: 1;
}

h3 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #666;
}

pre {
  margin: 0;
  font-family: monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>