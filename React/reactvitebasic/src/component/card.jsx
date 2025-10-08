// import {react} from 'react'

function Card(props) {
    console.log(props)
  return (
    <>
      <div className="grid place-items-center max-w-full rounded overflow-hidden shadow-lg mb-5 ">
        <img
          className="w-24 rounded"
          src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          alt="Sunset in the mountains"
        />
        <div className="px-3">
          <div className="font-bold text-l mb-2">The Coldest Sunset</div>
          <p className="text-gray-500 text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, soluta
            sit ullam eius minima, sed consequatur quos quas ad fugit, aliquid
            odit. Possimus labore sit molestiae modi. Officia, ab libero.
          </p>
        </div>
        <div className="px-3 pt-2 pb-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
