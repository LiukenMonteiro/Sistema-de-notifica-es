/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-sino': '&#xe900;',
		'icon-logo-backupp': '&#xe901;',
		'icon-ip': '&#xe902;',
		'icon-key': '&#xe903;',
		'icon-user': '&#xe904;',
		'icon-info': '&#xe905;',
		'icon-reboot': '&#xe906;',
		'icon-topo': '&#xe907;',
		'icon-dir': '&#xe908;',
		'icon-esq': '&#xe909;',
		'icon-error1': '&#xe90a;',
		'icon-error': '&#xe90b;',
		'icon-pin': '&#xe90d;',
		'icon-link': '&#xe90f;',
		'icon-claro': '&#xe910;',
		'icon-storage': '&#xe911;',
		'icon-busca': '&#xe912;',
		'icon-file': '&#xe913;',
		'icon-cloud_check': '&#xe914;',
		'icon-baixar': '&#xe915;',
		'icon-escuro': '&#xe917;',
		'icon-mais': '&#xe919;',
		'icon-data': '&#xe91a;',
		'icon-mundo': '&#xe91c;',
		'icon-check_box': '&#xe91d;',
		'icon-box': '&#xe91e;',
		'icon-loop': '&#xe91f;',
		'icon-check_circle': '&#xe920;',
		'icon-delete': '&#xe921;',
		'icon-home': '&#xe922;',
		'icon-config': '&#xe923;',
		'icon-lock_open': '&#xe924;',
		'icon-cadeado': '&#xe925;',
		'icon-close2': '&#xe928;',
		'icon-lista': '&#xe92c;',
		'icon-upload': '&#xe92d;',
		'icon-add': '&#xe92f;',
		'icon-time': '&#xe931;',
		'icon-pasta': '&#xe933;',
		'icon-view': '&#xe934;',
		'icon-check2': '&#xe937;',
		'icon-log-out': '&#xe938;',
		'icon-mk': '&#xe939;',
		'icon-ubnt': '&#xe93a;',
		'icon-int': '&#xe93b;',
		'icon-mimo': '&#xe93c;',
		'icon-file_copy': '&#xe93d;',
		'icon-pencil': '&#xe93e;',
		'icon-cometa': '&#xe93f;',
		'icon-dino': '&#xe940;',
		'icon-alert': '&#xe941;',
		'icon-close': '&#xe942;',
		'icon-true': '&#xe943;',
		'icon-list': '&#xe944;',
		'icon-cloud': '&#xe9c1;',
		'icon-terminal': '&#xea81;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
