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
  _createdAt: String;
  name: String;
  _updatedAt: String;
  price: Number;
  _rev: String;
  _type: String;
  details: String;
  _id: string;
  slug: { current: String; _type: String };
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
