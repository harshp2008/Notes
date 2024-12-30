---
title: Projectile Motion
draft: false
tags:
  - physics
Authors:
  - Harsh
---
---

[[Section 3 - Motion with Gravity| Previous Section : Motion with Gravity]]
[[Section 5 - Moving through Fluids | Next Section : Moving through Fluids]]


---
# Introduction to 2 Dimensional Motion

**Motion in two different perpendicular directions are non-independant of each other**, i.e if the speed in x-axis is $3\space ms^{-1}$ and speed in y-axis is $6\space ms^{-1}$, then we can treat both of them as different and apply kinematic laws individually to both. This makes understanding motion of objects much easier.

For questions where the x-axis, y-axis values are not explicitly given and a angle is given instead, we can split the x and y components of it and solve it. This is called as resolutions of vector.

![[Resolution-of-Vector.jpg]]

Given a vector with a magnitude $R$ and an angle $\theta$ we can resolute the vector:

$\large{R_x=R\cos\theta}$

$\large{R_y=R\sin\theta}$

> [!tip] Resolute Vectors with Bearing  
> given a vector with a magnitude $u$ with a bearing $\theta \degree$, the vector can resolute into it's components.
>
> ![[A.1 - Resolute Vectors with Bearing.svg]]
>
> $\large{R_x=R\sin\theta}$
>
> $\large{R_y=R\cos\theta}$

> [!example] Example Question
> Given that an object is travelling with a velocity of $50 \space ms^{-1}$ on a bearing of $300\degree$ and has acceleration of $5 \space ms^{-2}$ on a bearing of $30\degree$ which is slowing it down. Find the time it takes for the object's vertical velocity to be $5\space ms^{-1}$.

> [!solution] Solution
>
> <font color="#c00000">Resolute the Speed vector</font>
>
> $\large{u_x=50\sin(300\degree)} = -\space25\sqrt{3}$
>
> $\large{u_y=50\cos(300\degree)} = 25$
>
> <font color="#c00000">Resolute the Acceleration vector</font>
>
> $\large{a_x=5\sin(30\degree)} = 2.5$
>
> $\large{a_y=5\cos(30\degree)} = \dfrac{5}{2}\sqrt{3}$
>
> <font color="#c00000">Solve for $v_y = 0$ using ${v = u + at}$</font>
>
> ${v_y = u_y + (a_y)t}$
>
> $5 =(\space25\space) + (\space\dfrac{5}{2}\sqrt{3}\space) \times t$
>
> $(\space\dfrac{5}{2}\sqrt{3}\space) \times t = -20$
>
> $t = -\dfrac{8 \sqrt3}{3} \space s\approx -4.62 \space s$
>
> It takes approximately$-4.62 \space s$ for the object to reach the vertical velocity of $5 \space ms^{-2}$


# Projectile motion in 2 dimensions

## Introduction

Projectile motion can be observed when an object travels through the air with uniform motion and negligible air resistance. 

By analysing and understanding projectile motion and the mathematics behind we can:
- Max Height
- Time taken to reach max height 
- Range (maximum horizontal distance from initial point) 
- Find the ideal angle for maximising for the following: (==extra==)
	- range
	- flight time
	- Max Height
	- greatest x or y components of the velocity just before impacting the floor.
	- and others (with air resistance).

But in hindsight all of that seem a bit boring, mostly cause they are mathematical properties and not real life application. Here are some real life applications:

> [!example] Example Question 1
> Find the minimum angle required for a tennis player who has a attack speed of $40 \space ms^{-1}$ to clear a $2 \space m$ tall net which is $12 \space m$ away from where the player serves the ball. Assume air resistance is negligible.

> [!example] Example Question 2
> A plane travelling at 3000 meter (cruising altitude) above the sea is perfectly parallel with the water. It has an initial velocity of 270 $ms^{-1}$ and has the motion of the plane is uniform.
> 
> The plane suddenly faces cabin depressurisation and it's required to descend to 900 meters above sea level immediately. Given that the plane has the same initial speed but is now titled $15 \degree$ down and has a uniform vertical acceleration of $-19.8 \space ms^{-2}$. 
> 
> How long will it take for the plane to reach 900 meters. 


> [!example] Example Question 3
> An archer is standing 100 meters away from the middle of a train track which has a tiny moving train with a target board attached to it. The center of the target board is at the same height of arrow that will be released form.
> 
> The train track is also 100 meter long and the train moves at 10 meters per second. The train starts to move once the the arrow has been released from the archer's hand.
> 
> Given that the archer has his bow at a 30 degree's from the ground and no air resistance. Find the speed at which the arrow must be released with, such that the once the arrow is released it will perfectly hit the target board mounted on the train. 

