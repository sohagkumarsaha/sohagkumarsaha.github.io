---
layout: single
title: "Gradient Descent in Raw Python Code"
date: 2026-05-11
categories: [Machine Learning, Optimization, Python, Tutorial]
tags: [gradient descent, optimization, python, machine learning, beginner-friendly, numerical methods]
excerpt: "Learn the working principle of gradient descent using a fully user-defined Python implementation with numerical gradients, automatic minimum detection, and an ASCII convergence plot."
author_profile: true
toc: true
toc_sticky: true
---

Optimization is one of the most important ideas in engineering, data science, machine learning, control systems, and artificial intelligence. Many modern algorithms try to answer one simple question:

> How can we find the best value of a variable that minimizes or maximizes a function?

In this post, we will learn **Gradient Descent** from the ground up using a pure Python implementation. The goal is not only to run the algorithm, but also to understand how it works internally. The implementation uses only built-in Python features, so students can focus on the fundamental concept without depending on external libraries such as NumPy or Matplotlib.

The example function used in this tutorial is:

$$
f(x) = x^2 + 1
$$

This is a simple convex function. Its minimum occurs near:

$$
x = 0, \qquad f(x) = 1
$$

The Python code will start from an initial guess, repeatedly update the value of `x`, and gradually move toward the minimum point.

---

## What Is Gradient Descent?

**Gradient Descent** is an iterative optimization algorithm used to find the minimum value of a function. It works by moving step-by-step in the direction where the function decreases the fastest.

For a function $$f(x)$$, the basic update rule is:

$$
x_{new} = x_{old} - \alpha \frac{df(x)}{dx}
$$

where:

- $$x_{old}$$ is the current value of the variable.
- $$x_{new}$$ is the updated value after one step.
- $$\alpha$$ is the learning rate.
- $$\frac{df(x)}{dx}$$ is the gradient or derivative of the function.

The derivative tells us the slope of the function at the current point. If the slope is positive, the algorithm moves left. If the slope is negative, the algorithm moves right. Repeating this process brings the value of `x` closer to the minimum.

---

## Why Learn Gradient Descent?

Gradient Descent is a foundational algorithm in many technical fields. It is widely used in:

1. **Machine learning** for training models by minimizing loss functions.
2. **Deep learning** for updating neural network weights.
3. **Engineering optimization** for finding efficient system parameters.
4. **Control systems** for tuning controllers and minimizing cost functions.
5. **Economics and operations research** for cost minimization and resource allocation.
6. **Energy management systems** for optimizing dispatch, battery usage, and operating cost.

Understanding Gradient Descent helps students understand how many advanced algorithms learn from data or improve system performance.

---

## Working Principle of Gradient Descent

The working process of Gradient Descent can be explained in five simple steps:

### Step 1: Define the objective function

The objective function is the function we want to minimize. In this tutorial, we use:

$$
f(x) = x^2 + 1
$$

The goal is to find the value of `x` that gives the smallest value of `f(x)`.

### Step 2: Choose an initial value

The algorithm needs a starting point. In the code, we start from:

```python
x = 10.0
```

This means the algorithm begins far away from the true minimum at `x = 0`.

### Step 3: Compute the gradient

The gradient tells us the direction of the steepest increase. Since we want to minimize the function, we move in the opposite direction of the gradient.

In this implementation, the gradient is computed numerically using the **central difference method**:

$$
f'(x) \approx \frac{f(x+h)-f(x-h)}{2h}
$$

This is useful for learning because students do not need to manually derive the derivative for every function.

### Step 4: Update the value of `x`

The update rule is:

```python
x_new = x - learning_rate * grad
```

The learning rate controls the step size. A small learning rate may converge slowly. A very large learning rate may overshoot the minimum.

### Step 5: Repeat until convergence

The algorithm continues updating `x` until the changes become very small. When the update difference is below a defined tolerance, the algorithm stops early.

---

## Complete Python Code: Gradient Descent from Scratch

The following code implements Gradient Descent using only built-in Python. It includes:

- A user-defined objective function.
- Numerical gradient calculation using first principles (central difference formula).
- Automatic theoretical minimum estimation.
- Iteration history recording.
- A text-based ASCII convergence plot.

