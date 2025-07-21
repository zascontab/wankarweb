export interface IResponseMenu {
    data: Menu
}

export interface Menu {
    meta: MenuMeta;
    data: Data;
}

export interface Data {
    navigationMenu: NavigationMenu[];
}

export interface NavigationMenu {
    meta:      MenuItemMeta;
    name:      string;
    menuItems: MenuItem[];
}

export interface MenuItem {
    meta:  MenuItemMeta;
    label: string;
    url:   string;
}

export interface MenuItemMeta {
    id: number;
}

export interface MenuMeta {
    count:        number;
    nextPage:     null;
    previousPage: null;
}