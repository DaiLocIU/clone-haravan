// interface itemSidebar {
//     name: String,
//     icon?: String,
//     routeName: String,
//     roles?: String[],
// } 
const sidebarObj = [
    {
        items: [
            {
                name: 'Đơn hàng',
                icon: 'icon-order-2',
                routeName: '',
                roles: [],
            },
            {
                name: 'Sản phẩm',
                icon: 'icon-item',
                routeName: '',
                roles: [],
            },
            {
                name: 'Khuyến mãi',
                icon: 'icon-redeem',
                routeName: '',
                roles: [],
            },
        ]
    }, {
        title: {
            name: 'Kênh bán hàng',
            icon: 'icon-plus-circle',
        },
        items: [
           {
            name: 'Website',
            icon: 'icon-website'
           },
        ]
    }
] 

export default sidebarObj;