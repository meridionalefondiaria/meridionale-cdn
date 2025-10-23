# Meridionale Icons

```sh
yarn init
yarn config set nodeLinker node-modules
mkdir icons
mkdir icons-min

# for optimize icons
# https://github.com/svg/svgo
yarn add svgo --dev
```

## Recommended Sites

[https://heroicons.com](https://heroicons.com)
[https://feathericons.com](https://feathericons.com)
[https://www.svgrepo.com](https://www.svgrepo.com)
[https://simpleicons.org](https://simpleicons.org)
[https://openclipart.org](https://openclipart.org)
[https://openmoji.org](https://openmoji.org)
[https://fonts.google.com/icons](https://fonts.google.com/icons) (or [https://material.io/resources/icons](https://material.io/resources/icons))
[https://iconoir.com](https://iconoir.com)
[https://ionicons.com](https://ionicons.com)
[https://boxicons.com](https://boxicons.com)

```html
<img src="https://cdn.jsdelivr.net/gh/tuo/mefy-icons@main/icons/home.svg" width="20" height="20" alt="Home" style="display:inline-block;border:0;" />
```

## Tips for mail clients

Test with services like **Litmus/Email on Acid** (if you use them) and on real clients (Gmail web, Gmail mobile, Outlook 2016/2019/365 desktop, Outlook Web, Apple Mail iOS/macOS).