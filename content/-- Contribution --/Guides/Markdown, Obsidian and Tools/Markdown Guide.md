---
title: Markdown Guide
draft: false
tags:
  - Contributions
Authors:
  - Harsh
---
---
# The Seemingly Hard Transition

As a person that has been using google Docs, Word and other similar word processor, transitioning to writing Notes in Markdown seems just impossible to get comfortable with writing content that lacks buttons, and text field that just seem so intuitive. All functionalities are well labelled and it's just pleasing to the eyes. More markdown lacks vital functionality like coloured text, coloured highlighting colours and graphs. So why would anyone make the change?

Well it turns out if it wasn't for HTML, CSS and Javascript, I personally would have used something else, But with all this built right in obsidian and many other Markdown processors, the only limit to the customizability is your imagination. Markdown offers you a chance to customize appearances and functionality when  required while keeping things thing nice and simple for the rest of the notes.

The seeming limited basic functionality, helps notes to follow a standardised, proven model for notetaking. The other alternative is Notion, and I highly recommend you to use that for ==personal notes== but anything that requires sharing, Notion will charge a premium. 

Also Markdown is designed in such a way that limits the usage of a mouse, which highly increasing your typing speed, a necessity in the modern era, and allows notes to be taken much more quickly. 

I made the hard transition, and it wasn't easy at the start, but i can guarantee you that after getting used to it, a week or two later, you wouldn't want to go back to word or google docs for Notetaking. 

Now without further ado, let's jump into learning Markdown.

# Learning Markdown

## Whitespaces

In markdown, only one whitespace between two words are considered. The rest of it will be removed. For example:

```Markdown
John    Ate    Spaghetti    For    Lunch
```

will be turned into:

```Markdown
John Ate Spaghetti For Lunch
```

This can seem annoying, but this is a side effect of markdown. If you wish to have the whitespace persevered, you can enclose your text between a starting and closing ==paragraph tag==. Here is an example below:

```HTML
<p style="white-space : pre">John    Ate    Spaghetti    For    Lunch</p> 
```

The white-spaces are preserved: 

```
John    Ate    Spaghetti    For    Lunch
```

