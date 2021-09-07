# Regexp Any/Unknown

```js
/abcdefghijklmnopqrstuvwxyz/;
```


# Regexp Control

```js
// Carret Notation
/\cM/;
```


# Regexp Numeric

```js
// raw 2hex chr
/\xff/;
// utf16 code-unit 4hex
/\uffff/;
```


# Regexp Escaped

```js
/\a\c\e\g\h/; // any escaped char

/[\b]/; // backspace
/\0/;   // NULL
/\a/;   // escaped
// match U+hhhh or U+hhhhh
/\u{ffff}\u{fffff}/u;
```


# Regexp Or

```js
/x|x/;
```


# Regexp Quantifier

```js
/x*/;     // max 0+
/x+/;     // max 1+
/x?/;     // max 0/1
/x{1}/;   // max n
/x{1,}/;  // max n+
/x{1,2}/; // max n,m
/x*?/;    // min 0+
/x+?/;    // min 1+
/x??/;    // min 0/1
/x{1}?/;  // min n
/x{1,}?/; // min n+
/x{1,2}?/;// min n,m
```


# Regexp Anchor

```js
/^/;  // beginning
/$/;  // end 
/\b/; // word boundary
/\B/; // not boundary
```

 
# Regexp Set

```js
/[abc]/; // set
/[a-c]/; // range set
```


# Regexp Builtin Set

```js
/./;    // any char
/\d/;   // any digit
/\D/;   // not digit
/\w/;   // any alphanum+_
/\W/;   // not alphanum+_
/\s/;   // any space
/\S/;   // not space
/\t/;   // hor tab
/\v/;   // vrt tab
/\r/;   // CR (carriage return)
/\n/;   // LF (linefeed)
/\f/;   // FF (form-feed)
```


# Regexp Negation Set 

```js
/[^abc]/;
/[^a-c]/;
```


# Regexp Set Definition

```js
/[]/;
```


# Regexp Back Reference

- A back reference to the last substring matching the `n` parenthetical in the regular expression (counting left parentheses).
- like `/(#)\1/` will be the same as `/(#)(#)/`
- `/(#)(@)\1` == `(#)(@)(#)`

```js
/(#)\1/;
```


# Regexp Named Group Reference

```js
/(?<title>\w+), yes \k<title>/
// same as
/(\w+), yes (\w+)/
```


# Regexp Non-Capturing Group

```js
/(?:x)/; // matches x but dont capture the matched group
```


# Regexp Looking

```js
// lookahead
//  match x 
//  if x is followed by y
/x(?=y)/;

// negative lookahead
//  match x
//  if x isn't followed by y
/x(?!y)/;

// lookbehind
//  match x
//  if x is preceded by y
/(?<=y)x/;

// negative lookbehind
//  match x
//  if x isn't preceded by y
/(?<!y)x/;
```


# Regexp Group Definition

```js
/()/;
```
