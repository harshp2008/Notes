---
title: Unit A.1 - Kinematics
draft: false
tags:
  - physics
Authors:
  - Harsh
---

[[Physics Home Page | Back to Homepage]]
[[Unit A.2 - Forces and Momentum | Next Unit : Forces and Momentum]]

---

# Describing Motion (Kinematics)

> [!info] Define Scalar
>
> - A scalar is a physical quantity that has size but no direction
> - Examples:
>   - Distance
>   - Speed
>   - Work Done and Energy
>   - Power
>   - Mass
>   - <u>Temperature</u>
>     (may have positive and negative values but still has **no inherit direction** thus it is a **scalar**)

> [!info] Define Vector
>
> - A vector is a physical quantity that has size and direction
> - <u>Examples:</u> - Displacement - Velocity - Acceleration - Force - Time
>   <br>
> - Any unit that relies on a vector quantity is a vector
> - <u>Examples:</u> - Pressure = Force / Area - Force is a **Vector** and Area is a **Scalar** > <br> - Momentum = Mass \* Velocity - Mass is a **Scalar** and Velocity is a **Vector**

## Defining kinematic quantities

### Distance Vs Displacement

> [!info] Distance
>
> - The **total length of the path** an object takes, regardless of its starting or ending point.
> - Distance is a **scalar** quantity
> - Si unit is ==meter==
> - Distance is denoted with a ==" d "==

> [!info] Displacement
>
> - The **change in position** of an object from its starting point to its ending point.
> - Si unit is ==meter==
> - Displacement is a **vector** quantity.
> - Displacement can be found by drawing a straight line between two points
> - displacement is denoted with a ==" s "==

![[Distance vs displacement.webp]]

### Speed Vs Velocity

> [!info] Speed
>
> - Speed is the rate at which an object travels a **distance over time**
> - Si unit is $ms^{-1}$.
> - Speed is a **scalar** quantity
> - Speed can be found by taking the gradient of a distance-time graph
> - Speed is denoted by " $v$ " (italics)
>   
>    $Speed = \dfrac{\triangle distance }{\triangle time}$

> [!info] Velocity
>
> - Velocity is the rate at which an object changes its **displacement over time**.
> - Si unit is $ms^{-1}$.
> - Velocity is a **vector** quantity.
> - Velocity can be found by taking the gradient of a displacement-time graph
> - Speed is denoted by " $v$" (bold)
>   
>     $veloctiy = \dfrac{ds}{dt}$

![[Speed vs Velocity.png]]

#### Average Speed vs Velocity

> [!info] Average Speed
>
> - Average speed is the **total distance** travelled divided by the total time taken.
> - Average Speed is a **scalar**
> - Average speed is **always positive** and ==doesn't indicate the direction of motion==.
> - Can be found by taking the area under a d-t graph and dividing by the time
>   
>   $Average \space Speed = \dfrac{total \space distance}{time}$

> [!info] Average Velocity
>
> - Average velocity is the displacement divided by the time.
> - Average Speed is a **vector**.
> - Can be found by taking the area under a s-t graph and dividing by the time
>   
>   $Average \space Velocity = \dfrac{displacement}{time} = \dfrac{\triangle \space position}{\triangle \space time}$ 
>
>   $Average \space Velocity = \dfrac{\triangle x_{final} - \triangle x_{initial}}{\triangle t_{final} - \triangle t_{initial}}$

#### Instantaneous Speed vs Velocity

> [!info] Instantaneous Speed
>
> - Instantaneous speed is ==the speed of an object at a specific moment in time==
> - Instantaneous Speed is a **scalar**.
> - can be found by taking the gradient at a specific time value in a d-t graph
>   <br> $Instantaneous \space Speed = \dfrac{distance \space travelled \space at \space time \space t}{t}$

