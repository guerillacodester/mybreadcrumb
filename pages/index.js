import Link from "next/link";
import Breadcrumbs from "nextjs-breadcrumbs";
import styled from "styled-components";

const Style = styled.div`
  .brActive {
    color: red;
  }
`;

export default function IndexPage() {
  return (
    <Style>
      <h1>Hello World.</h1>
      <Breadcrumbs
        useDefaultStyle
        rootLabel="首頁"
        activeItemClassName="brActive"
        omitIndexList={[0]}
      />
      <hr />
      <Breadcrumbs
        useDefaultStyle
        transformLabel={(title) => title + " Custom Label"}
      />
      <hr />
      <Breadcrumbs omitRootLabel />
      <hr />
      <Link href="/about">
        <a>About</a>
      </Link>
    </Style>
  );
}
