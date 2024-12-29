---
title: Kinematic Equations of Motion
draft: false
tags:
  - physics
Authors:
  - Harsh
---
---

[[Section 1 - Kinematic Quantities and Graphs| Previous Section : Kinematic Quantities and Graphs]]
[[Section 3 - Motion with Gravity | Next Section : Motion with Gravity]]

---
# Introduction

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
