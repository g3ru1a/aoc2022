type Item = Directory | File;

type File = {
    name: string;
    parent: Directory;
    size: number;
};

type Directory = {
    name: string;
    parent: Directory;
    children: Item[];
};
