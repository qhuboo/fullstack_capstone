export default function NintendoLogos() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            className="col-span-2  w-full object-contain lg:col-span-1"
            src="../src/assets/xbox/xbox_logo.webp"
            alt="Transistor"
            width={128}
            height={48}
          />

          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../src/assets/nintendo/nintendo_logo.png"
            alt="Tuple"
            width={128}
            height={48}
          />

          <img
            className="col-span-2 col-start-2  w-full object-contain sm:col-start-auto lg:col-span-1"
            src="../src/assets/playstation/playstation_logo.png"
            alt="Statamic"
            width={18}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
