export default function Home() {
  return (
    <>
      <article>
        <div className="img-placeholder text-center max-w-[60rem] mx-auto relative mix-blend-multiply">
          <div className="bg-emerald-100 mix-blend-multiply blur-[25px]  w-[200px] h-[200px] rounded-full grid place-content-center absolute top-[50%] mt-[-55px] ml-[-100px] left-[50%]"></div>
          <img
            src="img/croquis-reunion.png"
            width="500"
            height="500"
            alt=""
            className="mx-auto min-w-full"
          />
        </div>
      </article>
    </>
  )
}
