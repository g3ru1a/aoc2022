
export default {
    run(input: string){
        const root: Directory = {
            name: "/",
            parent: null,
            children: [],
        };

        let current = root;

        input.split("\n").forEach((line) => {
            if (line[0] !== "$") {
                const [first, name] = line.split(" ");

                if (first === "dir") {
                    const dir: Directory = {
                        name,
                        parent: current,
                        children: [],
                    };

                    current.children.push(dir);
                } else {
                    const size = parseInt(first);
                    const file: File = {
                        name,
                        parent: current,
                        size,
                    };

                    current.children.push(file);
                }
            }

            const [_, command, arg] = line.split(" ");

            if (command !== "cd") return;

            if (arg[0] === "/") current = root;
            else if (arg === "..") current = current.parent;
            else current = current.children.find((child) => child.name === arg) as Directory;
        });

        current = root;
        const sizes: number[] = [];

        function getSize(dir: Directory): number {
            return dir.children.reduce((acc, child) => {
                if ((child as File).size !== undefined) return acc + (child as File).size;

                const size = getSize(child as Directory);

                sizes.push(size);

                return acc + size;
            }, 0);
        }

        const needed = getSize(root) - 40_000_000;

        return sizes.filter((a) => a > needed).sort((a, b) => a - b)[0];
    }
}