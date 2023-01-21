type EnvGetters = {
    "SERVER": () => string,
    "PORT": () => number
}

type AnyFunction = (...args: any[]) => any

type Mapper<T extends Record<string, AnyFunction>> = {
    [K in keyof T]: ReturnType<T[K]>
} 

type Env_ = Mapper<EnvGetters>


// type X = ReturnType<() => string>