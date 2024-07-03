import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h1 ref={ref} {...props} className={`w-full text-lg font-medium text-white ${className}`}>
            {children}
        </h1>
    )
);
