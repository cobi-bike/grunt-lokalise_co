var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var grunt = require('grunt');

var dataDir = 'test/data/';
var destFile = dataDir + 'out/en.json';

describe('lokalise_co', function(){

    describe('test target', function(){

        it('should have created the dest file', function(){
            expect(grunt.file.exists(destFile)).to.be.equal(true);
            expect(grunt.file.read(destFile).length).to.be.above(0);
        });

        it('should have created a valid json file', function() {
            var content = grunt.file.readJSON(destFile);
            expect(content).to.be.an('object');
        });
    });
});
