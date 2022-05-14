# Programming Language Sandbox

A collection of experiments to try out new (to me) programming language concepts

## Languages

### Nano

- Dynamically typed
- Expression language
- Integers
- Booleans
- Let expressions
- Binary operations
- Lambdas
- Block expressions
- If/else expressions
- Implementation language: JavaScript
- Compiles to JavaScript

### Typed Nano

- Everything from Nano
- Strings
- Statically typed
- Implementation language: TypeScript
- Compiles to JavaScript

### NanoML

- Everything from Typed Nano
- Type inference
- Pairs (2-tuples)
- Implementation language: TypeScript
- Compiles to JavaScript

### MicroML

- Everything from NanoML
- Records (row polymorphism)
- Lists
- Parametric polymorphism
- Implementation language: ReasonML
- Compiles to abstract machine

### MiniML

- Everything from MicroML
- Variants and pattern matching
- _N_-tuples
- Implementation language: ReasonML
- Compiles to abstract machine

### MiniScheme

- Top-level definitions
- Dynamically typed
- Homoiconic
- Macros
- Tail call optimization
- CPS transform
- Garbage collection
- Implementation language: Racket
- Compiles to C

### MiniC

- Imperative
- Statement-based
- Statically typed
- Control flow analysis
- Manual memory management
- At least one optimization pass on backend
- Implementation language: JavaScript
- Compiles to WebAssembly via Binaryen

### MiniC#

- Object oriented
- Statement-based
- Statically typed
- Type casting
- Generics
- Lambda expressions
- Namespaces
- Collection types
- Implementation language: C#
- Compiles to CLR

### MiniHask

- Purely functional
- Monadic side effects
- Lazy
- Lists
- Type classes
- Type inference
- Variants and pattern matching
- Implementation language: Haskell
- Compiles to abstract machine (i.e. G machine)

### MiniClojure

- Dynamically typed
- Homoiconic
- Macros
- Polymorphism with multimethods
- Immutable collections and sequences
- Tail calls with `recur`
- Implementation language: Clojure
- Compiles to JVM

### MiniF#

- Functional and object oriented
- Type inference
- Variants (named fields) and pattern matching
- Immutable collections and sequences
- Records
- Computation expressions
- Modules
- Syntactically significant whitespace
- Tail call optimization
- Implementation language: F#
- Compiles to CLR
