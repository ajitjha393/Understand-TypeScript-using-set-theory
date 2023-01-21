---
title: Understanding TS using Set Theory
marp: true
theme: kubi
---

### Safe get function 

<question>

How can we make a function to get a value in an object safely

```ts
const env = {
    "SERVER": "",
    "PORT": 7808
}

let server = getValue("SERVER"); // ideally string
let port = getValue("PORT") // ideally number
let pport = getValue("PPORT") // ideally error
```

</question>

<answer>

Use index access types, `keyof` and a generic function

</answer>