The last two questions are lengthy to read and can be a bit challenging to solve but once a proper diagram has been setup, the question will be a piece of cake. 

The real life example questions can be made harder by including air resistance. The 3rd question can be made harder by changing the speed of the train to be a sin wave function with an amplitude of 30 meters and the 1 cycle of the wave will be a 1 back-and forth motion.

But for the sake of IB, question will be kept fairly simple to answer, so there's nothing to worry about.  

## The Basic Model
   
Let's further understand projectile motion by analysing the path taken by a ball that is kicked by a soccer player. (Assume air resistance to be negligible)

![[A.1 - ball projectile motion.svg|100%]]

Let's define a couple variable before we move forward

| Variable | What it denotes                                                       |
| :------: | --------------------------------------------------------------------- |
| $\theta$ | Initial angle of attack                                               |
|   $u$    | Initial Speed / initial Velocity ( if $\theta$ is not given )         |
|  $u_x$   | x-component of the initial velocity                                   |
|  $u_y$   | y-component of the initial velocity                                   |
|   $g$    | acceleration due to gravity ($\space g = 9.81 \space ms^{-2} \space$) |
|   $s$    | Displacement at time t                                                |
|   $v$    | Velocity at time t                                                    |
|   $t$    | time                                                                  |
|   $H$    | Max height                                                            |
|   $T$    | Time taken to reach Max height                                        |
|   $2T$   | Time taken to for ball to be thrown and return to the ground          |

Let's resolute the acceleration and velocity vectors to understand it further.

| Variables                  |       x       |       y       |
| :------------------------- | :-----------: | :-----------: |
| Initial displacement (D)   |       0       |       0       |
| Initial velocity ($u$)     | $u\cos\theta$ | $u\sin\theta$ |
| initial acceleration ($a$) |       0       |     $-g$      |
>[!warning] Be Careful of Initial Displacement
>The Initial displacement in this case is 0 for both X and Y, but this need not to be the case. We will look at how to solve question, which have non-zero Initial Displacement, in another sub-section below.

### Finding velocity for any point in time $\large{t}$

using $\large{v =u + at}$, 

| Horizontal velocity ($v_x$)                                                 | Vertical velocity ($v_y$)                                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <br>$\large{v_x = (u\cos\theta) + (0)t}$<br><br>$\large{v_x = u\cos\theta}$ | <br>$\large{v_y = (u\sin\theta) + (-g)t}$<br><br>$\large{v_y = u\sin\theta - gt}$ |
### Finding displacement for any point in time $\large{t}$

using $\large{s = ut + \frac{1}{2}at^2}$,

| Horizontal displacement ($s_x$)                                                                  | Vertical displacement ($s_y$)                                                                                        |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| <br>$\large{s_x = (u\cos\theta)t + \frac{1}{2}(0)t^2}$<br><br>$\large{s_x = u\cos\theta\cdot t}$ | <br>$\large{s_y = (u\sin\theta)t + \frac{1}{2}(-g)t^2}$<br><br>$\large{s_y = u\sin\theta \cdot t - \frac{1}{2}gt^2}$ |

>[!info] Extra information
Notice how the horizontal velocity is constant throughout the motion. This will mostly be the case for most of the questions you will face, unless the questions mentions air resistance or some sort of acceleration for example:
>
>- A rocket being launched from the side of a cliff.
>- A rocket being launched at an angle into the sky.
>- A rock being launched from a catapult (air resistance included)
>- Trajectory of a glider with a motor, propelling it forward horizontally with an acceleration of A, and generates a lift force F, while it's vertical height reduces over time. If the mass of the glider is M, Find the maximum range of the flight, given that it starts H meters over the ground, (ignore air resistance). 
>
>The last question isn't too hard once you will make yourself familiar with basic calculus and the next unit : [[Unit A.2 - Forces and Momentum | Forces and Momentum]]

Let's go back to analysing the original example.

### Finding the time to reach max height ( $T$ )

>[!tip] Velocity at max height
>- Vertical speed of the projectile will be 0.
>- Horizontal speed will remain unchanged. 
>  
> 	 (air resistance is considered to be negligible)


Using this information, we can equate $v = u + at$ to $0$ and solve for t, to get max time.

$(v_y) = (u\sin\theta) +(-g)(T)$

$(0) = u\sin\theta -g(T)$

