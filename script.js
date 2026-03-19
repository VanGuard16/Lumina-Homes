// Property Data Array
const properties = [
    // 1–9 (already done, slightly cleaned)
    {
        id: 1,
        title: "Ikoyi Luxury Villa",
        location: "Ikoyi, Lagos",
        price: 450000000,
        beds: 5,
        baths: 4.5,
        sqft: 4200,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        featured: true,
        new: true,
        agent: "Chinedu Okafor"
    },
    {
        id: 2,
        title: "Lekki Phase 1 Penthouse",
        location: "Lekki, Lagos",
        price: 820000000,
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        featured: true,
        new: false,
        agent: "Amaka Eze"
    },
    {
        id: 3,
        title: "Victoria Island Seaside Apartment",
        location: "Victoria Island, Lagos",
        price: 125000,
        beds: 2,
        baths: 2,
        sqft: 1400,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        featured: false,
        new: true,
        agent: "Funke Adeyemi"
    },
    {
        id: 4,
        title: "Banana Island Waterfront Home",
        location: "Banana Island, Lagos",
        price: 3200000000,
        beds: 6,
        baths: 5,
        sqft: 5500,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        featured: true,
        new: false,
        agent: "Emeka Obi"
    },
    {
        id: 5,
        title: "Surulere Family House",
        location: "Surulere, Lagos",
        price: 210000000,
        beds: 4,
        baths: 3,
        sqft: 2200,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        featured: false,
        new: true,
        agent: "Tunde Adebayo"
    },
    {
        id: 6,
        title: "Lekki Garden Apartment",
        location: "Lekki, Lagos",
        price: 8500000,
        beds: 2,
        baths: 2,
        sqft: 1200,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        featured: false,
        new: false,
        agent: "Ifeoma Nwosu"
    },
    {
        id: 7,
        title: "Ajah Waterfront Duplex",
        location: "Ajah, Lagos",
        price: 45000000,
        beds: 3,
        baths: 3,
        sqft: 2500,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
        featured: true,
        new: true,
        agent: "Segun Balogun"
    },
    {
        id: 8,
        title: "Ikeja Modern Apartment",
        location: "Ikeja, Lagos",
        price: 5600000,
        beds: 2,
        baths: 2,
        sqft: 1100,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        featured: false,
        new: false,
        agent: "Ngozi Okeke"
    },
    {
        id: 9,
        title: "Victoria Island Executive Penthouse",
        location: "Victoria Island, Lagos",
        price: 450000000,
        beds: 3,
        baths: 3.5,
        sqft: 3100,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        featured: true,
        new: true,
        agent: "Oluwaseun Adekunle"
    },

    // 10–30 (new additions)
    {
        id: 10,
        title: "Lekki Phase 2 Luxury Villa",
        location: "Lekki, Lagos",
        price: 950000000,
        beds: 5,
        baths: 4,
        sqft: 4000,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        featured: true,
        new: true,
        agent: "Chika Umeh"
    },
    {
        id: 11,
        title: "Ikoyi Seafront Penthouse",
        location: "Ikoyi, Lagos",
        price: 1200000000,
        beds: 4,
        baths: 3.5,
        sqft: 3500,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        featured: true,
        new: false,
        agent: "Bola Akinola"
    },
    {
        id: 12,
        title: "Victoria Island Studio Apartment",
        location: "Victoria Island, Lagos",
        price: 3500000,
        beds: 1,
        baths: 1,
        sqft: 600,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        featured: false,
        new: true,
        agent: "Emmanuel Okoye"
    },
    {
        id: 13,
        title: "Banana Island Ultra Luxury Villa",
        location: "Banana Island, Lagos",
        price: 4000000000,
        beds: 7,
        baths: 6,
        sqft: 7000,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
        featured: true,
        new: false,
        agent: "Adesola Adebayo"
    },
    {
        id: 14,
        title: "Surulere Townhouse",
        location: "Surulere, Lagos",
        price: 85000000,
        beds: 3,
        baths: 2.5,
        sqft: 1800,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
        featured: false,
        new: true,
        agent: "Taiwo Afolabi"
    },
    {
        id: 15,
        title: "Lekki Garden Duplex",
        location: "Lekki, Lagos",
        price: 35000000,
        beds: 4,
        baths: 3,
        sqft: 2600,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
        featured: false,
        new: false,
        agent: "Chimamanda Obi"
    },
    {
        id: 16,
        title: "Ikeja Executive Apartment",
        location: "Ikeja, Lagos",
        price: 7500000,
        beds: 2,
        baths: 2,
        sqft: 1000,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
        featured: false,
        new: true,
        agent: "Gbenga Lawal"
    },
    {
        id: 17,
        title: "Ajah Luxury Duplex",
        location: "Ajah, Lagos",
        price: 65000000,
        beds: 4,
        baths: 3.5,
        sqft: 3000,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        featured: true,
        new: true,
        agent: "Oluchi Nnaji"
    },
    {
        id: 18,
        title: "Victoria Island High-Rise Apartment",
        location: "Victoria Island, Lagos",
        price: 12000000,
        beds: 3,
        baths: 2,
        sqft: 1500,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        featured: false,
        new: false,
        agent: "Tayo Olatunji"
    },
    {
        id: 19,
        title: "Lekki Oceanfront Villa",
        location: "Lekki, Lagos",
        price: 980000000,
        beds: 6,
        baths: 5,
        sqft: 5000,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        featured: true,
        new: false,
        agent: "Bukola Adeoye"
    },
    {
        id: 20,
        title: "Ikoyi Modern Apartment",
        location: "Ikoyi, Lagos",
        price: 10000000,
        beds: 3,
        baths: 2,
        sqft: 1300,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
        featured: false,
        new: true,
        agent: "Yemi Oladipo"
    },
    {
        id: 21,
        title: "Banana Island Mansion",
        location: "Banana Island, Lagos",
        price: 5000000000,
        beds: 8,
        baths: 7,
        sqft: 9000,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        featured: true,
        new: false,
        agent: "Ifedayo Adekunle"
    },
    {
        id: 22,
        title: "Surulere Compact House",
        location: "Surulere, Lagos",
        price: 65000000,
        beds: 3,
        baths: 2,
        sqft: 1700,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
        featured: false,
        new: true,
        agent: "Morayo Bello"
    },
    {
        id: 23,
        title: "Ikeja Family Apartment",
        location: "Ikeja, Lagos",
        price: 8000000,
        beds: 2,
        baths: 2,
        sqft: 1100,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
        featured: false,
        new: false,
        agent: "Kemi Ajayi"
    },
    {
        id: 24,
        title: "Lekki Hills Villa",
        location: "Lekki, Lagos",
        price: 900000000,
        beds: 5,
        baths: 4,
        sqft: 4300,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        featured: true,
        new: true,
        agent: "Adebayo Falola"
    },
    {
        id: 25,
        title: "Victoria Island Modern Duplex",
        location: "Victoria Island, Lagos",
        price: 650000000,
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        featured: true,
        new: false,
        agent: "Chioma Nwankwo"
    },
    {
        id: 26,
        title: "Ajah Coastal House",
        location: "Ajah, Lagos",
        price: 55000000,
        beds: 3,
        baths: 2.5,
        sqft: 2400,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
        featured: false,
        new: true,
        agent: "Obinna Chukwu"
    },
    {
        id: 27,
        title: "Ikeja Executive Penthouse",
        location: "Ikeja, Lagos",
        price: 150000000,
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
        featured: true,
        new: false,
        agent: "Tosin Afolabi"
    },
    {
        id: 28,
        title: "Lekki Oceanview Apartment",
        location: "Lekki, Lagos",
        price: 10000000,
        beds: 2,
        baths: 2,
        sqft: 1200,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        featured: false,
        new: true,
        agent: "Aisha Bello"
    },
    {
        id: 29,
        title: "Victoria Island Luxury Villa",
        location: "Victoria Island, Lagos",
        price: 1200000000,
        beds: 5,
        baths: 4.5,
        sqft: 4500,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
        featured: true,
        new: false,
        agent: "Seyi Adewale"
    },
    {
        id: 30,
        title: "Banana Island Contemporary Mansion",
        location: "Banana Island, Lagos",
        price: 4800000000,
        beds: 7,
        baths: 6,
        sqft: 7500,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        featured: true,
        new: true,
        agent: "Ifeanyi Uzo"
    }
];
// State
let currentFilter = 'all';
let currentView = 'grid';
let visibleCount = 6;
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProperties();
    // updateCount();
});
// Format currency
function formatPrice(price, status) {
    if (status === 'rent') {
        return `₦${price.toLocaleString()}/mo`;
    }
    if (price >= 1000000) {
        return `₦${(price / 1000000).toFixed(2)}M`;
    }
    return `₦${(price / 1000).toFixed(0)}k`;
}
    // Render Filters
