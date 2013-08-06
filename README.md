## Make a module you can use everywhere

[![Build Status](https://travis-ci.org/begriffs/generator-omni-module.png)](https://travis-ci.org/begriffs/generator-omni-module)

You have written an amazing new JS library and now it's time
to distribute it to the world. Use this Yeoman generator
to make your module accessible on both the client side
([RequireJS](http://requirejs.org/) + [Bower](http://bower.io/)) and
the server ([CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) +
[NPM](https://npmjs.org/)).

With all the popularity your universally accessible module will gain
you'll want to be sure it's easy for you to maintain and others to
improve. That's why the boilerplate comes ready-made with a test
suite and [Travis](https://travis-ci.org/) hooks. It has a solid
[JSHint](http://www.jshint.com/) config and includes a lint step as
part of continuous integration so your codebase will stay fresh and
consistent no matter how many people modify it.

## Getting started

* Create the boilerplate

```
    mkdir your-module && cd $_
    npm install -g yo
    npm install -g generator-omni-module
    yo omni-module
```

* Answer the questions it asks you.
* Add the Github upstream specified in `package.json`
* Write your lovely code and a README.

## Testing your module

You will want both of these commands to be passing on stable code
branches.

    grunt jshint  # run JSHint on all code and tests
    grunt test    # run Mocha test suite

## Publishing your module

* Register your module with Bower: `bower register <my-package-name> <git-endpoint>`
* Bump the version, tag the code, and publish with: `grunt release`

## License

The generator-omni-module is Copyright © 2013 Joe Nelson. It is free
software, and may be redistributed under the terms specified in the
LICENSE file.
