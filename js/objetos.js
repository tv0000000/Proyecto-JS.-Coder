class Producto {
    constructor(id, nombre, descripcion, precio, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
        this.cantidad = cantidad = 1;
    }
}

const hamburguesa1 = new Producto(1, "CrispyBurguer", "Carne smash, doble cheddar, panceta, cebolla crispy y salsa Club. Pan con sésamo y papas crocantes triple cocción.", 200, "img/hamburguesa1.jpg");
const hamburguesa2 = new Producto(2, "ClassicBurguer", "Carne smash, lechuga, tomate, queso mozzarella, cebolla crispy, pickles de pepino, y alioli de ajo. Pan liso.", 200, "img/hamburguesa2.jpg");
const hamburguesa3 = new Producto(3, "OnionBurguer", "Carne smash, doble cheddar, cebolla crispy, ketchup y pan con parmesano. Pan con parmesano y papas triple cocción.", 200, "img/hamburguesa3.jpg");
const hamburguesa4 = new Producto(4, "OklaBurguer", "Doble carne smasheada en cebolla, doble cheddar, pepinillos, muzzarellitas, honey mustard, . Con papas triple cocción.", 500, "img/hamburguesa4.jpg");
const hamburguesa5 = new Producto(5, "homeBurguer", "Doble carne smash, doble cheddar, tomate, lechuga, salsa del cuarto y pan con sésamo. Con papas triple cocción.", 200, "img/hamburguesa5.jpg");
const hamburguesa6 = new Producto(6, "BBQBurguer", "Doble carne smash, doble cheddar, panceta, cebolla crispy, barbacoa Jack Daniels y pan con parmesano. Con papas.", 100, "img/hamburguesa6.jpg");
const hamburguesa7 = new Producto(7, "SimpleBurguer", "Carne smash, doble cheddar y pan con sésamo, tomate y salsa de cerveza artesanal. Con papas triple cocción.", 100, "img/hamburguesa7.jpg");
const hamburguesa8 = new Producto(8, "ChickenBurguer", "Pollo crispy rebozado en panko y sésamo, lechuga capuchina, pickles de pepino y alioli de ajo en pan con sésamo.", 100, "img/hamburguesa8.jpg");
