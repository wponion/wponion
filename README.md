[![WPOnion Framework Screenshot](http://s3.wponion.com/wp.org/v3/banner-1544x500.jpg)](http://s3.wponion.com/wp.org/v3/banner-1544x500.jpg)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## So what is WPOnion , exactly?

WPOnion is a simple yet powerful framework that helps developers build custom meta boxes and custom fields in WordPress fast and easily.

The framework lets you define custom meta boxes and custom fields via arrays and handles everything behind the scene automatically. It has a wide range of field types, field settings and supports not only post meta but also term meta, user meta, comment meta, settings pages and custom tables.

## Installation

### Stable 
The preferred way to install this extension is through [Composer](http://getcomposer.org/download/).

[![Latest Stable Version](https://poser.pugx.org/wponion/wponion/version)](https://packagist.org/packages/wponion/wponion)
[![Latest Unstable Version](https://poser.pugx.org/wponion/wponion/v/unstable)](https://packagist.org/packages/wponion/wponion)
[![Total Downloads](https://poser.pugx.org/wponion/wponion/downloads)](https://packagist.org/packages/wponion/wponion)
[![Latest Unstable Version](https://poser.pugx.org/wponion/wponion/v/unstable)](//packagist.org/packages/wponion/wponion)
[![WP](https://img.shields.io/badge/WordPress-Standar-1abc9c.svg)](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/)
[![License](https://poser.pugx.org/wponion/wponion/license)](https://packagist.org/packages/wponion/wponion)
[![composer.lock available](https://poser.pugx.org/wponion/wponion/composerlock)](https://packagist.org/packages/wponion/wponion)

To install **WPOnion library**, simply:

    $ composer require wponion/wponion

The previous command will only install the necessary files, if you prefer to **download the entire source code** you can use:

    $ composer require wponion/wponion --prefer-source

You can also **clone the complete repository** with Git:

    $ git clone https://github.com/wponion/wponion.git

---

### Development 
The preferred way to install this extension is through [Composer](http://getcomposer.org/download/).

[![Latest Stable Version](https://poser.pugx.org/wponion/dev/version)](https://packagist.org/packages/wponion/dev)
[![Latest Unstable Version](https://poser.pugx.org/wponion/dev/v/unstable)](https://packagist.org/packages/wponion/dev)
[![Total Downloads](https://poser.pugx.org/wponion/dev/downloads)](https://packagist.org/packages/wponion/dev)
[![Latest Unstable Version](https://poser.pugx.org/wponion/dev/v/unstable)](//packagist.org/packages/wponion/dev)
[![WP](https://img.shields.io/badge/WordPress-Standar-1abc9c.svg)](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/)
[![License](https://poser.pugx.org/wponion/dev/license)](https://packagist.org/packages/wponion/dev)
[![composer.lock available](https://poser.pugx.org/wponion/dev/composerlock)](https://packagist.org/packages/wponion/dev)

To install **WPOnion library**, simply:

    $ composer require wponion/wponion:dev-development

The previous command will only install the necessary files, if you prefer to **download the entire source code** you can use:

    $ composer require wponion/wponion:dev-development --prefer-source

You can also **clone the complete repository** with Git:

    $ git clone https://github.com/wponion/wponion.git

---

## Usage {If Downloaded Manually}
Add the below code your plugin / theme file 

```php
require __DIR__.'/wponion/wponion.php';

add_action('wponion_loaded','your-prefix_after_wponion_loaded');

function your-prefix_after_wponion_loaded(){
    //do your stuff here.
}
```

## Contribution

Like WPOnion Framework, this documentation is open sourced on Github & GitBooks. The website's content is written in Markdown.

If you find anything incorrect in the documentation or out-dated, please help us fix it.

In case you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.

## Documentation

https://wponion.gitbook.io/docs/

### Screenshots / Demo

https://demo.wponion.com

## Contributors
Thanks to all the Contributors who worked on this project to get it done asap
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://EnterpriseBranding.io"><img src="https://avatars3.githubusercontent.com/u/6123260?v=4" width="100px;" alt="Enterprise Branding"/><br /><sub><b>Enterprise Branding</b></sub></a><br /><a href="https://github.com/wponion/wponion/commits?author=EnterpriseBranding" title="Documentation">📖</a> <a href="#ideas-EnterpriseBranding" title="Ideas, Planning, & Feedback">🤔</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
This project is licensed under **MIT**. See the [LICENSE](LICENSE) file for more info.

## Backed By
| [![DigitalOcean][do-image]][do-ref] | [![JetBrains][jb-image]][jb-ref] |  [![Tidio Chat][tidio-image]][tidio-ref] |
| --- | --- | --- |

[do-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue-small.png
[jb-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/phpstorm-small.png?v3
[tidio-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/tidiochat-small.png
[do-ref]: https://s.svarun.in/Ef
[jb-ref]: https://www.jetbrains.com
[tidio-ref]: https://tidiochat.com
