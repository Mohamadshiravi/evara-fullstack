import Footer from "@/components/module/footer";
import AllHomes from "@/components/template/all-homes";
import HomeHeader from "@/components/module/home-header";
import evaraHouseModel from "@/models/evara-house";
import ConnectTODB from "@/config/connect-to-DB";

export default async function AllHomePage() {
  ConnectTODB();
  const allHouseSorted = await evaraHouseModel.find({ queued: false }, null, {
    sort: "-_id",
  });
  return (
    <>
      <HomeHeader />
      <main className="md:mt-0 mt-36">
        <AllHomes allHouse={JSON.parse(JSON.stringify(allHouseSorted))} />
      </main>
      <Footer />
    </>
  );
}
