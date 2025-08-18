import { useCallback } from "react";
import { useSearchParams } from "react-router";

export const useQueryStringParams = (): UseSearchParamsReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("search") || "";

  const setSearchValue = useCallback(
    (newSearchValue?: string) => {
      setSearchParams((params) => {
        switch (true) {
          case newSearchValue === undefined:
            break;

          case newSearchValue?.length === 0:
            params.delete("search");
            break;

          default:
            params.set("search", newSearchValue);
        }

        return params;
      });
    },
    [setSearchParams],
  );

  return {
    searchValue,
    setSearchValue,
  };
};

interface UseSearchParamsReturn {
  searchValue: string;
  setSearchValue: (newSearchValue?: string) => void;
}