> [!info] Instantaneous Velocity
>
> - Instantaneous speed is ==the velocity of an object at a specific moment in time==
> - Instantaneous Speed is a **vector**.
> - can be found by taking the gradient at a specific time value in a s-t graph
>   
>    $Instantaneous \space Velocity = \dfrac{displacement \space at \space t=T }{T}$

### Acceleration

> [!info] Acceleration
>
> - Acceleration is the rate at which an object changes its **velocity over time**.
> - Si unit is $ms^{-2}$.
> - Acceleration is a **vector** quantity.
> - Acceleration can be found by taking the gradient of a Velocity time graph
> - Speed is denoted by " $a$ "
>   <br> ${acceleration = \dfrac{d^2s}{dt^2} \space or \space \dfrac{velocity}{time \space taken}}$

> [!info] Average Acceleration
>
> - Average velocity is the **overall velocity over the time period**.
> - Average acceleration is a **vector**.
> - Can be found by taking the area under a v-t graph and dividing by the time
>   <br> ${Average \space acceleration = \dfrac{\triangle \space Velocity}{\triangle \space time} = \dfrac{\triangle v - \triangle u}{\triangle t_{2} - \triangle t_{1}}}$

#### Instantaneous acceleration

> [!info] Instantaneous acceleration
>
> - Instantaneous acceleration is ==the acceleration of an object at a specific moment in time==
> - Instantaneous acceleration is a **vector**.
> - can be found by taking the gradient at a specific time value in a v-t graph
>   <br> ${Instantaneous \space acceleration = \dfrac{Velocity \space at \space t=T }{T}}$

## Analysing Graphs (Incomplete)

![[d-t graphs.jpg]]

- Distance-time Graphs
- Displacement-time Graphs

- Speed-time Graphs
- Velocity-time Graphs

- Acceleration-time Graphs

# Kinematic (suvat) Equations of motion

Kinematic equations are sets of 5 equations that show the relation between 5 variable if acceleration is constant throughout the motion i.e the motion is uniform.

> [!correct] Kinematic equations can used in the following cases:
>
> - Ball rolling of a inclined Plane
> - Sky diver free falling with **no air resistance**
> - Car speeding up with a constant acceleration
> - Moving car slowing down with a constant acceleration
> - Arrow / ball flying in the air and landing with **no air resistance** (complex)

> [!incorrect] Kinematic equations cannot used in the following cases:
>
> - Ball rolling of a curved plane
> - Sky diver free falling with **air resistance**
> - Car speeding up with a non-constant acceleration
> - Moving car slowing down with a non-constant acceleration
> - Arrow / ball flying in the air and landing with **air resistance** (complex)

> [!warning] **air resistance** can be included given that it stays consistent over time but that doesn't usually happen as it depends on the current speed of object. Due to this the force changes causing the motion to be non-uniform i.e acceleration is not constant.

> [!info] What does SUVAT stand for :
>
> - S - displacement
> - U - initial speed
> - V - final speed
> - A - acceleration (needs to be constant)
> - T - time taken

## Kinematic Equations

| Equations                    | Suvat Definitions                        |
| ---------------------------- | ---------------------------------------- |
| ${v = u + at}$               | ${s \space-\space \text{displacement}}$  |
| ${s = \frac{1}{2}(u+v)t}$    | ${u \space-\space \text{initial speed}}$ |
| ${s = ut + \frac{1}{2}at^2}$ | ${v \space-\space \text{final speed}}$   |
| ${s = vt - \frac{1}{2}at^2}$ | ${a \space-\space \text{acceleration}}$  |
| ${v^2 - u^2 = 2as}$          | ${t \space-\space \text{time}}$          |

## Deriving Suvat Equations [Extra]

Suvat equations come from observing patterns in velocity-time graphs. Here is the velocity-time graph that bodies with uniform motion follows.

![[suvat equation triangle.png]]

Looking at the equation of the straight-line in the velocity graph above we can see:

${v = u + at} \space\space\rightarrow \text{Equation 1}$

