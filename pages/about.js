import Breadcrumbs from "nextjs-breadcrumbs";
import styled from "styled-components";

const Style = styled.div`
  nav > ol {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 8px;

      &:after {
        content: ">";
        display: inline-block;
        margin-left: 4px;
      }

      &:last-child:after {
        content: "";
      }
    }

    a {
      text-decoration: none;
      color: #666;
    }
  }

  .brActive > * {
    color: red;
  }
`;

export default function AboutPage() {
  return (
    <Style>
      <h1>About us</h1>
      <Breadcrumbs
        useDefaultStyle
        rootLabel="首頁"
        activeItemClassName="brActive"
      />
      <hr />
      <Breadcrumbs
        useDefaultStyle
        transformLabel={(title) => title + " Custom Label"}
      />
      <hr />
      <Breadcrumbs omitRootLabel />
    </Style>
  );
}
