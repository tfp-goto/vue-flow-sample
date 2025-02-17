<script setup lang="ts">
import { useFlowStore } from "../stores/flow";

const flowStore = useFlowStore();

const onDragStartDefault = (event: DragEvent) => {
  if (event.dataTransfer) {
    console.log("onDragStart");
    event.dataTransfer.setData("application/reactflow", "default");
    event.dataTransfer.effectAllowed = "move";
  }
};

const onDragStartAi = (event: DragEvent) => {
  if (event.dataTransfer) {
    console.log("onDragStart");
    event.dataTransfer.setData("application/reactflow", "ai");
    event.dataTransfer.effectAllowed = "move";
  }
};

const clickTest = () => {
  console.log("test");
};
</script>

<template>
  <div class="sidebar">
    <div class="menu-item">
      <div
        class="dnd-item"
        draggable="true"
        @dragstart="onDragStartDefault"
        @click="clickTest"
      >
        要素を追加
      </div>
      <div
        class="dnd-item"
        draggable="true"
        @dragstart="onDragStartAi"
        @click="clickTest"
      >
        CUSTOM
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100vh;
  background: white;
  border-right: 1px solid #ccc;
  padding: 16px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.menu-item {
  margin: 8px 0;
}

.dnd-item {
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  color: black;
  cursor: grab;
  font-size: 14px;
  transition: all 0.2s;
  text-align: center;
  margin-bottom: 20px;
}

.dnd-item:hover {
  background: #f0f0f0;
  border-color: #999;
}

.dnd-item:active {
  cursor: grabbing;
}
</style>
