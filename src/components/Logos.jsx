export default function Logos() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            className="col-span-2  w-full object-contain lg:col-span-1"
            src="/assets/xbox/xbox_logo.webp"
            alt="Xbox Logo"
          />

          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/assets/nintendo/nintendo_logo.png"
            alt="Nintendo Logo"
          />

          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="/assets/playstation/playstation_logo.png"
            alt="PlayStation Logo"
          />
        </div>
      </div>
    </div>
  );
}
