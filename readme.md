# benny-substr-match-game

## Running da Codez 💻

### Step 1
Install Deno from [https://deno.land](https://deno.land).

### Step 2

Run the command line script with load-dict algo:

```bash
deno run ./load-dict.ts < /usr/share/dict/words ace face case embrace chase defaced embraced encased
```

or load-dict2 algo:

```bash
deno run ./load-dict2.ts < /usr/share/dict/words ace face case embrace chase defaced embraced encased
```

### Explanation of Above Scripts

```bash
deno run ./load-dict2.ts # This is how deno runs the ./load-dict2.ts script
```

(There are two different algorithms in the files load-dict.ts and load-dict2.ts. You can choose Either one when you `deno run`.)

```bash
< /usr/share/dict/words # This makes the file /usr/share/dict/words redirected or "piped" into the stdin of the program.
```

(There are plenty of word lists out there when redirecting a different word list into the program other than `/urs/share/dict/words` it should just be known that this program only expects word lists with words seperated by new-lines.)

```bash
ace face case embrace chase defaced embraced encased # These are all the command line arguments to the program the first one signifies what substring should be matched.
```
