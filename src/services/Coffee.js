import { getEntries, toHtml } from "./contentful";

export const Coffee = {
  get: () =>
    getEntries().then(({ items }) =>
      items
        .map(({ fields }) => fields)
        .map(({ photo, description, ...rest }) => ({
          ...rest,
          photo: photo.fields.file.url,
          description: toHtml(description)
        }))
    )
};
