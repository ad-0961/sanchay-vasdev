import Flipcard from "@/components/Flipcard";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-4 text-black dark:text-gray-200 mt-20 md:mt-0">
      <Flipcard />
      <div className="md:flex-1 mt-4 sm:mt-0 sm:ml-8">
        <h1 className="text-4xl font-bold">
          Hello 👋, I'm Sanchay <span className="text-pink-600">Vasdev</span>
        </h1>
        <p className="my-2 text-lg">
          I am a pediatrician. Stay tuned to know about my experiences and my
          work. I will be sharing my journey as a pediatrician, my thoughts on
          child health, and much more.
        </p>
      </div>
    </div>
  );
}
