---
title: Unit A.1 - Kinematics
draft: false
tags:
  - physics
---

[[Physics Home Page | Back to Homepage ]]
[[Unit A.2 - Forces and Momentum | Next Unit : Forces and Momentum ]]

---

# Describing Motion (Kinematics)

>[!info] Define Scalar
> - A scalar is a physical quantity that has size but no direction
> - Examples: 
> 	- Distance
> 	- Speed 
> 	- Work Done and Energy
> 	- Power
> 	- Mass
> 	- <u>Temperature</u>
> 	  (may have positive and negative values but still has **no inherit direction** thus it is a **scalar**)
> 	

>[!info] Define Vector
> - A vector is a physical quantity that has size and direction
> - <u>Examples:</u> 
> 	- Displacement
> 	- Velocity
> 	- Acceleration
> 	- Force
> 	- Time
> <br>
> - Any unit that relies on a vector quantity is a vector 
> - <u>Examples:</u>
> 	- Pressure = Force  / Area 
> 	- Force is a **Vector** and Area is a **Scalar**
> <br>
> 	- Momentum = Mass  * Velocity 
> 	- Mass  is a **Scalar** and Velocity is a **Vector**

## Defining kinematic quantities 

### Distance Vs Displacement

>[!info] Distance
> - The **total length of the path** an object takes, regardless of its starting or ending point.
> - Distance is a **scalar** quantity
> - Si unit is ==meter==
> - Distance is denoted with a ==" d "==


>[!info] Displacement 
>- The **change in position** of an object from its starting point to its ending point. 
>- Si unit is ==meter==
>- Displacement is a **vector** quantity.
>- Displacement can be found by drawing a straight line between two points
>- displacement is denoted with a ==" s "==

![[Distance vs displacement.webp]]


### Speed Vs Velocity

>[!info] Speed
> - Speed is the rate at which an object travels a **distance over time**
> - Si unit is $ms^{-1}$.
> - Speed is a **scalar** quantity
> - Speed can be found by taking the gradient of a distance-time graph
> - Speed is denoted by " $v$ " (italics)
> <br>
> $Speed = \dfrac{\triangle distance }{\triangle time}$

>[!info] Velocity
>- Velocity is the rate at which an object changes its **displacement over time**.
>- Si unit is $ms^{-1}$.
>- Velocity is a **vector** quantity.
>- Velocity can be found by taking the gradient of a displacement-time graph
>- Speed is denoted by " $v$" (bold)
><br>
>$veloctiy = \dfrac{ds}{dt}$

![[Speed vs Velocity.png]]

#### Average Speed vs Velocity

>[!info] Average Speed
>-  Average speed is the **total distance** travelled divided by the total time taken.
>- Average Speed is a **scalar**
>- Average speed is **always positive** and ==doesn't indicate the direction of motion==.
>- Can be found by taking the  area under a d-t graph and dividing by the time
><br>
>$Average \space Speed = \dfrac{total \space distance}{time}$

>[!info] Average Velocity
>-  Average velocity is the displacement divided by the time.
>- Average Speed is a **vector**.
>- Can be found by taking the  area under a s-t graph and dividing by the time
><br>
>$Average \space Velocity = \dfrac{displacement}{time} = \dfrac{\triangle \space position}{\triangle \space time}$
><br>
>$Average \space Velocity = \dfrac{\triangle x_{final} - \triangle x_{initial}}{\triangle t_{final} - \triangle t_{initial}}$

#### Instantaneous Speed vs Velocity

>[!info] Instantaneous Speed
>-  Instantaneous speed is ==the speed of an object at a specific moment in time==
>- Instantaneous Speed is a **scalar**.
>- can be found by taking the gradient at a specific time value in a d-t graph
><br>
>$Instantaneous \space Speed = \dfrac{distance \space travelled \space at \space time \space t}{t}$

>[!info] Instantaneous Velocity
>-  Instantaneous speed is ==the velocity of an object at a specific moment in time==
>- Instantaneous Speed is a **vector**.
>- can be found by taking the gradient at a specific time value in a s-t graph
><br>
>- $Instantaneous \space Velocity = \dfrac{displacement \space at \space t=T }{T}$


### Acceleration

>[!info] Acceleration
>
>- Acceleration is the rate at which an object changes its **velocity over time**.
>- Si unit is $ms^{-2}$.
>- Acceleration is a **vector** quantity.
>- Acceleration can be found by taking the gradient of a Velocity time graph
>- Speed is denoted by " $a$ "
><br>
>${acceleration = \dfrac{d^2s}{dt^2} \space or \space \dfrac{velocity}{time \space taken}}$

>[!info] Average Acceleration
>-  Average velocity is the **overall velocity over the time period**.
>- Average acceleration is a **vector**.
>- Can be found by taking the  area under a v-t graph and dividing by the time
><br>
>${Average \space acceleration = \dfrac{\triangle \space Velocity}{\triangle \space time} = \dfrac{\triangle v - \triangle u}{\triangle t_{2} - \triangle t_{1}}}$
#### Instantaneous acceleration

