export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 border">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="../src/assets/main_logo.png"
              className="h-24 mr-3"
              alt="MatMine Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              MatMine
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-black sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            MatMine™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