Given that the area under the curve is the displacement ($s$) and the the green triangle + yellow rectangle above adds up to that we can observe that:

${s = ut + \frac{1}{2} * (v - u)t}$

${s = t(u + \frac{1}{2} * v - \frac{1}{2}u)}$

${s = t(\frac{1}{2} * u + \frac{1}{2}v)}$

${s = \frac{1}{2}t(u + v)} \space\space\rightarrow \text{Equation 2}$

Substituting **Equation 1** into **Equation 2** we get:

${s = \frac{1}{2}t(u + [\space u + at \space])}$

${s = \frac{1}{2}t(2u + at)}$

${s = ut + \frac{1}{2}at} \space\space\rightarrow \text{Equation 3}$

Rearranging **equation 1** in for $u$ gives:

${v = u + at}$

${v - at = u}$

${u = v - at}$

and substituting that into **equation 2** gives :

${s = \frac{1}{2}t([\space v - at \space] + v)}$

${s = \frac{1}{2}t(2v - at)}$

${s = vt - \frac{1}{2}at} \space\space\rightarrow \text{Equation 4}$

For the last equation we need to square **equation 1** :

${v = u + at} \space\space\rightarrow \text{Equation 1}$

${(v)^2 = (u + at)^2}$

${v^2 = u^2 + 2(u)(at) + (at)^2}$

Rearrange it!

${v^2 - u^2 = 2a(ut) + a(at^2)}$

${v^2 - u^2 = 2a[\space ut + \frac{1}{2}at^2\space]}$

The text in the square brackets is exactly **equation 3**. We can substitute it into the equation above.

${v^2 - u^2 = 2a[s]}$

${v^2 - u^2 = 2as \space\space\rightarrow \text{Equation 5}}$

# Motion with Gravity (Projectile Motion)

## Introduction

Watch a dog catching a ball thrown high into the air. It is a remarkable feat of coordination by the animal. What is the physics of the motion? The ball is moving in two dimensions, and it is subject to the vertical acceleration of gravity and the deceleration of air resistance. How do physicists treat this complex situation? The trick they use is to split it up into horizontal and vertical components.

When an object is released close to Earth’s surface, it accelerates downwards. The force of gravity acts on the object, pulling it towards the centre of Earth. Equally, the object pulls with the same force on Earth in the opposite direction. Not surprisingly, with small objects, the effect of the force on Earth is so small that you do not notice it.

## Is the gravitational field strength ($g$) constant everywhere ?

The acceleration due to gravity at Earth’s surface is given the symbol $g$ . The accepted value varies from place to place on the surface. For example, in Kuala Lumpur g is $9.776 \space ms^{-2}$ whereas in Stockholm it is $9.818 \space ms^{-2}$ . This is because Earth is not a perfect sphere (it is slightly flattened at the poles) and the densities of the rocks in different locations vary. The different tangential speeds of Earth at different latitudes also have an effect. It is better to buy gold by weight at the equator and sell it at the North Pole rather than the other way round—of course, buying by mass makes no difference!

> [!info] But for answering questions if the $g$ value is not specified use $g=9.81\space ms^{-2}$

## Acceleration Under Gravity

[[A.1 - junk 1]]

![[Pasted image 20241216171204.png|400]]

A baseball is thrown vertically upwards with an initial speed $u$. Gravity acts on the baseball from the moment of its release, slowing it down until it stops for an instant at the top of its motion. Gravity continues to act and the baseball now accelerates downwards to reach the ground with the same speed at which it was released. Without air resistance, the displacement–time graph would look like Figure 1 below. The ball goes vertically up and then down to land in the same spot from which it was projected. The path in the air is called the trajectory and is a vertical line up and down for this case.

A distance–time graph would look different (Figure 2). It gives similar information but without the direction part of the displacement and velocity vectors. Make sure that you understand the difference between these graphs.

