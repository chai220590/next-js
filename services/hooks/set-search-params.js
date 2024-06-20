import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

function useSetSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const setQueryString = useCallback(
    (name, value) => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(name, value);
      router.replace(`${pathname}?${searchParams.toString()}`, {
        shallow: true,
      });
    },
    [pathname, router]
  );

  return setQueryString;
}
export default useSetSearchParams;
