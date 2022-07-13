/** Description:
 * This algorithm assumes that the trie is full of only those
 * words in the word list that match the substring.
 *
 * This algorithms Pros. and Cons.:
 * Pros.
 * It might be a bit faster...
 * It might be a bit less space intensive...
 *
 * Cons.
 * You would have to rebuild the trie before every game.
 *
 * Algorithm Steps:
 *
 * Step 1. Loading the word list into the Trie:
 * Before a game starts we determine (or it is given to us) what
 * the substring is to match. In this algrothim any word in the trie will
 * have only words that match the substring.
 *
 * Step 2. Checking words against the word list and substring.
 * This just needs to search the trie, because by finding the word in the trie it
 * guarantees the string is not only a proper word, but also contains the substring.
 * This is due to the fact that we only added things that were proper words and things
 * that contained the substring into the trie.
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
    if (word.includes(substrMatch)) trie.addWord(word);
  }
} catch (_err) {
  // Just assume the only error was with the input's EOF... (this is kind of sketch,because trie.addWord could also throw but \_(0_0)_/ :P)
}

console.log(`Trying to match substring, ${substrMatch}, with following words:`);
// Step 2. Checking words against the word list and substring.
for (const word of Deno.args.slice(1)) {
  console.log(word, trie.search(word));
}
