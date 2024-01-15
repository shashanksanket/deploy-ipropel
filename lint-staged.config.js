module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

    // Format and then lint TypeScript and JavaScript files
    '**/*.(ts|tsx|js)': (filenames) => [
        `pnpm prettier --write ${filenames.join(' ')}`,
        `pnpm eslint --fix ${filenames.join(' ')}`,
        `pnpm eslint ${filenames.join(' ')}`,
    ],

    // Format MarkDown and JSON
    '**/*.(md|json)': (filenames) =>
        `pnpm prettier --write ${filenames.join(' ')}`,
};
