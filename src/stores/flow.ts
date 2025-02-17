import { defineStore } from "pinia";
import { Node, Edge } from "@vue-flow/core";

export const useFlowStore = defineStore("flow", {
  state: () => ({
    nodes: [
      {
        id: "1",
        label: "start",
        position: { x: 100, y: 100 },
        type: "default",
        connectable: true,
      },
    ] as Node[],
    edges: [
      // {
      //   id: 'e1-2',
      //   source: '1',
      //   target: '2',
      // },
    ] as Edge[],
    selectedNode: null as Node | null,
    showMenu: false,
    menuPosition: { x: 0, y: 0 },
  }),
  actions: {
    setSelectedNode(node: Node | null) {
      this.selectedNode = node;
    },
    toggleMenu(show: boolean, x = 0, y = 0) {
      this.showMenu = show;
      this.menuPosition = { x, y };
    },
    addNode(node: Node) {
      this.nodes.push(node);
    },
    addEdge(edge: Edge) {
      this.edges.push(edge);
    },
  },
});