function renderFilters() {
    const filters = [
        { id: 'all', label: 'All Properties' },
        { id: 'sale', label: 'For Sale' },
        { id: 'rent', label: 'For Rent' },
        { id: 'house', label: 'Houses' },
        { id: 'apartment', label: 'Apartments' },
        { id: 'villa', label: 'Villas' },
        { id: 'penthouse', label: 'Penthouses' }
    ];
    const container = document.getElementById('filter-container');

    container.innerHTML = filters.map(filter => `
        <button onclick="setFilter('${filter.id}')" 
            class="px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                currentFilter === filter.id 
                ? 'bg-estate-900 text-white border-estate-900 shadow-lg' 
                : 'bg-white text-estate-700 border-estate-200 hover:border-estate-400 hover:bg-estate-50'
            }">
            ${filter.label}
        </button>
    `).join('');
}
// Filter Logic
function setFilter(filter) {
    currentFilter = filter;
    visibleCount = 6;
    renderFilters();
    renderProperties();
    updateCount();
}
 // View Toggle
        function setView(view) {
            currentView = view;
            document.getElementById('grid-view').className = view === 'grid' 
                ? 'p-2 rounded-md transition-all bg-estate-900 text-white' 
                : 'p-2 rounded-md transition-all text-estate-600 hover:bg-estate-100';
            document.getElementById('list-view').className = view === 'list' 
                ? 'p-2 rounded-md transition-all bg-estate-900 text-white' 
                : 'p-2 rounded-md transition-all text-estate-600 hover:bg-estate-100';
            renderProperties();
        }

    // Render Properties
