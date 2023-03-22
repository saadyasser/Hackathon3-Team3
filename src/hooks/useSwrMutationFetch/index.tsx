import { COOKIES_KEYS } from "data";
import NavLinks from "layouts/MainLayout/componentsghj/NavLinks";
import { getCookie } from "lib/js-cookie";
import useSWRMutation from "swr/mutation";

export const useSwrMutationFetch = (subUrl: any, options: any) => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "" + subUrl;
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  options.headers.Authorization = `Bearer ${currentUser.accessToken}`;

  async function fetcher(url: any, { arg }: any) {
    return fetch(url, {
      ...options,
      body: options.method.toLowerCase() != "delete" ? JSON.stringify(arg) : {},
    }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation(url, fetcher);
  return { trigger, isMutating, data, error };
};

export default useSwrMutationFetch;
