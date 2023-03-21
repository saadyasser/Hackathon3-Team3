import { COOKIES_KEYS } from "data";
import { getCookie } from "lib/js-cookie";
import useSWRMutation from "swr/mutation";

export const useSwrMutationFetch = (subUrl, options) => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "" + subUrl;
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  options.headers.Authorization = `Bearer ${currentUser.accessToken}`;

  async function fetcher(url, { arg }) {
    return fetch(url, {
      ...options,
      body: options.method.toLowerCase() != "delete" ? JSON.stringify(arg) : {},
    }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation(url, fetcher);
  return { trigger, isMutating, data, error };
};

export default useSwrMutationFetch;
