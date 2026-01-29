import { useState } from 'react';
import './PortfollioGardenia.css';

const PortfollioGardenia = () => {
  const [activeTab, setActiveTab] = useState('leasing');

  const commercialShops = [
    {
      id: 1,
      name: 'The Artisan Cafe',
      unit: 'Unit A • Commercial Shop',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      name: 'Gardenia Bakery',
      unit: 'Unit B • Commercial Shop',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      name: 'Boutique Apparel',
      unit: 'Unit C • Commercial Shop',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      name: 'The Classic Barber',
      unit: 'Unit D • Commercial Shop',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const residentialProperties = [
    {
      id: 1,
      name: 'Parnell Residence',
      location: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      description: "A contemporary luxury home situated in one of Auckland's most prestigious suburbs, featuring classic architecture and modern amenities."
    },
    {
      id: 2,
      name: 'Tropical Sanctuary',
      location: 'Fiji Islands',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
      description: 'A breathtaking island retreat offering serene privacy and traditional design elements integrated with coastal luxury.'
    },
    {
      id: 3,
      name: 'Island Villa',
      location: 'Samoa',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1200',
      description: 'A premium residential asset in Samoa, reflecting local heritage through high-end craftsmanship and landscape integration.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-stone-900 uppercase">Gardenia Trustees Ltd</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500">Property Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-wider">
            <a href="#commercial" className="hover:text-stone-500 transition">Commercial</a>
            <a href="#residential" className="hover:text-stone-500 transition">Residential</a>
            <a href="#contact" className="hover:text-stone-500 transition">Inquiries</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient h-[80vh] flex items-center justify-center text-center text-white px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Excellence in Property Management</h1>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-90">
            Overseeing a curated collection of 7 premium properties across New Zealand and the Pacific Islands.
          </p>
        </div>
      </section>

      {/* Commercial Section */}
      <section id="commercial" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl text-stone-900 font-light">Commercial Portfolio</h2>
            <p className="text-stone-500 mt-3 text-base">Side-by-Side Retail Buildings</p>
          </div>
          <span className="text-stone-400 font-light italic mt-6 md:mt-0">Adjoining Commercial Block</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {commercialShops.map((shop) => (
            <div key={shop.id} className="group shop-card">
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative mb-6 rounded-xl shop-media">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover shop-img"
                />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-stone-900 font-medium">{shop.name}</h3>
              <p className="text-xs uppercase tracking-widest text-stone-500 leading-relaxed">{shop.unit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Residential Section */}
      <section id="residential" className="py-32 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl mb-4 font-light">Residential Collection</h2>
            <p className="text-stone-400 text-base">Exclusive homes in Parnell and the Pacific</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {residentialProperties.map((property) => (
              <div key={property.id} className="flex flex-col">
                <div className="aspect-video bg-stone-800 overflow-hidden mb-8 rounded-sm">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3">{property.location}</span>
                <h3 className="text-2xl md:text-3xl mb-6 font-light">{property.name}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-base">{property.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="contact" className="py-32 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-stone-900 mb-6 font-light">Portfolio Inquiries</h2>
            <p className="text-stone-600 font-light text-base max-w-2xl mx-auto">All properties are available for long-term lease or acquisition. Select your inquiry type below.</p>
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="grid grid-cols-2 bg-stone-200/70 p-1 rounded-full border border-stone-300 shadow-sm">
            <button
              onClick={() => setActiveTab('leasing')}
              className={`py-3 text-[11px] md:text-sm uppercase tracking-[0.22em] font-semibold transition whitespace-nowrap text-center rounded-full ${
                activeTab === 'leasing'
                  ? 'bg-white text-stone-900 shadow border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Leasing Inquiry
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`py-3 text-[11px] md:text-sm uppercase tracking-[0.22em] font-semibold transition whitespace-nowrap text-center rounded-full ${
                activeTab === 'sales'
                  ? 'bg-white text-stone-900 shadow border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              For Sale Inquiry
            </button>
            </div>
          </div>

          {/* Forms Container */}
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-12 shadow-lg rounded-xl border border-stone-200">
            {activeTab === 'leasing' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 text-left">
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Contact Number</label>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Select Property for Lease</label>
                  <select className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base">
                    <optgroup label="Commercial Shop Buildings">
                      <option>The Artisan Cafe (Unit A)</option>
                      <option>Gardenia Bakery (Unit B)</option>
                      <option>Boutique Apparel (Unit C)</option>
                      <option>The Classic Barber (Unit D)</option>
                    </optgroup>
                    <optgroup label="Residential Portfolio">
                      <option>Parnell Residence - Auckland</option>
                      <option>Tropical Sanctuary - Fiji</option>
                      <option>Island Villa - Samoa</option>
                    </optgroup>
                  </select>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Proposed Terms / Message</label>
                  <textarea
                    rows="5"
                    placeholder="Detail your interest and intended use..."
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-stone-900 text-white text-xs uppercase tracking-[0.3em] py-4 hover:bg-stone-800 active:bg-stone-700 transition font-medium rounded-md">
                  Submit Leasing Inquiry
                </button>
              </div>
            )}

            {activeTab === 'sales' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 text-left">
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Select Asset for Acquisition</label>
                  <select className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base">
                    <optgroup label="Residential Assets">
                      <option>Parnell Residence - Auckland</option>
                      <option>Tropical Sanctuary - Fiji</option>
                      <option>Island Villa - Samoa</option>
                    </optgroup>
                    <optgroup label="Commercial Block">
                      <option>The Artisan Cafe (Unit A)</option>
                      <option>Gardenia Bakery (Unit B)</option>
                      <option>Boutique Apparel (Unit C)</option>
                      <option>The Classic Barber (Unit D)</option>
                    </optgroup>
                  </select>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-stone-600 font-medium">Purchase Inquiry / Financing Details</label>
                  <textarea
                    rows="5"
                    placeholder="Inquire about property acquisition or private viewing..."
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-stone-900 focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition rounded-md text-base resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-stone-900 text-white text-xs uppercase tracking-[0.3em] py-4 hover:bg-stone-800 active:bg-stone-700 transition font-medium rounded-md">
                  Submit Purchase Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-stone-400 text-[10px] uppercase tracking-widest gap-8">
          <div className="text-center md:text-left">
            <span className="block text-stone-900 font-bold mb-2 text-sm">Gardenia Trustees Ltd</span>
            <span>&copy; 2024 All rights reserved.</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-center md:text-right">
            <a href="#" className="hover:text-stone-900 transition">Portfolio</a>
            <a href="#" className="hover:text-stone-900 transition">Trustee Info</a>
            <a href="#" className="hover:text-stone-900 transition">management@gardeniatrustees.co.nz</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfollioGardenia;