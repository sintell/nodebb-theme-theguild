'use strict';

var S = require.main.require('string');
var	meta = module.parent.require('./meta');
var user = module.parent.require('./user');

var library = {};

library.init = function(params, callback) {
	var app = params.router;
	var	middleware = params.middleware;

	app.get('/admin/plugins/theguild', middleware.admin.buildHeader, renderAdmin);
	app.get('/api/admin/plugins/theguild', renderAdmin);

	callback();
};

library.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/theguild',
		icon: 'fa-paint-brush',
		name: 'The Guild Theme'
	});

	callback(null, header);
};

library.getTeasers = function(data, callback) {
	data.teasers.forEach(function(teaser) {
		if (teaser && teaser.content) {
			teaser.content = S(teaser.content).stripTags('img').s;
		}
	});
	callback(null, data);
};

library.defineWidgetAreas = function(areas, callback) {
	areas = areas.concat([
		{
			name: "Categories Sidebar",
			template: "categories.tpl",
			location: "sidebar"
		},
		{
			name: "Category Sidebar",
			template: "category.tpl",
			location: "sidebar"
		},
		{
			name: "Topic Sidebar",
			template: "topic.tpl",
			location: "sidebar"
		},
		{
			name: "Categories Header",
			template: "categories.tpl",
			location: "header"
		},
		{
			name: "Category Header",
			template: "category.tpl",
			location: "header"
		},
		{
			name: "Topic Header",
			template: "topic.tpl",
			location: "header"
		},
		{
			name: "Categories Footer",
			template: "categories.tpl",
			location: "footer"
		},
		{
			name: "Category Footer",
			template: "category.tpl",
			location: "footer"
		},
		{
			name: "Topic Footer",
			template: "topic.tpl",
			location: "footer"
		}
	]);

	callback(null, areas);
};

library.getThemeConfig = function(config, callback) {

	meta.settings.get('theguild', function(err, settings) {
		config.hideSubCategories = settings.hideSubCategories === 'on';
		config.hideCategoryLastPost = settings.hideCategoryLastPost === 'on';
	});

	callback(false, config);
};

function renderAdmin(req, res) {
	res.render('admin/plugins/theguild', {});
}

var bnet_image = '//' + process.env.BNET_LOCATION + '.battle.net/static-render/' + process.env.BNET_LOCATION + '/';
library.listBnetPicture = function(params, callback) {

    user.getUserField(params.uid, 'bnetData', function(err, data) {
        data.characters.forEach(function(character) {
            if (character.isMain) {
                params.pictures.push({
                    type: 'bnet',
                    url:  bnet_image + character.thumbnail,
                    text: '[[theguild:main_char_picture]]'
                });

                callback(null, params);
            }
        });
    });
};

library.getBnetPicture = function(params, callback) {
    if (params.type === 'bnet') {
        user.getUserField(params.uid, 'bnetData', function(err, data) {
            data.characters.forEach(function(character) {
                if (character.isMain) {
                    params.picture = bnet_image + character.thumbnail;
                    
                    callback(null, params);
                }
            });
        });
    }

};

module.exports = library;
