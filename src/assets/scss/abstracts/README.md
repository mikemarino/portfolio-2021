# Abstracts / Helpers

- [Functions](#Functions)
- [Mixins](#Mixins)
- [Placeholders](#Placeholders)
- [Variables](#Variables)
- [Links/Resources](#Links)

## Functions: 
Sass provides built-in modules. Built-in functions are globally available helper functions to aid in development.: 

https://sass-lang.com/documentation/modules

### SASS Built-In Functions/Modules

Initialize by using @use. 

```scss
example
@use sass:color;
@use sass:map;
```



| Functions  |  Overview  | Examples | Usage  |   |
|---|---|---|---|---|
| Color  | The sass:color module generates new colors based on existing ones, making it easy to build color themes.  |  - `adjust-hue($color, $degrees)`<br> -`opacity($color)` <br> - `darken($color, $amount)` <br> - `opacify($color, $amount)` <br> - `fade-in($color, $amount) `|   |   |
| List  |  The sass:list module lets you access and modify values in lists. |  -`list.append($list, $val, $separator: auto)` <br> -`list.length($list)` |   |   |
|  Map |  The sass:map module makes it possible to look up the value associated with a key in a map, and much more. | -`map.get($map, $key, $keys...)` <br> -`map.values($map)` |   |   |
| Math | The sass:math module provides functions that operate on numbers.  |  -`math.$pi ` <br> -`map.values($map)` |   |   |
| Meta  |  The sass:meta module exposes the details of Sass’s inner workings. |  -`meta.load-css($url, $with: null)  ` <br> -`meta.content-exists()` |   |   |
|  Selector |  The sass:selector module provides access to Sass’s powerful selector engine. The functions in this module inspect and manipulate selectors. Whenever they return a selector, it’s always a comma-separated list (the selector list) that contains space-separated lists (the complex selectors) that contain unquoted strings (the compound selectors).  | -`selector.append($selectors...)` <br> -`selector.extend($selector, $extendee, $extender)`   |   |   |
|  String | The sass:string module makes it easy to combine, search, or split apart strings.  |  `string.length($string) ` <br> -`string.to-upper-case($string)` |   |   |
|  Global |  A few functions are only available globally even in the new module system, either because they have special evaluation behavior (if()) or because they add extra behavior on top of built-in CSS functions (rgb() and hsl()). These will not be deprecated and can be used freely. |  -`hsl($hue $saturation $lightness)` <br > -`if($condition, $if-true, $if-false)` <br> - `rgb($red $green $blue / $alpha)`
|   |   |

## Mixins
A Mixin is a block of code that lets us group CSS declarations we may reuse throughout our site.


## Placeholders

Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output. 

https://sass-lang.com/documentation/style-rules/placeholder-selectors

## Variables 

Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.

## Links

Mixins:

https://scotch.io/tutorials/how-to-use-sass-mixins

https://github.com/gillesbertaux/andy

https://github.com/sass-mq/sass-mq

https://www.familyscss.xyz/

https://themodernweb.co.uk/2017/02/scss-mixins-5-awesome-examples/
