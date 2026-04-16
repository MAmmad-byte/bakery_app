import Image from "next/image";
import heroBG from "@/public/hero.jpg";
import about from "@/public/about.jpg";
import off from "@/public/off.jpg";
import Container from "./_components/Container";
import Link from "next/link";
import TopProductCard from "./_components/TopProductCard";
import FeaturedCard from "./_components/FeaturedCard";
import FeaturedImage1 from "@/public/featured1.png";
import FeaturedImage2 from "@/public/featured2.png";
import FeaturedImage3 from "@/public/featured3.png";
import footerBg from "@/public/footerBg.png";
import logo from "@/public/logo.png";
import fb from "@/public/fb.png";
import wa from "@/public/wa.png";
import insta from "@/public/insta.png";
import printerst from "@/public/printerst.png";
import exploreProduct1 from "@/public/exploreProduct1.png"
import exploreProduct2 from "@/public/exploreProduct2.png"
import exploreProduct3 from "@/public/exploreProduct3.png"
import exploreProduct4 from "@/public/exploreProduct4.png"
import exploreProduct5 from "@/public/exploreProduct5.png"
import exploreProduct6 from "@/public/exploreProduct6.png"
export default function Home() {
  return (
    <div className="">
      <section className="relative w-full min-h-screen flex ">
        <Image
          src={heroBG}
          alt="heroBG"
          placeholder="blur"
          blurDataURL="/hero.jpg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          priority // <--- Crucial
          fetchPriority="high"
        />
        {/* <div> */}
        <Container>
          <nav className=" py-4 flex items-center">
            <Image
                  src={logo}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  width={80}
                />
            <div>
              <ul className="flex items-center justify-between text-xl text-white mt-2">
                <li className="hover:text-primary ml-44">Home</li>
                <li className="hover:text-primary ml-5">Blog</li>
                <li className="hover:text-primary ml-5">Contact Us</li>
                <li className="hover:text-primary ml-5">Services</li>
              </ul>
            </div>
          </nav>
          <h2 className="font-inter text-primary text-2xl mt-24">Delicious Cafe</h2>
          <h1 className="text-7xl font-sansita_swashed">
            Sweet Treats, <p>Perfect Eats</p>
          </h1>
          <div className="mt-15">
            <Link href="#" className="py-2 px-4 bg-secondary rounded-lg">
              Order Now
            </Link>
            <Link href="#" className="px-2 ml-2 text-primary">
              Learn more
            </Link>
          </div>
        </Container>
        {/* </div> */}
      </section>
      <section className=" w-full  flex items-center bg-white">
        <Container>
          <h2 className="font-sansita_swashed text-black font-semibold text-center text-4xl py-10 pt-20">
            Top Products
          </h2>
          <div className=" grid grid-cols-3 grid-rows-1 gap-5">
            <TopProductCard />
            <TopProductCard />
            <TopProductCard />
            <TopProductCard />
            <TopProductCard />
            <TopProductCard />
          </div>
        </Container>
        {/* </div> */}
      </section>
      <section className="relative w-full h-96 flex items-center mt-10">
        <Image
          src={off}
          alt="heroBG"
          placeholder="blur"
          blurDataURL="/hero.jpg"
          quality={100}
          fill
          style={{
            objectFit: "fill",
            zIndex: -1,
          }}
        />
        {/* <div> */}
        <Container>
          <div className="text-center">
            <div className=" max-w-92 mx-auto">
              <h2 className="font-sansita_swashed text-secondary text-5xl">
                20% Off Your First Order
              </h2>
              <p className="text-xl  text-gray-600 font-inter mt-5">
                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem. Morbi convallis.
              </p>
              <div className="mt-5">
                <Link href="#" className="py-2 px-4 bg-secondary rounded-lg">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {/* </div> */}
      </section>
      <section className=" w-full  flex items-center bg-white">
        <Container>
          <h2 className="font-sansita_swashed text-black font-semibold text-center text-5xl py-15 pt-20">
            Explore More
          </h2>
          <div className=" text-center border-b-2 mb-20">
            <div className="mx-auto flex items-center justify-center text-2xl text-gray-600 font-inter font-semibold">
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Cake</p>
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Muffins</p>
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Croissant</p>
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Bread</p>
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Tart</p>
              <p className="ml-8 border-b-4  border-transparent hover:border-secondary">Favourite</p>
            </div>
          </div>
          <div className=" grid grid-cols-3 grid-rows-2 gap-5">
            <Image
                  src={exploreProduct1}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
            <Image
                  src={exploreProduct2}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
            <Image
                  src={exploreProduct3}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
            <Image
                  src={exploreProduct4}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
            <Image
                  src={exploreProduct5}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
            <Image
                  src={exploreProduct6}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  className="rounded-lg"
                />
          </div>
        </Container>
        {/* </div> */}
      </section>
      <section className="relative w-full h-96 flex items-center mt-10">
        <Image
          src={about}
          alt="heroBG"
          placeholder="blur"
          blurDataURL="/hero.jpg"
          quality={100}
          fill
          style={{
            objectFit: "fill",
            zIndex: -1,
          }}
        />
        {/* <div> */}
        <Container>
          <div className="text-center">
            <div className=" max-w-100 mx-auto">
              <h2 className="font-sansita_swashed text-white text-4xl">
                About us
              </h2>
              <p className="text-xl font-extralight text-amber-50 font-inter mt-10">
                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem. Morbi convallis.
              </p>
              <div className="mt-5">
                <Link href="#" className="py-2 px-4 bg-secondary rounded-lg">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {/* </div> */}
      </section>

      {/* off section  */}

   
      
      <section className=" w-full  flex items-center bg-white">
        <Container>
          <h2 className="font-sansita_swashed text-black font-semibold text-center text-5xl py-15 pt-20">
            Featured Treats
          </h2>
          <div className=" grid grid-cols-3 grid-rows-1 gap-5">
            <FeaturedCard
              image={FeaturedImage1}
              price="$8"
              title="Puff Pastry"
            />
            <FeaturedCard image={FeaturedImage2} price="$8" title="Doughnuts" />
            <FeaturedCard image={FeaturedImage3} price="$8" title="Brownies" />
          </div>
        </Container>
        {/* </div> */}
      </section>
      <section className="relative w-full  flex items-center mt-10 pt-10 pb-5">
        <Image
          src={footerBg}
          alt="heroBG"
          placeholder="blur"
          blurDataURL="/hero.jpg"
          quality={100}
          fill
          style={{
            objectFit: "fill",
            zIndex: -1,
          }}
        />
        {/* <div> */}
        <Container>
          <div className="text-center">
            <div className="">
              <div className="w-full flex items-center justify-between border-b pb-5 pr-15">
                <Image
                  src={logo}
                  alt="heroBG"
                  placeholder="blur"
                  blurDataURL="/hero.jpg"
                  width={100}
                />
                <div className="flex items-center justify-between text-primary text-xl">
                  Folow us
                  <div className="flex items-center justify-between">
                    <Image
                      src={fb}
                      alt="heroBG"
                      placeholder="blur"
                      blurDataURL="/hero.jpg"
                      width={30}
                      className="ml-10"
                    />
                    <Image
                      src={printerst}
                      alt="heroBG"
                      placeholder="blur"
                      blurDataURL="/hero.jpg"
                      width={30}
                      className="ml-4"
                    />
                    <Image
                      src={wa}
                      alt="heroBG"
                      placeholder="blur"
                      blurDataURL="/hero.jpg"
                      width={30}
                      className="ml-4"
                    />
                    <Image
                      src={insta}
                      alt="heroBG"
                      placeholder="blur"
                      blurDataURL="/hero.jpg"
                      width={30}
                      className="ml-4"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="text-left flex-1">
                  <h4 className="text-3xl text-primary font-bold">About Us</h4>
                  <ul className="text-lg mt-5">
                    <li>(456) 789-12301</li>
                    <li>info@abc.com</li>
                    <li>Sout 14th street</li>
                    <li>New york America</li>
                  </ul>
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-3xl text-primary font-bold">Explore</h4>
                  <ul className="text-lg mt-5">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Services</li>
                  </ul>
                </div>
                <div className="text-left flex-2">
                  <h4 className="text-3xl text-primary font-bold">
                    Recent News
                  </h4>
                  <ul className="text-lg mt-5">
                    <li>(456) 789-12301</li>
                    <li>info@abc.com</li>
                    <li>Sout 14th street</li>
                    <li>New york America</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-20 text-slate-400">
                © 2024 Bake House. All rights reserved
              </div>
            </div>
          </div>
        </Container>
        {/* </div> */}
      </section>
    </div>
  );
}
