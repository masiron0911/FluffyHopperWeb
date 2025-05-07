import createClient from 'openapi-fetch';
import type { paths } from '@/types/strapi';
import qs from 'qs';

const client = createClient<paths>({
  baseUrl: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
  headers: {
    Accept: 'application/json',
  },
  querySerializer(params) {
    return qs.stringify(params, {
      encodeValuesOnly: true,
    });
  },
});
export { client };