```python
# =============================================
# Gradient Descent from scratch - Pure Python
# AUTOMATED gradient + FULLY AUTOMATIC theoretical minimum
# + CONVERGENCE PLOT using only built-in Python (no libraries!)
# Benchmark function example: f(x) = x² + 1
# =============================================


def objective(x):
    """The ONLY function you need to change.
    Put any mathematical expression you want to minimize here.
  
    In this example, the objective function is:
        f(x) = x^2 + 1
  
    The minimum value of this function occurs at x = 0,
    where f(x) = 1.
    """
    return (x ** 2) + 1


def numerical_gradient(x, func, h=1e-8):
    """Automatically compute the derivative using central difference.
  
    The central difference formula is:
        f'(x) ≈ [f(x + h) - f(x - h)] / (2h)
  
    This allows us to estimate the gradient without manually deriving
    the mathematical derivative of the function.
    """
    return (func(x + h) - func(x - h)) / (2 * h)


def find_theoretical_minimum(func, grad_func, x_start=0.0, learning_rate=0.01,
                             max_iter=300, tol=1e-12):
    """Automatically finds a high-precision theoretical minimum.
  
    This helper function also applies gradient descent, but with a
    smaller learning rate and tighter tolerance. It is used as a
    reference result to compare with the main gradient descent output.
    """
    x = x_start

    for _ in range(max_iter):
        # Compute the gradient at the current point
        grad = grad_func(x, func)

        # Move opposite to the gradient direction
        x_new = x - learning_rate * grad

        # Stop if the update is extremely small
        if abs(x_new - x) < tol:
            break

        # Update x for the next iteration
        x = x_new

    return x, func(x)


# =============================================
# Run Gradient Descent + Record History for Plot
# =============================================

# The learning rate controls how large each update step is.
learning_rate = 0.1

# Maximum number of iterations allowed.
max_iterations = 1000

# Initial guess. The algorithm starts from x = 10.
x = 10.0

print("Starting gradient descent with AUTOMATED gradient...")
print(f"Initial x = {x:.6f}, f(x) = {objective(x):.6f}\n")

# Lists to store history for plotting convergence.
# x_history stores all x values.
# f_history stores all function values.
# grad_history stores all gradient values.
x_history = [x]
f_history = [objective(x)]
grad_history = []

# Main gradient descent loop
for iteration in range(max_iterations):
    # Compute numerical gradient at current x
    grad = numerical_gradient(x, objective)
    grad_history.append(grad)

    # Apply the gradient descent update rule
    x_new = x - learning_rate * grad

    # Evaluate the function at the new x value
    f_new = objective(x_new)

    # Store updated values for later analysis and plotting
    x_history.append(x_new)
    f_history.append(f_new)

    # Print progress every 5 iterations
    if iteration % 5 == 0:
        print(
            f"Iter {iteration:2d} | "
            f"x = {x_new:8.6f} | "
            f"f(x) = {f_new:8.6f} | "
            f"gradient ≈ {grad:8.6f}"
        )

    # Early stopping condition:
    # if x changes very little, the algorithm has converged.
    if abs(x_new - x) < 1e-8:
        print("\nConverged early!")
        break

    # Update x for the next iteration
    x = x_new

print("\n=== Final Result from Gradient Descent ===")
print(f"Optimal x found ≈ {x:.10f}")
print(f"Minimum value f(x) found ≈ {objective(x):.10f}")


# =============================================
# Automatic theoretical minimum
# =============================================

print("\nComputing theoretical minimum automatically...")
x_theory, f_theory = find_theoretical_minimum(objective, numerical_gradient)

print("=== Theoretical Minimum (auto-detected) ===")
print(f"Optimal x ≈ {x_theory:.10f}")
print(f"Minimum value f(x) ≈ {f_theory:.10f}")


# =============================================
# CREATE CONVERGENCE PLOT using ONLY built-in Python
# Text-based ASCII plot - no matplotlib needed
# =============================================


def create_ascii_plot(x_vals, f_vals, title="Convergence Plot", width=70, height=20):
    """Creates a simple text-based ASCII plot of convergence.
  
    This function visualizes how f(x) changes over iterations.
    It does not require any external plotting library.
    """

    # Check if the input lists are empty
    if not x_vals or not f_vals:
        print("No data to plot.")
        return

    # Find minimum and maximum values for scaling
    x_min, x_max = min(x_vals), max(x_vals)
    f_min, f_max = min(f_vals), max(f_vals)

    # Avoid division by zero if all f values are the same
    f_range = f_max - f_min if f_max > f_min else 1.0

    print(f"\n=== {title} ===")
    print(
        f"X range: {x_min:.4f} → {x_max:.4f} | "
        f"f(x) range: {f_min:.6f} → {f_max:.6f}"
    )
    print("Minimal point should be near the bottom of the plot.\n")

    # Build the plot line by line from high f(x) to low f(x)
    for row in range(height):
        # Current function-value level represented by this row
        f_level = f_max - (row / (height - 1)) * f_range
        line = ""

        for col in range(width):
            # Map the current column to an index in the history list
            idx = int(col / (width - 1) * (len(x_vals) - 1))

            if idx >= len(f_vals):
                idx = len(f_vals) - 1

            point_f = f_vals[idx]

            # Draw '*' if a convergence point is close to this row level
            if abs(point_f - f_level) < f_range / (height * 1.5):
                line += "*"
            else:
                # Draw a vertical line near the final minimum point
                final_x_idx = (
                    int((x - x_min) / (x_max - x_min) * (width - 1))
                    if x_max > x_min
                    else width // 2
                )

                if col == final_x_idx and row > height * 0.7:
                    line += "|"
                else:
                    line += " "

        print(line)

    # X-axis labels
    print("-" * width)
    print(f"{'Start':<10}{'→ Convergence →':^{width-20}}{'End/Min':>10}")
    print(
        f"Initial x = {x_vals[0]:.2f}                  "
        f"Final x ≈ {x_vals[-1]:.4f} "
        f"(should be near theoretical {x_theory:.4f})"
    )


# Generate the ASCII plot
create_ascii_plot(
    x_history,
    f_history,
    "Gradient Descent Convergence (f(x) vs Iterations)"
)

print("\nInterpretation:")
print("• The '*' trace shows how f(x) decreases over iterations.")
print("• It should drop quickly at first then flatten near the bottom → good convergence.")
print("• The vertical '|' marks the final minimal point found.")
print("• If the plot flattens at the bottom and matches the theoretical minimum, optimization worked!")
```

