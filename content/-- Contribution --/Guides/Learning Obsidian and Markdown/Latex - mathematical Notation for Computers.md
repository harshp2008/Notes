---
title: Latex - mathematical Notation for Computers
draft: false
tags:
  - Contributions
Authors:
  - Harsh
---
---

# Introduction to Latex

Latex is language that translates latex code into Mathematical. I am probably not making much sense right now so let me show you what this powerful tool can do. Here are a few examples : 


| <center>Maths Examples</center>                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| <br>$\large{y = mx+ c}$                                                                                    |
| <br>$\large{ A \in \text{set }B}$                                                                          |
| <br>$\large{(a + b)^n = a^n + {}^nC_1(a)^{n-1}(b) + \space...\space + {}^nC_{n-1}(a)(b)^{n-1} + b^n}$ <br> |
|                                                                                                            |

| <center>Physics Examples</center>        |
| ---------------------------------------- |
| $\large{s = \int(\dfrac{dv}{dt})}$       |
| <br>$\large{ F = ma}$                    |
| $\large{ c = \dfrac{\sin(i) }{\sin(r)}}$ |

After looking at what latex can do, let's learn how to use latex. 


# Learning how to write Latex 

Any latex code is enclosed between two `$` signs. Anything written in between is written in latex font after it has been processed by the latex compiler.

Anything that doesn't have a forward slash, `\`, as a prefix, is considered to be either a number, a variable, or a operator.

Before we go ahead with latex functions, let me put my words into context with examples.


|     Latex Code      |   Rendered Text    |
| :-----------------: | :----------------: |
|    \$x = 1 + 2$     |    $x = 1 + 2$     |
|    \$y = mx + c$    |    $y = mx + c$    |
| \$(6 - 5) + 2 = 3$  | $(6 - 5) + 2 = 3$  |
| \$L = [a, b, c, d]$ | $L = [a, b, c, d]$ |
>[!warning] Whitespace Issues:
>Note that a Latex code like $ x = 2 + 1 $ will not be rendered as Latex. This is because followed by the opening dollar sign (\$) must be a character other than a whitespace / blank, "` `". And the character before, the closing dollar sign (\$)  must be a character other than a whitespace / blank , "` `".

>[!warning] Writing regular text with Latex:
>Let's take an example, let's say we want to write:
>
>$\Large{\sin (x) = 0.5}$ 
>
>You may decide to write the latex like this:
>
><p style="font-size : 22">$sin x = 0.5$</p>
>
>But this will actually render out like this:
>
>$\Large{sin (x) = 0.5}$ 
>
>You can see the differences now, the 's', 'i', 'n' in sin are not the spelling for the function but instead are treated as variables. To the a person reading, this will make no difference but for to keep things consistent we recommend using the sin function which will be explained in  below

## Subscripts and Superscripts




## Accessing the Latex drawer

A whole collection of extras are locked behind a single character, `\`. Typing the symbol allows you to allow you to treat the next word that is directly after it, for example \$\sin$ as a:
- Function
- Secret operator
- Secret variable
- Text formatting function
- Document functions
- Miscellaneous

>[!warning] How to type the character, '\\' in Latex
> 
> Forward slash or "`\`" in Latex and other programming languages is called as the escape character. An escape character is used to type to type functions and is more of a utility in most cases. For example, typing \sin in latex will output the sin function and the originally "`\`" is omitted.  
> 
> If the "`\`" is intentional, you could type a double slash in latex like "`\\`" will output a single "`\`"
>

### How latex drawer searches work

Any word after the initial slash, `\` starts scanning the letters for the name of the function, variable or operator to search for as long as the scanned character is a an alphabet (A - Z) or (a - Z). The moment it scans a character other than that,  a space, a number, a operator or any other character. The scanning is stopped and the word is retrieved. The word is then searched for in the drawer and the character or function associated with that is retrieved. 

### Mathematical Functions

Functions like $\large{\sin}$, $\large{\cos}$,  $\large{\tan}$ are hidden behind the "`\`". There are also other functions too! 

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>


### Secret Mathematical operators

Look at your keyboard, there are only so many keys, and most of them are either letters or numbers. But in most fields of math you will encounter other variables, specifically Greek characters but there can be other ones too. For example : $\pi$, $\phi$, $\alpha$, $\beta$, $\gamma$, $\theta$. 

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>

### Hard to access variables

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>

### Text Formatting  Functions

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>

### Document Functions

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>

### Miscellaneous Functions 

<div style="border-radius:8px; padding:20px; border: 3px solid black; border-color:#555 ; font-size: 18px; text-align: center; font-weight:500">A list of them will be provided below soon </div>
