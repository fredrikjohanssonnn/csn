import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const articles = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    return response
}

const pages = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId})
    return response
}

export {
    articles,
    pages
}