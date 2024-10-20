import EvaraSlider from "@/components/module/evara-slider";
import Footer from "@/components/module/footer";
import HomeHeader from "@/components/module/home-header";

export default function AboutUsPage() {
  return (
    <>
      <HomeHeader />
      <section className="w-full text-center pb-10 md:pt-10 pt-40">
        <div className="py-16 border-b-2 dark:border-zinc-700 border-zinc-300 w-10/12 m-auto">
          <h1 className="text-4xl text-emerald-600 font-black">Evara</h1>
          <p className="font-bold text-2xl dark:text-white">
            ما برای راحت تر پیدا کردن خانه زمین یا مغازه شما اینجاییم
          </p>
        </div>
        <div className="w-10/12 m-auto py-20 flex flex-col gap-8">
          <h1 className="moraba-bold text-3xl text-zinc-700 dark:text-white">
            چرا باید <span className="px-4 text-emerald-600">اوارا</span>رو
            انتخاب کنی ؟ من چمیدونم من فقط یه برنامه نویسم اینم یه نمونه کاره نه
            کپی رایترم نه حوصله نوشتن متن تبلیغ دارم
          </h1>
          <h2 className="text-zinc-700 text-2xl mt-10">
            فقط این اسلایدرو دوباره میذارم چون قشنگ بود
          </h2>
        </div>
        <div className="px-10 mt-4 mb-20">
          <EvaraSlider />
        </div>
      </section>
      <Footer />
    </>
  );
}
