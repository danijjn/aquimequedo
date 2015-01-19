requirejs.config({
	baseUrl: 'js/libs',
	paths: {
		app: '../app'
	},
    shim: {
        'jquery.cookie': ['jquery'],
        'foundation.min': ['jquery'],
        'foundation/foundation.topbar': ['foundation.min']
    }
});

requirejs(["jquery", "foundation.min", "foundation/foundation.topbar"],
	function (jq, foundation, topbar) {
		jq("#hola-mundo").val("Hola, mundo!");
		jq(document).foundation();
	}
);