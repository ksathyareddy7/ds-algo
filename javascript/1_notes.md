
1. Big-O notation describes the complexity of an algorithm using algebric terms.
2. There are mainly 2 factors: Time complexity and Space complexity
3. Objects Big-O
   1. insert, remove, access -> O(1)
   2. search, Object.keys(), Object.values(), Object.entries() -> O(n)
4. Arrays Big-O
   1. insert/remove at end -> O(1)
   2. insert/remove at start -> O(n) => because of re-indexing
   3. access -> O(1)
   4. search -> O(n)
   5. push/pop -> O(1)
   6. shift/unshift/concat/slice/splice -> O(n)
   7. forEach/map/filter/reduce -> O(n)