export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardProps {
    product: Product;
    //    children?: ReactElement | ReactElement[];   
    children: (args: ProductCartHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export interface InitialValues {
    count?: number;
    maxCount: number;

}

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}


export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product,
    increaseBy: (value: number) => void;
    reset: () => void;

}