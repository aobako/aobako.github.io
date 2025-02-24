---
title: 'Enable Finger Gesture for Chrome on Ubuntu 24'
description: 'Description'
pubDate: 'Feb 24 2025'
---

1. Make a copy of chrome config

```bash
cp /usr/share/applications/google-chrome.desktop ~/.local/share/applications
```

2. Modify the launch flags

append --enable-features=.. after each Exec =

```txt
Exec=/usr/bin/google-chrome-stable %U --enable-features=TouchpadOverscrollHistoryNavigation
```

```txt
Exec=/usr/bin/google-chrome-stable --enable-features=TouchpadOverscrollHistoryNavigation
```

## Reference

[Touchpad Gestures in Chrome/Chromium](https://www.reddit.com/r/gnome/comments/td8irt/touchpad_gestures_in_chromechromium/)