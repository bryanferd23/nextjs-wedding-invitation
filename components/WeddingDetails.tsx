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
                <p>4:00 PM</p>
                <p className="mt-2 font-semibold">The Vineyard Chapel</p>
                <p>123 Vineyard Lane, Napa Valley, CA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">celebration</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light dark:text-text-dark">The Reception</h3>
                <p className="mt-1">To follow the ceremony</p>
                <p>6:00 PM onwards</p>
                <p className="mt-2 font-semibold">The Grand Oak Pavilion</p>
                <p>125 Vineyard Lane, Napa Valley, CA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">styler</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light dark:text-text-dark">Dress Code</h3>
                <p className="mt-1">Formal Attire. We invite you to be in your best, but comfort is key for a night of dancing!</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden border-4 border-white dark:border-background-dark shadow-lg h-96">
              <iframe
                title="Napa Valley Location"
                allowFullScreen
                data-location="Napa, CA, USA"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100344.08573669527!2d-122.36197103239845!3d38.45524316658066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80844512a3355555%3A0x55971f6bb61b1544!2sNapa%2C%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                style={{ border: 0 }}
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
