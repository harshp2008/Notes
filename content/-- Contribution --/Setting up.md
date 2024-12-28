---
title: Setting up your PC for Notetaking
draft: false
tags:
  - Contributions
Authors:
  - Harsh
---
---
# Introduction

Thanks for considering to contribute to this knowledge garden. Before going through with the setup process, I will briefly explain how this all works. 

All notes are written in a language called ==Markdown==, a incredibly simple but powerful language that can incorporate HTML and CSS. 

The text-editior of choice can be as simple as notepad but I strongly recommend everyone to use ==Obsidian==. Obsidian is an incredibly powerful markdown editor, with tones of plugins that just makes your life so much better and it's open source like this notes and it's run by an incredible community of developers and users. I love it.

After writing your Markdown Notes, everything will be published to ==Github==, (an online code repository), and will be converted to a nice looking website, which is basically the one you are reading off right now. It does this conversion using Quartz 4.0. It's an open-source static site generator. 

We use ==Github== to keep track of big changes, and keeps a list of commit history and helps to publish the notes to their website. 

==Dropbox== is used to instantly sync the notes with every other devices accessing a copy of obsidian with this notes.

Without further ado let's Setup your PC for Notetaking. 
# Installation Instructions

## Install NodeJS and NPM

1. Install NodeJS and NPM by clicking on this link https://nodejs.org/en/download/prebuilt-installer, choose the one that fits your operating system.
   
2. Verify that you have successfully installed them by running this two command in the command line: 
   
```shell
# verifies the right Node.js version is in the environment

node -v # should print some version like this "v22.12.0"

# verifies the right npm version is in the environment

npm -v # should print some version like this "10.9.0"
```

## Install Obsidian

1. Install obsidian by clicking on this link https://obsidian.md, choose the one that fits your operating system.

## Creating a Github account

1. Sign up for a Github account using this link https://github.com/signup.
   
2. Don't forget your credentials, you will be needing them later.

## Installing Git

1. Click on this link https://git-scm.com/downloads and download git, choose the one that fits your operating system
   
2. Just keep clicking the next button till you hit the install button.
   
3. Open the terminal, and type `git version`, this should output something that tells what version of git you are using.
   
4. Run the following commands one by one in the terminal: 

Put your first name and last name
```shell
git config --global user.name "First_Name Last_Name"
```

to confirm that it is successfully set run:

```shell
git config --global user.name
```

this should output your name back.

Type this in the command line, and make sure to use the username that you used to sign up the account with Github.

```shell
git config --global user.email "youremail@gmail.com"
```

To confirm that you have set your Git email correctly, type this:

```shell
git config --global user.email
```

You should have "youremail@gmail.com" as the output.

You will be asked to authenticate your GitHub account, so just sign in with the same email to confirm.

## Installing Visual Studio Code

1. Click on this link https://code.visualstudio.com and download vs code, choose the one that fits your operating system.
   
2. Click the profile account and sign in / Authenticate with Github.

# Cloning the project

1. Create a new folder, I prefer to make mine on the desktop. Right click on the folder and click "open with VS code."

2. Type the following in the command line and press enter:
```shell
git clone https://github.com/harshp2008/Notes.git
```

3. if you are not in child "Notes" Folder, open that folder with VS Code or run this two command :

```shell
cd Notes
```

```shell
code .
```


4. Set the remote origin by typing this in the command line 
```shell
git remote set-url origin https://github.com/harshp2008/Notes.git
```

5. To ensure that quartz 4.0 is all set up for the project, run this command. 
   
   >[!warning]
   >Running this command will remove any modifications made to the content folder and any other files inside the parent "Notes" folder. So don't edit any files before the setup is finished.

```shell
npx quartz sync --no-push --pull
```

6. And to help alert others thar you have successfully completed the setup, run this command, but replace [Your name] with your real name:

```shell
npx quartz sync -m "[Your name]'s PC has been succesfully set up."
```





