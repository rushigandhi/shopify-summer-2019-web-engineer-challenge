class TrieNode {

    public values: number[];
    public character: string;
    public isWord: boolean;
    public children: Map<string, TrieNode>;

    constructor(id?: number, character?: string) {
        this.character = character;
        this.isWord = false;
        this.children = new Map<string, TrieNode>();
        this.values = [id];
    }
}

export { TrieNode };