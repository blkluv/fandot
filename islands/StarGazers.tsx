import IconGithub from "@/components/IconGithub.tsx"
import {
  useStargazers
} from "@/utils/data.ts"

export default function StarGazers() {
  const { data, error } = useStargazers();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    const url = `https://arvrtise.com`;
    window.open(url, '_blank')
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button
        onClick={add}
        class="flex items-center gap-2 items-center border-2 border-gray-800 rounded-full px-5 py-1 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
      >
        <IconGithub />
        {data?.watchers ?? "Arvrtise"}
      </button>

    </div>
  );
}

