export default interface PortfolioItem {
    name: string;
    extendedName: string;
    description: string;
    images: {src: string, alt: string, description: string | string[]}[];
    link?: string;
}