# Operators

- I'm ignoring the comma operator, for now...
- maybe assignment operators can be colored based on the operation
- c pointers/ref needs a bit of time

```js
// Arithmetic
+;-;*;**;/;%;
// Unary
++;--;+;-;
// Assignment
=;+=;-=;*=;/=;%=;**=;??=;&&=;||=;
&=;|=;^=;<<=;>>=;>>>=;
// Comparison / Relational
==;===;!=;!==;>;<;>=;<=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;??;
// Identity
typeof;instanceof;
// Membership
in;
// Bitwise
&;|;~;^;<<;>>;>>>;
// NullCheck
_?._;f?.();
// Placeholder
`${123}`
```
```ts
// Arithmetic
+;-;*;**;/;%;
// Unary
++;--;+;-;
// Assignment
=;+=;-=;*=;/=;%=;**=;??=;&&=;||=;
&=;|=;^=;<<=;>>=;>>>=;
// Comparison / Relational
==;===;!=;!==;>;<;>=;<=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;??;
// Identity
typeof;instanceof;
// Membership
in;
// Bitwise
&;|;~;^;<<;>>;>>>;
// NullCheck
_?._;f?.();_!._;f!.();_!;
// Placeholder
`${123}`
```
```py
# Arithmetic
+ - * / % ** //
# Assignment
= += -= *= /= %= //= **= &= |=
^= >>= <<=
# Comparison
== != >	<	>= <=
# Logical
not or and
# Identity
is is not
# Membership
in not in
# Bitwise
& | ^ ~ << >>
# Placeholder
f'{123}'
```
```c
// Arithmetic
+;-;*;/;%;
// Unary
++;--;
// Assignment
=;+=;-=;*=;/=;%=;&=;|=;^=;<<=;
>>=;
// Comparison / Relational
==;!=;>;<;>=;<=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;
// Bitwise
~;&;|;^;<<;>>;
// varef
*_;&_;_->_;_._;
```
```java
// Arithmetic
+;-;*;/;%;
// Unary
+;-;++;--;
// Assignment
=;+=;-=;*=;/=;%=;<<=;>>=;>>>=;&=;
|=;^=;
// Comparison / Relational
==;!=;<;>;<=;>=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;
// Identity
instanceof;
// Bitwise
~;<<;>>;>>>;&;^;|;
```
```rust
// Arithmetic
+;-;*;/;%;
// Unary
-;
// Assignment 
+=;-=;*=;/=;%=;&=;|=;^=;<<=;>>=;
// Comparison / Relational
==;!=;_ > _; _ < _;<=;>=;
// Logical
!;||;&&;true&false;true|false;
// Bitwise
~;<<;>>;>>>;&;^;|;!0;
// varef
& _;&mut _; *_; *mut _;
// ErrorCheck (#NullCheck)
None?;
// Placeholder
format!("BBB {}", a);
```
```dart
// Arithmetic
+;-;*;/;%;~/;
// Unary
-;++;--;
// Assignment
=;??=;+=;-=;*=;/=;
// Comparison / Relational
==;!=;<;>;<=;>=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;??;
// Identity
_ is int;_ is! int;
// Bitwise
&;|;^;~;<<;>>;
'$var'
```
```c#
// Arithmetic
+;-;*;/;%;
// Unary
++;--;
// Assignment
=;+=;-=;*=;/=;%=;&=;|=;^=;<<=;>>=;??=;
// Comparison / Relational
==;!=;<;>;<=;>=;
// Ternary / Conditional
?:;
// Logical
!;||;&&;??;
// Identity
typeof(_);is;
// Bitwise
&;|;^;~;<<;>>;
// varef
&_;*a;
// NullCheck
_?._;_?[_];_!;
// Placeholder
$"{123}"
```
```php
// Arithmetic
+;-;*;/;%;**;
// Unary
++;--;
// Assignment
=;.=;+=;-=;*=;/=;%=;
// Comparison / Relational
==;===;!=;!==;<>;<;<=;>;>=;<=>;
// Ternary / Conditional
?:;
// Logical
!;||;&&;xor;or;and;??;
// Identity
_ instanceof string;
// Bitwise
&;^;|;<<;>>;
// varef
&_;
// Concat
.;
// Exec
`ls -la`;
// ErrorControl (#NullCheck)
$fd = @file('noop') or die('file not found');
// Placeholder
"$a{$a}"
```
