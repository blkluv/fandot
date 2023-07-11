interface ProductActionProps {
  id: string;
}

export default function ProductAction(props: ProductActionProps) {
  return (
    <a
      href={`https://ads.arvrtise/ksm/gallery/${props.id}`}
      class={`w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900`}
      target={'_blank'}
    >
      View Ad
    </a>
  );
}
