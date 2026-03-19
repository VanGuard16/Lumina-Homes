        // Property Data Array
const properties = [
    {
        id: 1,
        title: "Modern Hillside Villa",
        location: "Beverly Hills, CA",
        price: 4500000,
        beds: 5,
        baths: 4.5,
        sqft: 4200,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        featured: true,
        new: true,
        agent: "Sarah Mitchell"
    },
    {
        id: 2,
        title: "Downtown Penthouse",
        location: "Manhattan, NY",
        price: 8200000,
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        featured: true,
        new: false,
        agent: "James Chen"
    },
    {
        id: 3,
        title: "Seaside Retreat",
        location: "Malibu, CA",
        price: 12500,
        beds: 4,
        baths: 3,
        sqft: 3200,
        type: "house",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        featured: false,
        new: true,
        agent: "Emma Wilson"
    },
    {
        id: 4,
        title: "Historic Brownstone",
        location: "Boston, MA",
        price: 3200000,
        beds: 4,
        baths: 3.5,
        sqft: 3600,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        featured: false,
        new: false,
        agent: "Michael Brown"
    },
    {
        id: 5,
        title: "Luxury Condo",
        location: "Miami Beach, FL",
        price: 2100000,
        beds: 2,
        baths: 2,
        sqft: 1800,
        type: "apartment",
        status: "sale",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        featured: true,
        new: true,
        agent: "Isabella Garcia"
    },
    {
        id: 6,
        title: "Mountain Lodge",
        location: "Aspen, CO",
        price: 8900000,
        beds: 6,
        baths: 5,
        sqft: 5500,
        type: "villa",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        featured: false,
        new: false,
        agent: "David Park"
    },
    {
        id: 7,
        title: "Waterfront Apartment",
        location: "Seattle, WA",
        price: 8500,
        beds: 2,
        baths: 2,
        sqft: 1400,
        type: "apartment",
        status: "rent",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
        featured: false,
        new: true,
        agent: "Lisa Anderson"
    },
    {
        id: 8,
        title: "Garden Estate",
        location: "Greenwich, CT",
        price: 5600000,
        beds: 5,
        baths: 4,
        sqft: 4800,
        type: "house",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        featured: true,
        new: false,
        agent: "Robert Taylor"
    },
    {
        id: 9,
        title: "Skyline Penthouse",
        location: "Chicago, IL",
        price: 4500000,
        beds: 3,
        baths: 3.5,
        sqft: 3100,
        type: "penthouse",
        status: "sale",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        featured: false,
        new: true,
        agent: "Jennifer Lee"
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
        return `$${price.toLocaleString()}/mo`;
    }
    if (price >= 1000000) {
        return `$${(price / 1000000).toFixed(2)}M`;
    }
    return `$${(price / 1000).toFixed(0)}k`;
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
                    <span class="font-semibold">View Details</span>
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