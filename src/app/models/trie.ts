import { TrieNode } from "./trie-node";

class Trie {

    head: TrieNode;

    constructor() {
        this.head = new TrieNode();
    }

    addNode(id: number, word: string): void {
        let level = 0;
        let children = this.head.children;

        for (const character of word) {
            let node;

            if (children.get(character)) {
                node = children.get(character);
                if (node.values.indexOf(id) < 0){
                    node.values.push(id);
                }
            }
            else {
                node = new TrieNode(id, character);
                children.set(character, node);
            }
            children = node.children;

            if (level === word.length - 1) {
                node.isWord = true;
            }
            level++;
        }
    }

    getNode(word: string): TrieNode {
        let curNode = this.head.children;
        let node = null;

        for (const character of word) {
            if (curNode.get(character)) {
                node = curNode.get(character);
                curNode = node.children;
            } else {
                return null;
            }
        }
        return node;
    }
}

export { Trie }