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
          <div className="rounded-lg overflow-hidden border-4 border-white dark:border-background-dark shadow-lg h-96">
            <iframe
              title="Wedding Venue Location - Napa Valley, CA"
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=Napa%20Valley%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              style={{ border: 0 }}
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
