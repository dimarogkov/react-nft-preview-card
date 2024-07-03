type Props = {
    children?: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <section
            className={`relative w-full max-w-xs rounded-lg p-5 overflow-hidden bg-darkBlueCardBg shadow ${className}`}
        >
            {children}
        </section>
    );
};
