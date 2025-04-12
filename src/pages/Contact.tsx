
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean; message?: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would connect this to a backend service
    // This is a simulation for the template
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: "Your message has been sent successfully. I'll get back to you soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24">
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-portfolio-darkGray/30 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-portfolio-orange mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-300 font-medium">Email</h3>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-portfolio-orange hover:underline"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-portfolio-orange mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-300 font-medium">Location</h3>
                    <p className="text-white">City, State</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Linkedin className="text-portfolio-orange mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-300 font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-orange hover:underline"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Github className="text-portfolio-orange mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-300 font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-orange hover:underline"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-portfolio-darkGray/30 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h2>
              
              {submitResult && (
                <div className={`p-4 mb-6 rounded-lg ${submitResult.success ? 'bg-green-700/30 text-green-400' : 'bg-red-700/30 text-red-400'}`}>
                  {submitResult.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-portfolio-dark border border-gray-700 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-orange"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-portfolio-dark border border-gray-700 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-orange"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-portfolio-dark border border-gray-700 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-portfolio-dark border border-gray-700 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-orange resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-portfolio-brown text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-portfolio-orange transform hover:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
