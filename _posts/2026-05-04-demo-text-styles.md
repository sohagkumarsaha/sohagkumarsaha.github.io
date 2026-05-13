---
layout: single
title: "Demo: All Text Styles, Notices, and Buttons"
date: 2026-05-04
categories: [Demo]
tags: [typography, buttons, styles, formatting]
author_profile: true
comments: true
read_time: true
toc: true
toc_label: "Elements"
toc_icon: "font"
excerpt: "A showcase of all typography, notice boxes, buttons, and text formatting options available in Minimal Mistakes."
published: false
---

A reference post showing every text and UI element available in this theme.

---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5

---

## Text Formatting

Normal paragraph text. **Bold text** for emphasis. *Italic text* for titles or terms. ***Bold and italic*** for strong emphasis. ~~Strikethrough~~ for corrections. `Inline code` for variable names.

Superscript: E = mc<sup>2</sup>. Subscript: H<sub>2</sub>O.

> **Blockquote:** *"The measure of intelligence is the ability to change."*
> — Albert Einstein

---

## Lists

**Unordered:**
- Energy Management Systems
  - Rule-based EMS
  - Deep Reinforcement Learning EMS
  - Model Predictive Control EMS
- Battery Energy Storage
  - Lithium-ion
  - Flow Battery

**Ordered:**
1. Measure grid load and PV output
2. Compute net demand
3. Evaluate BESS setpoint
4. Send Modbus command
5. Log data and update state

**Task List:**
- [x] Install Typhoon HIL 606
- [x] Configure Modbus TCP/IP
- [x] Implement peak-shaving algorithm
- [ ] Deploy to production grid
- [ ] Validate against field data

---

## Notice Boxes

<div class="notice">
  <strong>Default Notice:</strong> Use for general information that doesn't fit other categories.
</div>

<div class="notice--primary">
  <strong>Primary Notice:</strong> Use for key announcements or main content highlights.
</div>

<div class="notice--info">
  <strong>Info Notice:</strong> Paper accepted at <em>IEEE TPEC 2026</em> — "Real-Time Consensus Tracking Control for BEMS."
</div>

<div class="notice--success">
  <strong>Success Notice:</strong> Elevated to <strong>IEEE Senior Member</strong> grade — August 2025!
</div>

<div class="notice--warning">
  <strong>Warning Notice:</strong> The Modbus TCP/IP connection requires firewall port 502 to be open.
</div>

<div class="notice--danger">
  <strong>Danger Notice:</strong> Never connect Typhoon HIL analog outputs directly to high-voltage equipment without appropriate isolation.
</div>

---

## Buttons

[Default](){: .btn} &nbsp;
[Primary](){: .btn .btn--primary} &nbsp;
[Success](){: .btn .btn--success} &nbsp;
[Warning](){: .btn .btn--warning} &nbsp;
[Danger](){: .btn .btn--danger} &nbsp;
[Info](){: .btn .btn--info} &nbsp;
[Inverse](){: .btn .btn--inverse}

**Sizes:**

[X-Large](){: .btn .btn--primary .btn--x-large} &nbsp;
[Large](){: .btn .btn--primary .btn--large} &nbsp;
[Medium (default)](){: .btn .btn--primary} &nbsp;
[Small](){: .btn .btn--primary .btn--small}

**With Icons:**

[<i class="fas fa-download"></i> Download CV](/cv/){: .btn .btn--primary} &nbsp;
[<i class="fas fa-external-link-alt"></i> IEEE Xplore](https://ieeexplore.ieee.org){: .btn .btn--inverse target="_blank"} &nbsp;
[<i class="fab fa-github"></i> GitHub](https://github.com/sohagkumarsaha){: .btn .btn--inverse target="_blank"}

---

## Tables

| Year | Conference | Title | DOI |
|------|-----------|-------|-----|
| 2026 | IEEE IAS | Meta-DQN Safe RL EMS | Pending |
| 2026 | IEEE TPEC | Consensus BEMS Control | Pending |
| 2025 | IEEE ECCE | LADRC DAB Converter | [Link](https://ieeexplore.ieee.org/document/11260107){:target="_blank"} |
| 2025 | IEEE TPEC | Modbus BESS Peak Shaving | — |
| 2024 | IEEE NAPS | Solar Irradiance Forecast | — |

---

## Horizontal Rules

Content above.

---

Content below.

---

## Math

Inline math using LaTeX notation: The cost function is \(J = \sum_{t=0}^{T} r(s_t, a_t)\).

Block equation (using double-dollar):

$$
\text{SOC}(k+1) = \text{SOC}(k) - \frac{P_{\text{BESS}}(k) \cdot \Delta t}{\eta \cdot E_{\text{max}}}
$$

The Bellman optimality equation:

$$
Q^*(s, a) = \mathbb{E}\left[r + \gamma \max_{a'} Q^*(s', a') \,\Big|\, s, a\right]
$$

---

## Images with Captions

{% include figure popup=true image_path="/assets/images/profile.jpg" alt="Profile photo" caption="**Fig. 1:** Sohag Kumar Saha, Graduate Research Assistant, Tennessee Tech University." %}

---

## Footnotes

This is a sentence with a footnote.[^1]

[^1]: Footnote content goes here. Can include **bold**, *italic*, and [links](https://tntech.edu){:target="_blank"}.
