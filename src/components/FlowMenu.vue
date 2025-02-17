<script setup lang="ts">
import { useFlowStore } from "../stores/flow";
import { useVueFlow } from "@vue-flow/core";

const flowStore = useFlowStore();

const closeMenu = () => {
  flowStore.toggleMenu(false);
};

// 削除処理
const { removeNodes } = useVueFlow();
const deleteNode = () => {
  console.log("deleteNode😱");
  if (flowStore.selectedNode) {
    console.log(flowStore.selectedNode.id);
    removeNodes(flowStore.selectedNode.id);
  }
};

// 更新処理
const instance = useVueFlow();
const updateNode = () => {
  console.log("updateNode");
  if (flowStore.selectedNode) {
    const node = instance.findNode(flowStore.selectedNode.id);
    if (node) {
      node.data = {
        ...node.data,
        label: "update node!!!",
      };
      console.log(node);
    }
  }
};
</script>

<template>
  <div
    v-if="flowStore.showMenu"
    class="menu"
    :style="{
      left: `${flowStore.menuPosition.x}px`,
      top: `${flowStore.menuPosition.y}px`,
    }"
  >
    <button class="close-button" @click="closeMenu">×</button>
    <div class="menu-header" v-if="flowStore.selectedNode">
      Node ID: {{ flowStore.selectedNode.id }}
    </div>
    <div class="menu-item">
      <button @click="deleteNode">要素を削除する</button>
    </div>
    <div class="menu-item">
      <button @click="updateNode">要素を更新する</button>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  color: black;
}

.menu-header {
  padding: 8px 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #666;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.close-button:hover {
  background: #f0f0f0;
}

.menu-item {
  margin: 4px 0;
}

.menu-item button {
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  color: black;
}

.menu-item button:hover {
  background: #f0f0f0;
}
</style>
