import { WEDDING_CONFIG } from '@/lib/config';

export default function WeddingDetails() {
  return (
    <section className="py-16 bg-cover bg-center rounded-xl relative" id="details">
      <div className="absolute inset-0 bg-accent/80 dark:bg-accent-dark/80 backdrop-blur-sm rounded-xl"></div>
      <div className="relative">
        <h2 className="text-center font-heading text-primary text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-12">The Wedding Details</h2>
        <div className="grid md:grid-cols-2 gap-12 px-8">
          <div className="space-y-8 bg-background-light/70 dark:bg-background-dark/70 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">church</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light dark:text-text-dark">The Ceremony</h3>
                <p className="mt-1">Saturday, October 26, 2026</p>
                <p>{WEDDING_CONFIG.time.ceremony}</p>
                <p className="mt-2 font-semibold">{WEDDING_CONFIG.venue.ceremony.name}</p>
                <p>{WEDDING_CONFIG.venue.ceremony.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">celebration</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light dark:text-text-dark">The Reception</h3>
                <p className="mt-1">To follow the ceremony</p>
                <p>{WEDDING_CONFIG.time.receptionStart} onwards</p>
                <p className="mt-2 font-semibold">{WEDDING_CONFIG.venue.reception.name}</p>
                <p>{WEDDING_CONFIG.venue.reception.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">styler</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light dark:text-text-dark">Dress Code</h3>
                <p className="mt-1">{WEDDING_CONFIG.details.dressCode}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-96 bg-background-light/70 dark:bg-background-dark/70 rounded-lg border-4 border-white dark:border-background-dark shadow-lg">
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold text-text-light dark:text-text-dark">{WEDDING_CONFIG.venue.ceremony.name}</p>
              <p className="text-text-light/70 dark:text-text-dark/70">{WEDDING_CONFIG.venue.ceremony.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING_CONFIG.venue.ceremony.locationQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
