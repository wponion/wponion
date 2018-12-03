# WPOnion
#### ~ Lightweight, Flexible WP Settings Framework ~ 

---
## Installation
### Composer
Add The below to your **composer.json**
```json
{
    "require": {
        "wponion/wponion": "~1.0.0"
    }
}
```
-----
```
composer require wponion/wponion
```

### Old School
Add the below code your plugin / theme file 

```php
require __DIR__.'/wponion/wponion.php';

add_action('wponion_loaded','your-prefix_after_wponion_loaded');

function your-prefix_after_wponion_loaded(){
    //do your stuff here.
}
```
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/settings-modern-theme.jpg)](https://s3.wponion.com/preview/settings-modern-theme.jpg)


## So what is WPOnion , exactly?

WPOnion is a simple yet powerful framework that helps developers build custom meta boxes and custom fields in WordPress fast and easily.

The framework lets you define custom meta boxes and custom fields via arrays and handles everything behind the scene automatically. It has a wide range of field types, field settings and supports not only post meta but also term meta, user meta, comment meta, settings pages and custom tables.


## Contribution

Like WPOnion Framework, this documentation is open sourced on Github & GitBooks. The website's content is written in Markdown.

If you find anything incorrect in the documentation or out-dated, please help us fix it.

In case you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.

## Documentation

https://wponion.gitbook.io/docs/

## Contributors
Thanks to all the Contributors who worked on this project to get it done asap
1. [pixelnx](https://profiles.wordpress.org/pixelnx) -- Created WPOnion Logo

---

# Screenshots

## Settings Page

#### WP Theme 
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/settings-wp-theme.jpg)](https://s3.wponion.com/preview/settings-wp-theme.jpg)

## Metabox's
#### Theme 1
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/metabox-1.jpg)](https://s3.wponion.com/preview/metabox-1.jpg)
#### Theme 2
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/metabox-2.jpg)](https://s3.wponion.com/preview/metabox-2.jpg)
### Side
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/metabox-side.jpg)](https://s3.wponion.com/preview/metabox-side.jpg)

## Taxonomy
#### With & Without Metabox Feature
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/taxonomy.jpg)](https://s3.wponion.com/preview/taxonomy.jpg)

## User Profile Fields
#### With & Without Metabox Feature
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/user-profile-fields.jpg)](https://s3.wponion.com/preview/user-profile-fields.jpg)

## Bulk & Quick Edit
### Quick Edit
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/quick-edit.jpg)](https://s3.wponion.com/preview/quick-edit.jpg)
### Bulk Edit 
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/bulk-edit.jpg)](https://s3.wponion.com/preview/bulk-edit.jpg)

## Help Tabs
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/help-tabs.gif)](https://s3.wponion.com/preview/help-tabs.gif)

## Admin Columns & Custom Pages
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/admin-columns.jpg)](https://s3.wponion.com/preview/admin-columns.jpg)
[![WPOnion Framework Screenshot](https://s3.wponion.com/preview/admin-page-with-tabs.jpg)](https://s3.wponion.com/preview/admin-page-with-tabs.jpg)
