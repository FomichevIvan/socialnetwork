import { ReactElement } from 'react';

interface ICustomIcon {
  url: string | undefined;
}

export const CustomIcon = ({ url }: ICustomIcon): ReactElement => {
  return (
    <div className="circle-image">
      <img src={url} />
    </div>
  );
};