Other type of white-space options are explained on the stack overflow forum which is linked [here](https://stackoverflow.com/questions/8994516/html-css-best-practice-for-preserving-white-space-on-certain-elements)


## Newlines

In markdown, only one empty line between two lines with content is permitted. For example:

Let's say you wrote this, It has 3 empty lines in this case.

```markdown
John ate spaghetti for lunch.



He then had a glass of orange Juice.
```

It wouldn't get auto corrected but the output on the ==website== or the ==reading view pane== would only show **one line space**. It would show this:

```
John ate spaghetti for lunch.

He then had a glass of orange Juice.
```

Luckily, there is a way to counter this, we just need to use the HTML break tags. You need to put one less break tag than the number of lines desired. In this case it would be 2 break tags like this:

```
John ate spaghetti for lunch.
<br><br>
He then had a glass of orange Juice.
```

This is how it would appear on the reading view panel or the website.

```Markdown
John ate spaghetti for lunch.



He then had a glass of orange Juice.
```

## Headings

In a conventional word processor like google docs, you would first use your mouse to select a piece of text. Then move your mouse to the heading drop box which is placed in the toolbar. Then click on it to change to your desired heading. 

This is shown in the picture below:

![[Contribution - Headings in GDocs.png]]

But in markdown we like to tread quicky, everything is controlled with your keyboard.

We use the following Syntax to produce a heading:

```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

## Tables

Tables in markdown lack merge functionality and their appearance customisations are quite limited or almost have no existant. 

Tables can be created by writing the following syntax:

```Markdown
| Heading 1  |  Heading 2 |
|    ---     |    ---     |
| Content A1 | Content B1 |
```

It should look something like this: 

| Heading 1  | Heading 2  |
| ---------  | ---------- |
| Content A1 | Content B1 |

A table can also be created by opening the command pallet by pressing ```ctrl``` + ```p``` or by typing ```/``` anywhere in your notes. Search up the command ```Insert Table``` and press ```Enter```. 

A column's alignement can also be left-aligned, right-aligned, centered-aligned. It defaults to left-aligned. 

This example should give you an idea of the three types of alignments: 

| Left Aligned | Centered Aligned | Right aligned |
| :----------- | :--------------: | ------------: |
| Content A1   |    Content B2    |    Content C1 |

We can write a left-aligned column in markdown like this:

```Markdown
| Left Aligned |
| :----------- | 
| Content A1   |  
```

We can write a centered-aligned column in markdown like this:

```Markdown
| Centered Aligned |
|  :------------:  |
|    Content B2    |
```

We can write a right-aligned column in markdown like this:

```Markdown
| Right aligned |
| ------------: |
|    Content C1 |
```

The alignement can also be set by right clicking on the column you want, and under ```Columnn```, click on the alignement you wish. The options will look like this:

![[table alignment in markdown.png]]

### Standalone centred table headers

Let's say you want your table header to be centred but not your table content. There is no native way to do this in markdown, but with some help from html, it is possible.

Here is what I mean:

| <center>Left Aligned</center> | <center>Right Aligned</center> |
| :---------------------------- | -----------------------------: |
| 1                             |                              1 |
| 2                             |                              2 |
| 3                             |                              3 |

You can easily solve this by using ==\<center>== tags. You need to encapsulate the header between the opening and closing center tags. Here is an example.

| <center>Left Aligned</center> | <center>==\<center>==Right Aligned==\</center>==</center> |
| :---------------------------- | :-------------------------------------------------------- |
| 1                             | 1                                                         |
| 2                             | 2                                                         |
| 3                             | 3                                                         |

>[!tip] Shortcuts
>I highly suggest you to use this shortcut:
>
>1. select the entire header text that you want to center.
>2. Use the button on the toolbar above or press `ctrl` + `shift` + `E` to do the same.
>   

>[!warning] Use Standalone centring at your own risk
>
> when typing out the center tags manually, be extra careful when typing the closing center tag, \<\center>, as it can mess up or delete your entire table. 
> 
> Luckily you can still undo it but I think we can do better. There is a way to avoid it and I will show you below:
> 
> When typing the closing \<center> tag, follow this steps:
> 
> 1. Type this out first \<\\>
> 2. Type out the center in the tag -> \<\center>
>    

## Lists

When it comes to listing things, we use either:
- Unordered Lists
- Order Lists
### Unordered List

Unordered list is also know as bullet lists.

A bullet list is a way to organize information using symbols, like circles, before each item in a list. Bullet lists are useful for making lists easier to read and understand. Some examples of uses of bullet lists include :

- Examples
- Guiding Questions
- Table of Context
- to-do lists
- or key points
#### Syntax

Here is the markdown syntax from the example above :

```
- Examples
- Guiding Questions
- Table of Context
- to-do lists
- or key points
```

### Ordered Lists

An ordered list is a list of items that are presented in a specific order, usually with numbers assigned to each item. The order of the items is important and is critical to the meaning of the list.

>[!example] Here is an example of ordered list in practice
>
> The changes in the car's speed takes place in this order:
>
>1.  The car is stationary.
>2. The car begins to speed up.
>3. The car's speed is now constant.
>4. The car begins to slow down.
>5. The car comes to a halt.

#### Syntax

Here is the markdown syntax from the example above :

```
1. The car is stationary.
2. The car begins to speed up.
3. The car's speed is now constant.
4. The car begins to slow down.
5. The car comes to a halt.
```

## Callouts

Callout in Markdown is a block of text that's highlighted and set apart from the main narrative of a page. Callouts are used to emphasize key content or draw attention to specific features. They can be used to convey notes, warnings, or other important information. 

>[!tip] Callouts in my opinion is one of the strongest points of using Markdown.

You can also make callouts foldable too!

>[!info]- Extra info
>
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Callouts Syntax

A callout consist of a `type`, a `header` and `content` (optional)

Here is the syntax for any callout:

```
>[!TYPE] HEADER
> CONTENT
```

There are multiple types to choose from. You can refer to the section below to see what each callout type looks like.

In the content of a callout you can put anything, a table, a bullet list, a link a image, etc. The only catch is that content must start with a "`> `"  to make it a part of the callout. 

Here is an example of a callout and it's syntax:

>[!tip] Example : Strongest One
> Callout are in my opinion the most powerful feature of Obsidian. 
> I use callouts all the time.


```
>[!tip] Example : Strongest One
> Callout are in my opinion the most powerful feature of Obsidian. 
> I use callouts all the time.
```

### Foldable Callouts Syntax

Callouts can also be made foldable. You just need to add a `+` or a `-` character after the `[!type]`. Here is the example from above.

>[!info]- Extra info
>
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Here is the syntax for it, observe the `-` sign after the `[!info]`

```
>[!info]- Extra info
>
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
```

### Types of Callouts

>[!note] Note

>[!Abstract] 

>[!Info]

>[!todo]

>[!tip]
>Aliases: `hint`, `important`

>[!success]
>Aliases: `check`, `done`

>[!question]
>liases: `help`, `faq`

>[!warning]
>Aliases: `caution`, `attention`

>[!failure]
>Aliases: `fail`, `missing`

>[!danger]
>Alias: `error`

>[!Bug]

>[!Example]

>[!quote]
>Alias: `cite`

### Custom Callout Types

>[!solution]

>[!correct]

>[!incorrect]
>

## Text Styling 

Let's Say you want to add some spice to your writing. A bit of boldness here and bit of highlighting there. Natively there are 4 options that you can choose from:

|  Text Style   |              Output              |  Syntax Used   |
| :-----------: | :------------------------------: | :------------: |
|   Highlight   | John ate ==spaghetti== for lunch | \==spaghetti== |
|     Bold      | John ate **spaghetti** for lunch | \**spaghetti** |
|    Italics    |  John ate _spaghetti_ for lunch  |  \_spaghetti_  |
| Strikethrough | John ate ~~spaghetti~~ for lunch | \~~spaghetti~~ |

**Underlining** is a text styling option that is looked down upon by markdown. This is because underline texts, don't really have a symbolic meaning and is also hard to view the difference from a distance. It can also make things a bit hard to read. But despite all of these, I use it myself in some rare cases. There is a hacky way to use it that I will show you at the end.

>[!tip] You can mix two or more different text styling options together

>[!warning] Mixing bold and highlight styles
>
>When mixing Bold and Highlight styles, remember to put highlight on the inside and the bold on the outside. Doing the opposite will mess up the way the text looks on the Notescapes website.
>
  Here is an example:
>
>|  Text Style   |              Output              | Syntax Used |
| :-----------: | :------------------------------: | :--------------: |
|   Highlight and Bold   | John ate **==spaghetti==** for lunch |  \**\==spaghetti==**  |

In order to underline you will need to embed some HTML code in your notes. Doing this will revoke any other native styling combination and you will need to rely on pure HTML styling combination for that text. 

>[!success] Advantage of HTML based text styling.
>There are no restrictions on what order of text style tags are used. Any order will work. 

Here is the way we can write the same thing in HTML:

|  Text Style   |                    Output                     |                      HTML Tag Used                       |       What's required?       |
| :-----------: | :-------------------------------------------: | :------------------------------------------------------: | :--------------------------: |
|   Highlight   |   John ate <mark>spaghetti</mark> for lunch   |                         `<mark>`                         |   \<mark>spaghetti\</mark>   |
|     Bold      | John ate <strong>spaghetti</strong> for lunch | `<strong>`<br><br>(preferred)<br><br>or <br><br>`<bold>` | \<strong>spaghetti\</strong> |
|    Italics    |      John ate <i>spaghetti</i> for lunch      |                          `<i>`                           |      \<i>spaghetti\</i>      |
| Strikethrough | John ate <strike>spaghetti</strike> for lunch |                        `<strike>`                        | \<strike>spaghetti\</strike> |
|   Underline   |      John ate <u>spaghetti</u> for lunch      |                          `<u>`                           |      \<u>spaghetti\</u>      |


---

<h1 style="text-align:center">WORK IN PROGRESS FROM THIS POINT FORWARD</h1>

---


## Blockquotes 

## External Links

## Wikilinks and Embedded Content

## Commenting

## Indentation Problems (needs further testing)

		test
	test
	

%%Annoying  boxes for indentation%%