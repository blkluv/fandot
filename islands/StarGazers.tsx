import IconGithub from "@/components/IconGithub.tsx";
import IconDiscord from "@/components/IconDiscord.tsx";
import { useStargazers } from "@/utils/data.ts";

export default function StarGazers() {
  const { data, error } = useStargazers();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    const url = "https://discord.gg/nfAmqTGNAU";
    window.open(url, "_blank");
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button
        onClick={add}
        className="flex items-center gap-2 items-center border-2 border-E6007E rounded-full px-5 py-1 font-semibold text-white hover:bg-E6007E hover:text-white transition-colors duration-300"
      >
        <IconDiscord />
        {data?.watchers ?? "Discord"}
      </button>
    </div>
  );
}
