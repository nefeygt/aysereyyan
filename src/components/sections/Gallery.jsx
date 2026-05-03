export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
      caption: "Laboratory Analysis"
    },
    {
      url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
      caption: "Pharmacy Operations"
    },
    {
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      caption: "Clinical Practice"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">In Action</h2>
          <p className="text-slate-600">Glimpses of my academic and practical journey.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-200 border border-slate-200 shadow-sm"
            >
              <img 
                src={img.url} 
                alt={img.caption}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-6 tracking-wide drop-shadow-md">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
