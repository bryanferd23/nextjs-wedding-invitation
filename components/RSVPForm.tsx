'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  rsvp: 'yes' | 'no' | '';
  meal: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    rsvp: '',
    meal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for responding! Your RSVP has been received and we look forward to celebrating with you.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 text-center bg-background-light dark:bg-background-dark" id="rsvp">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="font-heading text-primary text-4xl font-bold leading-tight tracking-[-0.015em]">Kindly Respond</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Please let us know if you can join us by September 1st, 2026. We can&apos;t wait to celebrate with you!</p>
        <form className="mt-8 space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="name">Full Name(s)</label>
            <input
              className="mt-1 block w-full rounded border-secondary bg-accent dark:bg-accent-dark/50 focus:border-primary focus:ring-primary px-3 py-2"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <fieldset>
              <legend className="text-sm font-medium text-text-light dark:text-text-dark">Will you be attending?</legend>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-x-3">
                  <input
                    className="h-4 w-4 border-secondary text-primary focus:ring-primary"
                    id="rsvp-yes"
                    name="rsvp"
                    type="radio"
                    value="yes"
                    checked={formData.rsvp === 'yes'}
                    onChange={handleChange}
                    required
                  />
                  <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="rsvp-yes">Joyfully Accepts</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    className="h-4 w-4 border-secondary text-primary focus:ring-primary"
                    id="rsvp-no"
                    name="rsvp"
                    type="radio"
                    value="no"
                    checked={formData.rsvp === 'no'}
                    onChange={handleChange}
                    required
                  />
                  <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="rsvp-no">Regretfully Declines</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="meal">Meal Preference</label>
            <select
              className="mt-1 block w-full rounded border-secondary bg-accent dark:bg-accent-dark/50 focus:border-primary focus:ring-primary px-3 py-2"
              id="meal"
              name="meal"
              value={formData.meal}
              onChange={handleChange}
              required
            >
              <option value="">Please select an option</option>
              <option value="chicken">Chicken</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>
          <div className="text-center pt-4">
            <button
              className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mx-auto"
              type="submit"
            >
              <span className="truncate">Submit RSVP</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
