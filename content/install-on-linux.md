---
title: "Installing Pre-built binary on Ubuntu"
description: "Description"
pubDate: "Mar 23 2024"
---

## Download

```zsh
curl -LO https://<prebuilt-binary>.tar.gz
```

-L: In case the page has moved (3xx response) curl will redirect the request to the new address.

-o: Output to a file with given name instead of stdout.

-O: Output to a file with remote name.

```zsh
sudo rm -rf /opt/<prebuilt-binary>

sudo tar -C /opt -xzf <prebuilt-binary>.tar.gz
```

-C: Change directory (so the package content will be unpacked there).

-x: extract

-z: gzipped archive

-f: give the archive name

## PATH

```zsh
# One time usage
export PATH=$PATH:/opt/<prebuilt-binary>/bin

# Reload config after modifying .zshrc
source ~/.zshrc
```
