import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="130" r="125" />
    <rect x="0" y="263" rx="10" ry="10" width="280" height="25" />
    <rect x="-1" y="304" rx="10" ry="10" width="281" height="88" />
    <rect x="5" y="412" rx="10" ry="10" width="95" height="30" />
    <rect x="143" y="405" rx="10" ry="10" width="129" height="40" />
  </ContentLoader>
);
