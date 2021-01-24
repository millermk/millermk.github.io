export default interface Project {
    name: string;
    description: string;
    youtubeVideo?: {videoID: string, title: string};
    image?: {src: string, alt: string};
}