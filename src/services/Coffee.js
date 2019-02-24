import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = createClient({
  accessToken:
    "4c33bdbdea25daf511701bae21468ed0a0c718974945ec383129fee266f9e1b4",
  space: "3m3i9v8y9txq"
});

export const Coffee = {
  get: () =>
    client.getEntries().then(({ items }) =>
      items
        .map(({ fields }) => fields)
        .map(({ photo, description, ...rest }) => ({
          ...rest,
          photo: photo.fields.file.url,
          description: documentToHtmlString(description)
        }))
    )
};
