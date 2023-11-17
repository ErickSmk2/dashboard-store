function Products({ products }) {
  return (
    <>
      <div className="text-gray-300 text-center p-12">
        <ul className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <li
              className="bg-[#1F1d2b] p-1 gap-4 rounded-xl flex flex-col items-center 
              mb-10"
              key={product.id}
            >
              <img
                className="w-40 h-40 object-cover -mt-10 rounded-full shadow-2xl"
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong>
                <p className="text-md">{product.description}</p>
                <span className="text-gray-400">${product.price}</span>
                <p className="text-gray-600">Stock:{product.stock}</p>
              </div>
              <div>
                <button>add</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
