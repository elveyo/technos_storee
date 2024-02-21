import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6wvh4ep1",
  dataset: "production",
  apiVersion: "2022-10-08",
  useCdn: "false",
  token:
    "skLiwjri9gPqTrsG2C89yIIWyBUjYj4Aux4PKUoYqoztGuHwli1l76SLdBRODUKlSHK38jO9pKNs26Xk04RflG1AybBaKjKxCyhZkucLMYxZDiFzhx67EBikaDc7mLPjsCXSewP8zJWjlJ1wOgHhdbJtYeIxw3q3KEyfTCzL05BzhlMfRPcV",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
