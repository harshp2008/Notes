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


---

<h1 style="text-align:center; border:3px dashed black; padding: 20px; border-radius:10px">REWRITING OF THE INSTALLATION <br> IS REQUIRED</h1>
<p style="text-align:center">Continuing to follow the instructions bellow may require a very long time and you may get stuck in the process. A better, more intuitive solution is on the way.<p> 

<p style="text-align:center">A step-to-step guide for the new solution will be written shortly after the new solution is made public.</p>

---

# Creating a Github account

1. Sign up for a Github account using this link https://github.com/signup.
   
2. Don't forget your credentials, you will be needing them later. I recommend you to save them with some password manager. I use google password manager.

3. You will need to message Harsh, or any other existing contributors. In this message, Include your personal Name and your Github username. This required to add your Github account as a contributor to the repository. This change will allow you to push commits to the server, aka allow you your changes to reflect on the [server (Github)](https://github.com/harshp2008/Notes) and the [website](https://harshp2008.github.io/Notes/).

>[!warning] Warning: Message Harsh or any other contributors first
>You can continue setting up your system for Notetaking but I have to warn you that without the authorization from Harsh or any other contributors, you will not be able to fully complete the Installation process. You will have to pause before starting [[#Cloning the project]]. 

# Installation Instructions

## Install NodeJS and NPM

1. Install NodeJS and NPM by clicking on this link https://nodejs.org/en/download/prebuilt-installer, choose the one that fits your operating system. Click on the installer to start the installer.
	
	![[{E5D02357-CF3E-49E0-B9AD-383C0DF39FAE}.png]]
	
	 For all of boxes with arrows, click the little arrows beside them and select ```Entire feature will be installed on local hard drive```. ==Make sure to do for all boxes==, this is very important. 
	
	![[{887DF2A6-49ED-46B5-AB28-FD6CE9749B0B}.png]]
	
	After doing this click the ```Next``` button.
	
	![[{E6427019-04AE-46A9-9B01-48DD5ACD484D}.png]]
	
	There is no need to install Chocolatey as the process fails or stays stuck in a endless loop if you click on it. But if your computer is compatible with it, you can choose to click on it. After deciding, click next to finish setting up NPM and NodeJS.
	
2. Opening the terminal by following these platform dependant steps.
   
   If you are on windows:
   - press the `windows` + `s` button on your keyboard
   - search for "Terminal" or "CMD" and press enter. 
   
   If you are on Mac, you can do one of the two:

- Click the Launchpad icon in the Dock, type Terminal in the search field, then click Terminal.

- In the Finder, open the /Applications/Utilities folder, then double-click Terminal.

3. Once the terminal is open,  run this command,  ```node -v ```. This command  verifies the if NodeJS is installed successfully. It should output some version number like =="v22.12.0"==.

4. Once the first command runs successfully and outputs a version, run a second command `npm -v`. This command verifies the if NPM is installed successfully. It should output some version number like =="10.9.0"==.

## Install Obsidian

1. Install obsidian by clicking on this link https://obsidian.md, choose the one that fits your operating system.

## Installing Visual Studio Code

1. Click on this link https://code.visualstudio.com and download VS Code, choose the one that fits your operating system. You can also install VS Code through the Microsoft Store.
   
2. After Installing, open VS Code. VS Code is an amazing Code IDE, but for our purposes, we will be using it's terminal feature to run commands later. Once it is open it should look somewhat like this:

![[{0D8C5453-6072-47F8-951F-CFE05350A43C}.png]]

   2. Click the profile account and click sign in with Github or some option like that. In my case the options I had are shown in the image below. Just click anything with the word "Sign in"
   
![[{F192901F-CEC1-46F1-95E4-7A29FA17EC59}.png]]

3. Clicking on the button will open a new tab in your browser which require you to sign in with your Github account. It will look a bit like this: 

	![[{C7046EBB-B856-44DA-92B7-6F3A9D700598}.png]]
	
	For me I get the option to directly continue as I have already signed in with Github in my browser. You may need to sign in with your Github account to continue. Once you sign in, you will be automatically redirected to VS Code again. It will look a bit like this:
	
	![[{280C431D-3B37-46AA-A894-0A134042D4B6}.png]]

## Installing Git

1. Click on this link https://git-scm.com/downloads and download Git, choose the one that fits your operating system. Click on the executable file and start the installation process.

2. Accept the GNU General Public License by clicking Next
   
	![[{7142485C-6E8F-44B9-857E-3850B10D3088}.png]]

3. Accept all the Checkboxes and Click Next
	
	![[{A292B9AA-73DF-4DD1-8426-30B860A04710}.png]]
   
4. Click on the dropdown menu and select `Use Visual Studio Code as Git's default Editor`. After Selecting Click Next.
	   
	![[{DE680762-D115-42AF-B55B-67BD7E1D5034}.png]]

5. Leave things as it is and click next. 
	  
	![[{DC534DAF-7877-4BF3-A399-8D3511253C31}.png]]

6. Leave things as it is and click next. 
	  
	![[{BEEB7078-FBA8-470C-832C-15BCA56CFE2C}.png]]

7. Leave this as it is, and click next.
	
	![[{AE4C754B-03D3-4F8C-8AF7-6F09145FEAC9}.png]]

8. Leave things as it is, and click next. 
	  
	![[{A4B006E7-73DF-4F66-852D-96E187318DBB}.png]]

9. Leave things as it is, and click next
	
	![[{F9B12053-B963-4D96-925A-3E5E97B45139}.png]]

10. Leave things as it is, and click next. 
    
    ![[{8D1002B4-14D5-4250-874A-4C7B641AE907} 1.png]]

11. Leave things as it is, and click next.
    ![[{7F692884-3D12-4970-B253-E3C283098E1C}.png]]

12. Leave things as it, and click next.
    
    ![[{097F7A87-912E-47DC-B540-2A909A1AE364}.png]]

13. Leave things as it is and click Install.
    ![[{9337CDC1-EB2A-432F-98AF-2655ABCA8A84}.png]]

## Setting up Git

1. Opening the terminal by following these platform dependant steps.
   
   If you are on windows:
   - press the `windows` + `s` button on your keyboard
   - search for "Terminal" or "CMD" and press enter. 
   
   If you are on Mac, you can do one of the two:

- Click the Launchpad icon in the Dock, type Terminal in the search field, then click Terminal.

- In the Finder, open the /Applications/Utilities folder, then double-click Terminal.

2. After the terminal is opened, type `git version` and press `Enter`, It should output something like this "git version" + the current version of Git.
   
3. After verifying that git is installed, run the following commands one by one in the terminal: 

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

## Installing Github Desktop

1.  Click on this link https://desktop.github.com/download/ and download Github Desktop, choose the one that fits your operating system. Install the application.

2. Once Github Destop is installed successfully. Open it up. 

3. Under Files, a dropdown menu in the top left, click the button labelled `options`. It should open a pop up menu and should look a bit like this :
	
	![[{3CBC4BE8-2569-4C0B-A97E-1CB05E3DDD30}.png]]

4. In my case, I have already signed in. You will be required to sign in. This will open a new tab in your browser, upon the completion of signing in, you should be redirected back to Github Destop.
   
5. Click `Git` in the drawer on the left.
	
	![[{9DC8FECA-42AB-4C05-8436-69B090DBFAAC}.png]]

6. If the name and the email are not the ones that are being used with your Github account or are blank, you will need to fill them in. For email, use the email that you are using with your Github account. After doing that click the `save` button.
   
# Cloning the project

1. If Github Desktop is not opened, Open it.

2. Under `Files`, click `Clone a repository`. A popup window should open that looks a bit like this :
	
	![[{349BD2F6-50FE-4323-BF64-ACF5F45E2A4B}.png]]

>[!warning] Account is not a contributor
> If you do not see a `harshp2008/Notes` option as highlighted above, that means that Harsh and contributors haven't given your permission. 
> <h2 style="text-align: center; border: 2px dashed black; padding: 5px; border-radius: 5px">DO NOT ATTEMPT TO CONTINUE <br> WITH THE SETUP</h2>
> 
> Your account is not a contributor yet. To continue on with this step, you will be required to message Harsh or any other existing contributors. Message your ==Real Name== and your ==Github username== and we will provide you contributor access and notify you back when that's done . 

3. Click on `harshp2008/Notes`. This will clone the online repository to your device.

4. 


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





