---
layout: single
title: "Demo: Images, Gallery, and Slider"
date: 2026-05-05
categories: [Demo]
tags: [gallery, images, slider, media]
author_profile: true
comments: true
read_time: true
published: false
gallery_lab:
  - url: /assets/images/profile.jpg
    image_path: /assets/images/profile.jpg
    alt: "Smart Grid Lab"
    title: "Smart Grid Lab — Clement Hall, Tennessee Tech"
  - url: /assets/images/profile.jpg
    image_path: /assets/images/profile.jpg
    alt: "Typhoon HIL 606"
    title: "Typhoon HIL 606 Real-time Simulator"
  - url: /assets/images/profile.jpg
    image_path: /assets/images/profile.jpg
    alt: "HILLTOP Testbed"
    title: "HILLTOP Hardware-in-the-Loop Testbed"
excerpt: "Demonstrate image embedding, responsive galleries, and image sliders in Jekyll posts."
---

This post demonstrates all image layout options in Minimal Mistakes.

---

## Single Centered Image with Caption

{% include figure popup=true
   image_path="/assets/images/profile.jpg"
   alt="Profile photo"
   caption="**Fig. 1:** Add your lab or conference photo here with a descriptive caption." %}

---

## Image Aligned Left

{% include figure image_path="/assets/images/profile.jpg"
   alt="Lab photo"
   caption="CESR Smart Grid Lab"
   class="align-left" %}

This text flows beside the image when the image is floated left using `class="align-left"`. You can replace the placeholder image with an actual photo from your lab or conference.

The text continues wrapping around the image until there is enough vertical space, after which it returns to full width.

---

## Image Aligned Right

{% include figure image_path="/assets/images/profile.jpg"
   alt="Conference photo"
   caption="IEEE NAPS 2024"
   class="align-right" %}

This text flows beside the right-aligned image. Use `class="align-right"` to float an image to the right side.

Replace the placeholder with an actual conference photo. This layout works well for describing what is shown in the image.

---

## Full-Width Image

{% include figure image_path="/assets/images/profile.jpg"
   alt="Full width"
   caption="**Fig. 4:** Full-width image — good for lab overview shots or panoramic photos."
   class="full" %}

---

## Photo Gallery (3-Column Grid)

Replace the placeholder images with your actual photos:

{% include gallery id="gallery_lab" caption="**Photo Gallery:** Smart Grid Lab, Tennessee Tech University." %}

---

## Responsive Image with HTML

You can also embed images directly with HTML for more control:

<figure style="text-align:center;">
  <img src="/assets/images/profile.jpg"
       alt="Demo image"
       style="max-width:400px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15);"
       loading="lazy">
  <figcaption style="font-size:0.85em; color:#666; margin-top:0.5em;">
    <strong>Fig. 5:</strong> Use <code>loading="lazy"</code> for better performance on image-heavy pages.
  </figcaption>
</figure>

---

## Image Grid (2×2)

<div style="display:grid; grid-template-columns:1fr 1fr; gap:1em; margin:1.5em 0;">
  <figure style="margin:0;">
    <img src="/assets/images/profile.jpg" alt="Photo 1"
         style="width:100%; border-radius:6px; display:block;">
    <figcaption style="font-size:0.8em; text-align:center; margin-top:0.3em;">IEEE TPEC 2025</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/images/profile.jpg" alt="Photo 2"
         style="width:100%; border-radius:6px; display:block;">
    <figcaption style="font-size:0.8em; text-align:center; margin-top:0.3em;">IEEE NAPS 2024</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/images/profile.jpg" alt="Photo 3"
         style="width:100%; border-radius:6px; display:block;">
    <figcaption style="font-size:0.8em; text-align:center; margin-top:0.3em;">Smart Grid Lab</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/images/profile.jpg" alt="Photo 4"
         style="width:100%; border-radius:6px; display:block;">
    <figcaption style="font-size:0.8em; text-align:center; margin-top:0.3em;">HILLTOP Testbed</figcaption>
  </figure>
</div>

---

## Tips

- Use `/assets/images/gallery/` to organize gallery photos
- Add `loading="lazy"` to images below the fold for faster page loads
- For actual slide carousels, add a JavaScript slider library (e.g., Swiper.js) via a custom include
- Keep images under 500 KB; use WebP format for best compression
