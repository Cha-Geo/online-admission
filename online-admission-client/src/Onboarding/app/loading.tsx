import { cn } from "@/public/lib/utils";
import Image from "next/image";

interface Props {
  className: string;
}

export const PleaseWait = ({className}: Props) => {
  return (
    <div className="flex justify-between items-center gap-x-2">
      <div
        className={cn(
          "animate-spin ease-linear rounded-full border-t-2 border-b-2 h-12 w-12 mx-auto", className
        )}
      ></div>
      <p className="text-lg font-semibold">Please Wait...</p>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="w-full flex-center m-auto">
      <Image
        src="/assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
