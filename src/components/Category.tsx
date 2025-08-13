import Image from "next/image";
import Link from "next/link";

export default function Category() {
  const items = [
    { href: "/work-permit", title: "WORK PERMIT", image: "/img-skills1.jpg", color: "#b23a5b" },
    { href: "/aim-tourism", title: "AIM TOURISM", image: "/img-skills2_1.jpg", color: "#6a3c88" },
    { href: "/getting-a-visa", title: "GETTING A VISA", image: "/img-skills3.jpg", color: "#3b3e8d" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map(({ href, title, image, color }) => (
          <Link key={title} href={href} className="group relative block h-[170px] md:h-[190px]">
            <Image
              src={image}
              alt={title} 
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover rounded"
            />
            {/* overlay color */}
            <div
              className="absolute inset-0 rounded transition-colors group-hover:opacity-90"
              style={{ backgroundColor: `${color}CC` }} // ~80% opacity
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-extrabold tracking-wide text-lg md:text-xl text-center">
                {title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