>[!info] Instantaneous acceleration
>-  Instantaneous acceleration is ==the acceleration of an object at a specific moment in time==
>- Instantaneous acceleration is a **vector**.
>- can be found by taking the gradient at a specific time value in a v-t graph
><br>
>${Instantaneous \space acceleration = \dfrac{Velocity \space at \space t=T }{T}}$

## Analysing Graphs (Incomplete)

![[d-t graphs.jpg]]

- Distance-time Graphs
- Displacement-time Graphs

- Speed-time Graphs
- Velocity-time Graphs

- Acceleration-time Graphs

# Kinematic (suvat) Equations of motion

Kinematic equations are sets of 5 equations that show the relation between 5 variable if acceleration is constant throughout the motion i.e the motion is uniform.

>[!correct] Kinematic equations can used in the following cases:
> - Ball rolling of a inclined Plane
> - Sky diver free falling with __no air resistance__
> - Car speeding up with a constant acceleration
> - Moving car slowing down with a constant acceleration
> - Arrow / ball flying in the air and landing with **no air resistance** (complex)

>[!incorrect] Kinematic equations cannot used in the following cases:
> - Ball rolling of a curved plane
> - Sky diver free falling with __air resistance__
> - Car speeding up with a non-constant acceleration
> - Moving car slowing down with a non-constant acceleration
> - Arrow / ball flying in the air and landing with **air resistance** (complex)

>[!note] **air resistance** can be included given that it stays consistent over time but that doesn't usually happen as it depends on the current speed of object. Due to this the force changes causing the motion to be non-uniform i.e acceleration is not constant.

>[!info] What does SUVAT stand for : 
>- S - displacement
>- U - initial speed 
>- V - final speed
>- A - acceleration (needs to be constant)
>- T - time taken

## Kinematic Equations

| <center>Equations                                                                                                                                                                    | <center>Suvat Definitions                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ${v = u + at}$<br><br>${s = \frac{1}{2}(u+v)t}$<br><br>${s = ut + \frac{1}{2}at^2}$<br><br>${s = vt - \frac{1}{2}at^2}$<br><br>${v^2 - u^2 = 2as}$<br> | ${s \space-\space \text{displacement}}$<br><br>${s \space-\space \text{initial speed}}$<br><br>${v \space-\space \text{final speed}}$<br><br>${a \space-\space \text{acceleration}}$<br><br>${t \space-\space \text{time}}$ |
## Deriving Suvat Equations (incomplete) [Extra]

Suvat equations come from observing patterns in velocity-time graphs. Here is the velocity-time grap3h that bodies with uniform motion follows. 

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

Rearranging **equation 1** in for u gives:

${v = u + at}$

${v - at = u}$

${u = v - at}$

and substituting that into **equation 2** gives :

${s = \frac{1}{2}t([\space v - at \space] + v)}$

${s = \frac{1}{2}t(2v - at)}$

${s = vt - \frac{1}{2}at} \space\space\rightarrow \text{Equation 4}$ 

For the last equation we need to  **equation 1**  it 

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

>[!info] But for answering questions if the $g$ value is not specified use $g=9.81\space ms^{-2}$ 

## Acceleration Under Gravity

[[A.1 - junk 1]]

![[Pasted image 20241216171204.png|400]]

A baseball is thrown vertically upwards with an initial speed $u$. Gravity acts on the baseball from the moment of its release, slowing it down until it stops for an instant at the top of its motion. Gravity continues to act and the baseball now accelerates downwards to reach the ground with the same speed at which it was released. Without air resistance, the displacement–time graph would look like Figure 1 below. The ball goes vertically up and then down to land in the same spot from which it was projected. The path in the air is called the trajectory and is a vertical line up and down for this case.

A distance–time graph would look different (Figure 2). It gives similar information but without the direction part of the displacement and velocity vectors. Make sure that you understand the difference between these graphs.

|                   Displacement-time graph                   |                        Distance-time graph                         |
| :---------------------------------------------------------: | :----------------------------------------------------------------: |
| ![[{D1A7F92B-AA85-4653-B48B-1144202385C7}.png]]<br>figure 1 | ![[{874E6162-6009-4741-85EC-8CEB30AE1C01}.png\|250px]]<br>figure 2 |


|               Velocity-time graph               |                Speed-time graph                 |
| :---------------------------------------------: | :---------------------------------------------: |
| ![[{5F846B84-1B35-4A2B-A80F-40B6E11ADEEF}.png]] | ![[{9F8C94D7-3E19-43D7-9E2B-3693C9F5F95C}.png]] |

### Suvat Equation Analyses

The suvat equations introduced earlier can be used to analyse this motion. The initial vertical speed is u, the time to reach the highest point is T, the maximum height is H and the acceleration of the ball is –g; g has a negative sign because upwards is the positive direction. As the acceleration due to gravity is downwards, g must have the opposite, that is, negative, sign. 

The kinematic equations are printed again but with differences to reflect the vertical motion to the highest point:

>[!info] Here's a copy of the suvat equations
>
>| Equations                         |  Suvat Definitions                         |
>| ---------------------------------- | ------------------------------------------------- |
>| ${v = u + at}$          | ${s \space-\space \text{displacement}}$     |
>| ${s = \frac{1}{2}(u+v)t}$    | ${u \space-\space \text{initial speed}}$    |
>| ${s = ut + \frac{1}{2}at^2}$ | ${v \space-\space \text{final speed}}$      |
>| ${s = vt - \frac{1}{2}at^2}$ | ${a \space-\space \text{acceleration}}$<br> |
>| ${v^2 - u^2 = 2as}$          | ${t \space-\space \text{time}}$             |

>[!info] When the object is at maximum height (H) the vertical velocity = 0

| <center>Equations</center>        | <center>Derived from</center>      |
| --------------------------------- | ---------------------------------- |
| ${T = \dfrac{u}{g}}$        | ${v = u + at}$               |
| ${H = uT -\frac{1}{2}gT^2}$ | ${s = ut + \frac{1}{2}at^2}$ |
| ${H = \dfrac{u^2}{2g}}$     | ${v^2 - u^2 = 2as}$          |
>[!tip] TIP : the time taken for an object to be thrown up vertically and come back down to its same height from where it was thrown from is:
>${Time\space taken = 2T = \dfrac{2u}{g}}$ 

### Worked Examples

>[!example] Example Question 1:
>
A student drops a stone from rest at the top of a well. She hears the stone splash into the water at the bottom of the well $2.3 \space s$ after releasing the stone. Ignore the time taken for the sound to reach the student from the bottom of the well. The acceleration due to gravity $g$ is $9.8 \space ms^{-2}$ . 
>1. Calculate the depth of the well.
>2. Calculate the speed at which the stone hits the water surface. 
>3. Explain why the time taken for the sound to reach the student can be ignored

>[!solution] Solution:
>1. ${u = 0;\space t=2.3\space s}$
>	
>	${s = ut + \frac{1}{2}at^2}$
>	
>	${s = 0 + \frac{1}{2} \times 9.8 \times 2.3^2}$ 
>	
>	${s=26\space m}$
><br>
>1. ${v = u + at}$
>   
>   ${v = 0 + 9.8 \times 2.3}$
>   
>   ${v = 23 \space ms^{-1}}$
>   <br>
> 1. The speed of sound is about $300 \space ms^{-1}$  and so the time to travel about $25 \space m$ is about $0.08 \space s$. This is only about 4% of the time taken for the stone to fall.

>[!Example] Example Question 2
> A hot-air balloon is rising vertically at a constant speed of $5.0 \space ms^{-1}$ . A small object is released from rest relative to the balloon when the balloon is $30 \space m$ above the ground. Calculate: 
> 
> 1. the maximum height of the object above the ground
> 2. the time taken to reach the maximum height 
> 3. the total time taken for the object to reach the ground.

>[!solution] Solution:
>![[A.1-worked example 1.excalidraw.svg]]
>
>The object is moving upwards at $+\space 5.0 \space ms^{-1}$ when it is released. The acceleration due to gravity is $- \space 9.8\space ms^{-2}$ . The speed at max height is 0, thus we can take $v = 0 \space ms^{-2}$. and the time taken to reach max height is denoted by "$\space T\space$"
>
>So $u = +5.0 \space ms^{-1}$ and $a =-9.8\space ms^{-2}$
>
>1. Using $H = \dfrac{u^2}{2g}$, 
>	
>	$H = \dfrac{(5.0)^2}{2(9.8)}$
>	
>	$H = +1.28 \space m$
><br>
>2. Using $T = \dfrac{u}{g}$
>	
>	$T = \dfrac{5.0}{9.8}$
>	
>	$T = +0.51 \space s$
>  <br> 
> 3. If we imagine that the starting position of the object to be as $0\space m$, the highest point to be at $+\space 1.28\space m$ and the ground to be at $-\space 30\space m$ relative from the starting point we can easily use ${s = ut + \frac{1}{2}at^2}$ to find the total time taken.
> 	
> 	${s = ut + \frac{1}{2}at^2}$
> 	
> 	<br>
> 	
> 	$(-30) = (5.0)t + \frac{1}{2}(-9.8)t^2$
> 	
> 	$5t + (-4.9)t^2 = -30$
> 	
> 	$4.9t^2 -5t -30 = 0$
> 	
> 	<br>
> 	
> 	Use the quadratic formula, $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, solve for t
> 	
> 	<br><br>
> 	
> 	$time\space taken = \dfrac{-(-5) \pm \sqrt{(-5)^2 - 4(4.9)(-30)}} {2(4.9)} \space s$
> 	
> 	<br><br>
> 	
> 	$time\space taken = \dfrac{25 \pm 5\sqrt{613}}{49} \space s$
> 	
> 	<br><br>
> 	
> 	negative values of time is rejected so $time\space taken = +3.04 \space s$
> 	
> Notice that, in this example, if you carry the signs through consistently, they give you information about the motion of the object.


## Projectile motion in two-dimensions