|                   Displacement-time graph                   |                        Distance-time graph                         |
| :---------------------------------------------------------: | :----------------------------------------------------------------: |
| ![[{D1A7F92B-AA85-4653-B48B-1144202385C7}.png]]<br>figure 1 | ![[{874E6162-6009-4741-85EC-8CEB30AE1C01}.png\|250px]]<br>figure 2 |

|                     Velocity-time graph                     |                      Speed-time graph                       |
| :---------------------------------------------------------: | :---------------------------------------------------------: |
| ![[{5F846B84-1B35-4A2B-A80F-40B6E11ADEEF}.png]]<br>Figure 3 | ![[{9F8C94D7-3E19-43D7-9E2B-3693C9F5F95C}.png]]<br>Figure 4 |

### Suvat Equation Analyses

The suvat equations introduced earlier can be used to analyse this motion. The initial vertical speed is u, the time to reach the highest point is T, the maximum height is H and the acceleration of the ball is –g; g has a negative sign because upwards is the positive direction. As the acceleration due to gravity is downwards, g must have the opposite, that is, negative, sign.

The kinematic equations are printed again but with differences to reflect the vertical motion to the highest point:

> [!info] Here's a copy of the suvat equations
>
> | Equations                    | Suvat Definitions                           |
> | ---------------------------- | ------------------------------------------- |
> | ${v = u + at}$               | ${s \space-\space \text{displacement}}$     |
> | ${s = \frac{1}{2}(u+v)t}$    | ${u \space-\space \text{initial speed}}$    |
> | ${s = ut + \frac{1}{2}at^2}$ | ${v \space-\space \text{final speed}}$      |
> | ${s = vt - \frac{1}{2}at^2}$ | ${a \space-\space \text{acceleration}}$<br> |
> | ${v^2 - u^2 = 2as}$          | ${t \space-\space \text{time}}$             |

> [!info] When the object is at maximum height (H) the vertical velocity = 0

| <center>Equations</center>  | <center>Derived from</center> |
| --------------------------- | ----------------------------- |
| ${T = \dfrac{u}{g}}$        | ${v = u + at}$                |
| ${H = uT -\frac{1}{2}gT^2}$ | ${s = ut + \frac{1}{2}at^2}$  |
| ${H = \dfrac{u^2}{2g}}$     | ${v^2 - u^2 = 2as}$           |

> [!tip] TIP : the time taken for an object to be thrown up vertically and come back down to its same height from where it was thrown from is:
> ${Time\space taken = 2T = \dfrac{2u}{g}}$

### Worked Examples

> [!example] Example Question 1:
>
> A student drops a stone from rest at the top of a well. She hears the stone splash into the water at the bottom of the well $2.3 \space s$ after releasing the stone. Ignore the time taken for the sound to reach the student from the bottom of the well. The acceleration due to gravity $g$ is $9.8 \space ms^{-2}$ .
>
> 1.  Calculate the depth of the well.
> 2.  Calculate the speed at which the stone hits the water surface.
> 3.  Explain why the time taken for the sound to reach the student can be ignored

> [!solution] Solution:
>
> <u>Part 1</u>
>
> ${u = 0;\space t=2.3\space s}$
>
> ${s = ut + \frac{1}{2}at^2}$
>
> ${s = 0 + \frac{1}{2} \times 9.8 \times 2.3^2}$
>
> ${s=26\space m}$ ><br>
>
> <u>Part 2</u>
>
> ${v = u + at}$
>
> ${v = 0 + 9.8 \times 2.3}$
>
> ${v = 23 \space ms^{-1}}$
>
> <br>
>
> <u>Part 3</u>
>
> The speed of sound is about $300 \space ms^{-1}$ and so the time to travel about $25 \space m$ is about $0.08 \space s$. This is only about 4% of the time taken for the stone to fall.

