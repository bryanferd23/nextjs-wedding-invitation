export default function GuestHighlights() {
  const guests = [
    {
      name: 'Jessica Lane',
      role: 'Maid of Honor',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHIZL0AzDFZa7KOA_JD-fYassqKIPWy1Qe-VSL6bRWJmwqItK-KhmXJ0rajXPX253cKCt4vCX4L4hTRpp8gNILACcscaNcxtr4D5FU8XR1q6eoGEVk4XlW1eMO4MuyXbwV6mm-JSD-sZtIDpwt7WKmhyciqf28obhGy3v6xtbXAo7LRnCj_VmWtEkJUFLCuP_ZIoFnX1WMgv2JIqb_8bWxue1VKa7D91Mfewc-ciiKmMZPhHhWvs3WrU3oLm4bK0-GTeAwKoOx87g',
    },
    {
      name: 'Mark Reeves',
      role: 'Best Man',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-7uoRA0ndvgfMMW76C8vMZoxl5zduwaXzKvklTB8rXOMl1EgBej2wkq2CcOItnkYK8nNTzkVQ-meb23PP82aYpgJQi5uf2W1mXgFpk7KTsRRMZbhldvzYy4-PZuObneTYjOkePRZVvkzhJspt3_ACyTk1-MV1zaqlnUTlExl2m0C2i77Oitr8b1M9cz-ZGKV5YtQrKPP96wajnmUBoX5-rOo9oam0CcsHpr8BetS7aiQQDSP5IslVxttZdYwaDOVHwOSTy5qCwA',
    },
    {
      name: 'Emily Chen',
      role: 'Bridesmaid',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJjbUrUq21t_H7W8OD0zQDhaGafxGiCiHh-N4EhNVaTCNKJofQaK2mflQ1pW45l5K76LiOOvmbHzK-SmqdQtdqaHyaT_eWG8RLvKUxqTeaoSF82qU1zN7ed0FXwEzTSQ7onUTX3_ktkbpvesb6zaY56rG30NFXzgZw0aF2q0KRcPN8ZtQmQn-fgWIS6g45tIrMwaCYY-Xrmcfe2F7L0OmK-_TEpvf1aOcyyarjy1Gt9sLK4SPIuPxD662hJeFuNDiiI15cqyZZdMo',
    },
    {
      name: 'David Kim',
      role: 'Groomsman',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEa-6gAu3CeqDLfWIvDY7PrmAPqUMw9Zzs0kxQ6yxi5-odTumcSkQOT-mSuMXiFw8NnLnigmO-fT1pNgjXKX_ykMMh9bUiVKoLyJQOQOW31J_0xQmsM4Im-rKxSzdNdjpdG4E7EpH-jSlAhpYGx9dLtyp4MUT5LCZf_j5p8-yxVDQno9b220VbPR4IFNiI7BL0JwmHYYWSV93osSQEQHbMcNFArAgDCtBb-7LbBWgd9U3AmoJ3FhAmUbBfXdNGR_xv8b8n0en9nmo',
    },
  ];

  return (
    <section className="py-16" id="guests">
      <h2 className="text-center font-heading text-primary text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-12">Guest Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {guests.map((guest, index) => (
          <div key={index} className="text-center space-y-2">
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-secondary"
              alt={`Portrait of ${guest.name}`}
              src={guest.image}
            />
            <h3 className="text-lg font-bold">{guest.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{guest.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
