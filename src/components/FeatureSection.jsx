import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Nintendo",
    description:
      "Rediscover the magic of the Nintendo 64 era with a collection that takes you back to the heart of 90s gaming. Dive into iconic titles that revolutionized the industry, featuring groundbreaking graphics, immersive 3D environments, and gameplay mechanics that are cherished to this day. From the adrenaline-pumping races of 'Mario Kart 64' to the epic adventures in 'The Legend of Zelda: Ocarina of Time,' relive the moments that set the standard for generations to come. Experience the Nintendo 64 legacy all over again, where classic meets contemporary, only in our retro gaming collection.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Sony Playstation",
    description:
      "Journey back to where modern gaming began with the legendary Sony PlayStation collection. From the captivating narratives of 'Final Fantasy VII' to the thrill of 'Tekken' battles, relive the iconic moments that shaped a generation. Dive into the classics that laid the foundation for today's gaming marvels and rekindle your love for the PlayStation legacy.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Xbox",
    description:
      "Revisit the dawn of a gaming revolution with the classic Xbox collection. From the expansive world of 'Halo: Combat Evolved' to the gritty streets of 'Fable, immerse yourself in the titles that defined a new era. Experience the power and innovation that set Xbox apart, and dive into a legacy that continues to inspire today.",
    icon: CheckBadgeIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                All Retro Consoles
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Choose from Nintendo, Sony Playstation, and Xbox
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Dive into a nostalgic journey with our retro gaming marketplace,
                where the golden eras of gaming come alive. Choose from an
                extensive collection of classics spanning Nintendo, Sony
                PlayStation, and Xbox. Relive the moments that defined
                generations and share them with the next. Step back in time and
                reignite your passion for the games that started it all!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="../src/assets/nintendo/Default_A_video_game_selling_website_logo_with_a_transparent_b_0_49ba58a4-d1e5-4b4c-bde8-056769457caa_0.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2132}
            height={1042}
          />
        </div>
      </div>
    </div>
  );
}
