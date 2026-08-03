import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import BookingModal from "./booking/BookingModal";


export default function Header() {
  return (
    <header className="relative bg-[#FDFBF7]">


      <div className="mx-auto max-w-7xl border-b border-[#E6DFD4] px-6 py-7 lg:px-12">



        <div className="flex items-center justify-between">






          <a
            href="#"
            className="block"
          >


            <p className="text-xl font-light tracking-wide text-[#2E2B27]">
              Мария Куприна
            </p>



            <p className="mt-1 text-sm text-[#7B705F]">
              Психолог · гештальт-терапевт
            </p>



          </a>








          <Navigation />









          <div className="flex items-center gap-3">





            <div className="hidden md:block">

              <BookingModal />

            </div>





            <MobileMenu />





          </div>






        </div>





      </div>


    </header>
  );
}