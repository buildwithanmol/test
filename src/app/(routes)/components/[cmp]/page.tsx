import ComponentDataArray from "@/utils/component-data-array";
import ComponentInfo from "../../../../components/component-info";
import React from "react";
import { redirect } from "next/navigation";
import CmpUrl from "@/utils/cmp-url";
import { get_file_data } from "@/utils/file_system";

// const getUsageCode = async (component: string, category: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/usage-code`,
//     {
//       cache: "no-store",
//       method: "POST",
//       body: JSON.stringify({ component, category }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }
//   );
//   const data = await res.json();
//   return data;
// };

const getPreviewCode = async (
  component: string,
  category: string,
  variants: { tsx: boolean; jsx: boolean }
) => {
  const res = await fetch(`http://localhost:3000/api/cmp-code`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ component, category, variants }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export const generateMetadata = ({ params }: { params: { cmp: string } }) => {
  const data = ComponentDataArray.find(
    (item) => CmpUrl(item.name) === params.cmp
  );
  return {
    title: data?.name,
    description: data?.description,
    openGraph: {
      title: data?.name,
      description: data?.description,
    },
  };
};

const page = async ({ params }: { params: { cmp: string } }) => {
  const searchCmp = params.cmp;
  const resCmp = ComponentDataArray.find(
    (item) => CmpUrl(item.name) === searchCmp
  );

  if (!resCmp) {
    redirect("/components");
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-white">
          {resCmp && resCmp?.name}
        </h1>
        <p className="text-white/70">{resCmp && resCmp?.description}</p>
      </div>

      <section>
        {resCmp &&
          resCmp.componentData.map(async (elem, index) => {
            const usageCode = await get_file_data(
              CmpUrl(resCmp.name),
              CmpUrl(elem.title)
            );
            console.log(usageCode)
            const previewCode = await getPreviewCode(
              CmpUrl(elem.title),
              CmpUrl(resCmp.name),
              elem.variants
            );
            return (
              <ComponentInfo
                key={index}
                component_code={previewCode.message}
                component_name={elem.title}
                component_preview={<elem.component />}
                component_details={elem.details}
                component_usage_code={usageCode}
              />
            );
          })}
      </section>
    </>
  );
};

export default page;
