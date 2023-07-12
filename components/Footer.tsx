import GitHub from "@/components/IconGithub.tsx";

export function Footer() {
  return (
    <footer class="w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex flex-col items-center justify-between">
      <div class="flex items-center gap-4 mb-4">
        <a href="https://twitter.com/example">Twitter</a>
        <a href="https://discord.gg/example">Discord</a>
        <a href="https://linkedin.com/company/example">LinkedIn</a>
        <a href="https://tiktok.com/@example">TikTok</a>
        <a href="https://instagram.com/example">Instagram</a>
      </div>
      <div class="flex items-center gap-4">
        <iframe src="https://arvrtise.substack.com/embed" width="380" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
      </div>
      <a class="text-sm text-gray-400 hidden items-center gap-2 sm:!flex mt-4" href="https://ads.arvrtise.com">
        Powered by
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28 / 32 * 20} height={20} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
          <image href="/logo.svg" height="256" width="256" />
        </svg>
        <span class="text-gray-600">
          Arvrtise Ads
        </span>
      </a>
    </footer>
  );
}