---

## Explanation of the Code

### 1. Objective Function

```python
def objective(x):
    return (x ** 2) + 1
```

This function defines the mathematical expression that the algorithm will minimize. Students can replace this function with another expression to test different optimization problems.

For example:

```python
return (x - 3) ** 2 + 5
```

This new function would have its minimum near `x = 3`.

---

### 2. Numerical Gradient Calculation (First Principles)

```python
def numerical_gradient(x, func, h=1e-8):
    return (func(x + h) - func(x - h)) / (2 * h)
```

This function calculates the derivative automatically using the **central difference method**, which is based on first principles from calculus. This is useful because students do not need to manually calculate the derivative.

For the example function:

$$
f(x) = x^2 + 1
$$

The exact derivative is:

$$
f'(x) = 2x
$$

However, the code estimates this derivative numerically using the formula:

$$
f'(x) \approx \frac{f(x+h)-f(x-h)}{2h}
$$

This makes the implementation more flexible because we can change the objective function without changing the gradient function.

---

### 3. Gradient Descent Update

```python
x_new = x - learning_rate * grad
```

This is the most important line in the program. It moves the current value of `x` in the direction that reduces the objective function.

If the gradient is positive, the update decreases `x`. If the gradient is negative, the update increases `x`. The goal is to keep moving until the gradient becomes close to zero.

---

### 4. Learning Rate

```python
learning_rate = 0.1
```

The learning rate determines the size of each step.

- If the learning rate is too small, convergence will be slow.
- If the learning rate is too large, the algorithm may overshoot the minimum.
- A suitable learning rate helps the algorithm converge smoothly.

For this simple function, `0.1` works well.

---

### 5. Early Stopping

```python
if abs(x_new - x) < 1e-8:
    print("\nConverged early!")
    break
```

Early stopping prevents unnecessary iterations. If the value of `x` changes very little between two consecutive iterations, the algorithm assumes that it has already reached the minimum region.

This makes the program more efficient.

---

### 6. History Recording

