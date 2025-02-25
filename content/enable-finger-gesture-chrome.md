---
title: "Enable Finger Gesture for Chrome on Ubuntu 24"
description: "Description"
pubDate: "Feb 24 2025"
---

1. Make a copy of chrome config

```bash
cp /usr/share/applications/google-chrome.desktop ~/.local/share/applications
```

2. Modify the launch setting at `~/.local/share/applications/google-chrome.desktop`.

append --enable-features=.. after each <mark>Exec=</mark>

Exec=/usr/bin/google-chrome-stable %U <mark>--enable-features=TouchpadOverscrollHistoryNavigation</mark>

Exec=/usr/bin/google-chrome-stable <mark>--enable-features=TouchpadOverscrollHistoryNavigation</mark>

## Reference

[Touchpad Gestures in Chrome/Chromium](https://www.reddit.com/r/gnome/comments/td8irt/touchpad_gestures_in_chromechromium/)
