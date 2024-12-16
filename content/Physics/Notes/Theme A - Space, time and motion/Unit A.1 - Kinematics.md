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


## Distance Vs Displacement

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


## Speed Vs Velocity

>[!info] Speed
> - Speed is the rate at which an object travels a **distance over time**
> - Si unit is ==$ms^{-1}$==.
> - Speed is a **scalar** quantity
> - Speed can be found by taking the gradient of a distance-time graph
> - Speed is denoted by ==" _$v$_ "== (italics)
> <br>
> $Speed = \dfrac{\triangle distance }{\triangle time}$

>[!info] Velocity
>- Velocity is the rate at which an object changes its **displacement over time**.
>- Si unit is ==$ms^{-1}$==.
>- Velocity is a **vector** quantity.
>- Velocity can be found by taking the gradient of a displacement-time graph
>- Speed is denoted by ==" __$v$__ "== (bold)
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
>- $Average \space Speed = \dfrac{total \space distance}{time}$

>[!info] Average Velocity
>-  Average velocity is the displacement divided by the time.
>- Average Speed is a **vector**.
>- Can be found by taking the  area under a s-t graph and dividing by the time
><br>
>- $Average \space Velocity = \dfrac{displacement}{time} = \dfrac{\triangle \space position}{\triangle \space time}$
><br>
>- $Average \space Velocity = \dfrac{\triangle x_{final} - \triangle x_{initial}}{\triangle t_{final} - \triangle t_{initial}}$

#### Instantaneous Speed vs Velocity

>[!info] Instantaneous Speed
>-  Instantaneous speed is ==the speed of an object at a specific moment in time==
>- Instantaneous Speed is a **scalar**.
>- can be found by taking the gradient at a specific time value in a d-t graph
><br>
>- $Instantaneous \space Speed = \dfrac{distance \space travelled \space at \space time \space t}{t}$

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
>- Si unit is ==$ms^{-2}$==.
>- Acceleration is a **vector** quantity.
>- Acceleration can be found by taking the gradient of a Velocity time graph
>- Speed is denoted by ==" $a$ "==
><br>
>$acceleration = \dfrac{d^2s}{dt^2} \space or \space \dfrac{velocity}{time \space taken}$

>[!info] Average Acceleration
>-  Average velocity is the **overall velocity over the time period**.
>- Average acceleration is a **vector**.
>- Can be found by taking the  area under a v-t graph and dividing by the time
><br>
>- $Average \space acceleration = \dfrac{\triangle \space Velocity}{\triangle \space time} = \dfrac{\triangle v - \triangle u}{\triangle t_{2} - \triangle t_{1}}$
#### Instantaneous acceleration

>[!info] Instantaneous acceleration
>-  Instantaneous acceleration is ==the acceleration of an object at a specific moment in time==
>- Instantaneous acceleration is a **vector**.
>- can be found by taking the gradient at a specific time value in a v-t graph
><br>
>- $Instantaneous \space acceleration = \dfrac{Velocity \space at \space t=T }{T}$

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
| $\Large{v = u + at}$<br><br>$\Large{s = \frac{1}{2}(u+v)t}$<br><br>$\Large{s = ut + \frac{1}{2}at^2}$<br><br>$\Large{s = vt - \frac{1}{2}at^2}$<br><br>$\Large{v^2 - u^2 = 2as}$<br> | $\Large{s \space-\space \text{displacement}}$<br><br>$\Large{s \space-\space \text{initial speed}}$<br><br>$\Large{v \space-\space \text{final speed}}$<br><br>$\Large{a \space-\space \text{acceleration}}$<br><br>$\Large{t \space-\space \text{time}}$ |
|                                                                                                                                                                                      |                                                                                                                                                                                                                                                           |
## Deriving Suvat Equations (incomplete) [Extra]

Suvat equations come from observing patterns in velocity-time graphs. Here is the velocity-time grap3h that bodies with uniform motion follows. 

![[suvat equation triangle.png]]

Looking at the equation of the straight-line in the velocity graph above we can see: 

$\Large{v = u + at} \space\space\rightarrow \text{Equation 1}$

Given that the area under the curve is the displacement ($s$) and the the green triangle + yellow rectangle above adds up to that we can observe that:

$\Large{s = ut + \frac{1}{2} * (v - u)t}$

$\Large{s = t(u + \frac{1}{2} * v - \frac{1}{2}u)}$

$\Large{s = t(\frac{1}{2} * u + \frac{1}{2}v)}$

$\Large{s = \frac{1}{2}t(u + v)} \space\space\rightarrow \text{Equation 2}$

Substituting **Equation 1** into **Equation 2** we get:

