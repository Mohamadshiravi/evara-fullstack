"use client";

import { HomeCard } from "@/components/module/home-card";
import IsUserLogedIn from "@/utils/user/is-user-logedin-client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function UserHouses() {
  const router = useRouter();
  const [house, setHouse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchUserHouse() {
      setLoading(true);
      const theUser = await IsUserLogedIn();
      if (!theUser) {
        router.push("/auth/login");
      } else {
        const userHouse = await axios.get(`/api/house/${theUser._id}`);
        setHouse(userHouse.data.data);
        setLoading(false);
      }
    }
    FetchUserHouse();
  }, []);

  return (
    <>
      <main className={`sm:px-10 px-6 sm:py-20 py-8 h-[100dvh]`}>
        <section className="bg-white dark:bg-zinc-800 rounded-md px-4 py-6">
          {!loading && house.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-screen px-6">
              <FaRegHeart className="text-9xl text-zinc-300 dark:text-zinc-600" />
              <h1 className="moraba-bold sm:text-4xl text-3xl mt-3 text-center">
                شما هیچ اگهی خانه ای ندارید
              </h1>
              <p className="text-center shabnam mt-6 text-zinc-600 px-20">
                با رفتن به بخش ثبت رایگان ملک میتوانید خانه خود را اگهی کنید
              </p>
              <Link
                href={"/new-house"}
                className="moraba-bold text-white px-8 py-2 bg-emerald-600 text-lg rounded-md mt-6"
              >
                ثبت اگهی
              </Link>
            </div>
          )}

          {!loading && house.length !== 0 && (
            <>
              <div className="flex justify-between items-center w-full">
                <h2 className="after:content-[''] text-zinc-800 after:absolute after:top-0 after:right-0 after:w-[100px] after:h-[5px] after:bg-emerald-600 relative moraba-bold w-full m-auto sm:text-3xl text-2xl py-4 pl-4 dark:text-white">
                  اگهی های املاک ثبت شده توسط شما
                </h2>
                <Link
                  href={"/"}
                  className="bg-emerald-600 rounded-full p-4 hover:bg-emerald-700 transition text-xl ml-6"
                >
                  <IoArrowBack />
                </Link>
              </div>
              <section className="sm:mt-20 mt-10 w-full grid lg:grid-cols-[4fr_4fr_4fr] md:grid-cols-[6fr_6fr] gap-4">
                {house.map((e, i) => (
                  <HomeCard
                    key={i}
                    img={e.images[0]}
                    id={e._id}
                    title={e.title}
                    city={e.city}
                    area={e.address}
                    price={e.price}
                    room={e.room}
                    floor={e.floor}
                    meter={e.meter}
                    isDeletable
                  />
                ))}
              </section>
            </>
          )}
          <div className="grid lg:grid-cols-[4fr_4fr_4fr] md:grid-cols-[6fr_6fr] gap-4">
            {loading &&
              Array.from({ length: 3 }).map((e, i) => (
                <div
                  key={i}
                  className="bg-gray-200 w-full h-[400px] rounded-lg animate-pulse"
                ></div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
