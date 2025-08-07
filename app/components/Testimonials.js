
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "EvoNet IP transformed our office setup. Professional, fast, and super clean cabling.",
      author: "Sandra T., Coquitlam"
    },
    {
      quote: "Highly recommend Mike for home Wi-Fi setups. Our connection is now stable everywhere.",
      author: "Jason M., Burnaby"
    },
    {
      quote: "Mike did a fantastic job installing our security cameras. Everything works perfectly and the setup looks amazing.",
      author: "Rachel S., Port Moody"
    },
    {
      quote: "I had no idea a network could be installed so neatly. EvoNet IP was on time, clear with pricing, and very respectful of our home.",
      author: "Aman D., Surrey"
    },
    {
      quote: "EvoNet IP brought our small business network to life — zero dropouts and way faster than before.",
      author: "Leo H., Burnaby"
    },
    {
      quote: "Excellent service! Fast response, fair pricing, and everything was explained clearly before starting.",
      author: "Carla B., New Westminster"
    },
    {
      quote: "We couldn’t stream movies in our basement before. Now it feels like fiber everywhere. Thank you EvoNet IP!",
      author: "Daniel R., Coquitlam"
    },
    {
      quote: "Mike upgraded our Wi-Fi and added two cameras. He worked fast, answered all our questions, and even cleaned up after. Rare to find.",
      author: "Maria L., Surrey"
    },
    {
      quote: "Super knowledgeable and very clean installation. I’d call EvoNet IP again in a heartbeat.",
      author: "Tariq A., Pitt Meadows"
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow">
              <p className="italic text-lg mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-blue-700 dark:text-blue-400">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
