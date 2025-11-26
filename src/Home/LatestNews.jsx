export default function LatestNews() {
  const newsItems = [
    {
      title: "Champions League: Final Match Highlights",
      image:
        "https://images.pexels.com/photos/163534/baseball-victory-game-sport-163534.jpeg",
      description: "Full coverage of last night’s intense final showdown.",
    },
    {
      title: "Cricket World Cup: Player Rankings Updated",
      image:
        "https://images.pexels.com/photos/34563722/pexels-photo-34563722.png",
      description:
        "New ranking shifts after incredible performances this season.",
    },
    {
      title: "NBA Trade Rumors: What’s Coming Next?",
      image:
        "https://images.pexels.com/photos/34926383/pexels-photo-34926383.jpeg",
      description:
        "Experts discuss the most surprising transfer buzz this week.",
    },
  ];

  return (
    <section className="px-6 py-20 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Latest Sports News
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border rounded bg-white/70 *:text-black p-3">
            <figure>
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover rounded" />
            </figure>

            <div className="card-body mt-3">
              <h3 className="card-title font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-actions mt-2 justify-end">
                <a href="/news" className="btn btn-primary btn-sm border p-1 rounded">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}