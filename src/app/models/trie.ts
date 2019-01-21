import { TrieNode } from "./trie-node";

class Trie {

    head: TrieNode; // Declare the head node of the Trie

    constructor() {
        this.head = new TrieNode(); // Instantiate a new TrieNode
    }

    // Use this function to add a word to the Trie
    addWord(id: number, word: string): void {
        let level = 0; // Set the current level to zero
        let children = this.head.children; // Set children to the head node's children

        for (const character of word) { // For every character in the word passed to the word
            let node;

            if (children.get(character)) { // Get the child node that has that character
                node = children.get(character);

                // If the values array in those children includes does not include the id of the item it corresponds to, add it
                if (node.values.indexOf(id) < 0){ 
                    node.values.push(id);
                }
            }
            // Else create a new child node and add it to the children Map
            else {
                node = new TrieNode(id, character);
                children.set(character, node);
            }
            children = node.children;

            // If level in the Trie is one less than the word's length (since level starts at 0), we determine that the node is the end of the word
            if (level == word.length - 1) {
                node.isWord = true;
            }
            // Increment the level
            level++;
        }
    }
    
    // Use this function to retrieve the indices of the JSON objects that include the queried word
    getIndices(word: string): TrieNode {
        let curNode = this.head.children; // Set the current node as the children of the head node
        let node = null;

        for (const character of word) { // For every character in a word
            if (curNode.get(character)) { // Get the child node that has that character 
                node = curNode.get(character);
                curNode = node.children; // Move the current node to the child node
            } else {
                return null; // If we hit a dead end, return null
            }
        }
        return node; // Otherwise, return the node
    }
}

export { Trie }