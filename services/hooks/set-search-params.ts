import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

function useSetSearchParams(window: {
  location: {
    search:
      | string
      | URLSearchParams
      | string[][]
      | Record<string, string>
      | undefined;
  };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const setQueryString = useCallback(
    (name: string, value: any) => {
      const searchParams = new URLSearchParams(window?.location?.search);
      searchParams.set(name, value);
      router.replace(`${pathname}?${searchParams.toString()}`);
    },
    [pathname, router]
  );

  return setQueryString;
}
export default useSetSearchParams;
