---
layout: single
title: "Demo: Embedding YouTube Videos in Posts"
date: 2026-05-01
categories: [Demo]
tags: [video, youtube, tutorial]
author_profile: true
comments: true
read_time: true
excerpt: "Learn how to embed YouTube videos in Jekyll blog posts with responsive layouts."
published: false
---

This post demonstrates how to embed YouTube videos using Jekyll's built-in `youtube` shortcode or a responsive `<iframe>`.

---

## Method 1 — Responsive YouTube Embed (Recommended)

Wrap the `<iframe>` in a responsive container div:

```html
<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0" allowfullscreen></iframe>
</div>
```

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;margin:1.5em 0;">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Demo YouTube Video">
  </iframe>
</div>

---

## Method 2 — Jekyll Video Embed via Include

Create `_includes/video.html`:

```html
<div style="position:relative;padding-bottom:56.25%;height:0;">
  <iframe src="https://www.youtube.com/embed/{{ include.id }}"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0" allowfullscreen></iframe>
</div>
```

Then use it in any post:

```liquid
{% raw %}{% include video.html id="dQw4w9WgXcQ" %}{% endraw %}
```

---

## Method 3 — Multiple Videos Side by Side

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1em;margin:1em 0;">
  <div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0" allowfullscreen title="Video 1"></iframe>
  </div>
  <div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe src="https://www.youtube.com/embed/9bZkp7q19f0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0" allowfullscreen title="Video 2"></iframe>
  </div>
</div>

---

## Tips

- Always use `https://www.youtube.com/embed/VIDEO_ID` (not the regular watch URL)
- The `56.25%` padding-bottom gives a 16:9 aspect ratio
- Add `?start=60` to the URL to start at a specific second
- Use `?autoplay=1&mute=1` for auto-play (muted required by browsers)
