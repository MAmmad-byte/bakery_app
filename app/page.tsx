import Image from "next/image";
import heroBG from "@/public/hero.jpg";
import about from "@/public/about.jpg";
import off from "@/public/off.jpg";
import Container from "./_components/Container";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <section className="relative w-full min-h-screen flex items-center">
        <Image
          src={heroBG}
          alt="heroBG"
          placeholder="blur"
          blurDataURL="/hero.jpg"
          quality={70}
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
          <h2 className="font-inter text-primary text-2xl">Delicious Cafe</h2>
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
          <h2 className="font-sansita_swashed text-black font-semibold text-center text-4xl py-10 pt-20">
            Top Products
          </h2>
        </Container>
        {/* </div> */}
      </section>
    </div>
  );
}
