import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    title: "WORK PERMIT",
    links: [
      "Samples of documents",
      "For foreign nationals",
      "For Highly Qualified Specialists",
      "For Foreign citizens exempt from Work Permit regulations",
      "For foreign students",
      "Medical test and fingerprinting",
    ],
  },
  {
    title: "CITIZENSHIP OF RUSSIA",
    links: [
      "Temporary residence permit",
      "Permanent residence permit",
      "Temporary residence permit for educational purposes",
    ],
  },
  {
    title: "VISA TO RUSSIA",
    links: [
      "Russian visas",
      "Tourist visa",
      "Business visa",
      "Registration in the RF",
      "Outbound visa",
      "Work visa to Russia",
      "AIM Tourism",
    ],
  },
  { title: "RESIDENCE PERMIT", links: [] },
];

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Top black strip */}
      <div className="bg-black">
        <div className="container mx-auto flex  items-center justify-between gap-6 px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo02.svg"
              alt="Visa-Delight"
              width={180}
              height={38}
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 text-xl">
              <li>
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our news
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Image src="/flag1.png" width={30} height={14} alt="EN" />
          </div>
        </div>
      </div>

      {/* Main footer area */}
      <div className="bg-[#1c1930]">
        <div className="container mx-auto px-4 py-12">
          {/* Columns */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <Link
                  href="/"
                  className="text-xl font-extrabold text-[#b7aee2] hover:text-[#d4caff] uppercase tracking-wide"
                >
                  {col.title}
                </Link>
                <div className="mt-2 h-[2px] w-16 bg-[#6c5ea8]" />
                <ul className="mt-4 space-y-3 text-lg text-white/90">
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link href="#" className="hover:underline">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Payments */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Image src="/footer-visa.svg" alt="VISA" width={74} height={28} />
            <Image
              src="/footer-masterc.svg"
              alt="MasterCard"
              width={74}
              height={28}
            />
            <Image src="/footer-mir.svg" alt="MIR" width={74} height={28} />
            <Image
              src="/footer-uniteller.svg"
              alt="Uniteller"
              width={90}
              height={28}
            />
          </div>

          <div className="my-8 h-px w-full bg-white/10" />

          {/* Phones + socials */}
          <div className="flex justify-between">
            <div className="items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="text-pink-400 text-3xl">✆</span>
                <span className="font-extrabold text-3xl">+7 495 221-2285</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400 text-3xl">✆</span>
                <span className="font-extrabold text-3xl">+7 495 628-0111</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/1_whatsapp.svg"
                  alt="WhatsApp"
                  width={30}
                  height={24}
                />
                <Image
                  src="/1_telegram.svg"
                  alt="Telegram"
                  width={30}
                  height={24}
                />
              </div>
            </div>

            <p className="text-xl text-white/70 mt-3">
              ul. Novaya Basmannaya 31-3, Moscow, Russia 105066
            </p>
          </div>

          
          <div className="text-xl text-gray-400">
            <p>© 2012—2025 Visa-Delight</p>
            <p>
              Designed by{" "}
              <Link href="#" className="hover:underline text-white">
                Telemark
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
