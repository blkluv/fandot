import GitHub from "@/components/IconGithub.tsx";

export function Footer() {
  return (
    <footer class="w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between">
      <span class="flex items-center gap-4">
      <div style="max-width: 100%; overflow: hidden;">
  <div style="padding-top: 66.67%; position: relative;">
    <iframe src="https://arvrtise.substack.com/embed" style="border: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" scrolling="no"></iframe>
  </div>
</div>

      </span>
      <a class="text-sm text-gray-400 hidden items-center gap-2 sm:!flex" href="https://ads.arvrtise.com">
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
