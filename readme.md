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

## jsDelivr

[Docs](https://www.jsdelivr.com/?docs=gh)

> https://cdn.jsdelivr.net/gh/<USERNAME>/<REPO>@<BRANCH>/<PERCORSO>
>
> https://cdn.jsdelivr.net/gh/meridionalefondiaria/meridionale-cdn/icons-min/phone.svg

```html
<img src="https://cdn.jsdelivr.net/gh/meridionalefondiaria/meridionale-cdn/icons-min/phone.svg"
     width="20" height="20" alt="Phone"
     style="display:inline-block;vertical-align:middle;" />
```

or

```html
<!-- for mails -->
<td width="32" valign="middle" style="padding-right: 10px;">
     <table border="0" cellpadding="0" cellspacing="0" width="28" height="28">
          <tr>
               <td align="center" valign="middle" style="line-height: 0;">
                    <img src="https://cdn.jsdelivr.net/gh/meridionalefondiaria/meridionale-cdn/icons-png/lead.png"
                         width="24" height="24" alt="Lead"
                         style="display: block; margin: 0 auto;" />
               </td>
          </tr>
     </table>
</td>
```

## Tips for mail clients

Test with services like **Litmus/Email on Acid** (if you use them) and on real clients (Gmail web, Gmail mobile, Outlook 2016/2019/365 desktop, Outlook Web, Apple Mail iOS/macOS).