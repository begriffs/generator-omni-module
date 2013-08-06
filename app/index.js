'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var OmniModuleGenerator = module.exports = function OmniModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(OmniModuleGenerator, yeoman.generators.Base);

OmniModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'moduleName',
      message: 'What are you naming this module?'
    },
    {
      name: 'author',
      message: 'What is your name?',
    },
    {
      name: 'githubUser',
      message: 'What is your Github username?'
    },
  ];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;
    this.author = props.author;
    this.githubUser = props.githubUser;

    cb();
  }.bind(this));
};

OmniModuleGenerator.prototype.app = function app() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_LICENSE', 'LICENSE');
  this.copy('_module.js', 'module.js');
};

OmniModuleGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_travis.yml', 'travis.yml');
};

OmniModuleGenerator.prototype.tests = function tests() {
  this.mkdir('test');
  this.template('_existence.js', 'test/existence.js');
};
