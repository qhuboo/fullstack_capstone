const features = [
  {
    name: "Halo: Combat Evolved",
    description:
      "Released in 2001 as a flagship title for the Xbox, 'Halo: Combat Evolved' introduced players to the sprawling sci-fi universe of Master Chief and the Covenant. Its groundbreaking FPS gameplay, rich storyline, and innovative multiplayer set new standards, establishing Halo as a dominant force in the gaming world.",
  },
  {
    name: "Gears of War",
    description:
      "Debuting in 2006 for the Xbox 360, 'Gears of War' plunged players into the gritty, post-apocalyptic world of Sera, battling against the monstrous Locust Horde. With its cover-based shooting mechanics, compelling narrative, and intense multiplayer modes, it rapidly became a defining title for a new generation of console gaming.",
  },
];

export default function PlaystationProductFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Xbox
          </h2>
          <p className="mt-4 text-gray-500">
            Introduced in 2001, the Xbox was Microsoft's bold entry into the
            gaming arena, pioneering online play with Xbox Live and delivering
            hits like Halo: Combat Evolved. Its powerful hardware and commitment
            to innovation laid the groundwork for a new generation of console
            gaming.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="../src/assets/xbox/halo1.jpg"
            alt="Halo Combat Evolved AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/xbox/halo2.jpg"
            alt="Halo Combat Evolved AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/xbox/gears1.jpg"
            alt="Gears of War AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/xbox/gears2.jpg"
            alt="Gears of War AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
