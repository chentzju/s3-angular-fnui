/**
 * Created by chent on 2017/2/3.
 */

var appPath = 'src/app/';

module.exports = {

    modules:[
        {name:'account',path: appPath + 'views/account'},
        {name:'order',  path: appPath + 'views/order'},
        {name:'myorder',path: appPath + 'views/myorder'},
        {name:'payment',path: appPath + 'views/payment'},
        {name:'profile',path: appPath + 'views/profile'},
        {name:'cart',path: appPath + 'views/cart'},
        {name:'public',path: appPath + 'views/public'}
    ]

};