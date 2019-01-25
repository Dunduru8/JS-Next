function Container(id, className, tagName) {
  // public
  this.id = id;
  this.className = className;

  // protected
  this._tagName = tagName;

  // private
  var element;

  this.getElement = function() {
    return element;
  }

  this.setElement = function(newValue) {
    element = newValue;
  }
}

Container.prototype.render = function() {
  var element = this.getElement();

  if (!element) {
    element = document.createElement(this._tagName);
    element.id = this.id;
    element.className = this.className;

    this.setElement(element);
  }

  return element;
}

Container.prototype.remove = function(){
    var element = this.getElement();
    
    if(element){
        element.parentElement.removeChild(element);
    }

}

function Menu(id, className, items,) {
  Container.call(this, id, className, "ul");

  // protected
  this._items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
  var container = Container.prototype.render.call(this);
  
  this._items.forEach(function(item) {
    if(item instanceof Container) {
      container.appendChild(item.render());
    }
  });

  return container;
}


function MenuItem(className,link, title) {
  Container.call(this, "",  className, "li");

  this.link = link;
  this.title = title;   
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
  var container = Container.prototype.render.call(this);

  var a = document.createElement("a");
  a.textContent = this.title;
  a.href = this.link;
  a.className = "menu_link";
  container.appendChild(a);
      
    return container;
}

function MenuItemDrop(className,link, title) {
  Container.call(this, "",  className, "li");

  this.link = link;
  this.title = title;   
}

MenuItemDrop.prototype = Object.create(Container.prototype);
MenuItemDrop.prototype.render = function() {
  var container = Container.prototype.render.call(this);

  var a = document.createElement("a");
  a.textContent = this.title;
  a.href = this.link;
  a.className = "drop_link";
  container.appendChild(a);
      
    return container;
}

function SuperMenu(id, className, items, link, title) {
  MenuItem.call(this, "", link, title, );
  Menu.call(this, id, className, items);
}

SuperMenu.prototype = Object.create(Menu.prototype);
SuperMenu.prototype.render = function() {
  if(this.link && this.title) {
    var menuItem = new MenuItem("menu_list", this.link, this.title, this.className).render();
    var menu = Menu.prototype.render.call(this);
    menuItem.appendChild(menu);

    return menuItem;
  } else {
    return Menu.prototype.render.call(this);
  }
}
var menu1 = new MenuItem("menu_list", "#", "Home");

var menuItem1 = new MenuItemDrop("drop_list", '#', "Shirts");
var menuItem2 = new MenuItemDrop("drop_list", '#', "Sweater");
var menuItem3 = new MenuItemDrop("drop_list", "#", "Pants");
var menuItem4 = new MenuItemDrop("drop_list", "#", "Coats");

var menu2 = new SuperMenu("drop_menu", "drop_menu", [
  menuItem1,
  menuItem2,
  menuItem3,
  menuItem4,
], "#", "Men", "drop_link");  

var menuItem5 = new MenuItemDrop("drop_list", '#', "Dress");
var menuItem6 = new MenuItemDrop("drop_list", '#', "Shirts");
var menuItem7 = new MenuItemDrop("drop_list", "#", "Sweater");
var menuItem8 = new MenuItemDrop("drop_list", "#", "Coats");

var menu3 = new SuperMenu("drop_menu", "drop_menu", [
  menuItem5,
  menuItem6,
  menuItem7,
  menuItem8,
], "#", "Women", "drop_link");

var menuItem9 = new MenuItemDrop("drop_list", '#', "Dress");
var menuItem10 = new MenuItemDrop("drop_list", '#', "Coats");
var menuItem11 = new MenuItemDrop("drop_list", "#", "Toys");


var menu4 = new SuperMenu("drop_menu", "drop_menu", [
  menuItem9,
  menuItem10,
  menuItem11,
], "#", "Kids", "drop_link");

var menuItem12 = new MenuItemDrop("drop_list", '#', "Hats");
var menuItem13 = new MenuItemDrop("drop_list", '#', "Scarfs");
var menuItem14 = new MenuItemDrop("drop_list", "#", "Belts");

var menu5 = new SuperMenu("drop_menu", "drop_menu", [
  menuItem12,
  menuItem13,
  menuItem14,
], "#", "Accessories", "drop_link");

var menu8 = new SuperMenu("menu_header_top", "menu_header_top", [           
  menu1,
  menu2,
  menu3,
  menu4,
  menu5
]);


document.getElementById("menu").appendChild(menu8.render());

