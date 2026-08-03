export default function Footer() {
  return (
    <footer className="bg-[#2E2B27] text-[#E8E1D7]">


      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">



        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">





          <div>


            <p className="text-2xl font-light tracking-wide">
              Психологическая практика
            </p>



            <p className="mt-3 text-sm text-[#BDB5A8]">
              Онлайн · Калининград · Москва
            </p>



          </div>







          <div className="space-y-4 text-sm text-[#D5CCBE]">





            <a
              href="tel:+79057897905"
              className="block transition hover:text-white"
            >
              +7 905 789-79-05
            </a>





            <a
              href="mailto:psi-art@mail.ru"
              className="block transition hover:text-white"
            >
              psi-art@mail.ru
            </a>





            <a
              href="tel:+79057897905"
              className="block transition hover:text-white"
            >
              Связаться в MAX
            </a>





          </div>





        </div>







        <div className="mt-12 border-t border-[#4A453D] pt-6 text-sm text-[#9E9689]">


          © {new Date().getFullYear()} Все права защищены.



        </div>





      </div>


    </footer>
  );
}