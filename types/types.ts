export type ProductT = {
  image: [
    {
      _type: string;
      _key: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }
  ];
  _createdAt: string;
  name: string;
  _updatedAt: string;
  price: number;
  _rev: string;
  _type: string;
  details: string;
  _id: string;
  slug: { current: string; _type: string };
  quantity: number;
};

export type BannerT = {
  _rev: string;
  discount: string;
  midText: string;
  smallText: string;
  largeText2: string;
  _id: string;
  desc: string;
  buttonText: string;
  product: string;
  _type: string;
  _createdAt: string;
  saleTime: string;
  largeText1: string;
  _updatedAt: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};
