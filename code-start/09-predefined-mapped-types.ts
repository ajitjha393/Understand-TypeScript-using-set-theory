export {};

type Book = {
  name: string,
  author: string,
  pages: number  
}

type T1 = Partial<Book>

type T2 = Record<string, number>

type T3 = Readonly<Book>

type T4 = Required<T1>

type T5 = Pick<Book, "name" | "pages"> // like slicing a type