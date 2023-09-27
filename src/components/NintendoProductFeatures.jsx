const features = [
  {
    name: "Legend of Zelda: Ocarina of Time",
    description:
      "'The Legend of Zelda: Ocarina of Time,' released in 1998 for the Nintendo 64, is a timeless adventure that follows the hero Link on a quest to thwart the dark ambitions of Ganondorf. With its revolutionary 3D graphics, compelling story, and intricate gameplay mechanics, it's frequently hailed as one of the greatest video games of all time.",
  },
  {
    name: "Super Mario 64",
    description:
      "Released in 1996 for the Nintendo 64, 'Super Mario 64' revolutionized platforming with its innovative 3D world and dynamic camera system, inviting players to explore the vast grounds of Peach's Castle in search of Power Stars. This pioneering title set the stage for 3D platformers and remains a beloved classic in the Mario franchise.",
  },
];

export default function NintendoProductFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nintendo
          </h2>
          <p className="mt-4 text-gray-500">
            The Nintendo 64, launched in 1996, was Nintendo's groundbreaking
            foray into 3D gaming, boasting iconic titles like "Super Mario 64"
            and "The Legend of Zelda: Ocarina of Time." Its unique controller
            and innovative game design set new standards, making it a cherished
            console in gaming history.
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
            src="/assets/nintendo/ocarina1.jpg"
            alt="Ocarina of Time AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/assets/nintendo/ocarina2.jpg"
            alt="Ocarina of Time AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/assets/nintendo/mario.jpg"
            alt="Super Mario AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/assets/nintendo/toad.jpg"
            alt="Super Mario Character Toad AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
