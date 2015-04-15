
define(['path'], function (path) {
    'use strict';

    /* global webidaAuth, webidaHost:true */
    var menu = $('#sub-menu');
    var menuname = '<li><a href="#/logout">Logout</a></li>';

    menu.append(menuname);

    path.map('#/logout').to(function () {
        if (confirm('Do you want to logout?')) {
            webidaAuth.logout(function (err) {
                if (err) {
                    alert('Failed to logout');
                } else {
                    location.href = '//' + webidaHost;
                }
            });
        }
    });

    path.listen();
});
