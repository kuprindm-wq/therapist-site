import Image from "next/image";


export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-24">


      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">



        <div>


          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#6B7560]">
            Психолог · гештальт-терапевт
          </p>



          <h1 className="mb-7 text-5xl leading-[1.05] text-[#2E2B27] md:text-7xl">

            Пространство,
            <br />
            где можно быть собой

          </h1>




          <p className="mb-6 max-w-xl text-lg leading-8 text-[#55514B] md:text-xl md:leading-9">


            Помогаю разобраться в отношениях,
            внутренних переживаниях и сложных
            жизненных периодах.


          </p>




          <p className="mb-8 max-w-xl text-base leading-8 text-[#716B63] md:text-lg">


            Индивидуальная работа и терапия для пар.
            Онлайн-консультации и очные встречи
            в Калининграде и Москве.


          </p>




          <a
            href="tel:+79057897905"
            className="inline-flex rounded-full bg-[#53614D] px-8 py-4 text-sm text-white transition hover:bg-[#465341]"
          >
            Записаться на консультацию
          </a>



        </div>





        <div className="flex justify-center lg:justify-end">


          <div className="relative">


            <div className="absolute -inset-4 rounded-[40px] bg-[#E7DED0]" />


            <div className="relative overflow-hidden rounded-[40px]">


              <Image
                src="/terap.jpg"
                alt="Мария Куприна"
                width={420}
                height={540}
                className="h-[430px] w-[330px] object-cover md:h-[560px] md:w-[420px]"
                priority
              />


            </div>


          </div>


        </div>



      </div>


    </section>
  );
}