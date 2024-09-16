import Image from "next/image";

const TestMonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-1">
        <h2 className="font-medium text-2xl pb-4">Testimonial</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          {/* Left Side */}
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-4">
              <div className="rounded-full border-4 border-gray-300 p-1 overflow-hidden">
                <Image
                  className="rounded-full object-cover"
                  src="/profile.webp"
                  height={120}  // Isku miisaan ka dhig sawirka
                  width={120}   // Isku miisaan ka dhig sawirka
                  alt="Profile Picture"
                />
              </div>
              <h2 className="text-gray-500 font-black text-[20px]">Sabrin</h2>
              <p>Developer as Mobile App</p>

              <h2 className="text-gray-500 font-black text-[20px]">ENG</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                labore accusantium vel! Officiis, placeat? Quis voluptates
                blanditiis suscipit veritatis.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-red-600 bg-[url(/bacground.jpeg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div
              className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md-min-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3"
            >
              <button className="bg-black text-white p-2 rounded-md">
                25% Discount
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $29 <b>Shop now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMonial;
