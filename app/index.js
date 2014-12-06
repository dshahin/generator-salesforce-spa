'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var ncp = require('ncp');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the wonderful' + chalk.red('SalesforceSpa') + ' generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }];

        this.prompt(prompts, function(props) {
            this.someOption = props.someOption;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.fs.copy(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
            this.fs.copy(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json')
            );
            ncp(this.templatePath('static'), this.destinationPath('static'), function(err) {
                if (err) {
                    return console.error(err);
                }
                //this.log('copying static resourse folder and contents done.');
            });

            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html'), {
                    title: 'My local page that thinks it is a VF Page'
                }
            );
            this.fs.copyTpl(
                this.templatePath('_index.vf.page'),
                this.destinationPath('index.vf.page'), {
                    title: 'My VF page',
                    staticName : 'myStaticResource'
                }
            );
        },

        projectfiles: function() {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
        }
    },

    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});