```python
x_history = [x]
f_history = [objective(x)]
grad_history = []
```

The code stores the values of `x`, `f(x)`, and the gradient during training. This is useful for analyzing the optimization process.

The stored data also allows us to create the convergence plot.

---

### 7. ASCII Convergence Plot

The function `create_ascii_plot()` generates a text-based plot using only built-in Python. The `*` symbols show how the objective function decreases over time.

This is very helpful for beginners because it visually demonstrates convergence without requiring external libraries.

A good convergence pattern usually shows:

- A rapid decrease at the beginning.
- A slower decrease near the minimum.
- A flat region near the bottom of the plot.

---

## Expected Behavior of the Algorithm

Since the objective function is:

$$
f(x) = x^2 + 1
$$

and the initial value is:

```python
x = 10.0
```

Gradient Descent will gradually move `x` toward zero. As `x` approaches zero, `f(x)` approaches one.

Therefore, the expected result is approximately:

```text
Optimal x found ≈ 0
Minimum value f(x) found ≈ 1
```

The exact printed values may contain very small numerical differences due to floating-point computation and numerical gradient approximation.

---

## Important Learning Points for Students

After studying and running this code, students should understand the following ideas:

1. **Optimization means finding the best value of a variable.**  
In this example, the best value is the `x` that minimizes `f(x)`.

2. **The gradient tells the direction of change.**  
A positive gradient means the function increases as `x` increases. A negative gradient means the function decreases as `x` increases.

3. **Gradient Descent moves opposite to the gradient.**  
This is why the update rule subtracts the gradient term.

4. **The learning rate controls the step size.**  
Choosing a good learning rate is important for stable convergence.

5. **Numerical gradients make the code flexible.**  
The central difference method allows the program to estimate derivatives automatically without manual differentiation.

6. **Convergence can be visualized.**  
The ASCII plot shows how the objective function decreases over iterations.

---

## Applications of Gradient Descent

Gradient Descent is used in many real-world problems, including:

### Machine Learning Model Training

In machine learning, models are trained by minimizing a loss function. Gradient Descent updates model parameters so that prediction error becomes smaller.

### Neural Networks and Deep Learning

Deep learning uses advanced forms of Gradient Descent such as stochastic gradient descent, mini-batch gradient descent, Adam, and RMSProp to train large neural networks.

### Engineering Design Optimization

Engineers use optimization to minimize cost, weight, energy consumption, or error while satisfying design constraints.

### Energy Management Systems

In power and energy systems, optimization can help schedule batteries, renewable energy sources, diesel generators, and grid power to reduce operating costs.

### Control Systems

Gradient-based methods are used to tune controllers and minimize tracking error or energy consumption.

---

## How Students Can Experiment with This Code

Students can modify only the `objective()` function and observe how the algorithm behaves.

For example, try this function:

```python
def objective(x):
    return (x - 5) ** 2 + 2
```

The minimum should occur near:

```text
x = 5
f(x) = 2
```

Students can also experiment with the learning rate:

```python
learning_rate = 0.01
learning_rate = 0.1
learning_rate = 0.5
```

By comparing the results, students can see how learning rate affects convergence speed and stability.

---

## Final Words

Gradient Descent is one of the most fundamental algorithms in optimization and machine learning. Although the mathematical idea is simple, it is the foundation of many powerful modern learning systems.

This pure Python implementation is especially useful for beginners because it avoids external libraries and clearly shows every step of the algorithm. Students can see how the objective function is defined, how the gradient is estimated using first principles, how the update rule works, and how convergence can be visualized using a simple ASCII plot.

By understanding this example deeply, students will be better prepared to study advanced optimization techniques, machine learning algorithms, and neural network training methods.

---

## Key Outcomes

By the end of this tutorial, students should be able to:

- Define Gradient Descent in simple terms.
- Explain the role of the gradient in optimization.
- Understand and apply the Gradient Descent update rule.
- Implement Gradient Descent from scratch in Python.
- Use numerical differentiation (central difference method) to estimate gradients from first principles.
- Interpret convergence behavior using stored history and plots.
- Modify the objective function and test new optimization examples.

Gradient Descent may look simple in this one-variable example, but the same basic principle extends to large-scale machine learning and engineering optimization problems with thousands or even millions of variables.