> [!Example] Example Question 2
> A hot-air balloon is rising vertically at a constant speed of $5.0 \space ms^{-1}$ . A small object is released from rest relative to the balloon when the balloon is $30 \space m$ above the ground. Calculate:
>
> 1. the maximum height of the object above the ground
> 2. the time taken to reach the maximum height
> 3. the total time taken for the object to reach the ground.

> [!solution] Solution:
> ![[A.1 - worked example 1.svg]]
>
> The object is moving upwards at $+\space 5.0 \space ms^{-1}$ when it is released. The acceleration due to gravity is $- \space 9.8\space ms^{-2}$ . The speed at max height is 0, thus we can take $v = 0 \space ms^{-2}$. and the time taken to reach max height is denoted by "$\space T\space$"
>
> So $u = +5.0 \space ms^{-1}$ and $a =-9.8\space ms^{-2}$
>
> <u>Part 1</u>
>
> Using $H = \dfrac{u^2}{2g}$,
>
> $H = \dfrac{(5.0)^2}{2(9.8)}$
>
> $H = +1.28 \space m$
>
> <br>
>
> <u>Part 2</u>
>
> Using $T = \dfrac{u}{g}$,
>
> $T = \dfrac{5.0}{9.8}$
>
> $T = +0.51 \space s$
> <br>
> <u>Part 3</u>
>
> If we imagine that the starting position of the object to be as $0\space m$, the highest point to be at $+1.28\space m$ and the ground to be at $-30\space m$ relative from the starting point we can easily use ${s = ut + \frac{1}{2}at^2}$ to find the total time taken.
>
> $\large{s = ut + \frac{1}{2}at^2}$
>
> $(-30) = (5.0)t + \frac{1}{2}(-9.8)t^2$
>
> $5t + (-4.9)t^2 = -30$
>
> $4.9t^2 -5t -30 = 0$
>
> Use the quadratic formula, $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, solve for t
>
> $time\space taken = \dfrac{-(-5) \pm \sqrt{(-5)^2 - 4(4.9)(-30)}} {2(4.9)} \space s$
>
> $time\space taken = \dfrac{25 \pm 5\sqrt{613}}{49} \space s$
>
> negative values of time is rejected so $time\space taken = +3.04 \space s$
>
> Notice that, in this example, if you carry the signs through consistently, they give you information about the motion of the object.

## Projectile Motion

### Introduction to 2 Dimensional Motion

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

---

<h1 style="text-align:center">WORK IN PROGRESS FROM THIS POINT FORWARD</h1>

---

### Projectile motion in 2 dimensions

#### Introduction

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

1. Find the minimum angle required for a tennis player who has a attack speed of $40 \space ms^{-1}$ to clear a $2 \space m$ tall net which is $12 \space m$ away from where the player serves the ball. Assume air resistance is negligible.

2. A plane travelling at 3000 meter (cruising altitude) above the sea is perfectly parallel with the water. It has an initial velocity of 270 $ms^{-1}$ and has the motion of the plane is uniform.
   
   The plane suddenly faces cabin depressurisation and it's required to descend to 900 meters above sea level immediately. Given that the plane has the same initial speed but is now titled $15 \degree$ down and has a uniform vertical acceleration of $-19.8 \space ms^{-2}$. 
   
   How long will it take for the plane to reach 900 meters. 

3. An archer is standing 100 meters away from the middle of a train track which has a tiny moving train with a target board attached to it. The center of the target board is at the same height of arrow that will be released form.
   
   The train track is also 100 meter long and the train moves at 10 meters per second. The train starts to move once the the arrow has been released from the archer's hand.
   
   Given that the archer has his bow at a 30 degree's from the ground and no air resistance. Find the speed at which the arrow must be released with, such that the once the arrow is released it will perfectly hit the target board mounted on the train. 

The last two questions are lengthy to read and can be a bit challenging to solve but once a proper diagram has been setup, the question will be a piece of cake. 