$\Large{s = \frac{1}{2}t(u + [\space u + at \space])}$

$\Large{s = \frac{1}{2}t(2u + at)}$

$\Large{s = ut + \frac{1}{2}at} \space\space\rightarrow \text{Equation 3}$ 

Rearranging **equation 1** in for u gives:

$\Large{v = u + at}$

$\Large{v - at = u}$

$\Large{u = v - at}$

and substituting that into **equation 2** gives :

$\Large{s = \frac{1}{2}t([\space v - at \space] + v)}$

$\Large{s = \frac{1}{2}t(2v - at)}$

$\Large{s = vt - \frac{1}{2}at} \space\space\rightarrow \text{Equation 4}$ 

For the last equation we need to  **equation 1**  it 

$\Large{v = u + at} \space\space\rightarrow \text{Equation 1}$

$\Large{(v)^2 = (u + at)^2}$

$\Large{v^2 = u^2 + 2(u)(at) + (at)^2}$

Rearrange it!

$\Large{v^2 - u^2 = 2a(ut) + a(at^2)}$

$\Large{v^2 - u^2 = 2a[\space ut + \frac{1}{2}at^2\space]}$

The text in the square brackets is exactly **equation 3**. We can substitute it into the equation above.

$\Large{v^2 - u^2 = 2a[s]}$

$\Large{v^2 - u^2 = 2as \space\space\rightarrow \text{Equation 5}}$

# Motion with Gravity (Projectile Motion)

## Introduction

Watch a dog catching a ball thrown high into the air. It is a remarkable feat of coordination by the animal. What is the physics of the motion? The ball is moving in two dimensions, and it is subject to the vertical acceleration of gravity and the deceleration of air resistance. How do physicists treat this complex situation? The trick they use is to split it up into horizontal and vertical components.

When an object is released close to Earth’s surface, it accelerates downwards. The force of gravity acts on the object, pulling it towards the centre of Earth. Equally, the object pulls with the same force on Earth in the opposite direction. Not surprisingly, with small objects, the eect of the force on Earth is so small that you do not notice it.

## Is the gravitational field strength ($g$) constant everywhere ?

The acceleration due to gravity at Earth’s surface is given the symbol $g$ . The accepted value varies from place to place on the surface. For example, in Kuala Lumpur g is $9.776 \space ms^{-2}$ whereas in Stockholm it is $9.818 \space ms^{-2}$ . This is because Earth is not a perfect sphere (it is slightly flattened at the poles) and the densities of the rocks in dierent locations vary. The dierent tangential speeds of Earth at dierent latitudes also have an eect. It is better to buy gold by weight at the equator and sell it at the North Pole rather than the other way round—of course, buying by mass makes no dierence!

>[!info] But for answering questions if the $g$ value is not specified use $g=9.81\space ms^{-2}$ 

## Acceleration under gravity

### Example question: 

In 2012, the Red Bull Stratos project set the record for the highest altitude parachute jump when Felix Baumgartner jumped from an altitude of almost 39 km. This record was subsequently broken by Alan Eustace in 2014.


| $h \space/ m$ | $v\space/m^{-1}$ |
| :-----------: | :--------------: |
|     38965     |       6.7        |
|     38960     |       11.4       |
|     38955     |       14.4       |
|     38949     |       18.3       |
|     38945     |       20.3       |
|     38940     |       21.7       |
|     38936     |       23.6       |
The table shows Baumgartner’s speed $v$ at dierent altitudes h above Earth’s surface.
• Plot a graph of $v^2$ against $h$ • Find the gradient of the graph.
• Deduce what the gradient represents.
• The absolute uncertainty in the given speeds is ±$1 \space m s^{-1}$. Calculate the uncertainties in the values of $v^2$ and add error bars to your graph.
• By considering the maximum and minimum gradients of your graph, deduce whether the data are consistent with an acceleration due to gravity of 9.8 $ms^{-2}$
• When you have studied Topic D.1 you will be able to calculate the acceleration due to gravity g at an altitude of 39 km. Show that it is only about 1% lower than g at the surface of Earth.

| $h \space/ m$ | $v\space/m^{-1}$ | $v^2 \space/m^{-2}$ |
| :-----------: | :--------------: | :-----------------: |
|     38965     |       6.7        |        44.89        |
|     38960     |       11.4       |       129.96        |
|     38955     |       14.4       |       207.36        |
|     38949     |       18.3       |       334.89        |
|     38945     |       20.3       |       412.09        |
|     38940     |       21.7       |       470.89        |
|     38936     |       23.6       |       556.96        |

<iframe src="https://www.desmos.com/calculator/kswckr6lnt?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
