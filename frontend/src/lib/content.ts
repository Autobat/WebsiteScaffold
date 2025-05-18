
import { error } from 'console';
import { stringify } from 'qs-esm'

import type { Where } from 'payload'
import type { Page as PageProps } from '../payload-types';

const CMS_CONTENT_URL = process.env.CMS_CONTENT_URL;
const CMS_CONTENT_PORT = process.env.CMS_CONTENT_PORT;
const CMS_CONTENT_API_PATH = process.env.CMS_CONTENT_API_PATH;

const REVALIDATE_CACHE_SECONDS = process.env.REVALIDATE_CACHE_SECONDS
  ? Number(process.env.REVALIDATE_CACHE_SECONDS)
  : 10;


 /*******************************************************************************************
 * Simple functions to make loading pages simple and meaningful
 */
export async function getHomePage() {
  return await getPageBySlug('home') as PageProps;
}

export async function getPageBySlug(slug: string) {

  console.log({
    message: `${slug} slug requsted by API`,
  });

  const query: Where = {
    slug: {
      equals: slug,
    },
  }

  const result = await fetchCmsDataByApi('pages', query, true);

  if(!result || result.docs?.length !== 1) {
    throw error(`Unable to load ${slug} slug`);
  }

  return result.docs[0] as PageProps;
}

 /*******************************************************************************************
 * Utilities
 */
export function getContentUrl() {
  return CMS_CONTENT_URL + ':' + CMS_CONTENT_PORT + CMS_CONTENT_API_PATH;
}

async function fetchCmsDataByApi(
  apiName = 'pages',
  query = {},
  sort = {},
  disableCache = false,
  cacheSeconds = REVALIDATE_CACHE_SECONDS,) {

  const headers = { 'Content-Type': 'application/json', Authorization: '' };

  if (true || disableCache) {
    cacheSeconds = 0;
  }

  try {
    const options = {
      method: 'GET',
      headers: headers,
    };

    const stringifiedQuery = stringify(
      {
        where: query,
        sort: sort,
      },
      { addQueryPrefix: true },
    );

    const url = getContentUrl() + '/' + apiName + stringifiedQuery;

    console.log({
      params: {
        queryEndPoint: url,
        disableCache: disableCache,
        cacheSeconds: cacheSeconds,
        query: query,
      },
      message: 'fetchCmsDataByApi requested',
    });

    const res = await fetch(url, options);

    if (res) {

      const json = await res.json();

      if (json.errors || json.error) {
        console.error({
          message: 'cms query returned error',
          errors: json.error ? json.error : json.errors,
        });
        throw new Error(
          'Failed to fetch Strapi API with json errors',
          json.error ? json.error : json.errors,
        );
      }
      return json;
    }
    console.error({
      metadata: {
        app: 'Portal',
        type: 'Lib',
        name: 'CMS',
        userId: '',
      },
      message: 'cms query returned error =',
      errors: res,
    });
    throw new Error('Failed to fetch Strapi API with fetch error', res);
  } catch (error) {
    console.log(error);
    console.error({
      message: 'cms fetch failed for query',
      error: error,
    });

    return {};
  }
}