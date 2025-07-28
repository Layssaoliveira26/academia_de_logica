//forEach e map
const products = [
    { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
    { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
	{ id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
	{ id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
	{ id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
]

//1.Uso do forEach para imprimir cada um dos produtos
console.log("Lista de Produtos")
products.forEach((product, index) =>  {
    console.log(`${index + 1}, ${product.name} , R$${product.price}`)
})

//2.Usando um map para criar um array apenas com o nome dos produtos
const productNames = products.map((product) => product.name);
console.log("\\nNome:", productNames)