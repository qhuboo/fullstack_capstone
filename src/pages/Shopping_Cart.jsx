import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import StoreNavigation from "../components/StoreNavigation";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "are",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "bag2",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Shopping_Cart() {
  const [open, setOpen] = useState(true);

  return (
    <div>
    <StoreNavigation />

    // <Transition.Root show={open} as={Fragment}>
    //   <Dialog
    //     as="div"
    //     className="fixed inset-0 overflow-hidden"
    //     onClose={setOpen}
    //   >
    //     {/* ... (Dialog transition code remains the same) */}
    //     <div className="flex justify-center">
    //       <div className="w-full max-w-lg">
    //         <div className="bg-white shadow-md rounded-lg">
    //           <div className="px-4 py-10 border-b border-gray-200">
    //             <h2 className="text-lg font-semibold text-gray-900">
    //               Shopping Cart
    //             </h2>
    //             <button
    //               type="button"
    //               className="float-right p-2 text-gray-400 hover:text-gray-500"
    //               onClick={() => setOpen(false)}
    //             >
    //               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //             </button>
    //           </div>
    //           {/* //product size */}
    //           <div className="px-6 py-6 divide-y divide-gray-200">
    //             {products.map((product) => (
    //               <div key={product.id} className="flex py-6 items-center">
    //                 <div className="w-24 h-24 overflow-hidden rounded-md border border-gray-200">
    //                   <img
    //                     src={product.imageSrc}
    //                     alt={product.imageAlt}
    //                     className="h-full w-full object-cover object-center"
    //                   />
    //                 </div>
    //                 <div className="ml-4 flex-1">
    //                   <div className="flex justify-between text-base font-medium text-gray-900">
    //                     <h3>
    //                       <a href={product.href}>{product.name}</a>
    //                     </h3>
    //                     <p>{product.price}</p>
    //                   </div>
    //                   <p className="mt-1 text-sm text-gray-500">
    //                     {product.color}
    //                   </p>
    //                   <div className="flex justify-between items-end text-sm mt-2 text-gray-500">
    //                     <p>Qty {product.quantity}</p>
    //                     <button
    //                       type="button"
    //                       className="text-indigo-600 hover:text-indigo-500"
    //                     >
    //                       Remove
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>

    //           <div className="px-4 py-4 border-t border-gray-200">
    //             <div className="flex justify-between text-base font-medium text-gray-900">
    //               <p>Subtotal</p>
    //               <p>$262.00</p>
    //             </div>
    //             <p className="mt-0.5 text-sm text-gray-500">
    //               Shipping and taxes calculated at checkout.
    //             </p>
    //             <div className="mt-6">
    //               <a
    //                 href="#"
    //                 className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    //               >
    //                 Checkout
    //               </a>
    //             </div>
    //             <div className="mt-6 text-center text-sm text-gray-500">
    //               <p>
    //                 or{" "}
    //                 <button
    //                   type="button"
    //                   className="text-orange-600 hover:text-indigo-500"
    //                   onClick={() => setOpen(false)}
    //                 >
    //                   Continue Shopping &rarr;
    //                 </button>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition.Root>
    <div className="absolute w-full h-full inset-0">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <div className="bg-white shadow-md rounded-lg">
            <div className="px-4 py-10 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Shopping Cart
              </h2>
              <button
                type="button"
                className="float-right p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* //product size */}
            <div className="px-6 py-6 divide-y divide-gray-200">
              {products.map((product) => (
                <div key={product.id} className="flex py-6 items-center">
                  <div className="w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                    <div className="flex justify-between items-end text-sm mt-2 text-gray-500">
                      <p>Qty {product.quantity}</p>
                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-4 border-t border-gray-200">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <button
                    type="button"
                    className="text-orange-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping &rarr;
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
