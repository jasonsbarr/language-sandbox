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
- Compiled to JavaScript

### Typed Nano

- Everything from Nano
- Strings
- Statically typed
- Implementation language: JavaScript
- Compiled to JavaScript

### NanoML

- Everything from Typed Nano
- Type inference
- Pairs (2-tuples)
- Implementation language: JavaScript
- Compiled to JavaScript

### MicroML

- Everything from NanoML
- Records (row polymorphism)
- Lists
- Parametric polymorphism (generics)
- Implementation language: TypeScript
- Compiled to JavaScript

### MiniML

- Everything from MicroML
- Variants and pattern matching
- _N_-tuples
- Implementation language: ReScript
- Compiled to JavaScript

### MiniScheme

- Top-level definitions
- Homoiconic
- Macros
- Tail call optimization
- CPS transform
- Garbage collection
- Implementation language: Racket
- Compiled to C

### MiniC

- Imperative
- Statement-based
- Statically typed
- Control flow analysis
- Manual memory management
- At least one optimization pass on backend
- Compiles to WebAssembly via Binaryen
- Implementation language: JavaScript

### MiniC#

- Object oriented
- Statement-based
- Statically typed
- Type casting
- Generics
- Lambda expressions
- Namespaces
- Collection types
- Compiles to CLR
- Implementation language: C#

### MiniHask

- Purely functional
- Monadic side effects
- Lazy
- Lists
- Type classes
- Variants and pattern matching
- Compiles to abstract machine (i.e. G machine)
- Implementation language: Haskell

### MiniClojure

- Homoiconic
- Macros
- Polymorphism with multimethods
- Immutable collections and sequences
- Tail calls with `recur`
- Compiles to JVM
- Implementation language: Clojure

### MiniF#

- Functional and object oriented
- Variants (named fields) and pattern matching
- Immutable collections and sequences
- Records
- Computation expressions
- Modules
- Syntactically significant whitespace
- A-normal form transform
- Tail call optimization
- Compiles to CLR
- Implementation language: F#
