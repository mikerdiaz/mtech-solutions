export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
        <p className="mt-4 text-slate-600">
          Phone: <a href="tel:+16729625220" className="text-accent font-medium">(672) 962-5220</a><br />
          Email: <a href="mailto:mike@mtechsolutions.com" className="text-accent font-medium">mike@evonetip.com</a><br />
          Location: Surrey, Tri-Cities, Burnaby
        </p>
        <div className="mt-6">
          <a href="mailto:mike@mtechsolutions.com" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
