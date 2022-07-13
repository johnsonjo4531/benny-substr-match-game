import { input } from "https://deno.land/x/pythonic_input@v0.0.0/input.ts";
import Trie from "./trie.ts";

const trie = new Trie();
const substrMatch = Deno.args[0];
try {
  while (true) {
    const word = await input();
    if (word.includes(substrMatch)) trie.addWord(word);
  }
} catch (_err) {
  //
} finally {
  //
}
console.log(`Trying to match substring, ${substrMatch}, with following words:`);
for (const word of Deno.args.slice(1)) {
  console.log(word, trie.search(word));
}
