/** This algorithm assumes that the trie is full of
 * every word in the word list.
 *
 * This algorithms Pros. and Cons.:
 * Pros.
 * The trie will only ever have to be built once.
 *
 * Cons.
 * It might be a tad slower...
 * It might be a tad more space intensive...
 *
 * Step 1. Loading the word list into the Trie:
 * Pretty simple we just need to take every word from the list
 * and load them into the trie. We don't need to restrict any words from
 * entering the trie.
 *
 * Step 2. Checking words against the word list and substring.
 * This just needs to make the substring match as well as searching
 * the trie, because by finding the word in the trie it
 * doesn't guarantee any properties of the string other than that it's a word.
 *
 */
import { input } from "https://deno.land/x/pythonic_input@v0.0.0/input.ts";
import Trie from "./trie.ts";

const trie = new Trie();
const substrMatch = Deno.args[0];
try {
  // Step 1. Loading the word list into the Trie.
  while (true) {
    const word = await input(); // input() can throw on End Of File (EOF).
    trie.addWord(word);
  }
} catch (_err) {
  // Just assume the only error was with the input's EOF... (this is kind of sketch,because trie.addWord could also throw but \_(0_0)_/ :P)
}

console.log(`Trying to match substring, ${substrMatch}, with following words:`);
// Step 2. Checking words against the word list.
for (const word of Deno.args.slice(1)) {
  console.log(word, word.includes(substrMatch) && trie.search(word));
}
