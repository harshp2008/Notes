---
title: Motion with Gravity
draft: false
tags:
  - physics
Authors:
  - Harsh
---
---

[[Section 2 - Suvat Equations| Previous Section : Suvat Equations]]
[[Section 4 - Projectile Motion| Next Section : Projectile Motion]]

---
# Introduction

Watch a dog catching a ball thrown high into the air. It is a remarkable feat of coordination by the animal. What is the physics of the motion? The ball is moving in two dimensions, and it is subject to the vertical acceleration of gravity and the deceleration of air resistance. How do physicists treat this complex situation? The trick they use is to split it up into horizontal and vertical components.

When an object is released close to Earth’s surface, it accelerates downwards. The force of gravity acts on the object, pulling it towards the centre of Earth. Equally, the object pulls with the same force on Earth in the opposite direction. Not surprisingly, with small objects, the effect of the force on Earth is so small that you do not notice it.

# Is the gravitational field strength ($g$) constant everywhere ?

The acceleration due to gravity at Earth’s surface is given the symbol $g$ . The accepted value varies from place to place on the surface. For example, in Kuala Lumpur g is $9.776 \space ms^{-2}$ whereas in Stockholm it is $9.818 \space ms^{-2}$ . This is because Earth is not a perfect sphere (it is slightly flattened at the poles) and the densities of the rocks in different locations vary. The different tangential speeds of Earth at different latitudes also have an effect. It is better to buy gold by weight at the equator and sell it at the North Pole rather than the other way round—of course, buying by mass makes no difference!

> [!info] But for answering questions if the $g$ value is not specified use $g=9.81\space ms^{-2}$

# Acceleration Under Gravity

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

## Worked Examples

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
