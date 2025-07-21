import Butter from 'buttercms';
import {
  seedCategory,
  seedLandingPages,
  seedMainMenu,
  seedPage,
  seedPost,
  seedPosts,
  seedTag
} from 'database';
import { IPages, IPage, IResponsePosts } from '../interfaces';

// let butter: any;

// const previewSetting = process.env.PREVIEW
// // make preview mode by default
// const preview = previewSetting === "true" || previewSetting === undefined ? true : false

// try {
//   butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY || "", preview);
// }
// catch (e: any) {
//   console.log(e)
// }

const defaultPageSize = 100
const defaultPostCount = 10

export async function getLandingPage(slug: string) {
  try {
    // const page = await butter.page.retrieve('landing-page', slug);
    const page = seedPage
    return page?.data?.data;
  } catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getLandingPages() {
  let paginatedLandingPages: IPage[] = [];
  let currentPage = 1;
  while (!!currentPage) {
    const landingPagesData: IPages = await getLandingPagesData(currentPage);
    paginatedLandingPages.push(...landingPagesData.pages);
    currentPage = landingPagesData.nextPage;
  }

  return paginatedLandingPages;
}

async function getLandingPagesData(page: number, pageSize = defaultPageSize) {
  try {
    const params = {
      page,
      page_size: pageSize
    }
    // const response = await butter.page.list('landing-page', params);
    const response = seedLandingPages;

    return {
      pages: response?.data?.data,
      prevPage: response?.data?.meta.previousPage,
      nextPage: response?.data?.meta.nextPage,
    };
  } catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getPostsData({ page, pageSize, tag, category }: any = { page: 1, pageSize: defaultPostCount }) {
  try {
    // https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
    const params = {
      page_size: pageSize || defaultPostCount,
      page: page || 1,
      tag_slug: null,
      category_slug: null
    }

    if (tag) {
      params.tag_slug = tag
    }

    if (category) {
      params.category_slug = category
    }
    // const response = await butter.post.list(params);
    const response: IResponsePosts = seedPosts;

    return {
      posts: response?.data?.data,
      prevPage: response?.data?.meta.previousPage,
      nextPage: response?.data?.meta.nextPage,
    };
  }
  catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getPost(slug: string) {
  try {
    // const response = await butter.post.retrieve(slug);
    const response = seedPost;
    return response?.data?.data
  }
  catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getMainMenu() {
  try {
    // const response = await butter.content.retrieve(
    //   ["navigation_menu"]
    // )
    const response = seedMainMenu;

    const mainMenu = response?.data?.data?.navigationMenu.find(
      (menu: { name: string; }) => menu.name == "Main menu"
    )

    return mainMenu ? mainMenu.menuItems : []
  }
  catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getCategories() {
  try {
    // const response = await butter.category.list()
    const response = seedCategory;

    return response?.data?.data
  } catch (e: any) {
    throw e.response.data.detail
  }
}

export async function getTags() {
  try {
    // const response = await butter.tag.list()
    const response = seedTag;
    return response?.data?.data
  }
  catch (e: any) {
    throw e.response.data.detail
  }
}

export async function searchPosts({ query }: any) {
  try {
    // const response = await butter.post.search(query)
    const response = seedPost;
    return response?.data?.data
  } catch (e: any) {
    throw e.response.data.detail
  }
}
