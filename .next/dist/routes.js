'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMwQixBQUQxQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFK0IsQUFGL0IsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3dDLEFBSHhDLDZCQUlLLEFBSkwsSUFJUyxBQUpULG9DQUk0QyxBQUo1Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1NhbmRlc2gvRGVza3RvcC9ibG9ja2NoYWluL2JvaWxlcnBsYXRlLWtpY2tzdGFydC9raWNrc3RhcnQifQ==