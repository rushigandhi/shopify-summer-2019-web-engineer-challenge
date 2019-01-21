// Class for the nodes of a trie

class TrieNode {
    public values: number[]; // Initialize an empty number array for item lookup indices
    public character: string; // The character of the word stored in this specific node
    public isWord: boolean; // Boolen value to check if this character is the end of the word
    public children: Map<string, TrieNode>; // Map of all child nodes

    constructor(index?: number, character?: string) {
        this.character = character;
        this.isWord = false; // Set the default isWord for a node as false
        this.children = new Map<string, TrieNode>();
        this.values = [index]; // set the default value array with the inputted id
    }
}

export { TrieNode };