<script setup>
import {
  Handle,
  Position,
  useNodeConnections,
  useNodesData,
} from "@vue-flow/core";

const connections = useNodeConnections({
  handleType: "target",
});

const nodesData = useNodesData(() => connections.value[0]?.source);
</script>

<template>
  <div class="test">
    <div>tets</div>
    <Handle id="9" type="source" />
  </div>
  
</template>

<style scoped>
.test {
  width: 200px;
  background-color: red;
}
</style>
