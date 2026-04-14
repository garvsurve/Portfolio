import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Smile } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", "New Contact Form Submission from " + form.name);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error("Submission failed:", result.message);
        alert("Failed to send message: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neo-bg bg-grid border-t-8 border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="inline-block bg-neo-muted border-4 border-black px-4 py-1 rotate-2 font-black uppercase shadow-neo-sm">
                04. CONNECT
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Let&apos;s <br /> <span className="text-stroke">Talk</span>
              </h2>
              <p className="text-xl font-bold opacity-80 max-w-sm">
                Have a vision? Let&apos;s build it. I&apos;m currently open for new roles and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: 'Email', value: 'garvsurve1@gmail.com', color: 'bg-neo-accent' },
                { icon: <Phone />, label: 'Phone', value: '+91 786-9948-327', color: 'bg-neo-secondary' },
                { icon: <MapPin />, label: 'Location', value: 'Gwalior, India', color: 'bg-neo-muted' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className={`p-4 border-4 border-black shadow-neo-sm group-hover:shadow-neo-md transition-all ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest opacity-50">{item.label}</div>
                    <div className="text-xl font-black">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/garvsurve" className="neo-btn bg-neo-white p-4">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/garvsurve" className="neo-btn bg-neo-white p-4">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 relative">
            {sent ? (
              <div className="bg-neo-secondary border-8 border-black p-12 text-center rotate-1 shadow-neo-xl">
                <Smile size={80} className="mx-auto mb-6" />
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Message Recieved!</h3>
                <p className="text-xl font-bold">I&apos;ll get back to you faster than a compiler error. 🤝</p>
                <button 
                   onClick={() => setSent(false)}
                   className="mt-8 neo-btn bg-neo-ink text-neo-white px-8 py-3"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                <form 
                  onSubmit={handleSubmit}
                  className="relative bg-neo-white border-8 border-black p-8 md:p-12 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest">Name</label>
                      <input 
                        required
                        className="neo-input w-full"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest">Email</label>
                      <input 
                        required
                        type="email"
                        className="neo-input w-full"
                        name="email"
                        placeholder="hello@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="neo-input w-full resize-none"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button 
                    disabled={loading}
                    className="neo-btn w-full bg-neo-accent py-5 text-2xl font-black flex items-center justify-center gap-3 group"
                  >
                    {loading ? 'SENDING...' : (
                      <>SEND MESSAGE <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
