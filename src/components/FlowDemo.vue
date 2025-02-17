<script setup lang="ts">
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { useFlowStore } from "../stores/flow";
import FlowMenu from "./FlowMenu.vue";
import SidebarMenu from "./SidebarMenu.vue";
import DebugArea from "./DebugArea.vue";
import AiNode from "./AiNode.vue";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";

const flowStore = useFlowStore();
const { onNodeClick, project, onConnect } = useVueFlow();

onNodeClick((e) => {
  console.log(e.node);
  flowStore.setSelectedNode(e.node);
  flowStore.toggleMenu(
    true,
    e.node.computedPosition.x,
    e.node.computedPosition.y
  );
});

onConnect((params) => {
  const newEdge = {
    id: `e${params.source}-${params.target}`,
    source: params.source,
    target: params.target,
  };
  flowStore.addEdge(newEdge);
});

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

const onDrop = (event: DragEvent) => {
  event.preventDefault();

  if (!event.dataTransfer) return;

  console.log("onDrop");
  const type = event.dataTransfer.getData("application/reactflow");

  if (typeof type === "undefined" || !type) return;

  const { left, top } = (
    event.target as HTMLDivElement
  ).getBoundingClientRect();
  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  });

  const newNodeId = `${flowStore.nodes.length + 1}`;
  const newNode = {
    id: newNodeId,
    type,
    position,
    label: `Node ${newNodeId}`,
    connectable: true,
  };

  flowStore.addNode(newNode);
};
</script>

<template>
  <div style="width: 100vw; height: calc(100vh - 200px)">
    <VueFlow
      :nodes="flowStore.nodes"
      :edges="flowStore.edges"
      fit-view-on-init
      @dragover="onDragOver"
      @drop="onDrop"
      :connect-mode="'loose'"
    >
      <template #node-ai="props">
        <AiNode :id="props.id" :data="props.data" />
      </template>
      <Background />
      <Controls />
    </VueFlow>
    <FlowMenu />
    <SidebarMenu />
  </div>
  <DebugArea />
</template>

<style scoped>
:deep(.vue-flow) {
  background-color: #f8f8f8;
}
</style>
