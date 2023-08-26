const features = [
  {
    name: "Final Fantasy",
    description:
      "Originally launched in 1987, 'Final Fantasy' is a celebrated RPG franchise known for its epic tales, diverse characters, and intricate turn-based combat. Spanning multiple generations and platforms, each installment offers a unique world and narrative, solidifying its legacy as a cornerstone in the role-playing genre.",
  },

  {
    name: "Metal Gear Solid",
    description:
      "Debuting in 1998 for the Sony PlayStation, 'Metal Gear Solid' melded cinematic storytelling with stealth gameplay, thrusting players into the role of Solid Snake as he infiltrates Shadow Moses Island. Directed by Hideo Kojima, this iconic title reshaped video game narratives and is revered for its deep plot and memorable characters.",
  },
];

export default function PlaystationProductFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sony Playstation
          </h2>
          <p className="mt-4 text-gray-500">
            Debuting in 1994, the Sony PlayStation marked a seismic shift in the
            gaming world with its powerful 3D graphics and iconic titles like
            Final Fantasy VII and Metal Gear Solid. Its innovative CD-ROM format
            and captivating narratives solidified its place as a cornerstone in
            console gaming history.
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
            src="../src/assets/playstation/finalfantasy2.jpg"
            alt="Final Fantasy AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/playstation/finalfantasy1.jpg"
            alt="Final Fantasy AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/playstation/metalgearsolid1.jpg"
            alt="Metal Gear Solid AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../src/assets/playstation/metalgearsolid2.jpg"
            alt="Metal Gear Solid AI Generated Artwork"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
