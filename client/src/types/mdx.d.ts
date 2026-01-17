declare module "*.mdx" {
  import * as React from "react";
  const MDXComponent: React.FC<React.PropsWithChildren<{}>>;
  export default MDXComponent;
}
