export type PublicationType = 'conf-full' | 'conf-short' | 'journal' | 'patent';

export default interface Publication {
    authors: string[];
    title: string;
    year: number;
    doi?: string;
    venue: string;
    type: PublicationType;
}