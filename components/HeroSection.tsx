import { WEDDING_CONFIG } from '@/lib/config';

export default function HeroSection() {
  return (
    <div className="mt-[-84px]">
      <div className="@container">
        <div className="@[480px]:p-4 pt-24">
          <div
            className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0RnpXLMdfSXK4DrxQjM4eBAMlvc9DPq4faXgJNILcb5-QT8D5SqcegoSLmyypLPEQKe_b3-3LGAoM6YPgd3CW844VTO0--Nj0g0g9509dAkw1R_9wbeNdKdRC0yS9a5EVEDxEnt2GyqXN5nY7TAFI4pNJ4UI4sTbjXXMh2VoYh8SVWQyp-BFaTgRANl_2sijZwfwaaBp2-q4GHNYVgg3Ir0Z9I2f0fnDCb6_D-4dyg9LocziUHU-lj0V5g7-rITv4pNzSWNdRj3c")'
            }}
          >
            <div className="flex flex-col gap-2 text-center text-white">
              <p className="text-lg font-medium">WE&apos;RE GETTING MARRIED</p>
              <h1 className="font-heading text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-7xl">
                {WEDDING_CONFIG.coupleNames}
              </h1>
              <h2 className="text-base font-normal leading-normal @[480px]:text-lg">
                Are getting married on October 26, 2026 in Napa Valley, California
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
