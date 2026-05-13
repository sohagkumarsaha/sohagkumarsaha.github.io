---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

A list of all pages and posts on this site. For search engines, an [XML sitemap]({{ '/sitemap.xml' | relative_url }}){:target="_blank"} is also available.

---

## Pages

<ul>
{% assign my_pages = site.pages | sort: "title" %}
{% for page in my_pages %}
  {% if page.title and page.permalink and page.sitemap != false %}
  <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
{% for page in site.pages %}
  {% if page.title and page.url contains "_pages" %}
  {% endif %}
{% endfor %}
</ul>

---

## Blog Posts

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year %}
### {{ year_group.name }}

<ul>
  {% for post in year_group.items %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span style="color:#888; font-size:0.85em;"> — {{ post.date | date: "%B %d, %Y" }}
    {% if post.read_time %}· {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read{% endif %}
    </span>
  </li>
  {% endfor %}
</ul>
{% endfor %}

---

## Categories

{% assign categories_sorted = site.categories | sort %}
{% for category in categories_sorted %}
**[{{ category[0] }}]({{ '/categories/#' | append: category[0] | downcase | replace: ' ', '-' | relative_url }})** ({{ category[1].size }} post{{ category[1].size | minus: 1 | divided_by: 999 | ceil | times: 1 }}s)
{% endfor %}

---

## Tags

<div class="tag-cloud" style="margin-top:0.5em;">
{% assign tags_sorted = site.tags | sort %}
{% for tag in tags_sorted %}
  <a href="{{ '/tags/#' | append: tag[0] | downcase | replace: ' ', '-' | relative_url }}">{{ tag[0] }} <span style="font-size:0.75em;opacity:0.7;">({{ tag[1].size }})</span></a>
{% endfor %}
</div>
