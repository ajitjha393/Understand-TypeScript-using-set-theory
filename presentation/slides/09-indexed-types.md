---
title: Understanding TS using Set Theory
marp: true
theme: kubi
---

### Indexed types

<question>
    How can we get a type of all property values in an object ?
</question>

```ts
type Book = {
    pages: number;
    fontSize: number;
    name: string;
    author: string
}
type R = ValueOf<Book> // string | number
```
----

### Indexed types

<question>

How can we get the type of a property in an object ?

```ts
type Book = {
    pages: number;
    fontSize: number;
    name: string;
    author: string
}
type TypeOfPages = number // Get the type of pages in Book
```
</question>
<answer>

Use an indexed type

</answer>

---

### Anatomy of Indexed types

`T[K]`

* `T` can be any type or type expression
    * ex: `Book`, `typeof env`
* `K` can be any valid type expression that can index `T`
    * `"name"` for `Book`
    * `number` for arrays

---

### Anatomy of Indexed types

`T[K]`

- `T` can be any type or type expression
- `K` can be any valid type expression that can index `T`
* The indexing operation distributes over `K` if `K` is a union
    * `T[K1 | K2 | ... | Kn]` becomes
    * `T[K1] | T[K2] | ... | T[Kn]`

---

### Indexed types

<question>
    How can we get a type of all property values in an object ?
</question>

```ts
type Book = {
    pages: number;
    fontSize: number;
    name: string;
    author: string
}
type R = ValueOf<Book> // string | number

```

<answer>

Use an indexed type

</answer>

