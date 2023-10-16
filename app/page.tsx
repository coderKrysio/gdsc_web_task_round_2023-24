import { Navbar } from "@/components/navbar";
import {
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  Search,
  Settings2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 text-black p-24">
      <Navbar />

      <div className="flex flex-col items-center mb-[50px]">
        <p className="text-4xl my-5">Popular Pro Stock Vectors</p>
        <p className="flex items-center text-center text-slate-400 font-medium mb-4">
          High quality Vectors with worry-free licensing for <br /> personal and
          commercial use.
        </p>

        <div className="flex items-center p-2 bg-white rounded-lg">
          <button className="px-3 py-2 border-2 border-slate-400 rounded-md flex gap-1 font-medium">
            Vectors <ChevronDown width={14} />
          </button>
          <p className="flex items-center justify-between text-slate-400 font-medium w-[450px] ml-[20px] px-[20px] border-2 rounded-md border-transparent py-2 hover:border-slate-400">
            Search Vectors... <Search className="text-black" />
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="relative font-medium hover:cursor-pointer">
            Latest
            <span className="absolute top-0 right-[-8px] w-2 h-2 rounded-full bg-red-500" />
          </p>
          <p className="font-medium hover:cursor-pointer">Popular</p>
          <span className="h-[15px] border-r-[3px] border-black" />
          <p className="text-orange-600 font-medium hover:cursor-pointer">
            Premium
          </p>
          <p className="text-blue-500 font-medium hover:cursor-pointer">Free</p>
        </div>

        <div className="flex gap-6">
          <Settings2
            fill="black"
            className="hover:cursor-pointer hover:fill-transparent"
          />
          <Bookmark className="hover:cursor-pointer hover:fill-black" />
        </div>
      </div>

      <div className="flex items-center justify-between w-full my-[40px]">
        <div>
          <p className="underline font-medium text-lg">
            Discover All <br />
            Collections
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 font-medium bg-white border-2 border-transparent rounded-md hover:border-black">
          Next Page <MoveRight width={16} />
        </button>

        <div className="flex items-center text-slate-500">
          Page
          <div className="w-[24px] h-[24px] bg-slate-200 flex items-center justify-center rounded-md ml-[20px] mr-[5px]">
            <ChevronLeft width={18} className="text-slate-400" />
          </div>
          <div className="w-[24px] h-[24px] bg-white border-[1px] border-slate-200 text-black flex items-center justify-center rounded-md">
            1
          </div>
          <div className="w-[24px] h-[24px] bg-slate-200 flex items-center justify-center rounded-md mr-[20px] ml-[5px]">
            <ChevronRight width={18} />
          </div>
          of 120
        </div>
      </div>
    </main>
  );
}
