import { cn } from "@/lib/utils"
import useThrottle from "@/hooks/use-throttle";

interface Props {
  code: string;
  device: "mobile" | "desktop";
}

function Preview({ code, device }: Props) {
  const throttledCode = useThrottle(code, 200);

  return (
    <div className="flex justify-center mx-2">
      <iframe
        title="Preview"
        srcDoc={throttledCode}
        className={cn(
          "border-[4px] border-black rounded-[20px] shadow-lg",
          "transform scale-[0.9] origin-top",
          {
            "w-full h-[832px]": device === "desktop",
            "w-[400px] h-[832px]": device === "mobile",
          }
        )}
      ></iframe>
    </div>
  );
}
export default Preview;
