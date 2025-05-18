import { ArrowLeft } from "lucide-react";
import React from "react";
import { useParams } from "react-router";

const Article = () => {
  const { destination } = useParams();

  return (
    <div className="min-h-svh bg-primary-cream ">
      <div className="flex items-center w-3/4 justify-between py-2">
        <ArrowLeft size={24} color="black" className="ml-4" />
        <h1 className="text-center font-bold text-xl">Quiz Of the Track</h1>
      </div>
      <div className="px-4">
        <img
          src="/assets/monas.png"
          alt="monas"
          className="my-2 border-4 border-primary-green rounded-xl"
        />
        <h2 className="text-4xl font-base py-2 first-letter:uppercase">
          {destination}
        </h2>
        <div className="grid grid-cols-1 space-y-2 pb-4">
        <small>Created at : 22/4/2024</small>
        <small>Updated at : 22/4/2024</small>
        </div>
        <p className="w-full min-h-60 max-h-60 overflow-y-auto border-y-4 border-[#D9D9D9] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid aspernatur. Dolores minus ea quas vel error eius esse dolore, minima harum molestias fuga velit necessitatibus praesentium, iure inventore fugit porro optio molestiae tempora iusto reprehenderit? Eos architecto incidunt nulla commodi sapiente tenetur ut quis natus enim. Hic voluptate ipsum optio necessitatibus rem similique cumque facere expedita nihil velit veritatis magnam nobis quas harum fugit tempore officiis dicta dignissimos nostrum, rerum et blanditiis? Eveniet aliquam iusto vel explicabo quo aspernatur, odit quia doloribus veniam magni qui veritatis, sit officiis, nemo tenetur repellendus sint quas. Eum id porro molestias distinctio laborum!
        </p>
        <div className="mx-auto w-1/2">
        <button type="button" className="bg-primary-red border-2 border-secondary-red text-primary-cream w-full py-3 font-semibold text-xl rounded-lg shadow-xl my-4 active:shadow">Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
