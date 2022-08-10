export type PublicationType = 'conf-full' | 'conf-short' | 'journal' | 'patent' | 'thesis';

export default interface Publication {
    authors: string[];
    title: string;
    year: number;
    doi?: string;
    link?: {href: string, text: string};
    venue: string;
    type: PublicationType;
}