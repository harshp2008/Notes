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

| <center>Equations                                                                                                                                                                | <center>Suvat Definitions                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\Large{v = u + at}$<br><br>$\Large{v^2 = u^2 + 2as}$<br><br>$\Large{s = ut + \frac{1}{2}at^2}$<br><br>$\Large{s = vt - \frac{1}{2}at^2}$<br><br>$\Large{s = \frac{1}{2}(u+v)t}$ | $\Large{s \space-\space \text{displacement}}$<br><br>$\Large{s \space-\space \text{initial speed}}$<br><br>$\Large{v \space-\space \text{final speed}}$<br><br>$\Large{a \space-\space \text{acceleration}}$<br><br>$\Large{t \space-\space \text{time}}$ |
## Deriving Suvat Equations (incomplete) [Extra]

![[suvat equation triangle.png]]

# Motion with Gravity (Projectile Motion)