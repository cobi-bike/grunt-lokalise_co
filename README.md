# grunt-lokalise_co

> lokalise.co grunt plugin.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lokalise_co --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lokalise_co');
```

## The "lokalise_co" task

### Overview
In your project's Gruntfile, add a section named `lokalise_co` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lokalise_co: {
    my_project: {
        options: {
            api_token: '', /* (required) */
            id: '', /* project id (required) */
            type: 'json', /* file format (po, xls, strings, xliff, xml, json, php, yml, properties, ini) (defaults to `json`) */
            langs: ['en', 'de'], /* list of languages to be exported. If omitted, all languages are exported */
        },
        dest: '.locales'
    }
  },
})
```

## Test

```sh
npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * _0.1.0_ initial release

## License

See [MIT](https://spdx.org/licenses/MIT)
