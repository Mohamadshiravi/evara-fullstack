import Footer from "@/components/module/footer";
import AllHomes from "@/components/template/all-homes";
import EvaraAbout from "@/components/template/evara-about-slider";
import HomeHeader from "@/components/module/home-header";
import { RecentlySLider } from "@/components/template/recently-product";
import { SpecialSLider } from "@/components/template/special-slider";
import evaraHouseModel from "@/models/evara-house";
import ConnectTODB from "@/config/connect-to-DB";

export default async function Home() {
  ConnectTODB();
  const allHouseSorted = await evaraHouseModel.find({ queued: false }, null, {
    sort: "-_id",
  });
  const allHouse = await evaraHouseModel.find({ queued: false });

  return (
    <>
      <HomeHeader />
      <main className="overflow-hidden sm:p-10 p-4">
        <SpecialSLider houses={JSON.parse(JSON.stringify(allHouse))} />
        <EvaraAbout />
        <RecentlySLider houses={JSON.parse(JSON.stringify(allHouseSorted))} />
        <br />
        <br />
        <AllHomes allHouse={JSON.parse(JSON.stringify(allHouseSorted))} />
      </main>
      <Footer />
    </>
  );
}