The real life example questions can be made harder by including air resistance. The 3rd question can be made harder by changing the speed of the train to be a sin wave function with an amplitude of 30 meters and the 1 cycle of the wave will be a 1 back-and forth motion.

But for the sake of IB, question will be kept fairly simple to answer, so there's nothing to worry about.  

#### The Basic Model
   
Let's further understand projectile motion by analysing the path taken by a ball that is kicked by a soccer player. (Assume air resistance to be negligible)

![[A.1 - ball projectile motion|100%]]

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
|    t     | time                                                                  |
|   $H$    | Max height                                                            |
|   $T$    | Time taken to reach Max height                                        |
|   $2T$   | Time taken to for ball to be thrown and return to the ground          |

Let's resolute the acceleration and velocity vectors to understand it further.

| Variables                  |       x       |       y       |
| :------------------------- | :-----------: | :-----------: |
| Initial displacement (D)   |       0       |       0       |
| Initial velocity ($u$)     | $u\cos\theta$ | $u\sin\theta$ |
| initial acceleration ($a$) |       0       |     $-g$      |
##### Finding velocity for any point in time $\large{t}$

using $\large{v =u + at}$, 

| Horizontal velocity ($u_x$)                                                 | Vertical velocity ($u_x$)                                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <br>$\large{v_x = (u\cos\theta) + (0)t}$<br><br>$\large{v_x = u\cos\theta}$ | <br>$\large{v_y = (u\sin\theta) + (-g)t}$<br><br>$\large{v_y = u\sin\theta - gt}$ |
##### Finding displacement for any point in time $\large{t}$

using $\large{s = ut + \frac{1}{2}at^2}$,

| Horizontal displacement ($u_x$)                                                                  | Vertical displacement ($u_x$)                                                                                        |
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

##### Finding the time to reach max height ( $T$ )

>[!tip] Velocity at max height
>- Vertical speed of the projectile will be 0.
>- Horizontal speed will remain unchanged. 
>  
> 	 (air resistance is considered to be negligible)


Using this information, we can equate $v = u + at$ to $0$ and solve for t, to get max time.

$(v_y) = (u\sin\theta) +(-g)(T)$

$(0) = u\sin\theta -g(T)$

$T = \dfrac{u\sin\theta}{g}$

##### Finding the max height ( $H$ )

Given that time at max height is  $T = \dfrac{u\sin\theta}{g}$, we can substitue T into $s_y = u\sin\theta \cdot t - \dfrac{1}{2}gt^2$


$s_y = u\sin\theta \cdot (\space \dfrac{u\sin\theta}{g} \space) - \dfrac{1}{2}g(\space \dfrac{u\sin\theta}{g} \space)^2$

$s_y =  \dfrac{2(u\sin\theta)^2}{2g} \space - \dfrac{(u\sin\theta)^2}{2g}$

$s_y =  \dfrac{u^2\sin^2\theta}{2g} \space$

##### Finding the time taken for the ball to return to the floor ( $2T$ )

>[!tip] Time taken to return to the floor
>If the ball is thrown up and returns to the same level as before, ==the time taken for this will be **twice** the time taken for the ball to reach max height==.

$\text{time taken} = 2T$

$\text{time taken} = 2(\dfrac{u\sin\theta}{g})$

$\text{time taken} = \dfrac{2u\sin\theta}{g}$

##### Finding the Range

Given that time when the projectile returns to the floor is,  $\text{time taken} = \dfrac{2u\sin\theta}{g}$, we can substitue the time taken into $\large{s_x = u\cos\theta\cdot t}$

$\text{range} = u\cos\theta\cdot (\dfrac{2u\sin\theta}{g})$

$\text{range} =  (\dfrac{u^2 (  2\sin\theta \cdot \cos\theta)}{g})$

$\text{range} =  (\dfrac{u^2 \sin(2\theta)}{g})$



********

![[Projectile Motion -  Questions|100%]]