function renderProperties() {
    const container = document.getElementById('properties-container');
    let filtered = properties;
    // Apply filter
    if (currentFilter !== 'all') {
        if (['sale', 'rent'].includes(currentFilter)) {
            filtered = properties.filter(p => p.status === currentFilter);
        } else {
            filtered = properties.filter(p => p.type === currentFilter);
        }
    }
    // Limit visible
    const visible = filtered.slice(0, visibleCount);
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto';
    container.innerHTML = visible.map((property, index) => `
    <article class="property-card bg-slate-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer animate-fade-in" 
             style="animation-delay: ${index * 0.1}s">
        <div class="relative overflow-hidden aspect-[4/3]">
            <img src="${property.image}" alt="${property.title}" 
                 class="property-image w-full h-full object-cover">
            
            <!-- Badges -->
            <div class="absolute top-4 left-4 flex gap-2">
                ${property.new ? '<span class="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">New</span>' : ''}
                ${property.featured ? '<span class="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Featured</span>' : ''}
            </div>

            <!-- Favorite button -->
            <div class="absolute top-4 right-4">
                <button class="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors shadow-lg group-hover:scale-110 transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </button>
            </div>

            <!-- Hover overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center justify-between text-white">
                    <span onclick="openModal(${property.id})" class="font-semibold cursor-pointer">View Details</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Property info -->
        <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-serif text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">${property.title}</h3>
                <span class="text-lg font-bold text-emerald-400">${formatPrice(property.price, property.status)}</span>
            </div>

            <p class="text-slate-400 flex items-center gap-1 mb-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${property.location}
            </p>

            <!-- Stats -->
            <div class="flex items-center justify-between pt-4 border-t border-white/10 text-sm text-slate-400">
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                    </svg>
                    <span>${property.beds} Beds</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span>${property.baths} Baths</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                    <span>${property.sqft.toLocaleString()} sqft</span>
                </div>
            </div>

            <!-- Agent info & status -->
            <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-200">
                        ${property.agent.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span class="text-sm text-slate-400">${property.agent}</span>
                </div>
                <span class="text-xs px-3 py-1 rounded-full ${property.status === 'sale' ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'} font-medium uppercase">
                    For ${property.status}
                </span>
            </div>
        </div>
    </article>
    `).join('');
}
function updateCount() {
    let filtered = properties;
    if (currentFilter !== 'all') {
        if (['sale', 'rent'].includes(currentFilter)) {
            filtered = properties.filter(p => p.status === currentFilter);
        } else {
            filtered = properties.filter(p => p.type === currentFilter);
        }
    }
    document.getElementById('property-count').textContent = `${filtered.length} Properties Found`;
}
function loadMore() {
    visibleCount += 3;
    renderProperties();
}