$T = \dfrac{u\sin\theta}{g}$

### Finding the max height ( $H$ )

Given that time at max height is  $T = \dfrac{u\sin\theta}{g}$, we can substitue T into $s_y = u\sin\theta \cdot t - \dfrac{1}{2}gt^2$

$s_y = u\sin\theta \cdot (\space \dfrac{u\sin\theta}{g} \space) - \dfrac{1}{2}g(\space \dfrac{u\sin\theta}{g} \space)^2$

$s_y =  \dfrac{2(u\sin\theta)^2}{2g} \space - \dfrac{(u\sin\theta)^2}{2g}$

$s_y =  \dfrac{u^2\sin^2\theta}{2g} \space$

### Finding the time taken by the ball to return to the floor ( $2T$ )

>[!tip] Time taken to return to the floor
>If the ball is thrown up and returns to the same level as before, ==the time taken for this will be **twice** the time taken for the ball to reach max height==.

$\text{time taken} = 2T$

$\text{time taken} = 2(\dfrac{u\sin\theta}{g})$

$\text{time taken} = \dfrac{2u\sin\theta}{g}$

### Finding the Range

Given that time when the projectile returns to the floor is,  $\text{time taken} = \dfrac{2u\sin\theta}{g}$, we can substitue the time taken into $\large{s_x = u\cos\theta\cdot t}$

$\text{range} = u\cos\theta\cdot (\dfrac{2u\sin\theta}{g})$

$\text{range} =  \dfrac{u^2 (  2\sin\theta \cdot \cos\theta)}{g}$

$\text{range} =  \dfrac{u^2 \sin(2\theta)}{g}$

********

## Projectile Motion Cheat Sheet

Before we move on to solving some questions, here is a list containing  equations and variables that we have studied. You must make yourself familiar with them in order to score well in IB.

If you are thinking that you can derive this equations on the spot like how I did, think again, you will take too much time in deriving it and also you may make mistakes. So I highly recommend you to just memorise them.

I am just going to leave the picture above for easy reference:

![[A.1 - ball projectile motion.svg|100%]]

| Variable | What it denotes                                                       |
| :------: | --------------------------------------------------------------------- |
| $\theta$ | Initial angle of attack                                               |
|   $u$    | Initial Speed / initial Velocity ( if $\theta$ is not given )         |
|  $u_x$   | x-component of the initial velocity                                   |
|  $u_y$   | y-component of the initial velocity                                   |
|   $g$    | acceleration due to gravity ($\space g = 9.81 \space ms^{-2} \space$) |
|   $s$    | Displacement at time t                                                |
|   $v$    | Velocity at time t                                                    |
|   $t$    | time                                                                  |
|   $H$    | Max height                                                            |
|   $T$    | Time taken to reach Max height                                        |
|   $2T$   | Time taken to for ball to be thrown and return to the ground          |

| Formula solves for                                   | Formula                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| <t> </t>                                             |                                                            |
| <mark><strong>Velocity Equations</strong></mark>     |                                                            |
| Horizontal Velocity ($v_x$)                          | $\large{v_x = u\cos\theta}$                                |
| Vertical Velocity ($v_y$)                            | $\large{v_y = u\sin\theta - gt}$                           |
| <t> </t>                                             |                                                            |
| <mark><strong>Displacement Equations</strong></mark> |                                                            |
| Horizontal Displacement ($s_x$)                      | $\large{s_x = u\cos\theta\cdot t}$                         |
| Vertical Displacement ($s_y$)                        | $\large{s_y = u\sin\theta \cdot t - \frac{1}{2}gt^2}$      |
| <t> </t>                                             |                                                            |
| Time to reach Max height (T)                         | $T = \large{\dfrac{u\sin\theta}{g}}$                       |
| <t> </t>                                             |                                                            |
| Max Height (H)                                       | $\large{s_y =  \dfrac{u^2\sin^2\theta}{2g} \space}$<br>    |
| <t> </t>                                             |                                                            |
| Time taken to return to the floor (2T)               | $2T = \large{\dfrac{2u\sin\theta}{g}}$                     |
| <t> </t>                                             |                                                            |
| Range / Max Horizontal Distance (H)                  | $\large{\text{range} =  \dfrac{u^2 \sin(2\theta)}{g}}$<br> |


---

<h1 style="text-align: center; border:3px Dashed black; padding:20px">Please ignore this segment of the notes </h1>
<h4 style="text-align: center; ">The difficulty of questions has not been moderated yet</h4>

---

![[Projectile Motion -  Questions|100%]]

