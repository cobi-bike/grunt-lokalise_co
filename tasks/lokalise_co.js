/*
 * grunt-lokalise_co
 * https://github.com/cobi/grunt-lokalise_co
 *
 * Copyright (c) 2016 Daniel Tralamazza <daniel.tralamazza@cobi.bike>
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {
    const extract = require('extract-zip');
    const needle = require('needle');
    const path = require('path');
    const os = require('os');

    const LOKALISE_URL = 'https://lokalise.co';
    const LOKALISE_API_URL = `${LOKALISE_URL}/api/project/export`;

    /**
     * Register the Grunt task lokalise_co
     */
    grunt.registerMultiTask('lokalise_co', 'lokalise.co plugin', function() {
        const options = this.options({ type: 'json'});
        const done = this.async();

        this.files.forEach(function (dir) {
            grunt.file.mkdir(dir.dest);
            grunt.log.debug('sending export request');

            needle.post(LOKALISE_API_URL, options, function (err, resp) {
                if (err) {
                    return grunt.fail.fatal(err);
                }
                if (resp.body.response.code != '200') {
                    return grunt.fail.fatal(resp.body.response.message);
                }
                const output_file = path.resolve(os.tmpdir(), path.basename(resp.body.bundle.file));
                needle.get(`${LOKALISE_URL}/${resp.body.bundle.file}`, { follow: 10, output: output_file }, function (err) {
                    if (err)
                        return grunt.fail.fatal(err);
                    extract(output_file, { dir: dir.dest }, function (err) {
                        if (err)
                            return grunt.fail.fatal(err);
                        grunt.log.ok(`files extracted to '${dir.dest}'`);
                        done();
                    });
                });
            });
        });
    });
};
