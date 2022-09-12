const deslizante = document.querySelector(".listaDeslizante");
const menuItem = document.querySelectorAll("menuItem");
const productos = [
{
id: 1,
titulo: "Remera";
precio: 2.000;
colores: [
    {
        codigo: "orange";
        img: "./"
    };
    {
        codigo: "negro";
        Image: "/I"
    };
    {
        codigo: "negro";
        img: "./"
    };
];
};
{
    id: 2,
    titulo: "pantalon";
    precio: 2.500;
    colores: [
        {
            codigo: "amarillo";
            img: "./"
        };
        {
            codigo: "VA";
            img: "./"
        };
        {
            codigo: "blanco";
            img: "./"
        };
    ];
    };
    {
        id: 3,
        titulo: "buzo";
        precio: 3000;
        colores: [
            {
                codigo: "ba";
                img: "./"
            };
            {
                codigo: "azul";
                img: "./"
            };
            {
                codigo: "rojo";
                img: "./"
            };
        ];
        };
]

let elegirProducto = productos [0]

const actualProductoImagen =document.querySelector(".imagenProducto");
const actualProductoTitulo =document.querySelector(".tituloProducto");
const actualProductoPrecio =document.querySelector(".precioProducto");
const actualProductoColores =document.querySelectorAll(".color");
const actualProductoTalles =document.querySelectorAll(".talle");

menuItem.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        //cambiar la diapositiva actual
        deslizante.style.transform = "translatex(${-100 *index}vw)";
        //cambiar el producto elegido
        elegirProducto =productos [index]
        //cambiar los textos del producto actual
        actualProductoTitulo.textContent = elegirProducto.titulo
        actualProductoPrecio.textContent =  "$" + elegirProducto.precio
        actualProductoImagen.src =elegirProducto.colores[0].img

        //Asignar nuevos colores
        actualProductoColores.forEach((color, index)=>{
            color.style.backgroundColor = actualProductoColores.colores[index].codigo;
        })
    });
});

actualProductoColores.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        actualProductoImagen.src = elegirProducto.colores[index].img
    })
})
