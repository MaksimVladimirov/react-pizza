import ContentLoader from "react-content-loader";

export const Skeleton = (props:any) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="133" r="133" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="335" rx="10" ry="10" width="281" height="88" />
    <rect x="4" y="441" rx="10" ry="10" width="95" height="30" />
    <rect x="138" y="433" rx="10" ry="10" width="129" height="40" />
  </ContentLoader>
);
