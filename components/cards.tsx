import { Download, LockKeyhole } from "lucide-react"

export const Cards = () => {
    return (
        <div className="w-full py-4 flex flex-wrap justify-between items-center">
            <div className="h-[370px] w-[310px] bg-white rounded-[20px] p-5 flex flex-col items-center justify-between">
                <div className="bg-slate-100 relative w-full h-[220px] rounded-[10px] flex items-center justify-center p-9">
                    <p className="absolute top-0 right-0 m-1 mr-3 flex items-center gap-2 text-slate-500 font-semibold text-sm"><LockKeyhole width={14} strokeWidth={3} /> Premium</p>
                    <img src="/images/card-1.png" className="object-cover" />
                </div>

                <p className="text-2xl text-slate-400"><span className="text-black text-5xl">
                    A
                    </span>rt illustration</p>

                <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold underline">Download</p>
                    <Download width={20} strokeWidth={3} />
                </div>
            </div>

            <div className="h-[370px] w-[310px] bg-white rounded-[20px] p-5 flex flex-col items-center justify-between">
                <div className="bg-slate-100 relative w-full h-[220px] rounded-[10px] flex items-center justify-center p-9">
                    <p className="absolute top-0 right-0 m-1 mr-3 flex items-center gap-2 text-slate-500 font-semibold text-sm"><LockKeyhole width={14} strokeWidth={3} /> Premium</p>
                    <img src="/images/card-2.png" className="object-cover" />
                </div>

                <p className="text-2xl text-slate-400"><span className="text-black text-5xl">
                    F
                    </span>rog illustration</p>

                <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold underline">Download</p>
                    <Download width={20} strokeWidth={3} />
                </div>
            </div>

            <div className="h-[370px] w-[310px] bg-white rounded-[20px] p-5 flex flex-col items-center justify-between">
                <div className="bg-slate-100 relative w-full h-[220px] rounded-[10px] flex items-center justify-center p-9">
                    <p className="absolute top-0 right-0 m-1 mr-3 flex items-center gap-2 text-slate-500 font-semibold text-sm"><LockKeyhole width={14} strokeWidth={3} /> Premium</p>
                    <img src="/images/card-3.png" className="object-cover" />
                </div>

                <p className="text-2xl text-slate-400"><span className="text-black text-5xl">
                    G
                    </span>irl illustration</p>

                <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold underline">Download</p>
                    <Download width={20} strokeWidth={3} />
                </div>
            </div>            
        </div>
    )
}