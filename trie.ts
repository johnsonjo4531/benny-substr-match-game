export default class TrieNode {
  children: Map<string, TrieNode> = new Map();
  // Should be a char....
  // null if root node.
  data: string | null = null;

  constructor(...words: string[]) {
    if (words) this.addWords(words);
  }

  addWord(word: string) {
    if (word.length === 0) {
      this.children.set("*", new TrieNode());
      return;
    }
    const found = this.children.get(word.charAt(0));
    if (found) {
      found.addWord(word.slice(1));
    } else {
      const newNode = new TrieNode(word.slice(1));
      this.children.set(word.charAt(0), newNode);
    }
  }

  addWords(words: string[]) {
    for (const word of words) {
      this.addWord(word);
    }
  }

  search(word: string): boolean {
    if (this.children.get("*") && word.length === 0) return true;
    else if (word.length === 0) return false;
    return Boolean(this.children.get(word.charAt(0))?.search(word.slice(1)));
  }
}
