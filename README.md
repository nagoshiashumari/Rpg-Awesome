# [RPG Awesome](http://nagoshiashumari.github.io/Rpg-Awesome/)
### A fantasy themed font and CSS toolkit.

RPG Awesome is a suite of 495 pictographic, rpg and fantasy themes icons for easy scalable vector graphics on websites, created and maintained by [Daniela Howe](https://github.com/nagoshiashumari) and [Ivan Montiel](http://github.com/idmontie).

## Installation

### Bower

```
bower install rpg-awesome
```

### NPM

```
npm add --save rpg-awesome
```

### Meteor

```
meteor add rpg-awesome
```

## Developing

This project uses NPM and Grunt to compile SCSS into CSS usable by browsers.
The project also requires for you to have Ruby installed:

```sh
npm install
gem update --system && gem install scss-lint
grunt
```

## Generating and Adding New Icons

We have split up the generation process of the `/fonts` directory to
[this repo](https://github.com/nagoshiashumari/rpg-awesome-raw).

Any new icons will need to be added to that repo first. Then follow the steps located in that repo's documentation for generating new `.eot`, `.svg`, `.ttf`, and `.woff` files.

Note that when adding new icons to the font files, you will need to update the `scss/_variables.scss` file with all of the new offsets.

The `gh-pages` branch of this repo should also be updated to add the
new icon to the web docs.

## License
- The Rpg Awesome font is licensed under the SIL OFL 1.1:
  - http://scripts.sil.org/OFL
- Rpg Awesome CSS and SASS files are licensed under the MIT License:
  - http://opensource.org/licenses/mit-license.html
- The Rpg Awesome documentation is licensed under the CC BY 3.0 License:
  - http://creativecommons.org/licenses/by/3.0/
- Attribution is appreciated but not required
- Full details: https://github.com/nagoshiashumari/Rpg-Awesome/blob/master/LICENSE.md
