export default function Home() {
  return (
    <>
      <article>
        <div className="img-placeholder text-center max-w-[60rem] mx-auto border relative">
          <div className="bg-emerald-500 mix-blend-multiply backdrop-hue-rotate-180  w-[200px] h-[200px] rounded-full grid place-content-center absolute top-[50%] mt-[-100px] ml-[-100px] left-[50%]"></div>
          <img
            src="img/croquis-reunion.jpg"
            width="500"
            height="500"
            alt=""
            className="mx-auto min-w-full border"
          />
        </div>
      </article>
    </>
  )
}
