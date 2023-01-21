---
title: Understanding TS using Set Theory
marp: true
theme: kubi
---

### Distributive conditional types

<question>
How can I get all the keys from all union constituents:

```ts
type Person =
    | { name: string; field: string }
    | { name: string; specialty: string }

type Keys = KeyOfAll<Person> // "name" | "specialty" | "field"
```
</question>
<answer>

We can use **distributive conditional types**

</answer>