// Modal Functions
function openModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.getElementById('property-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <!-- Hero Image -->
        <div class="relative h-96">
            <img src="${property.image}" alt="${property.title}" class="w-full h-full object-cover">
            <div class="absolute top-4 left-4 flex gap-2">
                ${property.new ? '<span class="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">New</span>' : ''}
                ${property.featured ? '<span class="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Featured</span>' : ''}
            </div>
            <div class="absolute bottom-4 left-4 right-4">
                <div class="flex justify-between items-end">
                    <div>
                        <h1 class="text-3xl font-bold text-white mb-2">${property.title}</h1>
                        <p class="text-white/90 flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            ${property.location}
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-3xl font-bold text-emerald-400">${formatPrice(property.price, property.status)}</p>
                        <span class="px-3 py-1 rounded-full ${property.status === 'sale' ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'} text-xs font-medium uppercase">
                            For ${property.status}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Details -->
        <div class="p-8">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mb-8">
                <div class="text-center">
                    <div class="text-2xl font-bold text-slate-900 mb-1">${property.beds}</div>
                    <div class="text-slate-600">Bedrooms</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-slate-900 mb-1">${property.baths}</div>
                    <div class="text-slate-600">Bathrooms</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-slate-900 mb-1">${property.sqft.toLocaleString()}</div>
                    <div class="text-slate-600">Sq Ft</div>
                </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Description</h2>
                <p class="text-slate-600 leading-relaxed">
                    Discover this exceptional ${property.type} in ${property.location}. This stunning property offers ${property.beds} spacious bedrooms and ${property.baths} modern bathrooms, spanning ${property.sqft.toLocaleString()} square feet of luxurious living space. Perfect for those seeking comfort, style, and convenience in one of Lagos's most desirable locations.
                </p>
            </div>

            <!-- Agent Info -->
            <div class="bg-slate-50 rounded-xl p-6 mb-8">
                <h3 class="text-xl font-bold text-slate-900 mb-4">Listed by</h3>
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
                <!-- Avatar + Name -->
                <div class="flex items-center gap-4 w-full md:w-auto">
                    <div class="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-lg font-bold text-white">
                        ${property.agent.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <div class="font-semibold text-slate-900">${property.agent}</div>
                        <div class="text-slate-600">Licensed Real Estate Agent</div>
                    </div>
                </div>

                <!-- Contact Button -->
                <div class="w-full md:w-auto mt-2 md:mt-0">
                    <button class="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Contact Agent
                    </button>
                </div>
            </div>

            <!-- Amenities -->
            <div class="mb-8">
                <h3 class="text-xl font-bold text-slate-900 mb-4">Amenities</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Air Conditioning</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Parking</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Security</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Gym</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Pool</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span class="text-slate-600">Garden</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('property-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
        menu.style.opacity = "0";
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.style.opacity = "1";
    }
});

const counters = document.querySelectorAll("h1.counter");
counters.forEach(counter => {
  let start = 0;
  const end = parseInt(counter.innerText);
  const duration = 1000;
  const step = Math.ceil(end / (duration / 16));

  const update = () => {
    start += step;
    if (start < end) {
      counter.childNodes[0].nodeValue = start;
      requestAnimationFrame(update);
    } else {
      counter.childNodes[0].nodeValue = end;
    }
  };

  update();
});