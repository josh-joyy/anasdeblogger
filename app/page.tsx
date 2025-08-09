import NewsCard from "@/components/NewsCard";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { ghanaNews } from "@/lib/ghanaNews";
import NewsBanner from "@/components/NewsBanner";

export default function Home() {
  return <Wrapper>
    <div className="w-full h-[320px] sm:h-[500px] flex justify-center items-center relative mb-10 sm:mb-[5rem]">
      <div className="absolute w-full h-full max-w-[400px] bg-gray-900 blur-3xl" />
      <img src="https://plus.unsplash.com/premium_photo-1682320427086-5c1fc01fa571?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" className="w-full h-full object-cover z-10" />
      <section className="absolute w-full h-full p-4 sm:p-[3rem] flex z-10">
        <div className="bg-gray-100 h-full w-full max-w-[400px] border-b-4 border-gray-900 flex flex-col gap-2 p-4 sm:p-[2rem]">
          <span className="text-xs sm:text-sm uppercase font-semibold text-gray-600 flex flex-col">
            June 10, 2024 - Trending - 15K views
            <div className="w-[30%] mt-2 border-y border-red-500" />
          </span>
          <br />
          <h1 className="text-xl sm:text-4xl font-semibold">Ghana Parliament Passes Anti-LGBTQ+ Bill</h1>
          <p className="truncate text-xs sm:text-base">
            The Ghanaian Parliament has passed the controversial anti-LGBTQ+ bill, sparking nationwide debates and international reactions. The bill criminalizes LGBTQ+ activities and advocacy, raising concerns among human rights groups.
          </p>
          <a href="#" className="text-sky-700 font-semibold text-xs sm:text-base">Read more...</a>
          <br /><br />
          <span className="flex flex-col gap-1">
            <small>Reported by...</small>
            <b className="text-xs sm:text-sm">JOY NEWS GHANA</b>
          </span>
        </div>
      </section>
    </div>


    <section className="w-full flex flex-col gap-4 px-2 sm:px-[3rem]">
      <b className="text-xs sm:text-sm">BROWSE AND READ THE LATEST STUFF</b>
      <span className="w-full flex flex-col sm:flex-row items-end justify-between gap-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold">Latest Stories</h1>
        <a href="#" className="mb-1 text-sky-600 hover:underline text-xs sm:text-base">
          <b>See all</b>
        </a>
      </span>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {ghanaNews.slice(0, 5).map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
        <div className="w-full flex flex-col gap-2 relative">
          <img src="profile-picture.jpeg" alt="" className="size-full object-cover rounded-lg" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-4 flex flex-col items-center text-center justify-end text-white rounded-lg">
            <h1 className="text-base sm:text-xl font-semibold">Anasdeblogger</h1>
            <p className="text-xs sm:text-sm">Steven Adu-Panyin</p>
            <span className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-base sm:text-xl hover:text-sky-400"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-base sm:text-xl hover:text-blue-600"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-base sm:text-xl hover:text-pink-500"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-base sm:text-xl hover:text-blue-700"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-4 px-2 sm:px-[3rem] mt-6 sm:mt-10">
        <b className="text-xs sm:text-sm text-red-600 uppercase">YOU HAVE TO READ THIS!</b>
        <span className="w-full flex flex-col sm:flex-row items-end justify-between gap-2">
          <h1 className="text-xl sm:text-3xl font-extrabold">Staff's Picks</h1>
          <a href="#" className="mb-1 text-sky-600 hover:underline text-xs sm:text-base">
            <b>See all</b>
          </a>
        </span>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {ghanaNews.slice(6).map((news, idx) => (
            <NewsBanner key={idx} {...news} />
          ))}
        </div>
      </div>
    </section>

    <section className="w-full flex flex-col items-center gap-2 py-6 sm:py-[3rem]">
      <b className="text-base sm:text-lg">CONTACT</b>
      <div className="w-full text-center flex flex-col justify-center items-center">
        <span className="text-2xl sm:text-[4rem] font-extrabold">ANAS<span className='font-extralight'>DEBLOGER</span></span>
        <span className="text-xs sm:text-sm text-gray-500 uppercase">
          0201114547 <span className="mx-1 sm:mx-2">|</span> 0243758885 <br />
          anasdeblogger@gmail.com
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 w-full max-w-md justify-center px-4">
        <a
          href="https://wa.me/233XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 h-10 sm:h-12 bg-emerald-500 text-white rounded-lg hover:bg-green-600 w-full sm:w-auto justify-center"
        >
          <i className="fab fa-whatsapp text-base sm:text-xl"></i>
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+233XXXXXXXXX"
          className="flex items-center gap-2 px-4 py-2 h-10 sm:h-12 bg-black text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto justify-center"
        >
          <i className="fas fa-phone-alt text-base sm:text-xl"></i>
          <span>Phone Call</span>
        </a>
      </div>
    </section>
  </Wrapper>;
}
