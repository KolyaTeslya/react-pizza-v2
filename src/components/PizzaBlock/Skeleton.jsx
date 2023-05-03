import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={380}
    height={560}
    viewBox="0 0 380 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="119" cy="115" r="111" />
    <rect x="9" y="241" rx="3" ry="3" width="224" height="23" />
    <rect x="180" y="245" rx="0" ry="0" width="0" height="8" />
    <rect x="12" y="281" rx="6" ry="6" width="224" height="81" />
    <rect x="18" y="383" rx="3" ry="3" width="71" height="29" />
    <rect x="83" y="392" rx="0" ry="0" width="6" height="5" />
    <rect x="116" y="374" rx="22" ry="22" width="121" height="42" />
  </ContentLoader>
);

export default Skeleton;
