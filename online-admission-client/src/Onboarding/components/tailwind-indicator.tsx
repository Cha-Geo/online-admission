export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}


// import { cn } from "@/public/lib/utils";
// import Image from "next/image";

// interface Props {
//   className: string;
// }

// export const PleaseWait = ({className}: Props) => {
//   return (
//     <div className="flex justify-between items-center gap-x-2">
//       <div
//         className={cn(
//           "animate-spin ease-linear rounded-full border-t-2 border-b-2 h-12 w-12 mx-auto", className
//         )}
//       ></div>
//       <p className="text-lg font-semibold">Please Wait...</p>
//     </div>
//   );
// };

// const Loading = () => {
//   return (
//     <div className="w-full flex-center m-auto">
//       <Image
//         src="/assets/icons/loader.svg"
//         width={50}
//         height={50}
//         alt="loader"
//         className="object-contain"
//       />
//     </div>
//   );
// };

// export default Loading;

