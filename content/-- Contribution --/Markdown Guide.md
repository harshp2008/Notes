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




---

<h1 style="text-align:center">WORK IN PROGRESS FROM THIS POINT FORWARD</h1>

---

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


## Indentation Problems (needs further testing)

		test
	test

%%Annoying  boxes for indentation%%

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


### Added functionality from HTML

## List

## Callouts

## Links

## Wikilinks and Embedded Content

## Text Styling 
### Highlight
### Bold

### Italics
### Strikethrough

### Underline


## Commenting