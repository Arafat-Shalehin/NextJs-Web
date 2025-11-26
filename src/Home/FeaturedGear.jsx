export default function FeaturedGear() {
  const gearItems = [
    {
      name: "Pro Football Boots",
      price: "$89.99",
      image:
        "https://images.pexels.com/photos/32941076/pexels-photo-32941076.jpeg",
    },
    {
      name: "Cricket Bat Elite",
      price: "$129.50",
      image:
        "https://images.pexels.com/photos/30387495/pexels-photo-30387495.jpeg",
    },
    {
      name: "Basketball",
      price: "$39.99",
      image:
        "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Featured Sports Gear
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gearItems.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl 
            hover:scale-[1.02] hover:shadow-2xl 
            transition-all border rounded"
          >
            <figure className="px-4 pt-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded h-48 w-full 
                object-cover mb-3"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h3 className="card-title text-xl">{item.name}</h3>
              <p className="text-lg font-semibold">Price: {item.price}</p>
              <div className="card-actions my-4">
                <a className="btn btn-outline btn-sm border px-4 py-1 rounded-lg" href="/products">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
